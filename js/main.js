const prev = document.getElementById('btn-prev'),
	  next = document.getElementById('btn-next'),
	  slides = document.querySelectorAll('.slide');
	  // dots = document.querySelectorAll('.dot');
	  
let index = 0;

// console.log(slides);

const activeSlide = n => { //функц отвечающая за то, какой сейчас слайд активный
	for(slide of slides) {
		slide.classList.remove('active');
	}
	slides[n].classList.add('active');
}	

// const activeDot = n => {
// 	for (dot of dots) {
// 		dot.classList.remove('active');
// 	}
// 	dots[n].classList.add('active');
// }

const prepareCurrentSlide = ind => {
	activeSlide(ind);
	// activeDot(ind);
}

//ловим события кликов пользователя:вперед-назад

const nextSlide = () => {
	if( index == slides.length -1 ) {
		index = 0;
		prepareCurrentSlide(index);
	} else {
		index++;
		prepareCurrentSlide(index);
	}
}

const prevSlide = () => {
	clearInterval(interval);
	if( index == 0 ) {
		index = slides.length -1;
		prepareCurrentSlide(index);
	} else {
		index--;
		prepareCurrentSlide(index);
	}
}

// dots.forEach((item, indexDot) => { //item- это каждый dots, а indexDot- это его номер, который передается в index
// 	item.addEventListener('click', () => {
// 		index = indexDot;
// 		prepareCurrentSlide(index);
//		clearInterval(interval);
// 	}) 
// })


next.addEventListener('click', nextSlide); //по клику проверяем функцию nextSlide, но не вызываем её! (на каком слайде находимся)
prev.addEventListener('click', prevSlide);


const interval = setInterval(nextSlide, 2500);
//создав dots- кнопочки, чтобы остановить автоматичнескую прокрутку нажатием на dots
//мы прописываем в фукцию dots.forEach clearInterval(interval)
