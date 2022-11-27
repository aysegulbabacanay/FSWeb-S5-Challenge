import axios from "axios";

// GÖREV 3
// ---------------------
// Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
// Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
// fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
// Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
// Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
//
// <div class="topics">
//   <div class="tab">javascript</div>
//   <div class="tab">bootstrap</div>
//   <div class="tab">teknoloji</div>
// </div>
//
// konu= ['javascript', 'bootstrap', 'teknoloji']
const Tablar = (konu) => {

  const topicsOlustur = document.createElement("div");
  topicsOlustur.classList.add("topics");

  for (let i = 0; i < konu.length; i++) {
    const tabOlustur = document.createElement("div");
    tabOlustur.classList.add("tab");
    tabOlustur.textContent = konu[i];
    topicsOlustur.appendChild(tabOlustur);
  }

  return topicsOlustur;
};


// GÖREV 4
// ---------------------
// Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
// Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
// Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
// Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
//
const tabEkleyici = (secici) => {
  const tabContainer = document.querySelector(secici);
  axios.get("http://localhost:5001/api/konular")

    .then(function (response) {
      //console.log(response.data); //console.log(response.data.konular)
      //konular = ["javascript","bootstrap","teknoloji","jquery","node.js"] //= console.log(response.data.konular)
      const tablar = Tablar(response.data.konular); // yukardaki tablar fonk.
      //console.log(Tablar)
      tabContainer.appendChild(tablar);
    });
};

export { Tablar, tabEkleyici };
