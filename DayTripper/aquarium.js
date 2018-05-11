var gallery = document.getElementById("gallery");
var imgNum = 25;

 gallery.style.backgroundImage = "url(pics/img"+imgNum+".jpg)";

document.getElementById("changeImgN").addEventListener("click", function(){
    
    imgNum++;
    
    if(imgNum >= 28){
       imgNum = 25;
       }
    
    gallery.style.backgroundImage = "url(pics/img"+imgNum+".jpg)";
});



document.getElementById("changeImgP").addEventListener("click", function(){
   
    imgNum -= 1;
    
    if(imgNum <= 25){
       imgNum = 27;
       }
    
    gallery.style.backgroundImage = "url(pics/img"+imgNum+".jpg)";
});