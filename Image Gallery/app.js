var images = document.querySelectorAll('.image img');
var gallery = document.querySelector('.gallery');
var galleryImage = gallery.querySelector('.gallery__img img');
var closeBtn = document.querySelector('.close')
var nextBtn = document.querySelector('.next')
var prevBtn = document.querySelector('.prev')

var currentIndex = 0;

function showGallery() {
  currentIndex == images.length - 1 ? nextBtn.classList.add('hide') : nextBtn.classList.remove('hide')
  
  currentIndex == 0 ? prevBtn.classList.add('hide') : prevBtn.classList.remove('hide')

  galleryImage.src = images[currentIndex].src
}

images.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    gallery.classList.add('show')
    showGallery()
  })
})

closeBtn.addEventListener('click', () => {
  gallery.classList.remove('show')
})

nextBtn.addEventListener('click', () => {
  currentIndex++;
  showGallery()
})

prevBtn.addEventListener('click', () => {
  currentIndex--;
  showGallery()
})

document.addEventListener('keydown', (e) => {
  if(e.keyCode == 27) {
    gallery.classList.remove('show')
  }
})