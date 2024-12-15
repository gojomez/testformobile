function myfunction(){


    var x = 1024; //min value
    var y = 9999; // max value
    
    var deg = Math.floor(Math.random() * (x - y)) + y;
    
    document.getElementById('box').style.transform = "rotate("+deg+"deg)";
    
    var element = document.getElementById('mainbox');
    element.classList.remove('animate');
    setTimeout(function(){
        element.classList.add('animate');
    }, 5000); //5000 = 5 second
    }
    function myfunction() {
        var box = document.getElementById('box');
        // Generate a random spin degree between 5000 and 10000
        var randomDeg = Math.floor(5000 + Math.random() * 5000);
        box.style.transition = 'all ease 5s';
        box.style.transform = `rotate(${randomDeg}deg)`;
      }
// Hide the preloader and show the content once the page fully loads
window.onload = function() {
    var preloader = document.getElementById("preloader");
    var content = document.getElementById("content");

    setTimeout(function() {
        preloader.style.display = "none";  // Hide preloader
        content.style.display = "block";   // Show the main content
    }, 2500); // 2.5 seconds to match animation time
};
