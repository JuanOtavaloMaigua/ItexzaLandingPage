
var slideIndex = 0
var slides = document.getElementsByClassName("mySlide")
var dots = document.getElementsByClassName("dot")
var globalJump = 0

function plusSlide(jump){
    globalJump = jump
}

function automaticAnimation(){
    for(i=0; i< slides.length; i++){
        slides[i].style.display = "none"
        dots[i].style.backgroundColor = "#FF0000"
    }
    slides[slideIndex].style.display = "block"
    dots[slideIndex].style.backgroundColor = "#0000FF"
    slideIndex++
    if(slideIndex >= (slides.length)){ slideIndex = 0}

    setTimeout(automaticAnimation, 5000)    
}

automaticAnimation()