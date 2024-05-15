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

