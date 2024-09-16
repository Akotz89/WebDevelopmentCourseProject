/* JavaScript File: main.js */

/* 1. Subscribe to Newsletter */
function subscribeNewsletter() {
    // Make sure to target the correct newsletter email input in the footer
    const emailInput = document.getElementById('footer-newsletter-email').value;
    if (emailInput) {
        alert(`Thank you for subscribing with ${emailInput}!`);
        document.getElementById('footer-newsletter-email').value = ''; // Clear the input
    } else {
        alert('Please enter a valid email address.');
    }
}

/* 2. Add-to-Cart Feature */
function addToCart(bookTitle) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(bookTitle);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${bookTitle} has been added to your cart!`);
}

/* 3. View Cart Feature */
function viewCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert('Your cart is empty.');
    } else {
        alert(`Your cart contains: \n${cart.join('\n')}`);
    }
}

function clearCart() {
    localStorage.removeItem('cart');  // Clear the 'cart' from localStorage
    alert('Your cart has been cleared!');
}

function processOrder() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert('Your cart is empty. Please add items to your cart before processing your order.');
    } else {
        alert('Thank you for your order! Your items will be processed shortly.');
        localStorage.removeItem('cart');  // Clear the cart after processing the order
    }
}

/* 4. Contact Us Form Validation */
function validateContactForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill out all required fields.');
        return false;
    }
    alert(`Thank you, ${name}, for your message! We will get back to you soon.`);
    document.querySelector('form').reset(); // Reset the form after submission
}

/* 5. Save and Restore Form Data using Session Storage */
function saveContactFormData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    sessionStorage.setItem('contactForm', JSON.stringify({ name, email, phone, message }));
}

function restoreContactFormData() {
    const formData = JSON.parse(sessionStorage.getItem('contactForm'));
    if (formData) {
        document.getElementById('name').value = formData.name;
        document.getElementById('email').value = formData.email;
        document.getElementById('phone').value = formData.phone;
        document.getElementById('message').value = formData.message;
    }
}

/* Initialize functionality when the page loads */
window.onload = function() {
    // Restore contact form data on pages with a form
    if (document.querySelector('form')) {
        restoreContactFormData();
    }

    // Handle footer newsletter subscription
    const subscribeButton = document.getElementById('footer-subscribe-btn');
    if (subscribeButton) {
        subscribeButton.addEventListener('click', subscribeNewsletter);
    }

    // Handle contact form validation and saving form data
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', validateContactForm);
        form.addEventListener('input', saveContactFormData); // Save form data on every input
    }
};
