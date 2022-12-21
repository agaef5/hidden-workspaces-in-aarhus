let MenuLeftElement = document.getElementById("left_sidebar");

function openMenuLeft() {
	MenuLeftElement.style.transform = "translateX(0)";
}

function closeMenuLeft() {
	MenuLeftElement.style.transform = "translateX(-100em)";
}

let MenuRightElement = document.getElementById("right_sidebar");

function openMenuRight() {
  MenuRightElement.style.display = "block";
	MenuRightElement.style.transform = "translateX(0)";
}

function closeMenuRight() {
  MenuRightElement.style.display = "none";
	MenuRightElement.style.transform = "translateX(100em)";
}

// LINK RANDOMIZER
function random_link(){
  var myrandom=Math.round(Math.random()*2)
  var link1="LYNfabrikken.html"
  var link2="CafeMellemfolk.html"
  var link3="Domen.html"
  if (myrandom==0)
      window.location=link1
  else if (myrandom==1)
      window.location=link2
  else if (myrandom==2)
      window.location=link3
}
// LINK RANDOMIZER END


// GALLERY
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
//GALLERY END



//SCROLL TO THE TOP
let mybutton = document.getElementById("arrow_top");

function GoToTop() {
  document.body.scrollTop = 0; //Safari
  document.documentElement.scrollTop = 0; //Chrome, Firefox, IE and Opera
}
//SCROLL TO THE TOP END

function onLinkClick() {
  document.getElementsByTagName('h2')[3].scrollIntoView();
  // will scroll to 4th h3 element
}