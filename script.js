const products = [
    {
        id: 1,
        title: "Dunk Jumbo Mushroom",
        price: 899.99,
        img: "../assets/products/prod1.png"
    },
    {
        id: 2,
        title: "Terminator Low Velvet Brown",
        price: 1099.99,
        img: "../assets/products/prod2.png"
    },
    {
        id: 3,
        title: "Adi 2000",
        price: 799.99,
        img: "../assets/products/prod3.png"
    },
    {
        id: 4,
        title: "Air Force 1 Low Retro",
        price: 1399.99,
        img: "../assets/products/prod4.png"
    },
    {
        id: 5,
        title: "Ozweego",
        price: 999.99,
        img: "../assets/products/prod5.png"
    },
    {
        id: 6,
        title: "Air Vapormax Triple Black",
        price: 999.99,
        img: "../assets/products/prod6.avif"
    },
    {
        id: 7,
        title: "Forum Mod Low",
        price: 899.99,
        img: "../assets/products/prod7.png"
    },
    {
        id: 8,
        title: "Air Jordan 1 Low GS Rabbit",
        price: 999.99,
        img: "../assets/products/prod8.avif"
    }  
];

let choosenProduct = products[0];
let productClass = Array.from(document.getElementsByClassName('product'));

let sproductTitle = document.getElementById('prod-names');
console.log(sproductTitle)

const currentProductImg = document.querySelector('.img-object');
const currentProductTitle = document.querySelector('.title-object');
const currentProductPrice = document.querySelector('.price-object');

productClass.forEach((item, index) => {
    item.addEventListener('click', () => {

        choosenProduct = products[index];
        console.log(choosenProduct)

        //window.location.href = '/pages-html/sproduct.html';

        //sproductTitle.textContent = choosenProduct.title;

    });
});






