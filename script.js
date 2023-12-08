

document.addEventListener('DOMContentLoaded', function () {
    // JavaScript to change the color on hover
    const links = document.querySelectorAll('.contact-info a');

    links.forEach(link => {
        link.addEventListener('mouseenter', function () {
            this.style.color = '#FFD700'; // Change to the desired hover color
            this.style.borderBottom = '2px solid #FFD700'; // Add underline on hover
        });

        link.addEventListener('mouseleave', function () {
            this.style.color = 'white'; // Change to the default color
            this.style.borderBottom = 'none'; // Remove underline on mouse leave
        });
    });
});