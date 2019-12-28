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

//img banner
var bannerStatus = 1;
var transitionTime = 4000;
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");

var startBannerLoop = setInterval(function(){
    bannerLoop();
},transitionTime);

document.getElementById("img-holder").onmouseenter = function(){
    clearInterval(startBannerLoop);
}
document.getElementById("img-holder").onmouseleave= function(){
    startBannerLoop = setInterval(function(){
        bannerLoop();
    },transitionTime);
}

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
    bannerBack();
}
function bannerLoop(){
    if(bannerStatus===1){
        img2.style.opacity = "0"
        setTimeout(function(){
            img1.style.right = "0px";
            img1.style.zIndex = "100";
            img2.style.right = "-100%";
            img2.style.zIndex = "200";
            img3.style.right = "100%";
            img3.style.zIndex = "300";
        }, 500);
        setTimeout(function(){
            img2.style.opacity = "1";
        }, 1000);
        bannerStatus = 2;
    }else if(bannerStatus===2){
        img3.style.opacity = "0"
        setTimeout(function(){
            img2.style.right = "0px";
            img2.style.zIndex = "100";
            img3.style.right = "-100%";
            img3.style.zIndex = "200";
            img1.style.right = "100%";
            img1.style.zIndex = "300";
        }, 500);
        setTimeout(function(){
            img3.style.opacity = "1";
        }, 1000);
        bannerStatus = 3;
    }else if(bannerStatus===3){
        img1.style.opacity = "0"
        setTimeout(function(){
            img3.style.right = "0px";
            img3.style.zIndex = "100";
            img1.style.right = "-100%";
            img1.style.zIndex = "200";
            img2.style.right = "100%";
            img2.style.zIndex = "300";
        }, 500);
        setTimeout(function(){
            img1.style.opacity = "1";
        }, 1000);
        bannerStatus = 1;
        }
}
function bannerBack(){
    if(bannerStatus===1){
        img2.style.opacity = "0"
        setTimeout(function(){
            img3.style.right = "0px";
            img3.style.zIndex = "100";
            img2.style.right = "100%";
            img2.style.zIndex = "200";
            img1.style.right = "-100%";
            img1.style.zIndex = "300";
        }, 500);
        setTimeout(function(){
            img2.style.opacity = "1";
        }, 1000);
        bannerStatus = 2;
    }else if(bannerStatus===2){
        img3.style.opacity = "0"
        setTimeout(function(){
            img1.style.right = "0px";
            img1.style.zIndex = "100";
            img3.style.right = "100%";
            img3.style.zIndex = "200";
            img2.style.right = "-100%";
            img2.style.zIndex = "300";
        }, 500);
        setTimeout(function(){
            img3.style.opacity = "1";
        }, 1000);
        bannerStatus = 3;
    }else if(bannerStatus===3){
        img1.style.opacity = "0"
        setTimeout(function(){
            img2.style.right = "0px";
            img2.style.zIndex = "100";
            img1.style.right = "100%";
            img1.style.zIndex = "200";
            img3.style.right = "-100%";
            img3.style.zIndex = "300";
        }, 500);
        setTimeout(function(){
            img1.style.opacity = "1";
        }, 1000);
        bannerStatus = 1;
        }
}