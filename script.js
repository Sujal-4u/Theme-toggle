let btn = document.querySelector("button");
let body = document.querySelector("body");

btn.addEventListener("click", function(evt){
  if (body.classList.contain === body.light){
    body.classList.remove("body.light");
    body.classList.add("body.dark");
  } else {
    body.classList.remove("body.dark");
    body.classList.add("body.light");
  }
})