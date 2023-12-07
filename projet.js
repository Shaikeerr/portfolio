let url = window.location.toString().split('=')[1]
console.log(url)

fetch('projets.json')
    .then((response) => response.json())
    .then((json) => {
        let data = json;
        console.log(data);
        data = data[url]
        document.querySelector('body .container .image').innerHTML += "<img src=" + data["image"] +" alt='image projet'><br>"
        document.querySelector('body .container .texte').innerHTML += "<h1>" + data["titre"] + "</h1><br>"
        document.querySelector('body .container .texte').innerHTML += "<p>" + data["description"] + "</p><br>"
        document.querySelector('body .container .texte').innerHTML += "<a href=" + data["lien"] + ">" + data["lien"] + "</a><br>"
    });
