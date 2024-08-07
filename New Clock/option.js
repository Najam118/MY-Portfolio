/*

let questions = [
    {
        numb:1,
        question:"What Dones HTML Stand For ?",
        answer:"Hyper Text Markup Language",
        options:[
            "Hyper Text Preprocessor Language",
            "Hyper Text Markup Language",
            "Hyper Text Multiple Language",
            "Hyper Text Multi Language"
        ]
    },
    {
        numb:2,
        question:"What Dones CSS Stand For ?",
        answer:"Cascading Style Sheet",
        options:[
            "Hyper Text Preprocessor Language",
            "Hyper Text Markup Language",
            "Hyper Text Multiple Language",
            "Cascading Style Sheet"
        ]
    },
    
    {
        numb:3,
        question:"What Dones PHP Stand For ?",
        answer: "Hyper Text Preprocessor",
        options:[
            "Hyper Text Preprocessor ",
            "Hyper Text Markup Language",
            "Hyper Text Multiple Language",
            "Cascading Style Sheet"
        ]
    },
    
    {
        numb:4,
        question:"What Dones SQL Stand For ?",
        answer:"Stranded Quary Language",
        options:[
            "Hyper Text Preprocessor ",
            "Hyper Text Markup Language",
            "Stranded Quary Language",
            "Cascading Style Sheet"
        ]
    },
    
    {
        numb:5,
        question:"What Dones XML Stand For ?",
        answer:" Structured Quary Language",
        options:[
            "Hyper Text Preprocessor ",
            "Hyper Text Markup Language",
            "Stranded Quary Language",
            "Structured Quary Language",
        ]
    }, 
  ]
  
*/

const questions =[
    {
        question:"প্রবিত্র কোরআনে কয়টি সূরা ও কয়টি আয়াত এবং কয়টি পারা রয়েছে ?",
        answers:[
            {text:"একশত বারো ‍টি সূরা ছয় হাজার ছয়শত ষেষট্টি আয়াত ও ত্রিশ টি পারারয়েছে", correct: false},
            {text:"একশত চৌদ্দ ‍টি সূরা ছয় হাজার ছয়শত ষেষট্টি আয়াত ও ত্রিশ টি পারা রয়েছে", correct: true},
            {text:"একশত চৌদ্দ ‍টি সূরা পাঁচ হাজার ছয়শত ষেষট্টি আয়াত ও ত্রিশ টি পারা রয়েছে" , correct: false},
            {text:"একশত চৌদ্দ ‍টি সূরা ছয় হাজার ছয়শত ষেষট্টি আয়াত ও বিশ টি পারা রয়েছে", correct: false},
        ]
    },
    {
        question:" প্রবিত্র কোরআনে সবে চেয়ে বড় সূরা ও চেয়ে ছোট সূরা কোনটি ?",
        answers:[
            {text:"সুরা বাকারা ও সুরা নাচ", correct: false},
            {text:"সুরা বাকারা ও সুরা কাউসার", correct: true},
            {text:"সুরা মুলুক ও সুরা এখলাচ" , correct: false},
            {text:"সুরা বাকারা ও সুরা এখলাচ", correct: false},
        ]  
    },
    {
        question:" প্রবিত্র কোরআনে সর্বপ্রথম সূরা ও সর্বশেষ সূরা কোনটি ?",
        answers:[
            {text:"সুরা বাকারা ও সুরা ফালাক", correct: false},
            {text:"সুরা বাকারা ও সুরা কাউসার", correct: false},
            {text:"সুরা বাকারা ও সুরা নাচ" , correct: true},
            {text:"সুরা ক্বাহাফ ও সুরা নাচ", correct: false},
        ]
    },
    {
        question:"প্রতিদিন কত ওয়াক্ত নামাজ আদায় করা ফরজ ?",
        answers:[
            {text:"তিন ওয়াক্ত", correct: false},
            {text:"চার ওয়াক্ত", correct: false},
            {text:"পাঁচ ওয়াক্ত" , correct: true},
            {text:"আট ওয়াক্ত", correct: false},
        ]
    },
    {
        question:"দৈনিক পাঁচ ওয়াক্ত নামাজে ফরজ ও সূন্নাত কত রাকাত ?",
        answers:[
            {text:"সেতেরো ও ত্রিশ রাকরত", correct: false},
            {text:"পনেরো ও বিশ রাকরত", correct: false},
            {text:"বারো ও বিশ রাকরত" , correct: false},
            {text:"সেতেরো ও বিশ রাকরত", correct: true},
        ]
    }, 
]
  

const questionElement = document.getElementById("qustion");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionindex = 0;
let Score = 0;

function StratQuiz(){
    currentQuestionindex = 0;
    Score = 0;
    nextButton.innerHTML= "পরবর্তি প্রশ্ন";
    showQuestion(); 
}

 function showQuestion(){
    ReasetStat();
   let currentQuestion = questions[currentQuestionindex];
   let questionNo = currentQuestionindex + 1;
   questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

   currentQuestion.answers.forEach(answer =>{
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
        button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
   });
 }

function ReasetStat(){
    
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
    
}
 function selectAnswer(e){
 let selectBtn = e.target;
 let isCorrect = selectBtn.dataset.correct === "true";
 
 if(isCorrect){
    selectBtn.classList.add("correct");
    Score ++;
    
 }else{
    selectBtn.classList.add("incorrect");
 }
Array.from(answerButtons.children).forEach(button =>{
    if(button.dataset.correct === "true"){
        button.classList.add("correct");
        
    }
    button.disabled = true;

});
    nextButton.style.display = "block";
 }

function showScore(){
    ReasetStat();
     
    questionElement.innerHTML = `আপনি সঠিক উত্তর ${questions.length} টির মধ্যে ${Score} টি দিয়েছেন `;
    
    nextButton.innerHTML = "আবার চেষ্টা করুন";
    nextButton.style.display = "block";
}

 function handalenextButton(){
    currentQuestionindex ++;
    if(currentQuestionindex < questions.length){
        showQuestion();
    }
     
    
    else{
        showScore();
    }
 }




nextButton.addEventListener("click", ()=>{
    if(currentQuestionindex < questions.length){
        handalenextButton();
    }else{
        StratQuiz();
    }
});

 

 StratQuiz();