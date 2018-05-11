var gallery = document.getElementById("gallery");
var imgNum = 10;

 gallery.style.backgroundImage = "url(pics/img"+imgNum+".jpg)";

document.getElementById("changeImgN").addEventListener("click", function(){
    
    imgNum++;
    
    if(imgNum >= 13){
       imgNum = 10;
       }
    
    gallery.style.backgroundImage = "url(pics/img"+imgNum+".jpg)";
});



document.getElementById("changeImgP").addEventListener("click", function(){
   
    imgNum -= 1;
    
    if(imgNum <= 10){
       imgNum = 12;
       }
    
    gallery.style.backgroundImage = "url(pics/img"+imgNum+".jpg)";
});