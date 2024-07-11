document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.box');
    const sections = document.querySelectorAll('section');

    boxes.forEach((box, index) => {
        box.addEventListener('click', () => {
            window.scrollTo({
                top: sections[index].offsetTop,
                behavior: 'smooth'
            });
        });
    });

    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Form submitted!');
        form.reset();
    });
});
