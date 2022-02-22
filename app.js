
   
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#4eaaaa';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});


window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista'), {
		slidesToShow: 1,
		slidesToScroll: 1.50,
		rewind: true,
		draggable: true,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},
		responsive: [
			{
				// screens greater than >= 775px
				breakpoint: 450,
				settings: {
					// Set to `auto` and provide item width to adjust to viewport
					slidesToShow: 2,
					slidesToScroll: 2,
					rewind: true,
					draggable:true,
					itemWidth: 150,
					duration: 0.25
				}
			},{
				// screens greater than >= 1024px
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					rewind: true,
					slidesToScroll: 3,
					itemWidth: 150,
					duration: 0.25
				}
			}
		]
	
	});
})


let slider= tns({
	container: ".my-slider",
	"slideBy": 1,
	"speed" : 50,
	"nav": false,
	autoplay: true,
	touch: true,
	autoplayTimeout: 2000,
	controls: false,
	autoplayButtonOutput: false,
	responsive:{
		1200 : {
			items: 4,
			gutter: 20
		},
		1024: {
			items: 3,
			gutter: 20
		}, 
		768 : {
			items: 2,
			gutter:20
		},
		480: {
			items: 1,
			"slideBy": 1,
			"speed" : 200,
		}
	}

})