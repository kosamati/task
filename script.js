
var carousel = document.getElementById("carousel");
var carouselItems = carousel.getElementsByClassName("carousel__item");


carouselItems[0].style.display = "block";
carouselItems[1].style.display = "none";
carouselItems[2].style.display = "none";


var counter = 0;


function next() {
  carouselItems[counter].style.display = "none";

  counter++;
  if(counter >= carouselItems.length) {
    counter = 0;
  }
  carouselItems[counter].style.display = "block";
}


setInterval(next, 3000);
 