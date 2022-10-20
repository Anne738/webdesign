// const out = document.getElementById("output");
// let paragraph;

// function buttonClick(){
//     fetch("http://localhost:3000/pencils").then(
//         (response)=>{
//             return response.text();
//         }
//     ).then((text)=>{
//         let pencilsArray = JSON.parse(text);
//         pencilsArray.forEach(element => {
//             paragraph = document.createElement('p');
//             paragraph.innerText=`id: ${element.id} name: ${element.name} hardness: ${element.hardness} `;
//             out.appendChild(paragraph);
//         });
//     })
// }

async function addpencils(id, name, hardness, img) {
    let pen = document.createElement('div')
    pen.className = "box";
    let pencilContainer = document.querySelector('.items-container')

    let pencildiv = `

        <h3 class="i-title">${id}. ${name}</h3>
        <div class="content">
            <span>Hardness:</span>
            <p class="i-type">${hardness}</p>
        </div>
        <img src="${img}" alt="" class="i-image">`
    pen.innerHTML = pencildiv;
    pencilContainer.append(pen);
}

async function getpencils() 
{
    fetch("http://localhost:3000/pencils").then(
        (res)=>{
            return res.text()
        }
    ).then((text)=>{
        let teaArray = JSON.parse(text)
        teaArray.forEach(el => {

            id = `${el.id}`
            nam =`${el.name}`
            hardness = `${el.hardness}`
            img = `${el.image_link}`

            addpencils(id, nam, hardness, img)
        })
    })
}

getpencils();