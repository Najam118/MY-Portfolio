/*================================
       Date & Clock
=================================*/

function MyTime(){
    var myDate= new Date();
    var hr,min = (myDate.getMinutes() < 10)? "0" + myDate.getMinutes():myDate.getMinutes(),
        scn = (myDate.getSeconds() < 10) ? "0" + myDate.getSeconds() : myDate.getSeconds(),
        m =(myDate.getHours() >= 12)? "PM" : "AM";

    if(myDate.getHours() == 0){
        hr = 12 ;

    }
    else if(myDate.getHours() > 12){
      hr = myDate.getHours() -12;
    }else{
        myDate.getHours();
    }
var  curentTime = "0" + hr + ":" + min + ":" + scn + ":";

document.getElementsByClassName("H1")[0].innerHTML =  " 0" + hr ;
document.getElementsByClassName("H2")[0].innerHTML = " " +min;
document.getElementsByClassName("H")[0].innerHTML =" " + scn;
document.getElementsByClassName("M")[0].innerHTML = m;


var day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Fryday","Saturday"],

    month = ["junuary","February","Murch","April","May","June","July","August","September","October",         "November","December"],

 Day = myDate.getDate();

 var curentDate = day[myDate.getDay()] + ":" + Day + ":" + month[myDate.getMonth()] + ":"+ myDate.getFullYear();

 document.getElementsByClassName("date")[0].innerHTML = curentDate;
 

}
MyTime();

setInterval(function(){
    MyTime();
},1000);
/*====================
    My Calculator
======================*/

function DeletMe(){
document.getElementById("display").value = "";
}

function Calculator(newValue){
document.getElementById("display").value += newValue;
}
function Answer(){
var a = document.getElementById("display").value;
var b = eval(a);
document.getElementById("display").value = b

}

/*===========================
   Drag & Drop Image
===========================*/


const DragArea = document.querySelector(".AppBody"),
      DragText = DragArea.querySelector("h3"),
      Button = DragArea.querySelector("button"),
      input= DragArea.querySelector("input");

      Button.onclick = ()=>{
        input.click();
    }    

      input.addEventListener("change", UploadImage);

      function UploadImage(){
        
        let imglink = URL.createObjectURL(input.files[0]);
        DragArea.style.backgroundImage =`url(${imglink})`;
        DragArea.textContent = "";
      }
DragArea.addEventListener("dragover", function(e){
    e.preventDefault()
    DragArea.classList.add("active");
    DragText.textContent = "Release to Upload File";
});
DragArea.addEventListener("drop", function(e){
     e.preventDefault();
     input.files = e.dataTransfer.files;
     UploadImage();
});

DragArea.addEventListener("dragleave",()=>{
    DragArea.classList.remove("active");
    DragText.textContent = "Drag & Drop Image Uploader"; 
    UploadImage();
});
      
      /*
      let Myfile ;

Button.onclick = ()=>{
    input.click();
}    

input.addEventListener("change",function(){
   Myfile = this.files[0];
   DragArea.classList.add("active");
   showMe()
})

DragArea.addEventListener("dragover",(event)=>{
  event.preventDefault();
  DragArea.classList.add("active");
  DragText.textContent = "Release to Upload File";
})

DragArea.addEventListener("dragleave",()=>{
    DragArea.classList.remove("active");
    DragText.textContent = "Drag & Drop";  
})

DragArea.addEventListener("drop", (event)=>{
   event.preventDefault();
   Myfile = event.dataTransfer.files[0];
   showMe()
})

function showMe(){
    let fileType = Myfile.type;
    let vallidEx = ["image/jpeg","image/jpg","image/png"];

    if(vallidEx.includes(fileType)){
        let FileReader = new FileReader();

        FileReader.onload = ()=>{
            let imgUrl = FileReader.result;
            let img = `<img src="${imgUrl}" alt="">`
            DragArea.innerHTML = img
            
        }
        FileReader.readAsDataURL(Myfile);
        
    }
    
    else{
        alert("This File is Not Vallid");
        DragArea.classList.remove("active");
        DragText.textContent = "Drag & Drop";  
    }

}
*/

