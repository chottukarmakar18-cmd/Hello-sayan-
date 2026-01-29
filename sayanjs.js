// script.js
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.product-card button');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Item added to a hypothetical cart!');
        });
    });
});

