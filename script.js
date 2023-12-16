let data;
let data_skills;
let i = 0;
let keys;
let keys_skills;
let derniersProjetsKeys;

document.addEventListener('DOMContentLoaded', function () {
    let musique = new Audio('Music/Fortressoflies.mp3');

    fetch('projets.json')
        .then((response) => response.json())
        .then((json) => {
            let data = json;
            keys = Object.keys(data)
            derniersProjetsKeys = keys.slice(-3);
            derniersProjetsKeys.reverse();
            console.log(keys, derniersProjetsKeys)
            console.log(data);
            let projectContainer = document.querySelector('#projects .content');

            derniersProjetsKeys.forEach(function (key) {
                let projectElement = document.createElement('div');
                projectElement.classList.add('project-box');
                projectElement.id = key;
                console.log(key);
                projectElement.style.backgroundImage = 'url("' + data[key].image + '")';
                projectElement.innerHTML += "<p class='img-text'>" + data[key].titre + "</p><br>";

                projectElement.style.borderColor = data[key].couleur  
                
                // Ajouter un gestionnaire d'événements clic
                projectElement.addEventListener('click', function () {
                    console.log(key);
                    window.open("projet.html?id=" + key, '_blank');
                });

                projectContainer.appendChild(projectElement);
            });
        });
    document.querySelector('.play_pause').addEventListener('click', play_pause);
    document.querySelector('.nav-item img').addEventListener('click', play_pause);

    function play_pause() {
        let element = document.querySelector('.play_pause img');
        let nav_element = document.querySelector('.nav-item img');
        console.log(element.src);
        if (element.src.match("play")) {
            element.src = "images/pause.png";
            nav_element.src = "images/music_on.png";
            document.querySelector('.audio-player p').style.opacity = 0;
            musique.play();
            musique.volume = 0.5;
        } else {
            element.src = "images/play.png";
            nav_element.src = "images/music_off.png";
            document.querySelector('.audio-player p').style.opacity = 1;
            musique.pause();
        }
    }
});

fetch('skills.json')
.then((response) => response.json())
.then((json) => {
    let data_skills = json;
    keys_skills = Object.keys(data_skills)
    console.log(keys_skills, data_skills);

    let skillsContainer = document.querySelector('#skills .content');

    keys_skills.forEach(function (key) {
        // Créer la div principale
        let skillElement = document.createElement('div');
        skillElement.classList.add('progress-container');
    
        // Ajouter une image à la div
        let imageElement = document.createElement('img');
        imageElement.src = data_skills[key].image;
        skillElement.appendChild(imageElement);

        // Créer la barre de progression
        let progressBar = document.createElement('progress');
        progressBar.value = data_skills[key].percentage;
        progressBar.max = 100;
        skillElement.appendChild(progressBar);
    
        // Ajouter la div à votre document (ajuster selon votre structure HTML)
        skillsContainer.appendChild(skillElement);
    });
    
});



