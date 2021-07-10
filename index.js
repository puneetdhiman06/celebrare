const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button-r');
const prevButton = document.querySelector('.carousel-button-l');
const dotsNav = document.querySelector('.carousel-nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide,index)=>{
    slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePosition);

const moveToSlide = (track,currentSlide,targetSlide) =>{
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';   
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}
//
const flipFunc = (flip,removeFlip)=>{
    removeFlip.classList.remove('flip');
    setTimeout(() => {
        flip.classList.add('flip')
    }, 300);
    
}
//
const updateDots = (currentDot,targetDot) => {
currentDot.classList.remove('current-slide');
targetDot.classList.add('current-slide');
}

const hideShowarrows = (slides,prevButton,nextButton,targetIndex) => {
    
if(targetIndex===0)
{
    prevButton.classList.add('is-hidden');
    nextButton.classList.remove('is-hidden');

}

else if(targetIndex == slides.length - 1){
    prevButton.classList.remove('is-hidden');
    nextButton.classList.add('is-hidden');
}
else{
    prevButton.classList.remove('is-hidden');
    nextButton.classList.remove('is-hidden');
}
}

prevButton.addEventListener('click',e=>{
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector(".current-slide");
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide)
    moveToSlide(track,currentSlide,prevSlide);
    updateDots(currentDot,prevDot);
    hideShowarrows(slides,prevButton,nextButton,prevIndex);
    const flipPrev = prevSlide.querySelector('.e-card-cover');
    const removeFlip = currentSlide.querySelector('.e-card-cover');
    flipFunc(flipPrev,removeFlip);
})

nextButton.addEventListener('click',e=>{
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector(".current-slide");
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);
    moveToSlide(track,currentSlide,nextSlide);
    updateDots(currentDot,nextDot);
    hideShowarrows(slides,prevButton,nextButton,nextIndex);
    const flipNext = nextSlide.querySelector('.e-card-cover');
    const removeFlip = currentSlide.querySelector('.e-card-cover');
    flipFunc(flipNext,removeFlip);
})






dotsNav.addEventListener('click',e=>{
const targetDot = e.target.closest('button');

if(!targetDot) return;

const currentSlide=track.querySelector('.current-slide');
const currentDot = dotsNav.querySelector('.current-slide');
const targetIndex = dots.findIndex(dot => dot === targetDot);
const targetSlide = slides[targetIndex];
const flip1 = currentSlide.querySelector('.e-card-cover');
moveToSlide(track,currentSlide,targetSlide);
updateDots(currentDot,targetDot);
hideShowarrows(slides,prevButton,nextButton,targetIndex);
 flip1.classList.add('flip');
})