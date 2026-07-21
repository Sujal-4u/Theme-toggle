let btn = document.querySelector("button");
let body = document.querySelector("body");

btn.addEventListener("click", function(evt){
  body.classList.add("body.dark");
  body.classList.remove("body.light");
})