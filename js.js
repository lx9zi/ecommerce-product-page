

const quNumber = document.querySelector('#quantity-number');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');


// Add to Cart Button
const btn = document.querySelector('#add-to-cart');

const CartNumber = document.getElementById('cart-number');
btn.addEventListener('click', () => {
    if (quNumber.innerText != 0) {
        CartNumber.innerText = quNumber.innerText
        qu.innerText = quNumber.innerText
        price.innerText = total * quNumber.innerText
        CartNumber.classList.add('added')
    }
})

// price 
const qu = document.getElementById('qu');
const price = document.getElementById('price');
let total = 125

// show the cart 
const cartIcon = document.getElementById('cart-icon');
const cartPanel = document.getElementById('cart-panel');

// check if empty or not
const Empty = document.getElementById('Empty');
const NotEmpty = document.getElementById('NotEmpty');

cartPanel.addEventListener('mouseover', () => {
    cartPanel.style.display = 'block'
})
cartPanel.addEventListener('mouseleave', () => {
    cartPanel.style.display = 'none'
})

cartIcon.addEventListener('mouseover', () => {
    cartPanel.style.display = 'block'


    if (quNumber.innerText == 0) {
        NotEmpty.style.display = 'none'
    }
    else {
        NotEmpty.style.display = 'flex'
        Empty.style.display = 'none'
    }

})
cartIcon.addEventListener('mouseleave', () => {
    cartPanel.style.display = 'none'
})

// remove cart items
const crach = document.getElementById('crach');
crach.addEventListener('click', () => {
    Empty.style.display = 'flex'
    NotEmpty.style.display = 'none'
    quNumber.innerText = 0;
    CartNumber.classList.remove('added')
})






plus.addEventListener('click', () => {
    quNumber.innerText++;
})
minus.addEventListener('click', () => {
    if (quNumber.innerText <= 0) {
        quNumber.innerText = 0
    }
    else {
        quNumber.innerText--;
    }
})





const item = document.querySelectorAll('img')



for (let image of item) {
    image.addEventListener('click', () => {
        photo.style.display = 'flex'
    })
}



const exit = document.getElementById('exit-icon');
const photo = document.querySelector('.photo-gallery');

var indexValue = 1;
showImg(indexValue);
function side_slide(e) {
    showImg(indexValue += e);
}
function showImg(e) {
    var i;
    const img = document.querySelector('.images').children;
    if (e > img.length) {
        indexValue = 1
    }
    if (e < 1) {
        indexValue = img.length
    }
    for (i = 0; i < img.length; i++) {
        img[i].style.display = "none";
    }
    img[indexValue - 1].style.display = "block";
}

exit.addEventListener('click', () => {
    photo.style.display = 'none'
})



const toggle = document.querySelector('.toggle');
const navbar = document.querySelector('.items');
toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    navbar.classList.toggle('openItmes')
})