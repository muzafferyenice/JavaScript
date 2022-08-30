const addButton = document.getElementById("btnAdd");
const namos = document.getElementById("txtName");
const pointos = document.getElementById("txtPoint");
const table = document.querySelector("#tblStudents tbody");
const avg = document.getElementById("not");

let edit;
let satir = "";
let index = 0;

const eklemedir = () => {
  let namo = namos.value;
  let pointo = pointos.value;

  satir += ` <tr>
        <td>${index + 1}</td>
        <td>${namo}</td>
        <td>${pointo}</td>
        <td>
       <span id="edit"> <i class="fa-solid fa-pencil"></i> </span> &nbsp
       <span id="sil"> <i class="fa-solid fa-trash-can"></i> </span>
        </td>
    </tr>`;
  index++;
  table.innerHTML = satir;

  silAll = document.querySelectorAll("#tblStudents  #sil");
  silAll.forEach((sil) => {
    sil.addEventListener("click", (e) => {
      const row = e.target.closest("tr");
      const isim = row.querySelector("td:nth-child(2)").innerHTML;
      const not = row.querySelector("td:nth-child(3)").innerHTML;

      confirm(`emin misin ${isim},${not}`);

        row.remove();

    });
  });

  editAll = document.querySelectorAll("#tblStudents  #edit");

  editAll.forEach((edit) => {
    edit.addEventListener("click", (e) => {
      const row = e.target.closest("tr");
      row.querySelector(
        "td:last-child"
      ).innerHTML = `<span id="tik"> <i class="fa-solid fa-check">
  </i> </span> &nbsp
<span id="carpi"> <i class="fa-solid fa-xmark"></i> </span> &nbsp `; //tik ve carpi iseret

      const isim = row.querySelector("td:nth-child(2)").innerHTML;
      const not = row.querySelector("td:nth-child(3)").innerHTML;

      row.querySelector(
        "td:nth-child(2)"
      ).innerHTML = `<input type="text" value= "${isim}"> `;
      row.querySelector(
        "td:nth-child(3)"
      ).innerHTML = `<input type="number" value="${not}" >`;

      tikAll = document.querySelectorAll("#tblStudents #tik");

      tikAll.forEach((tik) => {
        //burasu tik oldugunda girilen inputlari ekler
        tik.addEventListener("click", () => {
          let inputName = row.querySelector("td:nth-child(2) input").value;
          let inputPoint = row.querySelector("td:nth-child(3) input").value;

          row.querySelector("td:nth-child(2)").innerHTML = inputName;
          row.querySelector("td:nth-child(3)").innerHTML = inputPoint;

          row.querySelector(
            "td:last-child"
          ).innerHTML = `<span id="edit"> <i class="fa-solid fa-pencil"></i> </span> &nbsp
       <span id="sil"> <i class="fa-solid fa-trash-can"></i> </span>`;
        });
      });
      carpiAll = document.querySelectorAll("#tblStudents #carpi"); //burasi cancel olay mahhalli
      carpiAll.forEach((carpi) => {
        carpi.addEventListener("click", () => {
          row.querySelector("td:nth-child(2)").innerHTML = isim;
          row.querySelector("td:nth-child(3)").innerHTML = not;
          row.querySelector(
            "td:last-child"
          ).innerHTML = `<span id="edit"> <i class="fa-solid fa-pencil"></i> </span> &nbsp
       <span id="sil"> <i class="fa-solid fa-trash-can"></i> </span>`;
        });
      });
    });
  });

  
  
ortalama();
};
const ortalama =()=>{

const notAll = document.querySelectorAll("tbody td:nth-child(3)");
let total =0;

notAll.forEach((not) => {
  total += parseInt(not.innerHTML); //toplama ve ortlamanin alingi yer
  let notSayi = notAll.length;
  ort=total/notSayi;

  avg.innerHTML=ort;


});

}

addButton.addEventListener("click", eklemedir);
