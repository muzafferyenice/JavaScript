const cities = ["Ankara", "Izmir", "Istanbul", "Sinop"];
let boyleMixGorulmedi = "";
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
const loadList = () => {
  let html = "";
  for (let i = 0; i < cities.length; i++) {
    html += `<li>${cities[i]}</li>`;
  }
  document.querySelector("#cityList").innerHTML = html;
};

loadList();

document.querySelector("#btnMix").addEventListener("click", () => {
  const getRandom = () => {
    return cities[Math.floor(Math.random() * cities.length)];
  };
  console.log(getRandom());
  const mixle = () => {
    let mixim = "";
    mixim += getRandom();
    mixim += getRandom();
    mixim += getRandom();

    for (let i = mixim.length; i < Math.floor(Math.random() * cities.length); i++) {
      const x = tamamla();
      mixim += x;
    }
    return mixim;
  };
  const tamamla = () => {
    const yeni = [];
    yeni.push(getRandom());
    return yeni[Math.floor(Math.random() * yeni.length)];
  };
  const mixer = () => {
  boyleMixGorulmedi += mixle();

  return boyleMixGorulmedi;

};
mixer();
  loadList();
  console.log(boyleMixGorulmedi);
});
