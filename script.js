document.addEventListener('DOMContentLoaded', (event) => {
    // Optional: Add any custom JavaScript here

    // Example: Log a message to ensure the script is loaded
    console.log('script.js is loaded and running');

    // Example: Automatic slide change for newCarousel (custom timing)
    const newCarousel = document.querySelector('#newCarousel');
    if (newCarousel) {
        new bootstrap.Carousel(newCarousel, {
            interval: 3000, // 3 seconds
            ride: 'carousel'
        });
    }
});
