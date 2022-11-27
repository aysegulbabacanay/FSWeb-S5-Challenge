
// GÖREV 1
// ---------------------
// Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
// Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
// Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
//
//  <div class="header">
//    <span class="date">{ tarih }</span>
//    <h1>{ baslik }</h1>
//    <span class="temp">{ yazi }</span>
//  </div>
//

const Header = (baslik, tarih, yazi) => {

  const header = document.createElement("div");
  header.classList.add("header");

  const span1 = document.createElement("span");
  span1.classList.add("date");
  span1.textContent = tarih;
  header.appendChild(span1);

  const h1 = document.createElement("h1");
  h1.textContent = baslik;
  header.appendChild(h1);

  const span2 = document.createElement("span");
  span2.classList.add("temp");
  span2.textContent = yazi;
  header.appendChild(span2);

  return header;
};

const headerEkleyici = (secici) => {
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //

  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper")) 
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))

  const myHeader = Header("Teknoloji Zamanı","11 Kasım 2022","Teknoloji Dünyasında Küçük Bir Tur");

  const headerContainer = document.querySelector(secici);
  headerContainer.appendChild(myHeader);

  // return headerContainer;
};

export { Header, headerEkleyici };
