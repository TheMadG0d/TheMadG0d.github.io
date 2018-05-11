var gallery = document.getElementById("gallery");
var imgNum = 19;

 gallery.style.backgroundImage = "url(pics/img"+imgNum+".jpg)";

document.getElementById("changeImgN").addEventListener("click", function(){
    
    imgNum++;
    
    if(imgNum >= 22){
       imgNum = 19;
       }
    
    gallery.style.backgroundImage = "url(pics/img"+imgNum+".jpg)";
});



document.getElementById("changeImgP").addEventListener("click", function(){
   
    imgNum -= 1;
    
    if(imgNum <= 19){
       imgNum = 21;
       }
    
    gallery.style.backgroundImage = "url(pics/img"+imgNum+".jpg)";
});