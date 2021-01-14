
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


// Initialize and add the map
function initMap() {
    // The location of Uluru
    // 0.231701, -78.259124
    const uluru = { lat: 0.231701, lng:-78.259124};
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }


automaticAnimation()
initMap()