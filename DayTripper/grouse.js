var gallery = document.getElementById("gallery");
var imgNum = 7;

 gallery.style.backgroundImage = "url(pics/img"+imgNum+".jpg)";

document.getElementById("changeImgN").addEventListener("click", function(){
    
    imgNum++;
    
    if(imgNum >= 10){
       imgNum = 7;
       }
    
    gallery.style.backgroundImage = "url(pics/img"+imgNum+".jpg)";
});



document.getElementById("changeImgP").addEventListener("click", function(){
   
    imgNum -= 1;
    
    if(imgNum <= 7){
       imgNum = 9;
       }
    
    gallery.style.backgroundImage = "url(pics/img"+imgNum+".jpg)";
});