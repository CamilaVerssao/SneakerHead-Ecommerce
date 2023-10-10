
let image_sproduct = document.getElementById('MainImg');

function info(index) {

    let product = document.getElementsByClassName('product')[index];

    let sources = [
        'assets/products/prod1.png',
        'assets/products/prod2.png',
        'assets/products/prod3.png',
        'assets/products/prod4.png', 
        'assets/products/prod5.png',
        'assets/products/prod6.avif',
        'assets/products/prod7.png',
        'assets/products/prod1.avif'
    ];

    window.location.href = '/pages-html/sproduct.html';

    return sources[index];
}


