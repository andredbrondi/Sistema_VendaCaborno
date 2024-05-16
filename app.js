document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.product');
    const cartItems = document.querySelector('.cart-items');
    const totalElement = document.querySelector('.total');
    let cart = [];

    products.forEach(product => {
        product.querySelector('.add-to-cart').addEventListener('click', () => {
            const productId = product.getAttribute('data-id');
            const productName = product.getAttribute('data-name');
            const productPrice = parseFloat(product.getAttribute('data-price'));

            const cartItem = cart.find(item => item.id === productId);
            if (cartItem) {
                cartItem.quantity++;
            } else {
                cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
            }

            updateCart();
        });
    });

    function updateCart() {
        cartItems.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            total += item.price * item.quantity;
            const cartItemElement = document.createElement('li');
            cartItemElement.textContent = `${item.name} - R$ ${item.price.toFixed(2)} x ${item.quantity}`;
            cartItems.appendChild(cartItemElement);
        });

        totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
    }
});
