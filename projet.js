let url = window.location.toString().split('=')[1]
let data;
console.log(url)

    fetch('projets.json')
        .then((response) => response.json())
        .then((json) => {
            let data = json;
            data = data[url]


            document.querySelector('.image_projet').innerHTML += "<img src=" + data["image"] +" alt='image projet'><br>"
            document.querySelector('.liens_projet').innerHTML += "<a href=" + data["liens"]["site"] +"> <img class='logo_lien' src='logos/website.png'><p>Site Web</p> </a><br>"
            if (data["liens"]["github"] != null) {
                document.querySelector('.liens_projet').innerHTML += "<a href=" + data["liens"]["github"] +"> <img class='logo_lien' src='logos/github.png'><p>Github</p> </a><br>"
            }
            document.querySelector('body .container .texte').innerHTML += "<h1>" + data["titre"] + "</h1><br>"
            document.querySelector('body .container .texte').innerHTML += "<p>" + data["description"] + "</p><br>"
            document.querySelector('body .container .texte').innerHTML += "<a href=" + data["lien"] + ">" + data["liens"]["site"] + "</a><br>"
            for (const i in data["technos"]) {
                    const techno = data["technos"][i];
                    const lien_techno = data["links"][i];
                    document.querySelector('.technos').innerHTML += "<a href=" + lien_techno + "><img src=" + techno + " alt='image techno'></a><br>"
                    
            }
            document.querySelector('.showcase').innerHTML += "<img src=" + data["showcase"]["image"] +" alt='showcase'><br>"
            document.querySelector('.showcase').innerHTML += "<p>" + data["showcase"]["legende"] +"</p><br>"
            
            
        });


