document.addEventListener('DOMContentLoaded', () => {
    const testimonials = document.querySelectorAll('.testimonial-container p');
    let index = 0;

    function showNextTestimonial() {
        testimonials[index].style.display = 'none';
        index = (index + 1) % testimonials.length;
        testimonials[index].style.display = 'block';
    }

    setInterval(showNextTestimonial, 3000);  // Change testimonial every 3 seconds
});
