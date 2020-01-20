//webpage load
window.onload = function(){
    this.bannerLoop();
}
//parallax
const parallax = document.getElementById("parallax-img");

window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset*0.6+"px";
})
//banner
var bannerStatus = 1;
var transitionTime = 4000;
var startBannerLoop = setInterval(function(){
    bannerLoop();
},transitionTime);

document.getElementById("imgnext").onclick = function(){
    bannerLoop();
}

document.getElementById("imgprev").onclick = function(){
    if(bannerStatus===1){
        bannerStatus=2;
    }else if(bannerStatus===2){
        bannerStatus=3;
    }else if(bannerStatus===3){
        bannerStatus=1;
    }
    bannerLoop();
}

document.getElementById("img-holder").onmouseenter = function(){
    clearInterval(startBannerLoop);
}

document.getElementById("img-holder").onmouseleave= function(){
    startBannerLoop = setInterval(function(){
        bannerLoop();
    },transitionTime);
}

function bannerLoop(){
    if(bannerStatus===1){
        setTimeout(function(){
        img1.style.opacity = "1";
        img2.style.opacity = "0";
        img3.style.opacity = "0";
        }, 500);
        bannerStatus = 2;
    }else if(bannerStatus===2){
        setTimeout(function(){
            img1.style.opacity = "0";
            img2.style.opacity = "1";
            img3.style.opacity = "0";
            }, 500);
        bannerStatus = 3;
    }else if(bannerStatus===3){
        setTimeout(function(){
            img1.style.opacity = "0";
            img2.style.opacity = "0";
            img3.style.opacity = "1";
            }, 500);
        bannerStatus = 1;
        }
}