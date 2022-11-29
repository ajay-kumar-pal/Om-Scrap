let slideIndex = 0;
showSlides();
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("imageContainer");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}





// function changebodercolor() {
//   var chng = document.getElementById("userText").style.borderColor="red";
//   // chng.style.borderColor = "rgb(190, 241, 255)";
//   // chng.style.borderColor = "red";
// // }