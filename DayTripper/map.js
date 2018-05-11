
var zoomslide = document.getElementById("displayslider"),
		dispDiv = document.getElementById("display"),
		map = document.getElementById("vancity"),
		left = document.getElementById("left"),
		right = document.getElementById("right"),
		up = document.getElementById("up"),
		down = document.getElementById("down"),
		bgPosH = 0,
		bgPosV = 0,
		zoomNum = 100,
		activenum = document.getElementById("activenum"),
		activityslide = document.getElementById("activeslider"),
    boxA = document.getElementById("boxA"),
    boxB = document.getElementById("boxB"),
		seawall = document.getElementById("seawall"),
		aquarium = document.getElementById("aquarium"),
		science = document.getElementById("scienceworld"),
		capilano = document.getElementById("bridge"),
		grouse = document.getElementById("grouse"),
		rio = document.getElementById("rio"),
		stormcrow = document.getElementById("stormcrow"),
		theatresports = document.getElementById("improv"),
		wreck = document.getElementById("wreck"), 
		canucks = document.getElementById("canucks"),
		kids = document.getElementById("kidswitch"),
		hoursnum = document.getElementById("hours"),
		itindisp = document.getElementById("itindisp"),
		popup1 = document.getElementById("popup1"),
		popup2 = document.getElementById("popup2"),
		popup3 = document.getElementById("popup3"),
		popup4 = document.getElementById("popup4"),
		next1 = document.getElementById("next1"),
		next2 = document.getElementById("next2"),
		next3 = document.getElementById("next3"),
		controls = document.getElementById("controls");
		


//MOVING WITH ARROW KEYS
function moveMap(keyCode){
	if(keyCode == 40){
		bgPosV -= 20;
		if(bgPosV <= -80){
		bgPosV = -80;
	  }
		map.style.top = bgPosV+"px";
		down.style.backgroundColor = "#9ab9ce";
	} else if (keyCode == 38){
		bgPosV += 20;
		if(bgPosV >= 0){
		bgPosV = 0;
	  }
		map.style.top = bgPosV+"px";
		up.style.backgroundColor = "#9ab9ce";
	} else if (keyCode == 39){
		bgPosH -= 20;
		if(bgPosH <= -160){
		bgPosH = -160;
	  }
		map.style.left = bgPosH+"px";
		right.style.backgroundColor = "#9ab9ce";
	} else if (keyCode == 37){
		bgPosH += 20;
		if(bgPosH >= 0){
		bgPosH = 0;
	  }
		map.style.left = bgPosH+"px";
		left.style.backgroundColor = "#9ab9ce";
	}
};

//LOCAL STORAGE

var mobject = {
    day: 0,
    night: 0,
    kid: 0
};

var temporary = localStorage.getItem("preferences");
if(temporary){
	mobject = JSON.parse(temporary);
	if(mobject.kid == 1){
		kidswitch.checked = true;
	}
	if(mobject.day == 1){
		boxA.checked = true;
	}
	if(mobject.night == 1){
		boxB.checked = true;
	}
	markersAppear();
}

//DISPLAYING THE PROPER ICONS WHEN CHECKBOXES CHECKED

