window.addEventListener("load", function() {

const questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        a: 'js',
        b: 'javascript',
        c: 'scripting',
        d: 'script',
        answer: 'script'
    },
    {
        question: 'What is the correct JavaScript syntax to change the content of an HTML element?',
        a: 'document.getElementById("demo").innerHTML = "Hello World!;"',
        b: 'document.getElement("p").innerHTML = "Hello World!";',
        c: '#demo.innerHTML = "Hello World!";',
        d: 'document.getElementByName("p").innerHTML = "Hello World!";',
        answer: 'document.getElementByName("p").innerHTML = "Hello World!";'
    }, 
    {
        question: 'How do you write "Hello World" in an alert box?',
        a: 'msgBox("Hello World");',
        b: 'msg("Hello World");',
        c: 'alertBox("Hello World");',
        d: 'alert("Hello World");',
        answer: 'alert("Hello World");'
    },
    {
        question: 'How to write an IF statement in JavaScript?',
        a: 'if i == 5 then',
        b: 'if (i == 5)',
        c: 'if i = 5 then',
        d: 'if i = 5',
        answer: 'if (i == 5)'
    }
];


(function displayQuestions(questions) {

    for (let i = 0; i < questions.length; i++ ) {

        let mainSection = document.getElementsByTagName('section')[0];
        let template = document.createElement('div');
        template.classList.add('question');
        mainSection.appendChild(template);

        template.innerHTML =
           `<p><strong>${parseInt(questions.indexOf(questions[i])) + 1}) ${questions[i].question}</strong></p>
            <form>
                a) <input type="radio" name="rb" value="a"/> ${questions[i].a} <br/>
                b) <input type="radio" name="rb" value="b"/> ${questions[i].b} <br/>
                c) <input type="radio" name="rb" value="c"/> ${questions[i].c} <br/>
                d) <input type="radio" name="rb" value="d"/> ${questions[i].d} <br/>
            </form>`;
    }
})(questions);

let tabs = document.querySelectorAll('nav > a');
let panels = document.querySelectorAll('tabs');

for (let i = 0; i < tabs.length; i++ ) {
    tabs[i].addEventListener('click', clickHandler); 
}

function clickHandler(e) {
    e.preventDefault();
    console.log(e);

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active-button');
    }

    let clickedTab = e.currentTarget;
    clickedTab.classList.add('active-button');

    for (var i = 0; i < panels.length; i++) {
        panels[i].classList.remove('active');
    }
      
    let activePanelId = event.target.getAttribute('href');

    console.log(event.target.getAttribute('href'))
    document.querySelector(activePanelId).classList.add('active-button');

}



}); 