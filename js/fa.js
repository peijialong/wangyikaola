var da=document.querySelector(".da");
var fa=document.querySelector(".fa");
var shopi=document.querySelector(".shop_img");
var shop=document.querySelector(".set_shop");
shopi.onmouseover=function(ev){
    da.style.display="block";
    fa.style.display="block";
    document.onmousemove=function(ev){
        console.log(da.offsetLeft)
    da.style.left=ev.pageX-100-shop.offsetLeft+"px";
    da.style.top=ev.pageY-shop.offsetTop-40-100+"px";
 
    if(da.offsetLeft>=200){
        da.style.left="200px";
    }
    if(da.offsetLeft<=0){
        da.style.left="0px";
    }
     if(da.offsetTop<=0){
        da.style.top="0px";
    }
    if(da.offsetTop>=200){
        da.style.top="200px";
    }
       fa.style.backgroundPositionX=da.offsetLeft*(-1)*2+"px" 
    fa.style.backgroundPositionY=da.offsetTop*(-1)*2+"px";
}
}
shopi.onmouseout=function(ev){
    fa.style.display="none";
    da.style.display="none";
}