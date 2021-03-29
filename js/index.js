function playSound() {
  var song1 = document.getElementById('sound');
  
  if (song1.paused) {
    // if song1 is paused
    song1.play();
  } else {
    song1.pause();
  }
}


// Xử lý slide

var slideIndex = 1; // đánh dấu thứ tự hiện tại đang hiển thị


showSlides(slideIndex);
// showSlides(1);



// khi nhấn nút điều hướng
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) { // hiển thị slide số n
  var slides = document.getElementsByClassName("slide-item"); // lấy danh sách các đơn vị slides

  if (n > slides.length) { // nếu n vượt quá số lượng slides
    slideIndex = 1; // cho vị trí về lại 1
  }

  if (n < 1) { // nếu n nhỏ hơn 1
    slideIndex = slides.length; // cho vị trí về cuối danh sách
  }

  // ẩn đi tất cả các slides
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}


// Xử lý quote
showQuotes(1);

function showQuotes(n) {
  var quotes = document.getElementsByClassName("quote-item");
  var dots = document.getElementsByClassName("quote-dot");
  for (var i = 0; i < quotes.length; i++) {
    quotes[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }
  quotes[n-1].style.display = "block";
  dots[n-1].className += " active";
}

