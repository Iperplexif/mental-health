// Github element hover

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let GitHubCatinCorner = document.querySelector("github-corner").shadowRoot;
let GitHubCatinTheCorner = GitHubCatinCorner.lastChild;

let GithubSVG = GitHubCatinTheCorner.querySelector("svg");

async function GithubSign (event) {
    let start = Date.now();

    if (event.type == 'mouseenter') {
        document.getElementById("GithubSign-1").classList.add("GithubSignHover");
        document.getElementById("GithubSign-1").classList.remove("GithubSignHoverOut");
      }
      if (event.type == 'mouseout') {
        document.getElementById("GithubSign-1").classList.remove("GithubSignHover");
        document.getElementById("GithubSign-1").classList.add("GithubSignHoverOut");  
        
    }
}

GithubSVG.addEventListener("mouseenter", GithubSign);
GithubSVG.addEventListener("mouseout", GithubSign);

let Survey = document.getElementById("survey");
//if JavaScript is enabled at all...

Survey.classList.remove("survey-open");
Survey.classList.add("survey-closed");

async function SurveyOpen (event) {
    Survey.classList.remove("survey-closed");
    Survey.classList.add("survey-open");
}

async function SurveyClose (event) {
    Survey.classList.remove("survey-open");
    Survey.classList.add("survey-closed");
}

async function NoThanks (event) {
    Survey.classList.remove("survey-collapsed");
    Survey.classList.add("survey-nothanks");
}

//Survey.addEventListener("mouseenter", SurveyOpen);
//Survey.addEventListener("mouseout", SurveyClose);

// Maybe implement a counter in the background for it to open up eventually....

async function SurveyPopup (event) {

    setTimeout( ()=> {
        SurveyOpen();

    }, 5000)

    setTimeout(() => {
        NoThanks();
        let no = new DocumentFragment();
        let a = document.createElement("button");
        let p = document.createElement("p");

        a.append(p);
        p.innerHTML = "No Thanks.";
        p.style.padding = "0px";

        a.style.position = "relative";
        a.style.top = "-6.5em";
        a.style.padding = "0px 10px";
        a.style.backgroundColor = "#ffffff00";
        a.style.border = "0px solid red";
        a.style.textDecoration = "underline";
        no.append(a);

        a.id = "no-t";

        Survey.append(no);

        document.getElementById("no-t").addEventListener("mousedown", () => {
            Survey.style.opacity = "0%";
            p.innerHTML = "Got it.";
        });
        document.getElementById("no-t").addEventListener("keypress", (event) => {

            if (event.key === "Enter") {
                // Cancel the default action, if needed
                event.preventDefault();
                // Trigger the button element with a click
                Survey.style.opacity = "0%";
                p.innerHTML = "Got it.";
              }
        });
    }, 7500);
    
}

SurveyPopup();