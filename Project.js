

var selectfeld= document.getElementById("selectField");
var selectText= document.getElementById("selectText");
var options = document.getElementsByClassName("options");

for(options of options){
  options.onclick= function(){
  selectText.innerHTML= this.textContent;
  }
}

function Medical(){
  alert('view Please only Desktop Never Mobile ?');
}