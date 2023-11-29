let musique = new Audio(
    'https://cdn.discordapp.com/attachments/1164684835911118981/1179243063768518797/Coffee_Talk_OST_1.mp3?ex=657912af&is=65669daf&hm=bb5b5bcda9ee4f9767eee98743256c7abbef299fbd26c68a442aa997a64e504c&'
)

document.querySelector('.play_pause').addEventListener('click', play_pause);
document.querySelector('.nav-item img').addEventListener('click', play_pause);

function play_pause() {
        let element = document.querySelector('.play_pause img');
        let nav_element = document.querySelector('.nav-item img');
        console.log(element.src);
        if (element.src.match("play")) {
            element.src = "images/pause.png";
            nav_element.src = "images/music_off.png";
            document.querySelector('.audio-player p').style.opacity = 0;
            musique.play();
            musique.volume = 0.1;
        }
        else {
            element.src = "images/play.png";
            nav_element.src = "images/music_on.png";
            document.querySelector('.audio-player p').style.opacity = 1;
            musique.pause();
        }
}

