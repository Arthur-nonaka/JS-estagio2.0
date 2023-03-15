const header = document.querySelector("header");
const bodyElement = document.querySelector("body");


const newElement = document.createElement("main");
const button = document.createElement("button");
const article = document.createElement("article");
const section = document.createElement("section");
const newDiv = document.createElement("div");
const footer = document.createElement("footer");
const inputName = document.createElement("input");
const inputLink = document.createElement("input");
const buttonLink = document.createElement("button");
const LinkPage = document.createElement("div");
const InputPage = document.createElement("div");



newElement.appendChild(button);
button.innerHTML = "change ";

newElement.appendChild(article);
article.innerHTML = " <h1><p> TEXTO PRINCIPAL </p></h1>";



section.innerHTML = "<div><h3> <p>TEXTO SECUNDARIO </p></h3></div>"
newElement.appendChild(section);

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


newElement.appendChild(LinkPage);
LinkPage.style.display = "flex";
LinkPage.style.flexDirection = "column";
LinkPage.style.margin = "20px";


const handleSubmit = () => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.innerHTML = inputName.value;
    a.setAttribute("href", inputLink.value);
    a.setAttribute("target", "_blank");
    ul.appendChild(li);
    li.appendChild(a);
};



buttonLink.addEventListener("click", handleSubmit);
buttonLink.innerHTML = "Criar";


LinkPage.appendChild(InputPage);
InputPage.appendChild(inputName);
InputPage.appendChild(inputLink);
InputPage.appendChild(buttonLink);

const ul = document.createElement("ul");
LinkPage.appendChild(ul);















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