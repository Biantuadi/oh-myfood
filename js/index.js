const menuRestaurant = [
  {
    name: "La palette du goût",
    description: "Ménilmontant",
    imgUrl: "../img/restaurants/La palette du goût.jpg",
  },
  {
    name: "La note enchantée",
    description: "Cité Rouge",
    imgUrl: "../img/restaurants/La note enchantée.jpg",
  },
  {
    name: "À la française",
    description: "Charonne",
    imgUrl: "../img/restaurants/À la française.jpg",
  },
  {
    name: "Le délice des sens",
    description: "Folie-Méricourt",
    imgUrl: "../img/restaurants/Le délice des sens.jpg",
  },
];

menuRestaurant.forEach((menu) => {
  const card = document.createElement("div");
  let html = `
  <div class="menu__plat">
    <a href="./product.html" class="menu__linkImg">
    <img src="${menu.imgUrl}" alt="">
    </a>
    <div class="menu__text">
        <h3>${menu.name}</h3>
        <span>${menu.description}</span>
        <i class="far fa-heart"></i>
    </div>
    </div>
    `;

  document.querySelector("#menu").innerHTML += html;
});

const hearts = document.querySelectorAll("#menu i");
let audio = new Audio('../audio/like-audio.mp3');

hearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    heart.classList.remove("far");
    heart.classList.toggle("fas");
    heart.classList.add("far");

    if (heart.classList.contains("fas")) {
      audio.play();
    }
  });
});

