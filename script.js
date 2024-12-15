window.onload = function() {
    var preloader = document.getElementById("preloader");
    var content = document.getElementById("content");

    setTimeout(function() {
        preloader.style.display = "none";  
        content.style.display = "block";   
    }, 3000); 
};

document.getElementById('html-bar').addEventListener('mouseover', () => {
    document.getElementById('html-level').style.width = '70%'; 
    document.getElementById('html-percentage').textContent = '70%'; 
});

document.getElementById('html-bar').addEventListener('mouseleave', () => {
    document.getElementById('html-level').style.width = '0%'; 
    document.getElementById('html-percentage').textContent = '0%'; 
});

document.getElementById('css-bar').addEventListener('mouseover', () => {
    document.getElementById('css-level').style.width = '50%'; 
    document.getElementById('css-percentage').textContent = '50%'; 
});

document.getElementById('css-bar').addEventListener('mouseleave', () => {
    document.getElementById('css-level').style.width = '0%'; 
    document.getElementById('css-percentage').textContent = '0%'; 
});

document.getElementById('js-bar').addEventListener('mouseover', () => {
    document.getElementById('js-level').style.width = '30%'; 
    document.getElementById('js-percentage').textContent = '30%'; 
});

document.getElementById('js-bar').addEventListener('mouseleave', () => {
    document.getElementById('js-level').style.width = '0%'; 
    document.getElementById('js-percentage').textContent = '0%'; 
});

document.addEventListener('DOMContentLoaded', function() {
    
    const menuToggle = document.createElement('button');
    menuToggle.innerHTML = '☰';
    menuToggle.classList.add('menu-toggle');
    
   
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

   
    document.body.appendChild(menuToggle);

    const sidebar = document.querySelector('.sidebar');
    
    
    function toggleSidebar() {
        sidebar.classList.toggle('sidebar-open');
    }

    
    menuToggle.addEventListener('click', toggleSidebar);

   
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

  
    const style = document.createElement('style');
    style.textContent = `
        @media screen and (max-width: 700px) {
            .sidebar-open {
                transform: translateX(0) !important;
            }
        }
    `;
    document.head.appendChild(style);

    
    handleResponsiveMenu();
    window.addEventListener('resize', handleResponsiveMenu);
});
