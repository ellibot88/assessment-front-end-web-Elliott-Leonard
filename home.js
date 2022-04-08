const button = document.getElementById("random");
const list = document.querySelector("ul");
// console.log(list);
// console.log(button);
button.addEventListener("click", (e) => {
  e.preventDefault();
  const restaurants = [
    "Cafe Mexicali",
    "Raising Canes",
    "HuHot",
    "Silver Grill",
    "Dougs Day Diner",
  ];
  const randomRes = restaurants[Math.floor(Math.random() * restaurants.length)];
  alert(`Check out ${randomRes}!`);
  const newRes = document.createElement("li");
  newRes.textContent = randomRes;
  console.log(newRes);
  list.appendChild(newRes);
});
