const out = document.getElementById("output");
let paragraph;

function buttonClick(){
    fetch("http://localhost:3000/users").then(
        (response)=>{
            return response.text();
        }
    ).then((text)=>{
        let pancilsArray = JSON.parse(text);
        pancilsArray.forEach(element => {
            paragraph = document.createElement('p');
            paragraph.innerText=`id: ${element.id} name: ${element.name} hardness: ${element.hardness} image_link: ${element.image_link} `;
            out.appendChild(paragraph);
        });
    })
}