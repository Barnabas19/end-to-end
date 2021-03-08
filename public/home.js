const section = document.querySelector(".section");
const button = document.querySelector(".button");

button.addEventListener("click", function(){
    const content = fetch("http://localhost:3000/");
    content.then((res)=>{
    const resJSON = res.json();
    return resJSON;
    })
    .then((resJSON)=>{
        section.innerHTML += resJSON.content;
    })
})