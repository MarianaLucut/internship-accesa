



window.addEventListener("load", function () {
    var tabs = document.querySelectorAll('nav a')
    var pannels = document.querySelectorAll('.tab-pane')

    for (var i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener("click", clickHandler);
    }

    function clickHandler(event) {
        event.preventDefault();

        for (var i = 0; i < tabs.length; i++) {
            pannels[i].classList.remove('active');
        }

        var activePannelId = event.target.getAttribute('href');
        document.querySelector(activePannelId).classList.add('active');

    };
});



(function () {
    const myQuestions = [
        {
            question: "Who is the strongest?",
            answers: {
                a: "Superman",
                b: "The Terminator",
                c: "Waluigi, obviously"
            },
            correctAnswer: "c"
        },
        {
            question: "What is the best site ever created?",
            answers: {
                a: "SitePoint",
                b: "Simple Steps Code",
                c: "Trick question; they're both the best"
            },
            correctAnswer: "c"
        },
        {
            question: "Where is Waldo really?",
            answers: {
                a: "Antarctica",
                b: "Exploring the Pacific Ocean",
                c: "Sitting in a tree",
                d: "Minding his own business, so stop asking"
            },
            correctAnswer: "d"
        }
    ];


    for (var i = 0; i < myQuestions.length; i++) {
        var container = document.getElementById('quiz');

        var questionBox = document.createElement("div");
        var questionText = document.createElement("p");
        var questionAnswers = document.createElement("div");

        questionText.innerHTML = myQuestions[i].question;

        for (letter in myQuestions[i].answers) {
            questionAnswers.innerHTML +=
                `<div>
                    <input class="answer-detail" type="radio" name="question${i}" value="${letter}">
                    ${letter} .
                    ${myQuestions[i].answers[letter]}
                </div><br>`
            
        }


        questionBox.appendChild(questionText);
        questionBox.appendChild(questionAnswers);
        container.appendChild(questionBox);

    }
})();

