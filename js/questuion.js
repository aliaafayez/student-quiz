

////////////////////////////////////////////////////
// literal object starts
let quizQuestions = {
        studentName: "mohamed Ahmed",
        quizName: "Maths Exam",
        quizTime: 30,
        totalDegree: 100,
        questions: [{
                header: "what is 3*5",
                answers: ["2", "15", "6", "8"],
                correctAnswer: 1,
                degree: 10
            },
            {
                header: "what is 2*1",
                answers: ["2", "50", "98", "8"],
                correctAnswer: 0,
                degree: 10
            },
            {
                header: "what is 8*5",
                answers: ["10", "40", "100", "8"],
                correctAnswer:1,
                degree: 10
            },
            {
                header: "what is 11*2",
                answers: ["22", "369", "9", "8"],
                correctAnswer: 0,
                degree: 10
            },
            {
                header: "what is 9+6",
                answers: ["3", "5", "15", "8"],
                correctAnswer: 2,
                degree: 10
            },
            {
                header: "what is 1+3",
                answers: ["9", "56", "4", "7"],
                correctAnswer: 2,
                degree: 10
            },
            {
                header: "what is 5*4",
                answers: ["32", "10", "46", "20"],
                correctAnswer:3,
                degree: 10
            },
            {
                header: "what is 6-2",
                answers: ["0", "4", "7", "23"],
                correctAnswer: 1,
                degree: 10
            },
            {
                header: "what is 19-9",
                answers: ["4", "89", "56", "10"],
                correctAnswer: 3,
                degree: 10
            },
            {
                header: "what is 10/2",
                answers: ["62", "85", "5", "7"],
                correctAnswer:2,
                degree: 10
            },
            // {
            //     header: "Really you finished",
            //     answers: [],
            //     correctAnswer: "",
            //     degree: 0
            // }
        ]
    }
    // literal object ended 
    // i control questions displaying 

let i = 0;

// elements that i picked from html doc 
// parent for selection menu and start button 
let parentDivForSelection = document.getElementById('selection');
// start button 
let startButton = document.getElementById('startButton');
//  parent for questions 
let questionParentDiv = document.getElementById('question-wraper');
// next button 
let nextButton = document.getElementById('class-text');
// qquestion 
let qstatment = document.getElementById('question-statment');
//  inputs and labels 
//inputs array 
let inputsArr = [document.getElementById('ansOne'), document.getElementById('ansTwo'), document.getElementsByTagName('input')[2], document.getElementsByTagName('input')[3]];
// label arra 
let labelArr = [document.getElementById('ansOneLabel'), document.getElementById('ansTwoLabel'), document.getElementsByTagName('label')[2], document.getElementsByTagName('label')[3]];
// input Array 
let finishBtn = document.getElementById("finish-button");
// div for finally result
let degreeDiv = document.getElementById("result-degree");
// span for degree
let myComment = document.getElementById("comment-user");
// prev button
let prevButton = document.getElementById("class-text2");
// span for warning msg
let warningSpan = document.getElementById('warning');
// span for exame Name
let titleExam= document.getElementById("title");
// icon for stop exam
let iconFinish= document.getElementsByClassName("fa-solid fa-clock")[0];
let stopicon= document.getElementsByClassName("stop-icon")[0];
let result1=document.cookie.split(";")[0].split("=")[1];
let result = 0;
let sec = 0;
let min = 30;
let timer=1;
//////////////////////////////////// strtButton EventListener/////////////////////////////////////////////////////////

    // studentName.innerText= hi; 





//array length
var len = quizQuestions.questions.length;
    
//track current question
var pos = 0

//track score
var totalScore = 0;
 
//grab elements
var question = document.getElementById("question-statment");
var submitButton = document.getElementById("next-button");
var firstDiv = document.getElementById("quistions-container");
    
//make question
nextButton.addEventListener('click', function(e) {
    displayAlert();  
    collectUserAnswer();
    calcScore();
    pos++;
    updateNavigationButtons();            
});
prevButton.addEventListener('click', function(e) {
    
    if(pos > 0) {
        pos--;
        createQuestion();
        createChoices();
        finishBtn.style.display="none";
        nextButton.style.display="block";
    }        
});
function createQuestion() {
    var currentQuestion = quizQuestions.questions[pos].header; 
    question.innerHTML = currentQuestion;
}

//make choices
function createChoices() {
    for(var i = 0; i < 4; i++) {
        var choice = document.getElementsByTagName("p")[i];
        var option = "<input id='ans_" + i + "' type='radio' name='choice' value='" + i + "'";
        
        if ( i == quizQuestions.questions[pos].userAnswer ) {
            option += " checked='checked'";   
        }
        option +=  "><span class=Answres>" + quizQuestions.questions[pos].answers[i] 
               + "</span></input>";
        
               choice.innerHTML = option;
    }
}

function collectUserAnswer() {
	quizQuestions.questions[pos].userAnswer = document.querySelector('input[name="choice"]:checked').value; 
// console.log(quizQuestions.questions[pos].userAnswer)
}

//calculate total score
function calcScore() {
    
	var score = 0;
	for ( var i = 0; i < quizQuestions.questions.length; i++ ) {
        // console.log(quizQuestions.questions[i].userAnswer);
        
		if ( quizQuestions.questions[i].userAnswer ==  quizQuestions.questions[i].correctAnswer ) {
            score += 10; 
                       console.log("result is = "+score);   
                   } 
                           
                   
		
	}
	totalScore = score;
    console.log(totalScore);
}

