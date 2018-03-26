var colorinput = document.getElementById("colorinput"),
    background = document.getElementById("preview"),
    numberbutton = document.getElementById("number"),
    slider1 = document.getElementById("slide1"),
    slider2 = document.getElementById("slide2"),
    slider3 = document.getElementById("slide3"),
    slider4 = document.getElementById("slide4"),
    rangebutton = document.getElementById("range"),
    hair = document.getElementById("hair"),
    eyes = document.getElementById("eyes"),
    nose = document.getElementById("nose"),
    mouth = document.getElementById("mouth"),
    hairchange = 1,
    plus = document.getElementById("plus"),
    display = document.getElementById("display"),
    random = document.getElementById("random"),
    autocreate = document.getElementById("startauto"),
		stopcreate = document.getElementById("stopauto");

function randomFace(){
   var rando = Math.round(Math.random()*2)+1;
    var randohairsize = Math.round(Math.random()*70);
    var randoeyesize = Math.round(Math.random()*40);
    var randonosesize = Math.round(Math.random()*30);
    var randomouthsize = Math.round(Math.random()*35);
	  var r = Math.round(Math.random()*255);
	 var g = Math.round(Math.random()*255);
	 var b = Math.round(Math.random()*255);
    hair.src = "img/hair"+rando+".png";
    eyes.src = "img/eyes"+rando+".png";
    nose.src = "img/nose"+rando+".png";
    mouth.src = "img/mouth"+rando+".png";
	
	preview.style.backgroundColor = "rgb("+r+","+g+","+b+")";
    
    hair.style.width = randohairsize+"%";
    slider1.value = randohairsize;
    
    eyes.style.width = randoeyesize+"%";
    slider2.value = randoeyesize;
    
    nose.style.width = randonosesize+"%";
    slider3.value = randonosesize;
    
    mouth.style.width = randomouthsize+"%";
    slider4.value = randomouthsize; 
}

function createFace(){

   var newDiv = document.createElement("div");
    display.appendChild(newDiv);
    newDiv.className = "newDiv";
	  newDiv.innerHTML = preview.innerHTML;
	  newDiv.style.backgroundColor = preview.style.backgroundColor;

}

colorinput.addEventListener("change", function(){
    preview.style.backgroundColor = colorinput.value;
})

function changeType(type){
	  slider1.type = type;
    slider2.type = type;
    slider3.type = type;
    slider4.type = type;
}
numberbutton.addEventListener("click", function(){
   changeType("number");
})

rangebutton.addEventListener("click", function(){
    changeType("range");
})

slider1.addEventListener("change", function(){
    hair.style.width = slider1.value+"%";
})

slider2.addEventListener("change", function(){
    eyes.style.width = slider2.value+"%";
})

slider3.addEventListener("change", function(){
    nose.style.width = slider3.value+"%";
})

slider4.addEventListener("change", function(){
    mouth.style.width = slider4.value+"%";
})

hair.addEventListener("click", function(){
    hairchange += 1;
    hair.src = "img/hair"+hairchange+".png";
    if(hairchange >=3){
        hairchange = 0;
    }
})

eyes.addEventListener("click", function(){
    hairchange += 1;
    eyes.src = "img/eyes"+hairchange+".png";
    if(hairchange >=3){
        hairchange = 0;
    }
})

nose.addEventListener("click", function(){
    hairchange += 1;
    nose.src = "img/nose"+hairchange+".png";
    if(hairchange >=3){
        hairchange = 0;
    }
})

mouth.addEventListener("click", function(){
    hairchange += 1;
    mouth.src = "img/mouth"+hairchange+".png";
    if(hairchange >=3){
        hairchange = 0;
    }
})

plus.addEventListener("click", function(){
    createFace();
})

random.addEventListener("click", function(){
  randomFace();
})

var timer = null;
autocreate.addEventListener("click", function(){
   timer =  setInterval(function(){
		    randomFace();
        createFace();
    },500);
});

stopcreate.addEventListener("click", function(){
   clearInterval(timer);
});


