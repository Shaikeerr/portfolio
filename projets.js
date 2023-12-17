let data;
let keys
let burger = "off";


fetch('projets.json')
        .then((response) => response.json())
        .then((json) => {
            let data = json;
            keys = Object.keys(data)
            let projectContainer = document.querySelector('.container');
            keys.forEach(function (key) {
                let projectElement = document.createElement('div');
                projectElement.classList.add('project-box');
                projectElement.id = key;
                console.log(key);
                projectElement.innerHTML += "<h1 class='titre_projet'>" + data[key].titre + "</h1><br>";
                                projectElement.innerHTML += "<img src=" + data[key].image +" alt='image projet'><br>";
                if (window.matchMedia("(min-width: 600px)").matches) {
                    projectElement.innerHTML += "<p class='description_projet'>" + data[key].description + "</p><br>"
                  } else {
                    projectElement.innerHTML += "<p class='description_projet'>" + data[key].short_description + "</p><br>"
                  }
                projectElement.innerHTML += "<a class=bouton-lien href='projet.html?id=" + projectElement.id + "' target='_blank'> <p>Voir Plus</p> <img class='logo_lien' src='images/arrow.png'></a><br>"
              
            
                projectContainer.appendChild(projectElement);
            });
        });

document.querySelector('.burger .icon').addEventListener('click', function () {
    if (burger == "off") {
        burger = "on";
        document.querySelector('.burger-content').style.display = "block";
        document.querySelector('.burger .icon img').src = "images/cross.png";
    }
    else {
        burger = "off";
        document.querySelector('.burger-content').style.display = "none";
        document.querySelector('.burger .icon img').src = "logos/burger_icon.png";
    }
});