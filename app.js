
var slideIndex = 0
var slides = document.getElementsByClassName("mySlide")
var dots = document.getElementsByClassName("dot")
var slidesSomos = document.getElementsByClassName("message_company_messages_item")

console.log("slideSomos: ",slidesSomos)
console.log(slidesSomos)

function automaticAnimation(){
    for(i=0; i< slides.length; i++){
        slides[i].style.display = "none"
        dots[i].style.backgroundColor = "#1458AA"
        slidesSomos[i].style.display = "none"
    }
    slides[slideIndex].style.display = "block"
    dots[slideIndex].style.backgroundColor = "#F50006"
    slidesSomos[slideIndex].style.display = "block"
    slideIndex++
    if(slideIndex >= (slides.length)){ slideIndex = 0}

    setTimeout(automaticAnimation, 3000)    
}




automaticAnimation()
