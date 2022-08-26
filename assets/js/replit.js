const addButton = document.getElementById("btnAdd");
const namos = document.getElementById("txtName");
const pointos = document.getElementById("txtPoint");
const table = document.querySelector("#tblStudents tbody");



let satir = "";
let index=0;
const eklemedir = () => { 
  let namo=namos.value;
  let pointo = pointos.value;


  satir += ` <tr>
        <td>${index + 1}</td>
        <td>${namo}</td>
        <td>${pointo}</td>
        <td>
        <i class="fa-solid fa-pencil"></i> &nbsp
       <i class="fa-solid fa-trash-can"></i>
        </td>
    </tr>`;
    index++;
  table.innerHTML = satir;

};
const editoria=()=>{
  const edit = document.querySelector("#tableStudent i:nth-child(1)");
  const icon = document.querySelector("#tableStudent td:nth-child(4)");
icon.innerHTML = `<i class="fa-solid fa-check"></i> &nbsp
<i class="fa-solid fa-xmark"></i>`;//tik ve carpi iseret 



}

addButton.addEventListener("click", eklemedir);

edit.addEventListener("click" ,editoria);





