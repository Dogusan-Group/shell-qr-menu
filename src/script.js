fetch('menu.json')
    .then(response => response.json())
    .then(data => {
        const gridKapsayici = document.getElementById('kategori-grid');
        const menuKapsayici = document.getElementById('menu-kapsayici');
        
        let gridHtml = '';
        let htmlIcerik = '';

        data.forEach((kategori, index) => {
            const activeClass = ''; 
            const resimYolu = kategori.kategori_resmi ? `img/${kategori.kategori_resmi}` : '';
            const kartId = `kategori-kart-${index}`;

            // 1. Üstteki Grid Kısayolları Kartları
            gridHtml += `
            <div class="grid-item" onclick="scrollToKategori('${kartId}')">
                <img class="grid-item-img" src="${resimYolu}" alt="${kategori.kategori_adi}" onerror="this.style.display='none';">
                <div class="grid-item-title">${kategori.kategori_adi}</div>
            </div>
            `;

            // 2. Akordeon Ürün Menüsü (Shell Deli2Go Tasarım Kartları)
            htmlIcerik += `
            <div id="${kartId}" class="category-card ${activeClass}">
                <div class="category-image-wrapper" style="${!kategori.kategori_resmi ? 'display:none;' : ''}">
                    <img class="category-img" src="${resimYolu}" alt="${kategori.kategori_adi}" onerror="this.parentElement.style.display='none';">
                </div>
                <div class="category-header" onclick="toggleKategori(this)">
                    <div class="category-title">${kategori.kategori_adi}</div>
                    <div class="toggle-icon">
                        <svg viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>
                    </div>
                </div>
                <div class="category-content">
                    <div class="category-products">
            `;

            // Ürünler
            kategori.urunler.forEach(urun => {
                const gosterilecekFiyat = (urun.fiyat && urun.fiyat.trim() !== "") ? urun.fiyat : "- ₺";
                htmlIcerik += `
                <div class="menu-item">
                    <div class="item-name">${urun.isim}</div>
                    <div class="item-price">${gosterilecekFiyat}</div>
                </div>
                `;
            });

            htmlIcerik += `</div></div></div>`;
        });

        gridKapsayici.innerHTML = gridHtml;
        menuKapsayici.innerHTML = htmlIcerik;
        
        ayarlaAcikAkordeonlar();
    })
    .catch(hata => console.error("Hata:", hata));

function toggleKategori(element) {
    const kart = element.parentElement;
    const icerik = kart.querySelector('.category-content');
    if (kart.classList.contains('active')) {
        icerik.style.maxHeight = null;
        kart.classList.remove('active');
    } else {
        kart.classList.add('active');
        icerik.style.maxHeight = icerik.scrollHeight + "px";
    }
}

function scrollToKategori(id) {
    const hedefKart = document.getElementById(id);
    if (!hedefKart) return;

    const icerik = hedefKart.querySelector('.category-content');

    icerik.style.transition = 'none';

    if (!hedefKart.classList.contains('active')) {
        hedefKart.classList.add('active');
        icerik.style.maxHeight = icerik.scrollHeight + "px";
    }

    setTimeout(() => {
        // Sticky menü olmadığı için direkt hedefe kaydırıyoruz. (Bir miktar boşluk ile)
        const elementPosition = hedefKart.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - 15;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });

        setTimeout(() => {
            icerik.style.transition = ''; 
        }, 300);
    }, 10);
}

function ayarlaAcikAkordeonlar() {
    setTimeout(() => {
        document.querySelectorAll('.category-card.active').forEach(kart => {
            const icerik = kart.querySelector('.category-content');
            icerik.style.maxHeight = icerik.scrollHeight + "px";
        });
    }, 100);
}