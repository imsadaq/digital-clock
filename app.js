let section = document.querySelector("section");
let icons = document.querySelector(".icons");

icons.onclick = () => {
  section.classList.toggle("dark");
};

// creating function and calling it is every second

setInterval(() => {
  let data = new Date();
  hour = data.getHours();
  min = data.getMinutes();
  sec = data.getSeconds();
  //
  let d;
  d = hour < 12 ? "AM" : "PM";
  hour = hour > 12 ? hour - 12 : hour;
  hour = hour == 0 ? (hour = 12) : hour;
  //
  document.querySelector(".hour").innerHTML = hour;
  document.querySelector(".min").innerHTML = min;
  document.querySelector(".sec").innerHTML = sec;
  //   console.log(hour);
});
