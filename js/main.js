'use strict';
const input = document.querySelector('.input');
const button = document.querySelector('.btn');
const name = document.querySelector('.user_name');


function getName() {
    const userName = input.value;

    fetch(`https://api.github.com/users/${userName}`)
    .then(response => response.json())
    .then(data => {
        console.log(data.name);
        if (data.name === null ) {
            name.innerHTML = "Ups, este usuario no tiene nombre en su perfil";
        }else if(data.name === undefined) {
            name.innerHTML = "Este usuario no existe";
        } else {
            const splitName = data.name.split(" ");
            const letters = splitName[0].split("");
            for (const singleLetter of letters){
                name.innerHTML += `<li class="letter">${singleLetter}</li>`;
            }
        }      
        
    });
}

function nombreGithub() {
    name.innerHTML = "";
    getName();
}


button.addEventListener('click', nombreGithub);