const out = document.getElementById("output");
let paragraph;

function buttonClick(){
    fetch("http://localhost:3000/pencils").then(
        (response)=>{
            return response.text();
        }
    ).then((text)=>{
        let pencilsArray = JSON.parse(text);
        pencilsArray.forEach(element => {
            paragraph = document.createElement('p');
            paragraph.innerText=`id: ${element.id} name: ${element.name} hardness: ${element.hardness} image_link: ${element.image_link} `;
            out.appendChild(paragraph);
        });
    })
}