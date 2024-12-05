const wrapper = document.querySelector('.sliderWrapper');
const menuItems = document.querySelectorAll('.menuItem');

const products = [
    {   
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
            {
                code: "black",
                img: "./img/air.png",
            },
            {
                code: "darkblue",
                img: "./img/air2.png",
                },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 149,
        colors: [
            {
                code: "black",
                img: "./img/jordan.png",
            },
            {
                code: "darkblue",
                img: "./img/jordan2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Blazer",
        price: 109,
        colors: [
            {
                code: "lightgrey",
                img: "./img/blazer.png",
            },
            {
                code: "green",
                img: "./img/blazer2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 129,
        colors: [
            {
                code: "black",
                img: "./img/crater.png",
            },
            {
                code: "green",
                img: "./img/crater2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 99,
        colors: [
            {
                code: "grey",
                img: "./img/hippie.png",
            },
            {
                code: "black",
                img: "./img/hippie2.png",
            },
        ],
    },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector('.productImg');
const currentProductTitle = document.querySelector('.productTitle');
const currentProductPrice = document.querySelector('.productPrice');
const currentProductColors = document.querySelectorAll('.color');
const currentProductSizes = document.querySelectorAll('.sizes');



menuItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    // change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    // change the choosen product
    choosenProduct = products[index];

    // change texts of current product
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$"+ choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    // change colors of current product
    currentProductColors.forEach((color, index) => {
        color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

// changing img color on click
currentProductColors.forEach((color, index) => {
    color.addEventListener('click', () => {
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});


currentProductSizes.forEach((size) => {
    size.addEventListener('click', () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
}