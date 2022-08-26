const elHour = document.querySelector("#clock li:nth-child(1)");
const elMinute = document.querySelector("#clock li:nth-child(3)");
const elSecond = document.querySelector("#clock li:nth-child(2)");

const tick = () => {
  const dateTime = new Date();
  let hour = dateTime.getHours();
  let minute = dateTime.getMinutes();

  hour = hour.toString().length == 1 ? "0" + hour : hour;
  minute = minute.toString().length == 1 ? "0" + minute : minute;

  elHour.innerHTML = hour;
  elMinute.innerHTML = minute;

  elSecond.classList.toggle("hidden");

  /* elSecond.style.opacity=elSecond.style.opacity==1 
? (elSecond.style.opacity= 0)
: (elSecond.style.opacity=1);
 */
};

setInterval(tick, 1000);
