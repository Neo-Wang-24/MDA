function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "/5  " + quiz.result + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};



// create questions
var questions = [
    new Question("When was the 1st Camaro launched?", ["1965", "1967","1966", "1969"], "1966"),
    new Question("Which generation is the newest Camaro?", ["5th", "7th", "6th", "8th"], "6th"),
    new Question("Which one is not the product of Camaro", ["SS", "LL","LT", "LS"], "LL"),
    new Question("Where was the Camaro produced?", ["UK", "Canada", "USA", "France"], "USA"),
    new Question("Camaro belongs to ____.", ["Ferrari", "BMW", "Ford", "Chevrolet "], "Chevrolet ")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();





