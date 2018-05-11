//POPUPS JS

next1.addEventListener("click", function(){
	popup1.style.display = "none";
	popup2.style.display = "block";
});

next2.addEventListener("click", function(){
	popup2.style.display = "none";
	popup3.style.display = "block";
});

next3.addEventListener("click", function(){
	popup3.style.display = "none";
	popup4.style.display = "block";
	dispDiv.style.filter = "blur(0px)";
	controls.style.filter = "blur(0px)";
});

next4.addEventListener("click", function(){
	popup4.style.display = "none";
	dispDiv.style.filter = "blur(0px)";
	controls.style.filter = "blur(0px)";
});