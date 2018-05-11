var gallery = document.getElementById("gallery");
var imgNum = 4;

 gallery.style.backgroundImage = "url(pics/img"+imgNum+".jpg)";

document.getElementById("changeImgN").addEventListener("click", function(){
    
    imgNum++;
    
    if(imgNum >= 7){
       imgNum = 4;
       }
    
    gallery.style.backgroundImage = "url(pics/img"+imgNum+".jpg)";
});



document.getElementById("changeImgP").addEventListener("click", function(){
   
    imgNum -= 1;
    
    if(imgNum <= 4){
       imgNum = 6;
       }
    
    gallery.style.backgroundImage = "url(pics/img"+imgNum+".jpg)";
});