function markersAppear(){
	if(kidswitch.checked == true && boxA.checked == true && boxB.checked == false){
		//day kid friendly
		seawall.style.display = "block";
		aquarium.style.display = "block";
		science.style.display = "block";
		capilano.style.display = "block";
		grouse.style.display = "block";
		rio.style.display = "none";
		theatresports.style.display = "none";
		wreck.style.display = "none";
		stormcrow.style.display = "none";
		canucks.style.display = "none";
		activenum.innerHTML = 5;
		hoursnum.innerHTML = 15;
		//kid friendly day itinerary
	} else if(kidswitch.checked == true && boxA.checked == false && boxB.checked == true) {
		//Night kid friendly
		seawall.style.display = "none";
		aquarium.style.display = "none";
		canucks.style.display = "none";
		science.style.display = "none";
		capilano.style.display = "none";
		grouse.style.display = "none";
		rio.style.display = "none";
		theatresports.style.display = "none";
		wreck.style.display = "none";
		canucks.style.display = "none";
		stormcrow.style.display = "block";
		canucks.style.display = "block";
		wreck.style.display = "none";
		activenum.innerHTML = 2;
		hoursnum.innerHTML = 5;
	} else if(kidswitch.checked == true && boxA.checked == true && boxB.checked == true){
		//night and day kid friendly
		seawall.style.display = "block";
		aquarium.style.display = "block";
		canucks.style.display = "block";
		science.style.display = "block";
		capilano.style.display = "block";
		grouse.style.display = "block";
		rio.style.display = "none";
		theatresports.style.display = "none";
		wreck.style.display = "block";
		canucks.style.display = "block";
		stormcrow.style.display = "block";
		canucks.style.display = "block";
		wreck.style.display = "none";
		activenum.innerHTML = 7;
		hoursnum.innerHTML = 20;
	} else if (kids.checked == false && boxA.checked == true && boxB.checked == false){
		//not kid friendly day
		seawall.style.display = "none";
		aquarium.style.display = "none";
		canucks.style.display = "none";
		science.style.display = "none";
		capilano.style.display = "none";
		grouse.style.display = "none";
		rio.style.display = "none";
		theatresports.style.display = "none";
		wreck.style.display = "none";
		canucks.style.display = "none";
		stormcrow.style.display = "none";
		canucks.style.display = "none";
		wreck.style.display = "block";
		activenum.innerHTML = 1;
		hoursnum.innerHTML = 4;
	} else if(kids.checked == false && boxA.checked == false && boxB.checked == true){
		//not kid friendly night
		seawall.style.display = "none";
		aquarium.style.display = "none";
		canucks.style.display = "none";
		science.style.display = "none";
		capilano.style.display = "none";
		grouse.style.display = "none";
		rio.style.display = "none";
		theatresports.style.display = "none";
		wreck.style.display = "none";
		canucks.style.display = "none";
		stormcrow.style.display = "block";
		canucks.style.display = "none";
		wreck.style.display = "none";
		rio.style.display = "block";
		theatresports.style.display = "block";
		activenum.innerHTML = 3;
		hoursnum.innerHTML = 6;
	} else if(kids.checked == false && boxA.checked == true && boxB.checked == true){
		//not kid friendly night and day
		seawall.style.display = "none";
		aquarium.style.display = "none";
		canucks.style.display = "none";
		science.style.display = "none";
		capilano.style.display = "none";
		grouse.style.display = "none";
		rio.style.display = "none";
		theatresports.style.display = "none";
		wreck.style.display = "none";
		canucks.style.display = "none";
		stormcrow.style.display = "block";
		canucks.style.display = "none";
		wreck.style.display = "block";
		rio.style.display = "block";
		theatresports.style.display = "block";
		activenum.innerHTML = 4;
		hoursnum.innerHTML = 10;
	}
	
	if(kids.checked == true){
		mobject.kid = 1;
	} else {
		mobject.kid = 0;
	}
	
	if(boxA.checked == true){
		mobject.day = 1;
	} else {
		mobject.day = 0;
	}
	
	if(boxB.checked == true){
		mobject.night = 1;
	} else {
		mobject.night = 0;
	}
	
	localStorage.setItem("preferences", JSON.stringify(mobject));
}

//ITINERARY BOX

function itineraryList(){
	if(kidswitch.checked == true && boxA.checked == true && boxB.checked == false){
		itindisp.innerHTML = "<ul class='lists'><li class='listitems' id='bikelist'>Bike the Seawall</li><li class='listitems' id='aquariumlist'>Vancouver Aquarium</li><li class='listitems' id='sciencelist'>Science World</li><li class='listitems' id='bridgelist'>Capilano Suspension Bridge</li><li class='listitems' id='grouselist'>Grouse Mountain</li></ul>"
    } else if(kidswitch.checked == true && boxA.checked == false && boxB.checked == true) {
        itindisp.innerHTML = "<ul class='lists'><li class='listitems' id='stormcrowlist'>Stormcrow Tavern</li><li class='listitems' id='canuckslist'>Canucks</li></ul>"
    } else if(kidswitch.checked == true && boxA.checked == true && boxB.checked == true){
        itindisp.innerHTML = "<ul class='lists'><li class='listitems' id='bikelist'>Bike the Seawall</li><li class='listitems' id='aquariumlist'>Vancouver Aquarium</li><li class='listitems' id='sciencelist'>Science World</li><li class='listitems' id='bridgelist'>Capilano Suspension Bridge</li><li class='listitems' id='grouselist'>Grouse Mountain</li><li class='listitems' id='stormcrowlist'>Stormcrow</li><li class='listitems' id='canuckslist'>Canucks</li></ul>"  
    } else if (kids.checked == false && boxA.checked == true && boxB.checked == false){
        itindisp.innerHTML = "<ul class='lists'><li class='listitems' id='beachlist'>Wreck Beach</li></ul>"  
    } else if(kids.checked == false && boxA.checked == false && boxB.checked == true){
        itindisp.innerHTML = "<ul class='lists'><li class='listitems' id='stormcrowlist'>Stormcrow Tavern</li><li class='listitems' id='riolist'>Rio Theatre</li><li class='listitems' id='theatrelist'>Vancouver Theatresports</li></ul>" 
    } else if(kids.checked == false && boxA.checked == true && boxB.checked == true){
        itindisp.innerHTML = "<ul class='lists'><li class='listitems' id='beachlist'>Wreck Beach</li><li class='listitems' id='stormcrowlist'>Stormcrow Tavern</li><li class='listitems' id='riolist'>Rio Theatre</li><li class='listitems' id='theatrelist'>Vancouver Theatresports</li></ul>"  
    }
}


