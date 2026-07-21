let btn = document.querySelector("button");
let body = document.querySelector("body");

btn.addEventListener("click", function(evt){
  body.addClassList.add(body.dark);
})