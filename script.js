const products = [
    {
        id: 1,
        title: "Dunk Jumbo Mushroom",
        group: "Home / Dunk",
        price: 899.99,
        img: "../assets/products/prod1.png",
        desc: "Seu visual favorito fica grande e ousado. A marca extra grande exagera o visual clássico, enquanto a unidade Air Strobel coloca amortecimento logo abaixo dos seus pés. E se isso não for suficiente, a construção da língua de dentro para fora e o novo sistema de amarração trazem um novo visual personalizável."
    },
    {
        id: 2,
        title: "Terminator Low Velvet Brown",
        group: "Home / Terminator",
        price: 1099.99,
        img: "../assets/products/prod2.png",
        desc: "Camurça com textura de crocodilo? Agora isso é fogo. Permitindo que você volte à era dos arremessos de gancho, joelheiras e meias até a panturrilha, esta versão elevada do Terminator Low aprimora seu jogo com materiais premium e cores limpas. As sobreposições Velvet Brown e Sail combinam com a marca retro e uma língua de espuma exposta. Isso é o que chamamos de visual vencedor do jogo."
    },
    {
        id: 3,
        title: "Adi 2000",
        group: "Home / Adi 2000",
        price: 799.99,
        img: "../assets/products/prod3.png",
        desc: "O Adidas 2000 Preto é uma escolha popular entre os entusiastas da moda e atletas, devido à sua capacidade de combinar estilo, desempenho e conforto. Este tênis é uma peça icônica que pode ser incorporada a uma ampla variedade de trajes, do esportivo ao casual, tornando-o uma escolha versátil para pessoas de todas as idades. Se você procura um calçado que alia moda e funcionalidade, o Adidas 2000 Preto é uma opção que merece ser considerada."
    },
    {
        id: 4,
        title: "Air Force 1 Low Retro",
        group: "Home / Air Force 1",
        price: 1399.99,
        img: "../assets/products/prod4.png",
        desc: "Já tem sua cor favorita? Sem problemas. A série Cor do Mês permite que você alimente sua necessidade enquanto celebra um pedaço pouco conhecido da história da Nike - a série original da Cor do Mês, em 1984, pode ter salvado o AF1 da extinção. É isso mesmo, uma reedição era incerta no início do tênis, mas as lojas de esportes em Baltimore os viram vendendo como pão quente e sabiam que o AF1 se tornaria sinônimo de moda e cultura de rua. Então, eles pediram cores personalizadas para vender em suas vitrines... e o resto é história. De materiais imaculados a esta colorway branca e hiper real (e até mesmo uma escova para limpeza de sapatos), esta edição oferece uma lição sobre o cobiçado estilo fora da quadra. Toda vez que você arrasar, lembre-se dos lojistas visionários de Baltimore que fizeram tudo acontecer"
    },
    {
        id: 5,
        title: "Ozweego",
        group: "Home / Ozweego",
        price: 999.99,
        img: "../assets/products/prod5.png",
        desc: "Os tênis Ozweego são uma opção moderna e estilosa para os amantes da moda e do conforto. Com uma tonalidade de cinza versátil, esses tênis oferecem um visual contemporâneo que se adapta facilmente a uma variedade de roupas. A parte superior é construída com materiais de alta qualidade para durabilidade, enquanto a sola proporciona conforto e tração sólida. Os Ozweego são uma escolha popular para quem busca um equilíbrio entre estilo e funcionalidade em calçados do dia a dia."
    },
    {
        id: 6,
        title: "Air Vapormax Triple Black",
        group: "Home / Air Vapormax",
        price: 999.99,
        img: "../assets/products/prod6.avif",
        desc: "Você já andou no ar? Entre no Air VaporMax 2023 para ver como é feito. A tecnologia inovadora é revelada através da palmilha perfurada (retire para ver mais). A parte superior elástica do Flyknit é feita com pelo menos 20% de conteúdo reciclado em peso."
    },
    {
        id: 7,
        title: "Forum Mod Low",
        group: "Home / Forum",
        price: 899.99,
        img: "../assets/products/prod7.png",
        desc: "Os tênis Forum Mod Low são uma interpretação moderna de um clássico da adidas. Com um design limpo e simplificado, esses tênis oferecem um visual minimalista e elegante. A parte superior é geralmente feita de materiais premium, garantindo durabilidade e conforto. A sola é projetada para proporcionar tração sólida, tornando-os adequados para uso diário. Os Forum Low Mod são uma escolha popular entre os entusiastas de tênis que apreciam um visual atemporal com um toque contemporâneo."
    },
    {
        id: 8,
        title: "Air Jordan 1 Low GS Rabbit",
        group: "Home / Air Jordan 1",
        price: 999.99,
        img: "../assets/products/prod8.avif",
        desc: "Entre! Esse tênis divertido é inspirado no seu amigo peludo favorito. Fique animado com pele de coelho falsa e um Swoosh bordado Total Orange. Para um enfeite extra, há até um topo de cenoura acoplável"
    },
    {
        id: 9,
        title: "Air Max 98 La Mezcla",
        group: "Home / Air Max 98",
        price: 1399.99,
        img: "../assets/products/prod9.webp",
        desc: "Os tênis Nike Air Max 98 La Mezcla são uma celebração vibrante da cultura latina e uma representação única da diversidade e da fusão de culturas. Com um design ousado e cheio de cores, esses tênis são uma homenagem à rica herança cultural da América Latina \n\n A parte superior apresenta uma combinação de cores brilhantes, inspiradas na arte e na música latina, criando um visual alegre e energético. Detalhes como o logotipo do taco de beisebol e os acentos multicoloridos evocam a essência da cultura latina \n Além do apelo estético, os Air Max 98 La Mezcla são equipados com a tecnologia de amortecimento Air Max da Nike, proporcionando conforto e suporte durante o uso. A sola robusta oferece tração sólida, tornando esses tênis adequados para uso diário e atividades esportivas."
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

const cartButton = document.getElementsByClassName('cart');
for(let i = 0; i < cartButton.length; i++) {
    cartButton[i].addEventListener('click', addProductToCart);
}


/*Product Cart*/







