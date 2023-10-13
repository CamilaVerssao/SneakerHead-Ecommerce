const products = [
    {
        id: 1,
        title: "Dunk Jumbo Mushroom",
        group: "Home / Dunk",
        price: 899.99,
        img: "../assets/products/prod1.png"
    },
    {
        id: 2,
        title: "Terminator Low Velvet Brown",
        group: "Home / Terminator",
        price: 1099.99,
        img: "../assets/products/prod2.png"
    },
    {
        id: 3,
        title: "Adi 2000",
        group: "Home / Adi 2000",
        price: 799.99,
        img: "../assets/products/prod3.png"
    },
    {
        id: 4,
        title: "Air Force 1 Low Retro",
        group: "Home / Air Force 1",
        price: 1399.99,
        img: "../assets/products/prod4.png"
    },
    {
        id: 5,
        title: "Ozweego",
        group: "Home / Ozweego",
        price: 999.99,
        img: "../assets/products/prod5.png"
    },
    {
        id: 6,
        title: "Air Vapormax Triple Black",
        group: "Home / Air Vapormax",
        price: 999.99,
        img: "../assets/products/prod6.avif"
    },
    {
        id: 7,
        title: "Forum Mod Low",
        group: "Home / Forum",
        price: 899.99,
        img: "../assets/products/prod7.png"
    },
    {
        id: 8,
        title: "Air Jordan 1 Low GS Rabbit",
        group: "Home / Air Jordan 1",
        price: 999.99,
        img: "../assets/products/prod8.avif"
    },
    {
        id: 9,
        title: "Air Max 98 La Mezcla",
        group: "Home / Air Max 98",
        price: 1399.99,
        img: "../assets/products/prod9.webp"
    }  
];

let productClass = Array.from(document.getElementsByClassName('product'));

function devolveObj(index) {
    let choosenProduct = products[index];

    localStorage.setItem('tenis', JSON.stringify(choosenProduct)); 
    window.location.href = '/pages-html/sproduct.html';
}

/*Product Cart*/

const removeProductIcons = document.getElementsByClassName('remove-icon'); //pega uma coleção de botões

for(let i = 0; i < removeProductIcons.length; i++) { //percorre toda a coleção
    removeProductIcons[i].addEventListener('click', function(event) {
        event.target.parentElement.parentElement.parentElement.remove();
        updateTotal();
    });//adiciona um escutador de eventos em todos os botões
}  

function updateTotal() {
    let totalAmount = 0;
    const cartProducts = document.getElementsByClassName('cart-product');

    for(let i = 0; i < cartProducts.length; i++) {
        const productPrice = cartProducts[i].getElementsByClassName('cart-product-price')[0].innerText.replace('R$', '').replace(',', '.');
        const productQuantity = cartProducts[i].getElementsByClassName('cart-product-quantity')[0].value;

        totalAmount += productPrice * productQuantity;
    }
    totalAmount = totalAmount.toFixed(2);
    totalAmount = totalAmount.replace('', 'R$ ').replace('.', ',');
    document.getElementById('total-amount').innerText = totalAmount;
}

const quantityInputs = document.getElementsByClassName('cart-product-quantity');
for(let i = 0; i < quantityInputs.length; i++) {
    quantityInputs[i].addEventListener('change', updateTotal);
}







/*Product Cart*/ 