//ZOOM IN/OUT
zoomslide.addEventListener("change", function(){
	map.style.width = zoomslide.value+"px";
    map.style.height = zoomslide.value*0.68+"px";
});



//MOVING L,R,U,D WITH
left.addEventListener("click", function(){
		if(bgPosH >= 0){
		bgPosH = 0;
	} else {
		bgPosH += 20;
		map.style.left = bgPosH+"px";
	}
});

right.addEventListener("click", function(){
	bgPosH -= 20;
	if(bgPosH <= -160){
		bgPosH = -160;
	}
	map.style.left = bgPosH+"px";
});

up.addEventListener("click", function(){
	bgPosV += 20;
	if(bgPosV >= 0){
		bgPosV = 0;
	}
	map.style.top = bgPosV+"px";
});

down.addEventListener("click", function(){
	bgPosV -= 20;
	if(bgPosV <= -80){
		bgPosV = -80;
	}
	map.style.top = bgPosV+"px";
});

document.addEventListener("keydown", function(ev){
	moveMap(ev.keyCode);
});

document.addEventListener("keyup", function(ev){
	down.style.backgroundColor = "#427aa1";
	up.style.backgroundColor = "#427aa1";
	left.style.backgroundColor = "#427aa1";
	right.style.backgroundColor = "#427aa1";
	
});


//CHECKBOXES REQUIRED

boxA.addEventListener("change", function(){
		markersAppear();
		itineraryList();
    console.log(boxA.checked);
    if(boxB.checked == false && boxA.checked == false){
        boxB.checked = true;
        markersAppear();
        itineraryList();
    }
});

boxB.addEventListener("change", function(){
		markersAppear();
		itineraryList();
    console.log(boxB.checked);
    if(boxB.checked == false && boxA.checked == false){
        boxA.checked = true;
        markersAppear();
        itineraryList();
    }
});


//MAKING MARKERS APPEAR
kidswitch.addEventListener("change", function(){
	markersAppear();
	itineraryList();
});


//LIST HOVER EFFECT
seawall.addEventListener("mouseover", function(){
    document.getElementById("bikelist").style.color = "red";
});
seawall.addEventListener("mouseout", function(){
    document.getElementById("bikelist").style.color = "white";
});
aquarium.addEventListener("mouseover", function(){
    document.getElementById("aquariumlist").style.color = "orange";
});
aquarium.addEventListener("mouseout", function(){
    document.getElementById("aquariumlist").style.color = "white";
});
science.addEventListener("mouseover", function(){
    document.getElementById("sciencelist").style.color = "orange";
});
science.addEventListener("mouseout", function(){
    document.getElementById("sciencelist").style.color = "white";
});
capilano.addEventListener("mouseover", function(){
    document.getElementById("bridgelist").style.color = "red";
});
capilano.addEventListener("mouseout", function(){
    document.getElementById("bridgelist").style.color = "white";
});
grouse.addEventListener("mouseover", function(){
    document.getElementById("grouselist").style.color = "red";
});
grouse.addEventListener("mouseout", function(){
    document.getElementById("grouselist").style.color = "white";
});
canucks.addEventListener("mouseover", function(){
    document.getElementById("canuckslist").style.color = "purple";
});
canucks.addEventListener("mouseout", function(){
    document.getElementById("canuckslist").style.color = "white";
});
stormcrow.addEventListener("mouseover", function(){
    document.getElementById("stormcrowlist").style.color = "yellow";
});
stormcrow.addEventListener("mouseout", function(){
    document.getElementById("stormcrowlist").style.color = "white";
});
wreck.addEventListener("mouseover", function(){
    document.getElementById("beachlist").style.color = "red";
});
wreck.addEventListener("mouseout", function(){
    document.getElementById("beachlist").style.color = "white";
});
theatresports.addEventListener("mouseover", function(){
    document.getElementById("theatrelist").style.color = "purple";
});
theatresports.addEventListener("mouseout", function(){
    document.getElementById("theatrelist").style.color = "white";
});
rio.addEventListener("mouseover", function(){
    document.getElementById("riolist").style.color = "purple";
});
rio.addEventListener("mouseout", function(){
    document.getElementById("riolist").style.color = "white";
});

