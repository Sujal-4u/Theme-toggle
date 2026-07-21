let btn = document.querySelector("button");
let body = document.querySelector("body");

btn.addEventListener("click", function(evt){
  if (body.classList.contains("light")){
    body.classList.remove("light");
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
  }
})