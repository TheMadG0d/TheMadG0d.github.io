var gallery = document.getElementById("gallery");
var imgNum = 28;

 gallery.style.backgroundImage = "url(pics/img"+imgNum+".jpg)";

document.getElementById("changeImgN").addEventListener("click", function(){
    
    imgNum++;
    
    if(imgNum >= 31){
       imgNum = 28;
       }
    
    gallery.style.backgroundImage = "url(pics/img"+imgNum+".jpg)";
});



document.getElementById("changeImgP").addEventListener("click", function(){
   
    imgNum -= 1;
    
    if(imgNum <= 28){
       imgNum = 30;
       }
    
    gallery.style.backgroundImage = "url(pics/img"+imgNum+".jpg)";
});