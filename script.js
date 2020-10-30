
var pos = 0;

var totalSlides = document.querySelectorAll("#slider-wrap ul li").length

var sliderWidth = document.getElementById("slider-wrap").offsetWidth


window.addEventListener('DOMContentLoaded', (event) => {


	document.querySelector("#slider-wrap ul#slider").style.width  = totalSlides*sliderWidth + "px";

	document.getElementById("next").onclick = function(){
		slideRight();
	}

	document.getElementById("previous").onclick = function(){
		slideLeft();
	}
	

	const slider = document.querySelectorAll("#slider-wrap ul li div img");
	var sliderArr = Array.from(slider);
	
	sliderArr.forEach(element => {

		var li = document.createElement('li');
		const pagination = document.querySelector("#pagination-wrap ul").appendChild(li);


	});

	countSlides();

	pagination();

	document.querySelector("#slider-wrap").addEventListener('mouseover',function(){ 
		document.querySelector("#slider-wrap").classList.add('active'); 
		
	}, );

	document.querySelector("#slider-wrap").addEventListener('mouseout',function(){ 
		document.querySelector("#slider-wrap").classList.remove('active');
	}, );

	
});



function slideLeft(){
	pos--;
	if(pos==-1){ pos = totalSlides-1; }	
	document.querySelector('#slider-wrap ul#slider').style.left = `-${(sliderWidth*pos)}px`
	countSlides();
	pagination();
}

function slideRight(){
	pos++;
	if(pos==totalSlides){ pos = 0; }
	document.querySelector('#slider-wrap ul#slider').style.left = `-${(sliderWidth*pos)}px`
	countSlides();
	pagination();
}



function countSlides(){
	document.getElementById('counter').innerHTML = pos+1 + ' / ' + totalSlides
}

function pagination(){

	const pagination = document.querySelectorAll("#pagination-wrap ul li");
	var paginationArr = Array.from(pagination);

	for (let index = 0; index < paginationArr.length; index++) {
		const element = paginationArr[index];
		element.classList.remove("active")
		paginationArr[pos].classList.add("active")
		
	}

}