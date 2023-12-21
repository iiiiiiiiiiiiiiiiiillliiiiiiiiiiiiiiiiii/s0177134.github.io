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
    let chek=document.getElementById("chek");
    chek.value=3;
    let r1=document.getElementById("r10");
    r1.value=6;
    let r2=document.getElementById("r20");
    r2.value=7;
    let r3=document.getElementById("r30");
    r3.value=10;
    let r = document.getElementById("result");
    if(chek.checked){
        r.innerHTML = f1[0].value * chek.value;
    }
    if(r1.checked){
        r.innerHTML = f1[0].value * r1.value;
    }
    
    if(r2.checked){
        r.innerHTML = f1[0].value * r2.value;
    }
    
    if(r3.checked){
        r.innerHTML = f1[0].value * r3.value;
    }
    if(isNaN(f1[0].value)){
      alert("Это не цифра");
      r.innerHTML("z")
    }
    if(f1[0].value<0){
      alert("- нельзя");
      r.innerHTML("нельзя")
    }
    let s = document.getElementsByName("myselect");
    console.log(s[0].value);
    return false;
  }
  window.addEventListener('DOMContentLoaded', function (event) {
    let s = document.getElementsByName("myselect");
    s[0].addEventListener("change", function(event) {
      let select = event.target;
      let radios = document.getElementById("myradios");
      let chekbox= document.getElementById("chek");
      console.log(select.value);
      // Можно использовать getElementsByClassName()
      if (select.value == "1") {
        radios.style.display = "none";
      }
      else {
        radios.style.display = "block";
        chekbox.style.display="block";
      }
      if(select.value=="2"){
        chekbox.style.display="none";
      }
    });
    
    let r = document.querySelectorAll(".myradios input[type=radio]");
    r.forEach(function(radio) {
      radio.addEventListener("change", function(event) {
        let r = event.target;
        console.log(r.value);
      });    
    });
    
  });
