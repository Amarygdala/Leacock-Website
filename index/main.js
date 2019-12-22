const parallax = document.getElementById("parallax-img");

window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset*0.6+"px";
})