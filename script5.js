var i=0;
var image=document.getElementById("image");
var imgs=new Array('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQjs5YUSMJpapCkze4jk9-sBJoYNhcqfzcmg&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQjs5YUSMJpapCkze4jk9-sBJoYNhcqfzcmg&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQjs5YUSMJpapCkze4jk9-sBJoYNhcqfzcmg&usqp=CAU'); 
var j=imgs.length;
function imgsrc(){
    if (i!=(j-1))
        {i++;}

image.src=imgs[i];
}


function click1() {
    let f1 = document.getElementsByName("field1");
    let f2 = document.getElementsByName("field2");
    let r = document.getElementById("result");
    r.innerHTML = f1[0].value * f2[0].value;
    let s = document.getElementsByName("select1");
    console.log(s[0].value);
    return false;
  }