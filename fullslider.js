let fullslider = document.querySelector('#FullNewsSlider');

let slides = document.querySelectorAll('#FullNewsSlider .slide');

let curSlide = 0;

function incSlide() {
	if(curSlide == slides.length - 1){
		curSlide = 0
	}else {
		curSlide++;
	}
}
function dencSlide() {
	if(curSlide == 0){
		curSlide = slides.length - 1
	}else {
		curSlide--;	
	}
}

function openSlider(slide) {
	curSlide = slide;
	slides[curSlide].classList.add('first-open');
	document.body.classList.add('overflow-hidden');
	fullslider.classList.add('active');
}
function prev() {
	slides[curSlide].classList.add('to-right');
	clearClasses(slides[curSlide], 500); 
	dencSlide();
	slides[curSlide].classList.add('from-left');
}
function next() {
	slides[curSlide].classList.add('to-left');
	clearClasses(slides[curSlide], 500); 
	incSlide();
	slides[curSlide].classList.add('from-right');
}
function clearClasses(elem, time = 0) {
	setTimeout(() => {
		elem.classList.remove('to-right', 'from-right', 'to-left', 'from-left', 'first-open');
	}, time);
	
}
function closeSlider() {
	
}

document.querySelector('#FullNewsSlider .arrow.left').onclick = prev;
document.querySelector('#FullNewsSlider .arrow.right').onclick = next;
document.querySelector('#FullNewsSlider .shadow').onclick = () => {
	fullslider.classList.remove('active');
	document.body.classList.remove('overflow-hidden');
}
