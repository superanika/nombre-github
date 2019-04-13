'use strict';
const input = document.querySelector('.input');
const button = document.querySelector('.btn');
const nombre = document.querySelector('.nombre');


function getName() {
    const userName = input.value;

    fetch(`https://api.github.com/users/${userName}`)
    .then(response => response.json())
    .then(data => {

        console.log(data);
        console.log(data.name);
        const splitName = data.name.split(" ");
        const letters = splitName[0].split("");
        console.log(letters);
        for (const singleLetter of letters){
            nombre.innerHTML += `<li>${singleLetter}</li>`;
        }
        
        
    });
}

function nombreGithub() {
    getName();
}


button.addEventListener('click', nombreGithub);