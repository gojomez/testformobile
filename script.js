// Hide the preloader and show the content once the page fully loads
window.onload = function() {
    var preloader = document.getElementById("preloader");
    var content = document.getElementById("content");

    setTimeout(function() {
        preloader.style.display = "none";  // Hide preloader
        content.style.display = "block";   // Show the main content
    }, 3000); // 2.5 seconds to match animation time
};
// Set skill levels and handle hover behavior
document.getElementById('html-bar').addEventListener('mouseover', () => {
    document.getElementById('html-level').style.width = '70%'; // HTML skill level
    document.getElementById('html-percentage').textContent = '70%'; // Show percentage
});

document.getElementById('html-bar').addEventListener('mouseleave', () => {
    document.getElementById('html-level').style.width = '0%'; // Reset HTML level
    document.getElementById('html-percentage').textContent = '0%'; // Reset percentage
});

document.getElementById('css-bar').addEventListener('mouseover', () => {
    document.getElementById('css-level').style.width = '50%'; // CSS skill level
    document.getElementById('css-percentage').textContent = '50%'; // Show percentage
});

document.getElementById('css-bar').addEventListener('mouseleave', () => {
    document.getElementById('css-level').style.width = '0%'; // Reset CSS level
    document.getElementById('css-percentage').textContent = '0%'; // Reset percentage
});

document.getElementById('js-bar').addEventListener('mouseover', () => {
    document.getElementById('js-level').style.width = '30%'; // JavaScript skill level
    document.getElementById('js-percentage').textContent = '30%'; // Show percentage
});

document.getElementById('js-bar').addEventListener('mouseleave', () => {
    document.getElementById('js-level').style.width = '0%'; // Reset JavaScript level
    document.getElementById('js-percentage').textContent = '0%'; // Reset percentage
});
// Mobile Menu Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create a menu toggle button
    const menuToggle = document.createElement('button');
    menuToggle.innerHTML = '☰';
    menuToggle.classList.add('menu-toggle');
    
    // Style the menu toggle button
    menuToggle.style.cssText = `
        position: fixed;
        top: 10px;
        left: 10px;
        z-index: 1000;
        background-color: #0b1a3b;
        color: white;
        border: none;
        padding: 10px 15px;
        font-size: 24px;
        cursor: pointer;
        display: none; // Hidden by default
    `;

    // Add the toggle button to the body
    document.body.appendChild(menuToggle);

    const sidebar = document.querySelector('.sidebar');
    
    // Function to toggle sidebar
    function toggleSidebar() {
        sidebar.classList.toggle('sidebar-open');
    }

    // Add event listener to menu toggle
    menuToggle.addEventListener('click', toggleSidebar);

    // Media query to show/hide menu toggle
    function handleResponsiveMenu() {
        if (window.innerWidth <= 700) {
            menuToggle.style.display = 'block';
            sidebar.style.transform = 'translateX(-100%)';
            sidebar.style.transition = 'transform 0.3s ease';
        } else {
            menuToggle.style.display = 'none';
            sidebar.style.transform = 'translateX(0)';
        }
    }

    // Add sidebar-open class styles
    const style = document.createElement('style');
    style.textContent = `
        @media screen and (max-width: 700px) {
            .sidebar-open {
                transform: translateX(0) !important;
            }
        }
    `;
    document.head.appendChild(style);

    // Initial check and add resize listener
    handleResponsiveMenu();
    window.addEventListener('resize', handleResponsiveMenu);
});