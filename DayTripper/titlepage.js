document.getElementById("daytripper").play();

document.getElementById("mountains").animate([
	//keyframes
	{ transform: 'translateY(0px)' },
	{ transform: 'translateX(-1090px)' }
], {
	//timing options
	duration: 60500,
	iterations: Infinity							 
});

document.getElementById("trees").animate([
	//keyframes
	{ transform: 'translateY(0px)' },
	{ transform: 'translateX(-1090px)' }
], {
	//timing options
	duration: 20000,
	iterations: Infinity							 
});

//document.getElementById("start").addEventListener("click", function{
//			document.getElementById("daytripper").pause();													
//});