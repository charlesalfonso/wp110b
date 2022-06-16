const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Rog",
    price: 1499,
    colors: [
      {
        code: "black",
        img: "./img/rog.png",
      },
      {
        code: "white",
        img: "./img/rog2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Legion",
    price: 1299,
    colors: [
      {
        code: "lightgray",
        img: "./img/legion.png",
      },
      {
        code: "black",
        img: "./img/legion2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Razer",
    price: 1499,
    colors: [
      {
        code: "black",
        img: "./img/razer.png",
      },
      {
        code: "lightgrey",
        img: "./img/razer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Msi",
    price: 1199,
    colors: [
      {
        code: "black",
        img: "./img/msi.png",
      },
      {
        code: "lightgrey",
        img: "./img/msi2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Alienware",
    price: 1599,
    colors: [
      {
        code: "black",
        img: "./img/alienware.png",
      },
      {
        code: "lightgrey",
        img: "./img/alienware2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    
    choosenProduct = products[index];

    
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});