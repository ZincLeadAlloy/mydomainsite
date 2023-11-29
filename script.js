// script.js

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function () {
        // Remove the 'active' class from all links
        document.querySelectorAll('nav a').forEach(link => {
            link.classList.remove('active');
        });

        // Add the 'active' class to the clicked link
        this.classList.add('active');
    });
});
