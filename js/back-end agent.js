    var sch=document.getElementById("sch")
console.log(sch)
var txt=document.querySelector(".porptbox");
console.log($('#sch').val());
 sch.onkeyup=function(){
$.ajax({
        type:"get",
    url:"php/back-end agent.php",
    data:{
        user:$('#sch').val()
    },
    success:function(res){
        console.log(res)

        var res=JSON.parse(res).suggestKeycords;
        console.log(res)
      var str="";
        res.forEach(item=>{
                str+=`
                <a href="https://www.kaola.com/search.html?zn=top&key=${item}&searchRefer=searchbutton&timestamp=1542854234622"><li>${item}</li></a>
                `;

            })      
            txt.innerHTML=str;
    }
})

txt.style.display="block";

  }  
sch.onblur=function(){
txt.style.display="none";

  }
  sch.onfocus=function(){
txt.style.display="block";

  }
txt.onmouseover=function(){
    sch.onblur=null;
}
txt.onmouseout=function(){
      sch.onblur=function(){
txt.style.display="none";

  }
}