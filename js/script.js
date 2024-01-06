$(document).ready(function () {
    $("body").scroll(function() {
      if($(this).scrollTop() == 0){
        $(".back-to-top").css("display", "block");
      }
    });
    $(".back-to-top").click(function() {
      $("html, body").animate({scrollTop: 0}, 800);
    });
  });

// hamburguer

$(".hamburger").click(function() {
  $(this).toggleClass("aberto");
  $(".menu ul").toggle();
});

// slider andar

var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 3000); // Muda a imagem a cada 3 segundos
}
