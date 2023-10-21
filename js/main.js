
let menuList = document.getElementById('menu-list')
let burger = document.getElementById('burger')
let closeIcon = document.getElementById('close')
let sizeGuide = document.getElementById('size-guide')
let sizesContainer = document.getElementById('sizes-container')
let productName = document.getElementById('product-name')
let productSize = document.getElementById('product-size')
let productTotal = document.getElementById('product-total')
let estimatedTotal = document.getElementById('estimated-total')

let product = {
    name: `AIR JORDAN 1 RETRO HIGH "UNIVERSITY BLUE"`,
    image: 'assets/images/Rectangle_1102.png',
    price: `$${2}`,
    sizes: [
        'UK 5.5', 'UK 6', 'UK 6.5', 'UK 7', 'UK 7.5', 'UK 8', 'UK 8.5', 'UK 9', 'UK 9.5', 'UK 10', 'UK 10.5', 'UK 11', 'UK 11.5', 'UK 12', 'UK 13', 'UK 14',
    ],
}

const openMenu = () => {
    closeIcon.style.display = 'block'
    burger.style.display = 'none'
    menuList.classList.add('opened-menu')
}

const closeModal = () => {
    closeIcon.style.display = 'none'
    burger.style.display = 'block'
    menuList.classList.remove('opened-menu')   
    cart.classList.remove('cart-show')
    sizeGuide.classList.remove('size-guide-show')
}

const openCart = () => {
    closeIcon.style.display = 'block'
    burger.style.display = 'none'
    cart.classList.add('cart-show')
}

const openSizeGuide = () => {
    closeIcon.style.display = 'block'
    burger.style.display = 'none'
    sizeGuide.classList.add('size-guide-show')
}

let sliderIndicators = document.querySelectorAll('.slide')

sliderIndicators.forEach(item => {
    item.addEventListener('click', (e) => {
        sliderIndicators.forEach(el=>{ el.classList.remove('active'); });
        item.classList.add('active')
    })
})

for (let i = 0; i < product.sizes.length; i++) {
    const button = document.createElement("button")
    button.classList.add('size-option')
    button.innerText = product.sizes[i]
    button.addEventListener('click', () => {
        button.classList.add('active-option')
    })
    sizesContainer.appendChild(button)
}

const sizesBtns = document.querySelectorAll('.size-option')
sizesBtns.forEach(btn =>{ 
    btn.addEventListener('click', (e) =>{
        sizesBtns.forEach(el=>{ el.classList.remove('active-option'); });
        btn.classList.add('active-option')
    })
})

const addToCart = () => {
    let btns = document.getElementsByClassName('active-option')
    if (btns.length == 0) {
        let addToCartBtn = document.getElementById('add-to-cart-btn')
        addToCartBtn.innerText = 'Chooze the size!'
        setTimeout(() => {
            addToCartBtn.innerText = 'Add to cart'
        }, 3000)
    } else {
        const cartProductImg = document.getElementById('cart-product-img')
        let productImgCart = document.createElement('img')
        productImgCart.setAttribute('src', product.image)
        productImgCart.setAttribute('alt', 'product')
        if (cartProductImg.innerHTML === '') {
            cartProductImg.appendChild(productImgCart)

        }
        productName.innerText = product.name
        productSize.innerText = `Size: ${btns[0].innerHTML}`
        productTotal.innerText = `Total: ${product.price}`
        estimatedTotal.innerText = product.price
        document.getElementById("cart-number").classList.add('cart-number-active')
        openCart()
    }
}