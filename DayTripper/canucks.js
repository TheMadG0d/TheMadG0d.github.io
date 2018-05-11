var gallery = document.getElementById("gallery");
var imgNum = 1;

 gallery.style.backgroundImage = "url(pics/img"+imgNum+".jpg)";

document.getElementById("changeImgN").addEventListener("click", function(){
    
    imgNum++;
    
    if(imgNum >= 4){
       imgNum = 1;
       }
    
    gallery.style.backgroundImage = "url(pics/img"+imgNum+".jpg)";
});



document.getElementById("changeImgP").addEventListener("click", function(){
   
    imgNum -= 1;
    
    if(imgNum <= 0){
       imgNum = 3;
       }
    
    gallery.style.backgroundImage = "url(pics/img"+imgNum+".jpg)";
});