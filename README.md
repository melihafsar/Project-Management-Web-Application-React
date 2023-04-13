# Project Management Web Application

## Proje Hakkında
* Marmara üniversitesinde çalışan kısmi zamanlı öğrencilerin, akademisyenlerin, teknikerlerin arasında zaman zaman fakülte içerisinde yapılacak görevlerle ilgili iletişim problemleri oluşmaktadır. Bu durum zaman kaybına yol açmaktadır. 

* Yeni kurulan fakültemizin gelişmesi ve ayrıca veri tabanı yönetim sistemlerinde kendimizi geliştirmek amacıyla bu proje gerçekleştirilmiştir. 

* Proje içeriği, Teknoloji Fakültesi Bilgisayar Bölümü özelinde kullanılacak bir web portalı özelinde panel üzerinden üniversite akademisyenleri, kısmı zamanlı çalışan öğrencilere görev atayabilir, bu görevi o an boşta olan öğrencilerden biri alabilir, görev takibini yapabilir.

* Görev takibinde, hangi işin hangi öğrenciye verildiği, o işin son durumu hakkında, ne zaman bitirilmesi gerektiği gibi konularda bilgilendirmeye sahiptir. Son olarak öğretim görevlisinin verilen görevin bitirilmesi durumunda kontrol etme ve gerekirse tekrar revize ettirme hakkı vardır. 

* Veri tabanına kayıtlı olan tüm öğretim görevlileri ve öğrenciler bu görevleri görebilmektedirler.

<hr>

## Proje Yapısı
* Frontend: HTML, CSS, Javascript, React
* Backend: Node.js, Express.js
* Database: PostgreSQL

Bu repository'de sadece frontend kısmı bulunmaktadır. Backend repository'si için [buraya](https://github.com/MelihAfsar/Project-Management-Web-Application-ExpressJs "buraya") tıklayabilirsiniz.

## Proje Gereksinimleri
* Node.js
* npm
* PostgreSQL

<hr>

## Kurulum
Yukarıda belirtilen backend repository'si **docker-compose** dosyasını çalıştırarak programı inceleyebilirsiniz. Eğer veritabanı bağlantısı kullanmak istemiyorsanız. _Aşağıdaki adımları takip edebilirsiniz._

* Projeyi klonlayın.

```bash
git clone https://github.com/MelihAfsar/Project-Management-Web-Application-React.git
```
* Proje kök dizininde olduğunuza emin olun.
```
cd Project-Management-Web-Application-React
```
* Terminalde aşağıdaki komutu çalıştırın.
```bash
npm install
```
* Projeyi çalıştırmak için aşağıdaki komutu çalıştırın.
```bash
npm start
```
<hr>

## Dockerfile ile projeyi build etmek

```sh 
#Projeyi build edin.
docker build -t management-frontend .
```

```sh
#Projeyi çalıştırın.
docker run -d --rm --name management-frontend -p 3000:3000 management-frontend
```
Uygulamayı çalıştırdıktan sonra `http://localhost:3000` adresine giderek uygulamayı kullanabilirsiniz.

>Uygulama default olarak 3000 portunda çalışmaktadır. Portu değiştirmek için `Dockerfile` dosyasını düzenleyebilirsiniz.


<br>


## Proje Klasör Yapısı

<img width="461" alt="Screenshot 2023-04-13 at 14 25 52" src="https://user-images.githubusercontent.com/77414773/231753461-63b188b8-a563-4feb-91e6-9ab031468163.png">

## Proje Ekran Görüntüleri

Login Sayfası
<img width="1822" alt="Screenshot 2023-04-12 at 21 32 06" src="https://user-images.githubusercontent.com/77414773/231753713-e8511a54-cf39-4636-9905-73e03d3dd7ef.png">

Mevcut Görev Durum Tahtası: Drag and Drop Yöntemi ile çalışmaktadır.
<img width="1822" alt="Screenshot 2023-04-12 at 21 35 02" src="https://user-images.githubusercontent.com/77414773/231753710-ea978161-306d-442b-b4ab-49d62d6f8d30.png">

Yeni Görevlerin Eklenmesi
<img width="1710" alt="Screenshot 2023-04-12 at 21 35 35" src="https://user-images.githubusercontent.com/77414773/231753708-ade3dbae-18e8-425d-ab7f-8387fd359290.png">

Mevcut Görevlerin Görüntülenmesi
<img width="1822" alt="Screenshot 2023-04-12 at 21 36 46" src="https://user-images.githubusercontent.com/77414773/231753703-7167fa55-f971-4313-bb3c-68c348907093.png">

Yalnızca Görevi Oluşturan kişi tarafından görevin *revize edilmesi* ya da *silinmesi* özelliği
<img width="1822" alt="Screenshot 2023-04-12 at 21 40 47" src="https://user-images.githubusercontent.com/77414773/231753699-a43f67a8-4b18-4610-9e5a-60da518f589a.png">

Personellerin Çalışma Durumlarının Tek Sayfada Toplanması
<img width="1710" alt="Screenshot 2023-04-12 at 21 41 04" src="https://user-images.githubusercontent.com/77414773/231753698-dc7283d6-8ddb-4358-aacb-31ef74026904.png">

Personel İletişim Adresleri
<img width="1822" alt="Screenshot 2023-04-12 at 21 41 19" src="https://user-images.githubusercontent.com/77414773/231753696-448d70b4-dad1-4201-8861-1197f759df50.png">

Profil Bilgi Güncelleme Sayfası
<img width="1822" alt="Screenshot 2023-04-12 at 21 42 12" src="https://user-images.githubusercontent.com/77414773/231753692-b855a536-bbab-4daf-a19f-b27c1204a3a6.png">

Kişisel Notların görüntülenmesi, silinmesi ve düzenlenmesi
<img width="1822" alt="Screenshot 2023-04-12 at 21 42 21" src="https://user-images.githubusercontent.com/77414773/231753689-9e4da5e1-d59f-4108-b9e9-b8549e4383eb.png">

Notların Görüntülenmesi ve Düzenlenmesi
<img width="1822" alt="Screenshot 2023-04-12 at 21 42 31" src="https://user-images.githubusercontent.com/77414773/231753687-5c805d54-cfea-40c3-a5fe-24adda1d4407.png">

Kullanıcı Bilgilendirme Mesajları
<img width="1822" alt="Screenshot 2023-04-12 at 21 44 14" src="https://user-images.githubusercontent.com/77414773/231753679-cfd47a2e-43d8-4a31-b967-2152a8a33174.png">

### LICENSE

[MIT © Melih Afşar](https://mit-license.org/)
