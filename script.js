const shareContainer = document.getElementById("share-container");
const button = document.getElementById("btn");
const img = document.querySelector(".share-btn > img");

button.addEventListener("click",()=>{
    shareContainer.classList.toggle("container-popup");
    button.classList.toggle("button-bg");
    button.classList.toggle("button-align");
    img.classList.toggle("img-filter");
});