let cart = [];

const cartButtons = document.querySelectorAll('.add-to-cart-btn');
const cartContainer = document.createElement('div');
const cartOverlay = document.createElement('div');
const cartList = document.createElement('ul');
const cartTotal = document.createElement('p');
const closeCartButton = document.createElement('button');

cartContainer.className = 'cart-container';
cartOverlay.className = 'cart-overlay';
closeCartButton.textContent = 'Close';

cartContainer.appendChild(closeCartButton);
cartContainer.appendChild(cartList);
cartContainer.appendChild(cartTotal);
document.body.appendChild(cartOverlay);
document.body.appendChild(cartContainer);

const products = [
    { id: 1, name: 'Product 1', price: 29.99 },
    { id: 2, name: 'Product 2', price: 39.99 },
    { id: 3, name: 'Product 3', price: 49.99 },
    { id: 4, name: 'Product 4', price: 59.99 }
];

cartButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const product = products[index];
        const existingProduct = cart.find(item => item.id === product.id);

        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        updateCart();
    });
});


function updateCart() {
    cartList.innerHTML = '';

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity}`;
        cartList.appendChild(listItem);
    });

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

document.querySelector('.cart-btn').addEventListener('click', () => {
    cartContainer.classList.add('open');
    cartOverlay.classList.add('open');
});

closeCartButton.addEventListener('click', () => {
    cartContainer.classList.remove('open');
    cartOverlay.classList.remove('open');
});
