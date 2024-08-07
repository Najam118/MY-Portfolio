

const Mybtn = document.querySelector(".Mybtn button");
const Rulsbox = document.querySelector(".Rulesbox");
const Exitbutton = document.querySelector("button.ExitBtn");
const Continue = document.querySelector("button.Continue");
const Questions = document.querySelector(".Questions");
const Quiz = document.querySelector(".QuizApp");
const Container = document.querySelector(".container");


Mybtn.onclick = () =>{
  //  Rulsbox.classList.add("Activeinfo");
  //  Quiz.style.display = "none"; 
  Rulsbox.style.display= "block";
  Quiz.style.display = "none";
   
}
 Exitbutton.onclick = () =>{
    // Rulsbox.classList.remove("Activeinfo");
    Quiz.style.display = "block";
    Rulsbox.style.display= "none"; 
}
Continue.onclick = () =>{
 
  Container.style.display  = "block";
  Rulsbox.style.display= "none"; 
  Quiz.style.display= "none";
  stratTime(15);      
}
let a = document.querySelector(".time");


 /*
const Nextbtn = document.querySelector(".Nextbtn");
let que_Count = 0;

Nextbtn.onclick= () => {
 if(que_Count <questions.length - 1){
    que_Count ++
    ShowQustions(que_Count)
 }else{
    console("You have Complit Your Task")
 }
}




function ShowQustions(index){

  const que_Text = document.querySelector(".text1");

  const option_list = document.querySelector(".myoptions");
  let option_Tag = '<div class ="options"><span>' + questions[index].options[0] +' </span></div>'
                  +'<div class ="options"><span>' + questions[index].options[1] +' </span></div>'
                  +'<div class ="options"><span>' + questions[index].options[2] +' </span></div>'
                  +'<div class ="options"><span>' + questions[index].options[3] +' </span></div>'

  let que_Tag = "<span> " + questions[index].numb+ ". " + questions[index].question +"</span>";
      que_Text.innerHTML = que_Tag;
  option_list.innerHTML = option_Tag;


  let total_que = document.querySelector(".totalQu");
  let totalque_Tag = '<p>'+ questions[index].numb + ' Of 5 Questions' + '</p>';
  total_que.innerHTML = totalque_Tag;

  
  const option = option_list.querySelectorAll(".options") ;
  
  for(let i = 0; i<option.length; i ++ ){
    option[i].setAttribute("onclick", "selectAnswer(this)");
  }

}

function optionSelected(answer){
    const userAns = answer.textContent;
    const CorrectAns = questions[que_Count].answer;
    const alloption = option_list.children.length;
     

 if( userAns == CorrectAns ){
   answer.classList.add("correct")
    console.log("joi")
 }else {
   answer.classList.add("incorrect")
    console.log("na")
 } 

for(let i = 0; i<alloption; i++){
  option_list.children[i].classList.add("disable");
}

}


function selectAnswer (e){
const selectop = e.target;
const iscorrect = selectop.dataset.option_Tag === questions.answer;
if(iscorrect){
  selectop.classList.add("correct")

}else{
  selectop.classList.add("incorrect")
}
}
*/