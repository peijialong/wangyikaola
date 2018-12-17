var  shop1=document.getElementById("shop1");
$.ajax({
    type:"get",
    url:"php/shop_shu.php",
    success:function(res){
        var res=JSON.parse(res);
        console.log(res[0]);
        var str="";
    for(var i=0;i<res.length;i++){
        // console.log(data[i])
        str+=` <span class="span_d">
            <dl>
                <dt><img src="${res[i].img}" alt=""></dt>
                <dd class="dd_1">${res[i].content}</dd>
                <dd class="dd_2">${res[i].xcon}</dd>
                <dd><span class="rmb" style="color:red">${res[i].dao}</span><span class="rmb_1">${res[i].yuan}</span><button class="new_m">立即购买</button></dd>
            </dl>
        </span>`
    }
    shop1.innerHTML=str+str;
    }
})