const cities = ["Ankara", "Izmir", "Istanbul", "Sinop"];
document.querySelector("#btnSort").addEventListener("click", () => {
  cities.sort();
  loadList();
});
document.querySelector("#btnReverse").addEventListener("click", () => {
  cities.reverse();
  loadList();
});
document.querySelector("#btnRemoveFirst").addEventListener("click", () => {
  cities.shift();
  loadList();
});
document.querySelector("#btnRemoveLast").addEventListener("click", () => {
  cities.pop();
  loadList();
});
document.querySelector("#btnRemoveAll").addEventListener("click", () => {
  cities.splice(0, cities.length);
  loadList();
});
document.querySelector("#btnAddCity").addEventListener("click", () => {
  const city = document.querySelector("#txtCity").value;
  if (!city || cities.includes(city)) return;
  cities.push(city);
  loadList();
});
document.querySelector("#btnMix").addEventListener("click", () => {
  getRandom();
  loadList();
});
const loadList = () => {
  let html = "";
  for (let i = 0; i < cities.length; i++) {
    html += `<li>${cities[i]}</li>`;
  }
  document.querySelector("#cityList").innerHTML = html;
};
const getRandom = () => {
  const arr = [];
  while (cities.length > 0) {
    const rndIndex = Math.floor(Math.random() * cities.length);
    const city = cities[rndIndex];
    arr.push(city);
    cities.splice(rndIndex, 1);
  }
  cities.splice(0, 0, ...arr); //0. ci indexten basla , 0 sey sil , ve arr den gelen herseyi ekle
};
loadList();
