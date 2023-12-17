let data;

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
                projectElement.innerHTML += "<img src=" + data[key].image +" alt='image projet'><br>"
                projectElement.innerHTML += "<h1 class='titre_projet'>" + data[key].titre + "</h1><br>";
                projectElement.innerHTML += "<p class='description_projet'>" + data[key].description + "</p><br>";
                projectElement.innerHTML += "<a class=bouton-lien href=" + data[key].liens.site +"> <img class='logo_lien' src='logos/website.png'><p>Site Web</p> </a><br>"
              
                
                // Ajouter un gestionnaire d'événements clic
                projectElement.addEventListener('click', function () {
                    console.log(key);
                    window.open("projet.html?id=" + key, '_blank');
                });

                projectContainer.appendChild(projectElement);
            });
        })