//alert user if no selection is made
function displayAlert() {
     var radios = document.getElementsByTagName("input");
     if(!radios[0].checked && !radios[1].checked && !radios[2].checked && !radios[3].checked) {
        console.log( myComment);
        warningSpan.style.display="block";
    }
}


function updateNavigationButtons() {
    if(pos < len) {
        // alert("hh");
        createQuestion();
        createChoices();
        warningSpan.style.display="none";

        prevButton.style.display="block";
        
    }
    if(pos == len-1) {
        nextButton.style.display="none";
        finishBtn.style.display="block";
    }
    
}
        document.getElementById('finish-button').addEventListener('click',function(e){
                calcScore();
                stopicon.style.display= "none";
            questionParentDiv.style.display = 'none';
            console.log("finally result is = "+ totalScore);
            degreeDiv.style.display = 'block';
            degreeDiv.innerHTML= `<h1 style="text-align: center;" >`+ result1 +`</h1> your Degree is = `+ totalScore ;
            degreeDiv.style.textAlign='center'
            finishBtn.style.display= "none";
            prevButton.style.display= "none";
            nextButton.style.display= "none";
            min=sec=timer=0;
        
    });
//update when user clicks next question


//update when user clicks previous question


//initialize first set of question and choices
document.getElementById('startButton').addEventListener('click', function(e) {
  
    console.log(result)
    if(select.value==result1){
       titleExam.innerText = quizQuestions.quizName ;
    timershow();
    parentDivForSelection.style.display = 'none';
    startButton.style.display = 'none';
    nextButton.style.display = 'block';
    questionParentDiv.style.display = 'block';
    window.onload = createQuestion();
    window.onload = createChoices();
}
});


/////////////////////////////// click evsnt  next , prev & stop ////////////////////////////////

iconFinish.addEventListener('click' , function(){
      calcScore();
                stopicon.style.display= "none";
            questionParentDiv.style.display = 'none';
            console.log("finally result is = "+ totalScore);
            degreeDiv.style.display = 'block';
            degreeDiv.innerHTML= `<h1 style="text-align: center;" >`+ result1 +`</h1> your Degree is = `+ totalScore ;
            degreeDiv.style.textAlign='center'
            finishBtn.style.display= "none";
            prevButton.style.display= "none";
            nextButton.style.display= "none";
            min=sec=timer=0;

});
// 

// ///////////////////////////  display first question function  starts///////////////////////////////////
// function renderFirstQuestion() {
//     qstatment.innerText = quizQuestions.questions[i].header; // question
//     for (let x = 0; x < 4; x++) {
//         inputsArr[x].value = quizQuestions.questions[i].answers[x];
//         labelArr[x].innerText = quizQuestions.questions[i].answers[x];
//     }
// };
// //////////////////////////////////////////////////////////////////////////////////////
// function countDegrees(){
//     calculateDegree(); 
//     prevButton.style.display = 'block';
//     if (i < 10) {
//         i++;
//         renderFirstQuestion();    //هتعرض الاسئله       
//     }
//     if (i == 9 || timer==0) {        
//         nextButton.style.display="none";
//         finishBtn.style.display= "inline-block";
//         //finishButton Eventlistener
//         finishBtn.addEventListener('click', finishExam); //End of eventListener
//     }   
// }
// //////////////////////////////////////////////////////////////////////////////
// function filterInput(){ 
//      return inputsArr.filter(ele => ele.checked); }
// ////////////////////////////////////////////////////////////////////////////
// function calculateDegree(){
//        let correct = quizQuestions.questions[i].correctAnswer;
//        // هنا فلترت العناصر اللى اتعملها تشيك
//     //    var v = inputsArr.filter(ele => ele.checked); 
//     let v= filterInput();
//        // هنا بتاكد انه اختار من الانسرز  بتاع الاراى اللى هترحع من الفيلتر    
//        if (v.length === 0 ) {   
//            warningSpan.style.display = "block";
//            nextButton.preventDefault();
//        } else {
//            warningSpan.style.display = "none";           
//        }  
//        if (v[0].value == correct ) {
//            result += 10; 
//            console.log("result is = "+result);   
//        } else {
//         console.log("result is still  = "+result);             
//        }
// }

// function countDegreesPrev(){
//     i--;
//     if (i < 10) {
        
//         let correct = quizQuestions.questions[i].correctAnswer;
//         let x =filterInput();
//         console.log(x);
//         if (x[0].value == correct ) 
//         {
//         result= result-10;
//         }
//         renderFirstQuestion();    //هتعرض الاسئله       
//     }
//     if (i == 0 || timer==0) {        
//         prevButton.style.display="none";
//     }   
// }
////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
function timershow() {
    
    var timer = setInterval(function() {

        document.getElementById("timershow").innerHTML = min + ":" + sec;
        if (sec <= 0) {
            min--;
            sec = 59;
        } else {
            sec--;
        }
        if (min < 0) {
            // alert("finished") // forward to result page 
            sec = 0;
            min = 0;
            timer=0;
        }
    }, 1000);
}
/////////////////////////////////////////////////////////////////////