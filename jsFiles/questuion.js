

////////////////////////////////////////////////////
// literal object starts
let quizQuestions = {
        studentName: "mohamed Ahmed",
        quizName: "java script",
        quizTime: 30,
        totalDegree: 100,
        questions: [{
                header: "what is 3*5",
                answers: ["2", "15", "6", "8"],
                correctAnswer: "15",
                degree: 10
            },
            {
                header: "what is 2*1",
                answers: ["2", "50", "98", "8"],
                correctAnswer: "2",
                degree: 10
            },
            {
                header: "what is 8*5",
                answers: ["10", "40", "100", "8"],
                correctAnswer: "40",
                degree: 10
            },
            {
                header: "what is 11*2",
                answers: ["22", "369", "9", "8"],
                correctAnswer: "22",
                degree: 10
            },
            {
                header: "what is 9+6",
                answers: ["3", "5", "15", "8"],
                correctAnswer: "15",
                degree: 10
            },
            {
                header: "what is 1+3",
                answers: ["9", "56", "4", "7"],
                correctAnswer: "4",
                degree: 10
            },
            {
                header: "what is 5*4",
                answers: ["32", "10", "46", "20"],
                correctAnswer: "20",
                degree: 10
            },
            {
                header: "what is 6-2",
                answers: ["0", "4", "7", "23"],
                correctAnswer: "4",
                degree: 10
            },
            {
                header: "what is 19-9",
                answers: ["4", "89", "56", "10"],
                correctAnswer: "10",
                degree: 10
            },
            {
                header: "what is 10/2",
                answers: ["62", "85", "5", "7"],
                correctAnswer: "5",
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

// icon for stop exam
let iconFinish= document.getElementsByClassName("fa-solid fa-clock")[0];
let result = 0;
let sec = 0;
let min = 30;
let timer=1;
//////////////////////////////////// strtButton EventListener/////////////////////////////////////////////////////////

    // studentName.innerText= hi; 
document.getElementById('startButton').addEventListener('click', function(e) {
    timershow();
    parentDivForSelection.style.display = 'none';
    startButton.style.display = 'none';
    nextButton.style.display = 'block';
    questionParentDiv.style.display = 'block';
    renderFirstQuestion();
});

/////////////////////////////// click evsnt  next , prev & stop ////////////////////////////////
nextButton.addEventListener('click', function(e) {
    countDegrees();
    inputsArr.filter(ele => ele.checked = false);                  // دى بقا الحل بترجه العنصر اللى اتعمله تشيك لفلس عشان مينقلش للى بعده بس كدا ربنا معاك ياصديقى ف الفنش 
});
prevButton.addEventListener('click', function(e) {
    countDegreesPrev();
    inputsArr.filter(ele => ele.checked = false);                  // دى بقا الحل بترجه العنصر اللى اتعمله تشيك لفلس عشان مينقلش للى بعده بس كدا ربنا معاك ياصديقى ف الفنش 
});
iconFinish.addEventListener('click' , 
finishExam , { once: true });

///////////////////////////  display first question function  starts///////////////////////////////////
function renderFirstQuestion() {
    qstatment.innerText = quizQuestions.questions[i].header; // question
    for (let x = 0; x < 4; x++) {
        inputsArr[x].value = quizQuestions.questions[i].answers[x];
        labelArr[x].innerText = quizQuestions.questions[i].answers[x];
    }
};
//////////////////////////////////////////////////////////////////////////////////////
function countDegrees(){
    calculateDegree(); 
    prevButton.style.display = 'block';
    if (i < 10) {
        i++;
        renderFirstQuestion();    //هتعرض الاسئله       
    }
    if (i == 9 || timer==0) {        
        nextButton.style.display="none";
        finishBtn.style.display= "inline-block";
        //finishButton Eventlistener
        finishBtn.addEventListener('click', finishExam); //End of eventListener
    }   
}
//////////////////////////////////////////////////////////////////////////////
function filterInput(){ 
     return inputsArr.filter(ele => ele.checked); }
////////////////////////////////////////////////////////////////////////////
function calculateDegree(){
       let correct = quizQuestions.questions[i].correctAnswer;
       // هنا فلترت العناصر اللى اتعملها تشيك
    //    var v = inputsArr.filter(ele => ele.checked); 
    let v= filterInput();
       // هنا بتاكد انه اختار من الانسرز  بتاع الاراى اللى هترحع من الفيلتر    
       if (v.length === 0 ) {   
           warningSpan.style.display = "block";
           nextButton.preventDefault();
       } else {
           warningSpan.style.display = "none";           
       }  
       if (v[0].value == correct ) {
           result += 10; 
           console.log("result is = "+result);   
       } else {
        console.log("result is still  = "+result);             
       }
}

function countDegreesPrev(){
    if (i < 10) {
        i--;
        let correct = quizQuestions.questions[i].correctAnswer;
        let x=filterInput();
        if (x[0].value == correct ) 
        {
        result= result-10;
        }
        renderFirstQuestion();    //هتعرض الاسئله       
    }
    if (i == 0 || timer==0) {        
        prevButton.style.display="none";
    }   
}
////////////////////////////////////////////////////////////////////////////
function finishExam(e){
    calculateDegree();
    questionParentDiv.style.display = 'none';
    console.log("finally result is = "+ result);
    degreeDiv.style.display = 'block';
    degreeDiv.innerHTML= `<h1 style="text-align: center;" >`+ hi +`</h1> your Degree is = `+ result ;
    finishBtn.style.display= "none";
    prevButton.style.display= "none";
    nextButton.style.display= "none";
    min=sec=timer=0;
}
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