function createCarousel(config){
    const track = document.querySelector(`#${config.trackId}`);
    const Slides = Array.from(track.children);
    const nextButton = document.querySelector(`#${config.buttonRightId}`);
    const prevButton = document.querySelector(`#${config.buttonLeftId}`);
    const dotsNav = document.querySelector(`#${config.navId}`);
    const dots = Array.from(dotsNav.children);
    const screenWidth = (Slides[0].getBoundingClientRect().width);
    const setSlidePosition = (slide,index)=>{
        if (screen && screen.width > 800) {
            let slideWidth=0;
                if(config.type==='carousel'){
                    slideWidth = screenWidth/2.2;
                                            }
                else if(config.type==="e-card"){
                    slideWidth = screenWidth/3.3;
                                            }
                
            slide.style.left = slideWidth * index + 'px';
        }
        else if(screen && screen.width < 800) {
            let slideWidth = screenWidth;
            slide.style.left = slideWidth * index + 'px';
        }
    }
    
    Slides.forEach(setSlidePosition);
    
    const moveToSlide = (track,currentSlide,targetSlide) =>{
        track.style.transform = 'translateX(-' + targetSlide.style.left + ')';   
        currentSlide.classList.remove(`${config.type}-current-slide`);
        targetSlide.classList.add(`${config.type}-current-slide`);
    }
    const flipFunc = (flip)=>{
       if(config.type==='carousel'){
           setTimeout(() => {
               flip.classList.add('flip')
           }, 300);
       }
       else return;
    }
    const updateDots = (currentDot,targetDot) => {
    currentDot.classList.remove(`${config.type}-current-slide`);
    targetDot.classList.add(`${config.type}-current-slide`);
    }
    
    const hideShowarrows = (Slides,prevButton,nextButton,targetIndex) => {
        
    if(targetIndex===0)
    {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    
    }
    
    else if(targetIndex == Slides.length - 1){
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    }
    else{
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
    }
    
    prevButton.addEventListener('click',e=>{
        const currentSlide = track.querySelector(`.${config.type}-current-slide`);
        const prevSlide = currentSlide.previousElementSibling;
        const currentDot = dotsNav.querySelector(`.${config.type}-current-slide`);
        const prevDot = currentDot.previousElementSibling;
        const prevIndex = Slides.findIndex(slide => slide === prevSlide);
        moveToSlide(track,currentSlide,prevSlide);
        updateDots(currentDot,prevDot);
        hideShowarrows(Slides,prevButton,nextButton,prevIndex);

        if(config.type==='carousel'){
            const flipPrev = prevSlide.querySelector('.e-card-cover');
            flipFunc(flipPrev);
        }else return;

    })
    
    nextButton.addEventListener('click',e=>{
        const currentSlide = track.querySelector(`.${config.type}-current-slide`);
        const nextSlide = currentSlide.nextElementSibling;
        const currentDot = dotsNav.querySelector(`.${config.type}-current-slide`);
        const nextDot = currentDot.nextElementSibling;
        const nextIndex = Slides.findIndex(slide => slide === nextSlide);
        moveToSlide(track,currentSlide,nextSlide);
        updateDots(currentDot,nextDot);
        hideShowarrows(Slides,prevButton,nextButton,nextIndex);
        if(config.type==='carousel'){
            const flipNext = nextSlide.querySelector('.e-card-cover');
            flipFunc(flipNext);
        }else return;
    })
    
    dotsNav.addEventListener('click',e=>{
    const targetDot = e.target.closest('button');
    
    if(!targetDot) return;
    
    const currentSlide = track.querySelector(`.${config.type}-current-slide`);
    const currentDot = dotsNav.querySelector(`.${config.type}-current-slide`);
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = Slides[targetIndex];
    moveToSlide(track,currentSlide,targetSlide);
    updateDots(currentDot,targetDot);
    hideShowarrows(Slides,prevButton,nextButton,targetIndex);
    if(config.type==='carousel'){
        const flip = targetSlide.querySelector('.e-card-cover');
        flipFunc(flip)
    }
    })
    
}

createCarousel( {trackId:'track-1',
                buttonRightId:'button-right-1',
                buttonLeftId:'button-left-1',
                navId:'nav-1',
                type:'carousel'});
createCarousel( {trackId:'track-2',
                buttonRightId:'button-right-2',
                buttonLeftId:'button-left-2',
                navId:'nav-2',
                type:'carousel'});
createCarousel( {trackId:'track-3',
                buttonRightId:'button-right-3',
                buttonLeftId:'button-left-3',
                navId:'nav-3',
                type:'carousel'});
createCarousel( {trackId:'track-4',
                buttonRightId:'button-right-4',
                buttonLeftId:'button-left-4',
                navId:'nav-4',
                type:'carousel'});
                // e-card//
createCarousel( {trackId:'e-card-track-1',
                buttonRightId:'e-card-button-right-1',
                buttonLeftId:'e-card-button-left-1',
                navId:'e-card-nav-1',
                type: 'e-card'});
createCarousel( {trackId:'e-card-track-2',
                buttonRightId:'e-card-button-right-2',
                buttonLeftId:'e-card-button-left-2',
                navId:'e-card-nav-2',
                type: 'e-card'});
createCarousel( {trackId:'e-card-track-3',
                buttonRightId:'e-card-button-right-3',
                buttonLeftId:'e-card-button-left-3',
                navId:'e-card-nav-3',
                type: 'e-card'});
createCarousel( {trackId:'e-card-track-4',
                buttonRightId:'e-card-button-right-4',
                buttonLeftId:'e-card-button-left-4',
                navId:'e-card-nav-4',
                type: 'e-card'});

//scroll button//
//Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
window.dispatchEvent(new Event('resize'));
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


//more quotes
const expand=()=>{
    const inVisible = document.querySelectorAll('.quote-1');
    const heightIncrease = document.querySelectorAll('.container-5');
    const selectBtn4 = document.querySelectorAll('.btn-4');
    for(let j =0;j<heightIncrease.length;j++){
        heightIncrease[j].style.height="600vh";
        selectBtn4[j].style.display="none"}
    for(let i =0;i<inVisible.length-1;i++){inVisible[i].style.display="block";}
         }

