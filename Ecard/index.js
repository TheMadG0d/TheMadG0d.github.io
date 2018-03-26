var pumpkin = document.getElementById("pumpkinimg");
var owl = document.getElementById("owlimg");
var gate = document.getElementById("gateimg");
var cloud = document.getElementById("cloud2img");
var moon = document.getElementById("moonimg");
var gravestone = document.getElementById("gravestoneimg");
var cat = document.getElementById("catimg");
var house = document.getElementById("houseimg");
var witch = document.getElementById("witchimg");
var candy = document.getElementById("candyimg");
var DispDiv = document.getElementById("display");

document.getElementById("forest").play();

pumpkin.addEventListener("click", function(){
  document.getElementById("pumpkinfaceimg").style.display = "unset";
  document.getElementById("fact4").style.display = "block";
  document.getElementById("popup").play();
});

document.getElementById("fact4").addEventListener("click", function(){
  document.getElementById("fact4").style.display = "none";
  document.getElementById("popdown").play();
});

owl.addEventListener("click",function(){
  document.getElementById("fact1").style.display = "block";
  document.getElementById("popup").play();
});

document.getElementById("fact1").addEventListener("click",function(){
  document.getElementById("fact1").style.display = "none";
  document.getElementById("popdown").play();
});

owl.addEventListener("mouseover", function(){
  document.getElementById("hoot").play();
})

gate.addEventListener("click", function(){
  document.getElementById("fact2").style.display = "block";
  document.getElementById("popup").play();
});

document.getElementById("fact2").addEventListener("click", function(){
  document.getElementById("fact2").style.display = "none";
  document.getElementById("popdown").play();
})

cloud.addEventListener("click", function(){
  document.getElementById("fact3").style.display = "block";
  document.getElementById("popup").play();
});

document.getElementById("fact3").addEventListener("click", function(){
  document.getElementById("fact3").style.display = "none";
  document.getElementById("popdown").play();
})

moon.addEventListener("click", function(){
  document.getElementById("fact5").style.display = "block";
  document.getElementById("popup").play();
  document.getElementById("witchimg").style.opacity = 1;
});

document.getElementById("fact5").addEventListener("click", function(){
  document.getElementById("fact5").style.display = "none";
  document.getElementById("popdown").play();
})

function makeItGhost(){
  var ghosts = document.createElement("img");
  var mleft = Math.round(Math.random()*100);
  var mdim = Math.round(Math.random()*80)+10;
  ghosts.src = "imgs/Lghost.svg";
  ghosts.className = "ghosts";
  ghosts.style.left = mleft+"%";
  ghosts.style.height = mdim+"px";
  ghosts.style.width = mdim+"px";
  
  DispDiv.appendChild(ghosts);
  
  if(mdim > 40){
    ghosts.style.transition = "top 5s";
  } else if(mdim > 30){
    ghosts.style.transition = "top 6s";
  } else if(mdim > 20){
    ghosts.style.transition = "top 7s";
  } else {
    ghosts.style.transition = "top 8s";
  }
  
  setTimeout(function(){
    ghosts.style.top = "-50%";
    
    setTimeout(function(){
      DispDiv.removeChild(ghosts);
    }, 10000);
  }, 10); 
}

var timer = null;
gravestone.addEventListener("click", function(){
  document.getElementById("fact6").style.display = "block";
  document.getElementById("popup").play();
  timer = setInterval(makeItGhost, 100);
})
                           
document.getElementById("fact6").addEventListener("click", function(){
  document.getElementById("fact6").style.display = "none";
  document.getElementById("popdown").play();
  clearInterval(timer);
})

house.addEventListener("click", function(){
  document.getElementById("fact7").style.display = "block";
  document.getElementById("knock").play();
  document.getElementById("popup").play();
})
                           
document.getElementById("fact7").addEventListener("click", function(){
  document.getElementById("fact7").style.display = "none";
  document.getElementById("popdown").play();
})

witch.addEventListener("click", function(){
  document.getElementById("fact8").style.display = "block";
  document.getElementById("popup").play();
})

document.getElementById("fact8").addEventListener("click", function(){
  document.getElementById("fact8").style.display = "none";
  document.getElementById("popdown").play();
})

cat.addEventListener("mouseover", function(){
  document.getElementById("meow").play();
})

cat.addEventListener("click", function(){
  document.getElementById("fact9").style.display = "block";
  document.getElementById("popup").play();
})

document.getElementById("fact9").addEventListener("click", function(){
  document.getElementById("fact9").style.display = "none";
  document.getElementById("popdown").play();
})

candy.addEventListener("click", function(){
  document.getElementById("fact10").style.display = "block";
  document.getElementById("popup").play();
})

document.getElementById("fact10").addEventListener("click", function(){
  document.getElementById("fact10").style.display = "none";
  document.getElementById("popdown").play();
})