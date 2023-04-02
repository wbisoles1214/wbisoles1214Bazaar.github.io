let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
  body.classList.add("active");
});

closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

let products = [
  {
    id: 1,
    name: "OnePiece Luffy 1-3months",
    image: "images/luffy.jpg",
    price: 800.0,
  },
  {
    id: 2,
    name: "OnePiece Luffy 3-6months",
    image: "images/luffy.jpg",
    price: 1100.0,
  },
  {
    id: 3,
    name: "OnePiece Luffy 6-12months",
    image: "images/luffy.jpg",
    price: 1200,
  },

  {
    id: 4,
    name: "OnePiece Zorro 1-3months",
    image: "images/zorro.jpg",
    price: 800.0,
  },
  {
    id: 5,
    name: "OnePiece Zoro 3-6months",
    image: "images/zorro.jpg",
    price: 1100,
  },
  {
    id: 6,
    name: "OnePiece Zoro 6-12months",
    image: "images/zorro.jpg",
    price: 1200,
  },
  {
    id: 7,
    name: "OnePiece Zoro 1-3months",
    image: "images/sanji.jpg",
    price: 800,
  },
  {
    id: 8,
    name: "OnePiece Zoro 4-6months",
    image: "images/sanji.jpg",
    price: 1100,
  },
  {
    id: 9,
    name: "OnePiece Zoro 6-12months",
    image: "images/sanji.jpg",
    price: 1200,
  },
];

let listCards = [];

function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
            <img src="${value.image}"/>
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add to Cart</button>
        `;
    list.appendChild(newDiv);
  });
}

initApp();

function addToCard(key) {
  if (listCards[key] == null) {
    listCards[key] = { ...products[key], quantity: 1 };
  } else {
    listCards[key].quantity += 1;
  }
  reloadCard();
}

function reloadCard() {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price * value.quantity;
    count = count + value.quantity;

    if (value != null) {
      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
      <div><img src="${value.image}"/></div>
      <div>${value.name}</div>
      <div>${(value.price * value.quantity).toLocaleString()}</div>
      <div>
        <button onclick="changeQuantity(${key}, ${
        value.quantity - 1
      })">-</button>
        <div class="count">${value.quantity}</div>
        <button onclick="changeQuantity(${key}, ${
        value.quantity + 1
      })">+</button>
      </div>
      `;
      listCard.appendChild(newDiv);
    }
  });
  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}

function changeQuantity(key, newQuantity) {
  if (newQuantity < 1) {
    listCards.splice(key, 1);
  } else {
    listCards[key].quantity = newQuantity;
  }
  reloadCard();
}
