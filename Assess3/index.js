var toinput = document.getElementById("toinput"),
    frominput = document.getElementById("frominput"),
    msginput = document.getElementById("messageinput"),
    bgimginput = document.getElementById("backgroundimg"),
    todiv = document.getElementById("to"),
    fromdiv = document.getElementById("from"),
    msgdiv = document.getElementById("message"),
    bgimg = document.getElementById("postcard"),
    addbutton = document.getElementById("add"),
    previewDiv = document.getElementById("preview"),
    savebutton = document.getElementById("save"),
    loadbutton = document.getElementById("load"),
    num = 1;

var postcards = [];

function createPostcard(to, bgImg){
    var newDiv = document.createElement("div");
    var newTo = document.createElement("div");
    
    newDiv.className = "newDiv";
    newTo.className = "newTo";
    
    
//    if (bgImg == "") {
//        newDiv.style.backgroundImage = "url(imgs/default.png)";
//    } else if (bgImg == "auto"){
//        newDiv.style.backgroundImage = "url(imgs/auto"+num+".jpg)";
//    } else {
//        newDiv.style.backgroundImage = "url("+bgImg+")";
//    }

   
    newDiv.style.backgroundImage = bgimg.style.backgroundImage; 
    newTo.innerHTML = to;
    
    newDiv.appendChild(newTo);
    preview.appendChild(newDiv);
}

toinput.addEventListener("keyup", function(ev){
      todiv.innerHTML = toinput.value;  
});

frominput.addEventListener("keyup", function(ev){
      fromdiv.innerHTML = frominput.value;   
});

msginput.addEventListener("keyup", function(ev){
       msgdiv.innerHTML = msginput.value;  
});

bgimginput.addEventListener("keyup", function(ev){
    if(ev.keyCode == 13){
			if(bgimginput.value == ""){
				bgimg.style.background = "url(imgs/default.png)";
			} else if (bgimginput.value == "auto"){
				bgimg.style.background = "url(imgs/auto"+num+".jpg)";
				num++;
				if (num >=4){
					num = 1
				}
			} else {
				bgimg.style.backgroundImage = "url("+bgimginput.value+")";	
			}		 
		}
});

addbutton.addEventListener("click", function(){
   var images = {
		bgimg: null,
		to: null,
		message: null,
		from: null
	};
    
    images.bgimg = bgimginput.value;
    images.to = toinput.value;
    images.message = msginput.value;
    images.from = frominput.value;
    
    postcards.push(images);
    console.log(images);
    
   createPostcard(toinput.value, bgimginput.value);   
    
    if (num == 3) {
        num = 0;
    }
    num++;

});

savebutton.addEventListener("click", function(){
    localStorage.setItem("allpostcards", JSON.stringify(postcards));
    console.log(localStorage);
});

loadbutton.addEventListener("click", function(){
    var	allPostcards = JSON.parse(localStorage.getItem("allpostcards"));
        
    previewDiv.innerHTML = "";
    
    if(allPostcards){
    for(var i=0; i<allPostcards.length; i++){
    createPostcard(allPostcards[i].to, allPostcards[i].bgimg);
    }    
}
});




