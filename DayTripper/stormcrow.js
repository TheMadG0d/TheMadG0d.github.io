var gallery = document.getElementById("gallery");
var imgNum = 13;

 gallery.style.backgroundImage = "url(pics/img"+imgNum+".jpg)";

document.getElementById("changeImgN").addEventListener("click", function(){
    
    imgNum++;
    
    if(imgNum >= 16){
       imgNum = 13;
       }
    
    gallery.style.backgroundImage = "url(pics/img"+imgNum+".jpg)";
});



document.getElementById("changeImgP").addEventListener("click", function(){
   
    imgNum -= 1;
    
    if(imgNum <= 13){
       imgNum = 15;
       }
    
    gallery.style.backgroundImage = "url(pics/img"+imgNum+".jpg)";
});