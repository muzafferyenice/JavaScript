document.querySelector("nav.menu").addEventListener("mouseenter", (e)=>{
e.target.classList.add("opened");


});
document.querySelector("nav.menu").addEventListener("mouseleave", (e) => {
    setTimeout(()=>{
   e.target.classList.remove("opened");
    } , 2000);
 
  });
