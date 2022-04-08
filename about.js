console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();
  alert("the form has been submitted. Thanks!");
}

let image = document.getElementById("cat");
let form = document.querySelector("form#contact");
form.addEventListener("submit", handleSubmit);
image.addEventListener("mouseover", () => {
  alert("You are looking good today!");
});
