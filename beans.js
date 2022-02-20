const questions0 = ["Held hands romantically?" ,"Been on a date?" ,"Been in a relationship?" ,"Kissed a non-family member on the lips?" ,"Spent the night with a MPS (Doesn't need to be sexual)?" ,"Urinated in public?" ];
const questions1 = ["Danced without leaving room for Jesus?","Kissed in public?" ,"French kissed?" ," French kissed in public?" ,"Kissed on the Neck?" ,"Kissed horizontally?" ,"Given or received a hickey?" ,"Kissed or been kissed on the breast?" ,"Kissed someone below the belt?" ,"Kissed for more than two hours consecutively?" ,"Masturbated?" ,"Masturbated to porn?" ,"Been caught masturbating?" ,"Masturbated with an inanimate object?" ,"Seen or read pornographic material?" ,"Massaged or been massaged sensually?" ,"Receved a sexually explicit photographs?" ,"Purchased contraceptives?" ,"Used a sex toy?" ,"Ingested alcohol in a non-religious context?" ,"Been sent to the office of a principal, dean or judicial affairs representative for a disciplinary infraction?" ,"Been put on disciplinary probation or suspended?" ,"Had the police called on you?" ,"Committed an act of vandalism?" ,"Had sexual intercourse?" ];
const questions2 = ["Stayed in a toxic relationship?", "Played a game involving stripping?" ,"Masturbated while someone else was in the room?" ,"Seen more than 10 pieces of porn?" ,"Seen more than 5 people naked (excludes porn)?" ,"Undressed or been undressed by a MPS (member of the preferred sex)?" ,"Showered with a MPS?" ,"Fondled or had your butt cheeks fondled?" ,"Fondled or had your breasts fondled?" ,"Fondled or had your genitals fondled?" ,"Had an orgasm due to someone elseâ??s manipulation?" ,"Engaged in sexually explicit activity over video chat?" ,"Gave oral sex?" ,"Received oral sex?" ,"Used a sex toy with a partner?" ,"Been walked in on while engaging in a sexual act?" ,"Cheated on a significant other during a relationship?" ,"Faked sobriety to parents or teachers?" ,"Had severe memory loss due to alcohol?" ,"Played a drinking game?" ,"Been drunk?" ,"Gone skinny-dipping in a group?" ,"Gone streaking?" ,"Seen a stripper?" ,"Been arrested?" ,"Been convicted of a crime?" ,"Had sexual intercourse three or more times in one night?" ,"Had sex with more than one person in a day?" ,"Had an STI?" ,"Had a threesome?" ,"Attended an orgy?" ,"Had sexual intercourse with five or more partners?" ,"Had anal sex?" ,"Had a pregnancy scare?" ,"Knowingly engaged in bestiality?" ,"Had sexual intercourse 10 or more times?" ,"Had sexual intercourse in public?" ,"?" ];

const masterQuestions = [questions0, questions1, questions2];

const id = "test";

function makeTest(){

    animate0(); // move logo to left and hide about/ legal

    document.getElementById("start").remove();  //remove the start test button

    //Instructions
    const inst = document.createElement("h2");
    inst.setAttribute("class", "instructions");
    inst.innerHTML = "Check all that apply";

    const element = document.getElementById(id); //adds instruction
    element.appendChild(inst);


    //test creation
    var index = 0;
    for(var j = 0; j < masterQuestions.length; j++){
        for (var i = 0; i < masterQuestions[j].length; i++){
            index++;
            makeQuestion(index, masterQuestions[j][i], j);
        }
    }

    //finished button
    const buttonF = document.createElement("button");
    buttonF.setAttribute("type", "button");
    buttonF.setAttribute("class", "finish");
    buttonF.setAttribute("onclick", "showResults()");
    buttonF.innerHTML = "Finish";
    element.appendChild(buttonF);
}

function makeQuestion(num, text, level){ //level shows point value

    const question = document.createElement("div"); //div holds each part of q
    question.setAttribute("class", "question");


    const qnum = document.createElement("label"); //q number
    qnum.innerHTML = num;
    qnum.setAttribute("class", "qnum");
    question.appendChild(qnum);


    const box = document.createElement("input"); //check box
    box.type = "checkbox";
    box.setAttribute("class", "boxes");
    question.appendChild(box);

    const q = document.createElement("label"); //question
    q.innerHTML = text;
    q.setAttribute("class", "text");
    question.appendChild(q);


    const element = document.getElementById(id); //adds div to form main holder
    element.appendChild(question);
}

function showResults(){

    //alert("it works");

    var score = 0;
    var inputs = document.querySelectorAll('.boxes');
    
    /*inputs.forEach(asn => {
        //console.log(asn);
        if(asn.checked){score++;}
    });*/

    for(var i = 0; i < inputs.length; i++){
        var hold = inputs[i];
        if(hold.checked){
            if(i < questions0.length){score++;}
            else if(i < questions1.length){score += 2;}
            else if(i < questions2.length){score += 5;}
        }
    }

    //removes test
    const element = document.getElementById(id);
    element.remove();

    //create score text, first makes new div then makes text
    const scoreContainer = document.createElement("div"); //div to let
    scoreContainer.setAttribute("class", "scoreContainer");//us center the text

    const scoreText = document.createElement("h2");
    scoreText.setAttribute("class", "score");
    scoreText.innerHTML = (100 - score);
    scoreContainer.appendChild(scoreText);

    //alert(score);

    const bodyElement = document.getElementById("body");
    bodyElement.appendChild(scoreContainer);

    //finished retest
    const buttonF = document.createElement("button");
    buttonF.setAttribute("type", "button");
    buttonF.setAttribute("class", "retest");
    //buttonF.setAttribute("href", "index.html");
    //buttonF.setAttribute("id", "");
    buttonF.setAttribute("onclick", "mainPage()");
    buttonF.innerHTML = "Retest";
    bodyElement.appendChild(buttonF);
}

function mainPage(){
    location.reload();
}

//Animation functions

//window.addEventListener("scroll", animateLogo);
// To check the scroll position on page load


function animate0(){
    document.getElementById("logo").className = "right";

    const holder = [document.getElementById("top0"), document.getElementById("top1")];

    for(var i = 0; i < holder.length; i++){
        holder[i].className =  "optsOff";
        //holder[i].style.display = "none";
    }

    /*

    var windowHeight = window.innerHeight;
    var elementTop = logo.getBoundingClientRect().top;
    var elementVisible = 150;
    
    if (elementTop < windowHeight - elementVisible) {
        logo.classList.add("active");
    } else {
        logo.classList.remove("active");
    }

    */
}