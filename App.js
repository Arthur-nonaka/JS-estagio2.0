const header = document.querySelector("header");
const bodyElement = document.querySelector("body");


const newElement = document.createElement("main");
const button = document.createElement("button");
const article = document.createElement("article");
const section = document.createElement("section");
const newDiv = document.createElement("div");
const footer = document.createElement("footer");

newElement.appendChild(button);
button.innerHTML = "change";

newElement.appendChild(article);
let pArticle = document.createElement("p");
pArticle.innerHTML = " <h1> TEXTO PRINCIPAL </h1>";
article.appendChild(pArticle);



let pSection = document.createElement("p");
pSection.innerHTML = "<h3> TEXTO SECUNDARIO </h3>"
newElement.appendChild(section);
section.appendChild(newDiv);
newDiv.appendChild(pSection);

bodyElement.appendChild(newElement);

newElement.style.background = "#226620";
newElement.style.height = "50vh";

const img = document.createElement("img");
bodyElement.appendChild(footer);
footer.style.background = "#0055ff";
footer.style.height = "20vh";

footer.innerHTML = "<ul> <li> Link Rodape </li> </ul>"
img.setAttribute("src", "logo.png");
img.setAttribute("alt", "");
img.setAttribute("srcset", "");
footer.appendChild(img);








let buttonOn = false;
const handleClick = () => {
    buttonOn = !buttonOn;
    if(buttonOn === true){
        header.innerHTML = "<ul> <li> Batata </li> <ul>"
    }
    else {
        header.innerHTML = "<ul> <li> Exemple 1 </li> <li> Exemple 2 </li> <li> Exemple 3 </li> <ul>"
    }
};

button.addEventListener("click", handleClick);

header.setAttribute("class", "header");
header.style.background = "#ff22f2";
header.style.padding = "3px";