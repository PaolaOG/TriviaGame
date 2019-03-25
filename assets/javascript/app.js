 $(document).ready(function() {

    function openingPage() {

        openScreen = "<p class='text-center main-button-container'><a class='btn btn-warning btn-md btn-block start-button' href='#' role='button'>Start Game</a></p>";

        $("#mainArea").append(openScreen);

    }

    openingPage();

    $("#mainArea").on("click", ".start-button", function(event){

        event.preventDefault();  
        
        $('.jumbotron').hide();

            
        generateQuestions();

    
        timerWrapper();
    }); 

    $("body").on("click", ".answer", function(event){


        selectedAnswer = (this.text);
        console.log(selectedAnswer);

            if(selectedAnswer === correctAnswers[questionCounter]){
            
                clearInterval(theClock);
                generateWin();
            }
            else{
                clearInterval(theClock);
                generateLoss();
            }

    }); 

    $("body").on("click", ".reset-button", function(event){


        resetGame();

    }); 

    });

    function timeoutLoss() {

        unansweredTally++;

        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>"; 

        $("#mainArea").html(gameHTML);

        setTimeout(wait, 3000);  
    }

    function generateWin() {

        correctTally++;

        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>";

        $("#mainArea").html(gameHTML);

        
        
        setTimeout(wait, 3000);  
    }

    function generateLoss() {

        incorrectTally++;

        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>";

        $("#mainArea").html(gameHTML);

        setTimeout(wait, 3000); 

    }

    function generateQuestions() {

        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p>";

        $("#mainArea").html(gameHTML);

    }; 
    

    function wait() {


    questionCounter < 4 ? 

        (questionCounter++,

        generateQuestions(),

        counter = 30,

        timerWrapper() ):

       (finalScreen())

    }; 

    function timerWrapper() {

        theClock = setInterval(thirtySeconds, 1000);

        function thirtySeconds() {

            if (counter === 0) {

                clearInterval(theClock);

                timeoutLoss();

            }

            if (counter > 0) {

                counter--;

            }

            $(".timer").html(counter);

        }

    }

    function finalScreen() {

        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Done, Let's see how 'you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-warning btn-md btn-block reset-button' href='#' role='button'>Reset Game!</a></p>";

        $("#mainArea").html(gameHTML);

    }

    
    function resetGame() {

        questionCounter = 0;

        correctTally = 0;

        incorrectTally = 0;

        unansweredTally = 0;

        counter = 30;

        generateQuestions();

        timerWrapper();

    }

    var openScreen;

    var gameHTML;

    var counter = 30;

    var questionArray = 

    [ "Which Disney princess was created first?", 

    "With who did Cinderella lived after her dad died?", 

    "Which Disney princess was saved by her sister?", 

    "From what movie is the Hakuna matata song?", 

    "Cruella de Vil is the villian in which movie?" ]; 

    var answerArray = [

        ["Snow White", "Cinderella", "Sleeping Beauty"], 

        ["Dwarfs","Mom","Step mom and step sisters"], 

        ["Aurora", "Elsa", "Ana"], 

        ["Frozen", "The Lion King", "Toy Story 1"], 

        ["Snow White", "101 Dalmatians", "Tangled"], ];

    var correctAnswers = 

    [ "Snow White", 

    "Step mom and step sisters", 

    "Ana", 

    "The Lion King", 

    "101 Dlamatians", ];

    var questionCounter = 0;

    var selectedAnswer;

    var theClock;

    var correctTally = 0;

    var incorrectTally = 0;

    var unansweredTally = 0;

    

    