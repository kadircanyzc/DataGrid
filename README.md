# Projeyi İndirmek İçin

Github'da koldarı görüntülediğiniz sayfa üzerinden indirme işlemini gerçekleştirebilirsiniz.
Yöntem 1:
Code --> açılan pencerede HTTPS şeçili iken URL'yi kopyalayın. --> komut satırını açın. --> git clone URL (URL kısmına kopyaladığınız
URL'yi yapıştırın)
Yöntem 2:
Code --> Download ZIP --> ZIP dosyasını ayıklayın.

# Kodları Görüntülemek İçin

İndirilen klasöre sağ tıklayıp komut satırını açın. Açılan komut satırna " code . " komutunu yazın.

## Kullanılabilir Komut Dosyaları

Projeyi çalıştırmak için dizininde şunları çalıştırabilirsiniz:

# Uygulamayı Başlatmak İçin

`npm run start` komutunu çalıştırın.

##

Bu projede kullanıcın ekranlar arasında geçiş yapabilmesi, verilerini saklayabilmesi, verilerini istediği gibi aratabilmesi, verilerini filtreleyebilmesi amaçlanmıştır.

Bu projede bir DataGrid uygulaması yapılması amaçlandı. Uygulama içerisinde ekranlar arası geçiş için ve logonun yerleştirilmesi için Navbar eklendi. Navbar’ın altına ise bir DataGrid tablosu eklendi. Bu DataGrid tablosuna veri eklemek için yeni hesap ekle butonu, eklenen verileri aramak için arama paneli ve verileri filtrelemek için filtre butonu eklendi

##

## 1 – Projenin Oluşturulması:

Create React App, React ile yeni proje oluşturuldu: npx create-react-app rast-mobile

## 2 – Proje İçin Gerekli Kurulumların Yapılması:

Material UI Kurulumu: npm install @mui/material @emotion/react @emotion/styled
DevExtreme Kurulumu: npx -p devextreme-cli devextreme add devextreme-react

## 3 – Navbar Yapımı:

Navbar yapımında Material UI kullanıldı. Sayfaya entegre edilen Navbar üzerinde düzeltmeler yapılarak istenilen tasarım elde edildi.

## 4 – DataGrid Yapımı:

Projede DataGrid yapımında DevExtreme kullanıldı. DevExtreme entegre edildi ve üzerinde gerekli düzenlemeler yapıldı. DevExtreme tarafından sağlanan arama paneli ve satır ekleme kullanılmadı. Üzerinde tasarım düzenlemesi yapılamadığı için arama paneli ve satır ekleme butonu sonradan eklendi. Satır ekleme butonu ‘localStorage’ ile kullanıldı. Böylelikle eklenen satırlar yerelde kaydedilebilir oldu. Kaydedilen bilgiler uygulama yüklendiğinde tekrardan listelenebilir.

## 4 – Arama Paneli ve Satır Ekleme Butonu Yapımı:

Arama paneli ve satır ekleme butonu yapımında Material UI kullanıldı. Butona basıldığında açılan ekranın sağlanması için Marerial UI Dialog kullanıldı. İstenilen görünüm için css kodları yazıldı.

## 5 – Component’lere Bölünmesi:

Dosyaların Bölünmesi ve sınıflandırılması için component yapısı kullanıldı. Dosyaların kolayca ayırt edilebileceği şekilde sınıflandırıldı ve isimlendirildi.

## 6 – Responsive Kodlama İşlemi:

Proje Css dosyalarına yazılan kodlar ile birlikte tüm cihazlara duyarlı hale getirildi. Responsive için Css media özelliği kullanıldı. Media kullanılarak verilen piksel aralıklarına göre responsive işlevi gerçekleştirildi.
