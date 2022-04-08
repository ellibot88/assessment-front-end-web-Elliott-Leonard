const favorite = document.getElementById("color");
const place = document.getElementById("place");
const ritual = document.getElementById("ritual");

favorite.addEventListener("click", () =>
  alert("My favorite color is burnt orange")
);
place.addEventListener("click", () => alert("I love to go to the beach!"));
ritual.addEventListener("click", () =>
  alert("I'm a firm believer in waking up early and going to the gym")
);
