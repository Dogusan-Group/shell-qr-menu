# 🍔 Shell deli2go QR Menü Düzenleme Kılavuzu

Bu dosya, yazılım bilgisi gerekmeden menünüzü nasıl güncel tutacağınızı anlatır. Tüm işlemlerinizi `menu.json` dosyası ve `img` klasörü üzerinden yapabilirsiniz.

---

## 🛠 1. Fiyat Değiştirme veya Ürün İsmi Güncelleme
Menüdeki bir ürünün fiyatı değiştiğinde veya ismini düzeltmek istediğinizde:
1. `menu.json` dosyasını açın.
2. Değiştirmek istediğiniz ürünü bulun.
3. `"isim":` veya `"fiyat":` yazan yerin karşısındaki **tırnak işaretleri içindeki** metni silip yenisini yazın.
   - *Örnek:* `"fiyat": "230,00 ₺"` -> `"fiyat": "250,00 ₺"`
4. Dosyayı kaydedin ve sunucuya yükleyin.

---

## ➕ 2. Yeni Ürün Ekleme veya Silme
Bir kategoriye yeni bir ürün eklemek isterseniz:
1. Mevcut bir ürün satırını kopyalayın: `{ "isim": "...", "fiyat": "..." }`
2. Bir alt satıra yapıştırın. **Dikkat:** Satır aralarında virgül (`,`) olduğundan emin olun.
3. Ürünü silmek için ise o satırı komple seçip silmeniz yeterlidir.

---

## 📂 3. Resimlerin Yönetimi (img Klasörü)
Görsellerin düzgün görünmesi için şu kurallara uymanız önerilir:

* [cite_start]**Klasör:** Tüm resimlerinizi mutlaka `img` klasörünün içine atın. 
* **Format:** Resimlerin `.jpg` veya `.png` formatında olması önerilir.
* **Boyut:** Sayfanın hızlı açılması için resim boyutlarının çok büyük (1MB üstü) olmamasına dikkat edin. İdeal boyut kare veya yatay dikdörtgendir (örneğin 800x500 piksel).
* **Dosya Adı:** Resim isimlerinde Türkçe karakter (ş, ı, ğ, ü, ç, ö) ve boşluk kullanmamaya çalışın.
    - *Doğru:* `soguk-sandvic.jpg`
    - *Yanlış:* `soğuk sandviç.jpg`

---

## 🖼 4. Kategori Resmini Değiştirme
Her kategorinin üstünde görünen resmi değiştirmek için:
1. Yeni resmi `img` klasörüne yükleyin (Örn: `kahveler.jpg`).
2. `menu.json` dosyasında ilgili kategorideki `"kategori_resmi":` kısmına bu dosya adını yazın.
   - *Örnek:* `"kategori_resmi": "img/kahveler.jpg"`

---

## ⚠️ Dikkat Edilmesi Gereken Altın Kurallar
1. **Tırnak İşaretleri:** Hiçbir tırnak işaretini (`"`) silmeyin.
2. **Parantezler:** Dosyanın en başındaki ve sonundaki köşeli parantezleri `[` `]` ve süslü parantezleri `{` `}` bozmayın.
3. **Virgüller:** Her ürünün veya kategorinin sonunda virgül olur, ancak **en sonuncu** öğenin sonunda virgül konulmaz.