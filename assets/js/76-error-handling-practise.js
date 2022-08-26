document.querySelector("#frmLogin").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("fd");

  try {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    if (!isEmail(email))throw "Lutfen gecerli bir e posta giriniz";
    
    
    if (!password)throw "lutfen sifrenizi giriniz";
      //null ise gir undefined is gir demek vs
     
    
    e.target.submit();
  } catch (error) {
    alert(error);
  }




})

const isEmail = (email) => {
  //email kontrol islemleri
  const regex = /\S+@\S+\.\S{2,5$}/;
  //regular expression -> 
  
  return regex.test(email);
};
