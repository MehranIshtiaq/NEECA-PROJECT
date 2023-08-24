function toggleMenu(){
    let menu = document.getElementById("toggle");
    if(menu.classList.contains("hidden")){
        menu.classList.add("block");
        menu.classList.remove("hidden");
    }
    else{
        menu.classList.add("hidden");
        menu.classList.remove("block");
    }
}

var header = document.getElementById("myMenu");
var btns = header.getElementsByClassName("item");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

var slideIndex = 1;

function showImage(n) { 
    'use strict';
    var slide = document.getElementsByClassName('slides'),
        dots = document.getElementsByClassName('dots'),
        i;
    if (n > slide.length) { 
        slideIndex = 1;
    }
    if (n < 1) { 
        slideIndex = slide.length;
    }
    for (i = 0; i < slide.length; i++) { 
        slide[i].style.display = 'none';
    }
    slide[slideIndex - 1].style.display = 'block';
    for (i = 0; i < dots.length; i++) { 
        dots[i].className = dots[i].className.replace(' active', '');
    }
    dots[slideIndex - 1].className += ' active';
}
showImage(slideIndex);
function plusIndex(n) { 
    'use strict';
    showImage(slideIndex += n);
}
function currentSlide(n) { 
    'use strict';
    showImage(slideIndex = n);
}



// modal popup login

function myPopUp(){
    let btn = document.getElementById("popup-modallogin");

    if(btn.classList.contains("hidden")){
        btn.classList.add("block");
        btn.classList.remove("hidden");
    }
    else{
        btn.classList.add("hidden");
        btn.classList.remove("block");
    }
}

// modal popup sign up
function myPopUpsignin(){
    let btn = document.getElementById("popup-modalsignin");
    let btn2 = document.getElementById("popup-modallogin");

    if(btn.classList.contains("hidden")){
        btn.classList.add("block");
        btn.classList.remove("hidden");
        btn2.classList.add("hidden");
        btn2.classList.remove("block");
    }
    else{
        btn.classList.add("hidden");
        btn.classList.remove("block");
    }
}


// login from signup form\

function backLogin(){
    let btn2 = document.getElementById("popup-modalsignin");
    let btn = document.getElementById("popup-modallogin");

    if(btn.classList.contains("hidden")){
        btn.classList.add("block");
        btn.classList.remove("hidden");
        btn2.classList.add("hidden");
        btn2.classList.remove("block");
    }
    else{
        btn.classList.add("hidden");
        btn.classList.remove("block");
    }
}


// popup cancel

function cancelPopupLogin(){
    let cancel = document.querySelector("#popup-modallogin");
    cancel.classList.add("hidden");
    cancel.classList.remove("block");
}

function cancelPopupSignin(){
    let cancel = document.querySelector("#popup-modalsignin");
    cancel.classList.add("hidden");
    cancel.classList.remove("block");
}