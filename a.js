document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.getElementById("sidebar");
    const sidebarButton = document.getElementById("sidebar-img");
    const closeButton = document.querySelector(".close-btn");

    sidebarButton.addEventListener("click", function() {
        if (sidebar.style.transform === "translateX(0%)") {
            sidebar.style.transform = "translateX(100%)"; // hide sidebar
        } else {
            sidebar.style.transform = "translateX(0%)"; // show sidebar
        }
    });

    closeButton.addEventListener("click", function(event) {
        event.stopPropagation();
        sidebar.style.transform = "translateX(100%)";
    });

    window.addEventListener("click", function(event) {
        if (event.target !== sidebar && event.target !== sidebarButton) {
            sidebar.style.transform = "translateX(100%)";
        }
    });

    sidebar.addEventListener("click", function(event) {
        event.stopPropagation();
    });
});
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('cta-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        var email = event.target.elements[0].value; // Get the email input value

        // You can now use the email value, for example, to send a request to your server
        console.log('Form submitted with email:', email);

        // Show the pop-up message
        alert('Thank you for your submission. We will be in touch soon!');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        var email = event.target.elements[0].value; // Get the email input value

        // You can now use the email value, for example, to send a request to your server
        console.log('Form submitted with email:', email);

        // Show the pop-up message
        alert('Thank you for your submission. We will be in touch soon!');
    });
});

