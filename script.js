let btn = document.querySelector("button");
let body = document.querySelector("body");
let themes = window.matchMedia('(prefers-color-scheme: dark)');
function setDarkOrLight(){
  if (themes.matches){
    body.classList.remove("dark");
    body.classList.add("light");
  } else {
    body.classList.remove("light");
    body.classList.add("dark");
  }
}
if (localStorage.getItem("theme")){
  body.classList.add(localStorage.getItem("theme"))
} else {
  setDarkOrLight();
}
btn.addEventListener("click", function(evt){
  if (body.classList.contains("light")){
    body.classList.remove("light");
    body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
    localStorage.setItem("theme", "light");
  }
})