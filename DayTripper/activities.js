var gallery = document.getElementById("gallery");
var imgNum = 16;

 gallery.style.backgroundImage = "url(pics/img"+imgNum+".jpg)";

document.getElementById("changeImgN").addEventListener("click", function(){
    
    imgNum++;
    
    if(imgNum >= 19){
       imgNum = 16;
       }
    
    gallery.style.backgroundImage = "url(pics/img"+imgNum+".jpg)";
});



document.getElementById("changeImgP").addEventListener("click", function(){
   
    imgNum -= 1;
    
    if(imgNum <= 16){
       imgNum = 18;
       }
    
    gallery.style.backgroundImage = "url(pics/img"+imgNum+".jpg)";
});