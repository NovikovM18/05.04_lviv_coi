'use strict'

function initMap() {
  const uluru_1 = { lat: 49.8527787, lng: 23.9421962 };
  const uluru_2 = { lat: 49.8373288, lng: 24.0277789 };
  const uluru_3 = { lat: 49.8427787, lng: 23.9621962 };
  const uluru_4 = { lat: 49.8327787, lng: 23.9421962 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: uluru_2,
  });
  
  const marker_1 = new google.maps.Marker({
    position: uluru_1,
    map: map,
    title: "Україна, м. Львів, вул. Степана Гіги 45/2",
  });
  
  const marker_2 = new google.maps.Marker({
    position: uluru_2,
    map: map,
    title: "Україна, м. Львів, вул. Павла Зіборва 45/2",
  });
  
  const marker_3 = new google.maps.Marker({
    position: uluru_3,
    map: map,
    title: "Україна, м. Львів, вул. Віктора Павліка 45/2",
  });
  
  const marker_4 = new google.maps.Marker({
    position: uluru_4,
    map: map,
    title: "Україна, м. Львів, вул. Іво Бобула 45/2",
  });

  const info_1 = new google.maps.InfoWindow({
    content: `<h3>Україна, м. Львів, вул. Степана Гіги 45/2</h3><p>Контакти</p>`
  })
  marker_1.addListener("click", () => {
    info_1.open(map, marker_1);
  });
  
  const info_2 = new google.maps.InfoWindow({
    content: `<h3>Україна, м. Львів, вул. Павла Зіборва 45/2</h3><p>Контакти</p>`
  })
  marker_2.addListener("click", () => {
    info_2.open(map, marker_2);
  });
  
  const info_3 = new google.maps.InfoWindow({
    content: `<h3>Україна, м. Львів, вул. Віктора Павліка 45/2</h3><p>Контакти</p>`
  })
  marker_3.addListener("click", () => {
    info_3.open(map, marker_3);
  });
  
  const info_4 = new google.maps.InfoWindow({
    content: `<h3>Україна, м. Львів, вул. Іво Бобула 45/2</h3><p>Контакти</p>`
  })
  marker_4.addListener("click", () => {
    info_4.open(map, marker_4);
  });
}

initMap();
