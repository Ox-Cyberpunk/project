document.addEventListener('DOMContentLoaded', function() {
    const foodItems = document.querySelectorAll('.food-item');
    const orderFormContainer = document.getElementById('orderFormContainer');
    const orderForm = document.getElementById('orderForm');
    const foodItemInput = document.getElementById('foodItem');
    const priceInput = document.getElementById('price');
    const ingredientsInput = document.getElementById('ingredients');
    const cancelButton = document.getElementById('cancelButton');

    // Show order form with selected food item details
    foodItems.forEach(item => {
        item.addEventListener('click', function() {
            const food = this.dataset.food;
            const price = this.dataset.price;
            const ingredients = this.dataset.ingredients;

            foodItemInput.value = food;
            priceInput.value = price;
            ingredientsInput.value = ingredients;

            orderFormContainer.classList.remove('hidden');
        });
    });

    // Hide order form
    cancelButton.addEventListener('click', function() {
        orderFormContainer.classList.add('hidden');
        orderForm.reset();
    });

    // Handle form submission
    orderForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(orderForm);
        const orderDetails = {
            foodItem: formData.get('foodItem'),
            price: formData.get('price'),
            ingredients: formData.get('ingredients'),
            customerName: formData.get('customerName'),
            customerEmail: formData.get('customerEmail'),
            customerPhone: formData.get('customerPhone')
        };

        console.log('Order Submitted:', orderDetails);

        // Clear form and hide the order form container
        orderForm.reset();
        orderFormContainer.classList.add('hidden');
    });

    // Smooth scroll functionality for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Profile picture click scrolls to about section
    const profileImage = document.querySelector('.profile a');
    profileImage.addEventListener('click', function(event) {
        event.preventDefault();
        const targetElement = document.getElementById('about');
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});