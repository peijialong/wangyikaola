var floor=document.querySelectorAll("#floor li");
var floorZ=document.querySelector("#floor");
console.log(floorZ);
floorZ.style.display="none";
document.onscroll=function(){
if(document.documentElement.scrollTop>=580){
    floorZ.style.display="block";
}
else if(document.documentElement.scrollTop<580){
    floorZ.style.display="none";
}
if(document.documentElement.scrollTop>=580&&document.documentElement.scrollTop<1500){
    for(var i=0;i<floor.length;i++){
        floor[i].style.background="#f03048";
    }
    floor[1].style.background="#b42436";
}
if(document.documentElement.scrollTop>=1500&&document.documentElement.scrollTop<2150){
    for(var i=0;i<floor.length;i++){
        floor[i].style.background="#f03048";
    }
    floor[2].style.background="#b42436";
}
if(document.documentElement.scrollTop>=2150&&document.documentElement.scrollTop<2800){
    for(var i=0;i<floor.length;i++){
        floor[i].style.background="#f03048";
    }
    floor[3].style.background="#b42436";
}
if(document.documentElement.scrollTop>=2800&&document.documentElement.scrollTop<3440){
    for(var i=0;i<floor.length;i++){
        floor[i].style.background="#f03048";
    }
    floor[4].style.background="#b42436";
}
if(document.documentElement.scrollTop>=3440&&document.documentElement.scrollTop<4090){
    for(var i=0;i<floor.length;i++){
        floor[i].style.background="#f03048";
    }
    floor[5].style.background="#b42436";
}
if(document.documentElement.scrollTop>=4090&&document.documentElement.scrollTop<4730){
    for(var i=0;i<floor.length;i++){
        floor[i].style.background="#f03048";
    }
    floor[6].style.background="#b42436";
}
if(document.documentElement.scrollTop>=4733&&document.documentElement.scrollTop<5380){
    for(var i=0;i<floor.length;i++){
        floor[i].style.background="#f03048";
    }
    floor[7].style.background="#b42436";
}
if(document.documentElement.scrollTop>=5383&&document.documentElement.scrollTop<6033){
    for(var i=0;i<floor.length;i++){
        floor[i].style.background="#f03048";
    }
    floor[8].style.background="#b42436";
}
if(document.documentElement.scrollTop>=6033){
    for(var i=0;i<floor.length;i++){
        floor[i].style.background="#f03048";
    }
    floor[9].style.background="#b42436";
}
}


for(var k=0;k<floor.length;k++){

floor[k].onmouseout=function(){

if(c!==1){
    this.style.background="#f03048";
    }
}

}

// floor[0].onclick=function(){
//     document.documentElement.scrollTop=580;
// }
floor[1].onclick=function(){
    document.documentElement.scrollTop=580;
   floor[1].onmouseout=null;
}
floor[2].onclick=function(){
    document.documentElement.scrollTop=1500;
   floor[2].onmouseout=null;
   btnnn=null;
}
floor[3].onclick=function(){
    document.documentElement.scrollTop=2150;
   floor[3].onmouseout=null;
   
}
floor[4].onclick=function(){
    document.documentElement.scrollTop=2800;
   floor[4].onmouseout=null;
   
}
floor[5].onclick=function(){
    document.documentElement.scrollTop=3440;
   floor[5].onmouseout=null;
   
}
floor[6].onclick=function(){
    document.documentElement.scrollTop=4090;
   floor[6].onmouseout=null;
   
}
floor[7].onclick=function(){
    document.documentElement.scrollTop=4734;
   floor[7].onmouseout=null;
   
}
floor[8].onclick=function(){
    document.documentElement.scrollTop=5384;
   floor[8].onmouseout=null;
   
}
floor[9].onclick=function(){
    document.documentElement.scrollTop=6034;
   floor[9].onmouseout=null;
   
}
floor[10].onclick=function(){
    document.documentElement.scrollTop=0;
   
}


var c;
// 划入滑出
for(var k=0;k<floor.length;k++){

    floor[k].onmouseover=function(){
        if(this.style.background=="rgb(180, 36, 54)"){
            c=1;
        }
       else{
        this.style.background="#b42436";
        c=2;
       }
for(var k=0;k<floor.length;k++){

floor[k].onmouseout=function(){

if(c!==1){
    this.style.background="#f03048";
    }
}

}



    }
}



// 范围内变色
