import axios from "axios";

// GÖREV 5
// ---------------------
// Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
// Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
// Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
// Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
// Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
//
// <div class="card">
//   <div class="headline">{ anabaslik }</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={ yazarFoto }>
//     </div>
//     <span>{ yazarAdı } tarafından</span>
//   </div>
// </div>
//
const Card = (makale) => {
  const divcard = document.createElement("div");
  divcard.classList.add("card");

  const baslik = document.createElement("div");
  baslik.classList.add("headline");
  baslik.textContent = makale["anabaslik"];
  divcard.appendChild(baslik);

  const author = document.createElement("div");
  author.classList.add("author");
  divcard.appendChild(author);

  const imgCont = document.createElement("div");
  imgCont.classList.add("img-container");
  author.appendChild(imgCont);

  const img = document.createElement("img");
  img.src = makale["yazarFoto"];
  imgCont.appendChild(img);

  const span = document.createElement("span");
  span.textContent = `${makale["yazarAdi"]} tarafından`;
  author.appendChild(span);

  divcard.addEventListener("click",(event)=>{
    console.log(makale.anabaslik);
  });

  return divcard;
}


// GÖREV 6
// ---------------------
// Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
// Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
// Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
// Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
// Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
//

const cardEkleyici = (secici) => {

  const eklenecekYer= document.querySelector(secici)
  axios.get("http://localhost:5001/api/makaleler")

    .then(function (response) {
      //console.log(response.data.makaleler); //çıktıya göre bakıp öyle .makaleler dedik

      for (let i in response.data.makaleler) {
          //console.log(response.data.makaleler) dediğimizde;
          // bootstrap: [{…}, {…}, {…}] böyle birşeyler geliyor.
          //index bootstrap oluyor. 
          //forEach başına kadar gelen şey ; [{…}, {…}, {…}]
        response.data.makaleler[i].forEach(function (item) {
          eklenecekYer.appendChild(Card(item));
        });
      }
    });
};

export { Card, cardEkleyici };


