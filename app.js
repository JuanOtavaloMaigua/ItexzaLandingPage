
var slideIndex = 0
var slides = document.getElementsByClassName("mySlide")
var dots = document.getElementsByClassName("do_list")
console.log(dots)

console.log(slides)
function automaticAnimation(){
    for(i=0; i< slides.length; i++){
        slides[i].style.display = "none"
    }
    slides[slideIndex].style.display = "block"
    slideIndex++
    if(slideIndex >= (slides.length)){ slideIndex = 0}

    setTimeout(automaticAnimation, 3000)    
}

function plusSlide(jump){

}

automaticAnimation()
