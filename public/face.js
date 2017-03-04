var face = new Vue({
    el: '#face',
    data: {
        face: 'Palm'
    }
});

var faceNames = ["flashed-face2","flashed-face-glasses","face-missing-moth","neutral-face","smiling-face","sad-face","face-open-mouth","face-open-mouth2","winking-face","laughing-face","laughing-face2","smirking-face","stubborn-face","neutral-face2","sad-face2","smiling-face2","smiling-face-eyebrows","grinning-face-eyebrows","sad-face-eyebrows","neutral-face-eyebrows","angry-face","worried-face","winking-face2","angry-face-eyebrows","grinning-face","sad-face3","grinning-face-eyebrows2","fake-grinning-face-eyebrows","worried-face-eyebrows","face-stuck-out-tongue","face-stuck-out-tongue2","kissing-face","grinning-face-teeth","angry-face-teeth","worried-face-teeth","grinning-face-teeth2","face-open-mouth-eyebrows","face-open-mouth-eyebrows2","angry-face-open-mouth-eyebrows","unamused-face-tightly-closed-eyes","sad-face--tightly-closed-eyes","kissing-face2","face-closed-meyes","amused-face","amused-face-closed-eyes","amused-face-closed-eyes2","face-closed-eyes-open-mouth","face-closed-eyes-open-mouth2","face-closed-eyes-open-mouth3","laughing-face3","smiling-face3","grinning-face2","sad-face4","sad-face5","sad-face-closed-eyes","sad-face6","smiling-face4","astonished-face","astonished-face2","face-moustache","face-moustache2","face-glasses","face-sunglasses","smirking-face-sunglasses"];


function setRandomFace () {
    face.face='<div class="icon-'+faceNames[rnd(0,faceNames.length)]+'"></div>';
}

setRandomFace();
setInterval(setRandomFace,600);

function rnd(min, max) { return Math.floor(Math.random() * (max - min + 1) + min); }