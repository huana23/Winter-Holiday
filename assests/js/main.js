/*slider*/
var slideIndex = 0;
showSlides();

function showSlides() {
var i;
var slides = document.getElementsByClassName("mySlides");
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
slideIndex++;
if (slideIndex > slides.length) {slideIndex = 1}
slides[slideIndex-1].style.display = "flex";
setTimeout(showSlides, 5000); // Change image every 2 seconds
}


/*slider__review*/

const dot1 = document.querySelector('.js-dot-1')
const dot2 = document.querySelector('.js-dot-2')

dot2.addEventListener('click',function(){
dot2.classList.add('manual-btn--active')
dot1.classList.remove('manual-btn--active')
})

dot1.addEventListener('click',function(){
dot1.classList.add('manual-btn--active')
dot2.classList.remove('manual-btn--active')
})


/*member*/
$('.count').countUp({
    delay: 10,
    time: 1500
});

