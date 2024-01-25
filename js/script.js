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

//função da order

window.addEventListener('resize', function() {
  var width = window.innerWidth;
  var item1 = document.getElementById('item1');

  if (width <= 600) {
      item1.style.order = '0';
  } else {
      item1.style.order = '2';
  }
});

function checkWindowSize() {
  var width = window.innerWidth;
  var item1 = document.getElementById('item1');

  if (width <= 600) {
      item1.style.order = '0';
  } else {
      item1.style.order = '2';
  }
}

window.addEventListener('resize', checkWindowSize);
window.addEventListener('load', checkWindowSize);

window.onload = function() {
  setTimeout(function() {
    var chatButton = document.querySelector('.Papercups-toggleButton.css-y1oyim'); // Substitua pelo seletor CSS correto
    if (chatButton) {
      chatButton.click();
    }
  }, 4000); // Atraso de 7 segundos
};

// abrir chat botão de ação

function openChat() {
  var chatButton = document.querySelector('.Papercups-toggleButton.css-y1oyim'); // Substitua pelo seletor CSS correto
  if (chatButton) {
    chatButton.click();
  }
}

//captcha

function generateCaptcha() {
  var num1 = Math.floor(Math.random() * 9) + 1;
  var num2 = Math.floor(Math.random() * 9) + 1;
  document.getElementById('captcha').textContent = num1 + " + " + num2 + " = ";
  return num1 + num2;
}

var correctCaptcha = generateCaptcha();

document.getElementById('contact').addEventListener('submit', function(e) {
  var userResponse = document.getElementById('captchaResponse').value;
  if (userResponse != correctCaptcha) {
    alert("Resposta do captcha incorreta!");
    e.preventDefault();
  }
});
