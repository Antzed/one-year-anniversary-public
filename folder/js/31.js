alert("Use Round Button to play/pause the audio \nUse Slider to control volume ");

let submit = document.getElementById('submit')

let audio = document.getElementById('mp3');
const fileSelector = document.getElementById('songName');
// const source = document.getElementById("audioSource")
fileSelector.addEventListener('change', (event) => {
    const fileList = event.target.files;
    songName = fileList[0].name
    console.log(songName);
    let newSource = "../songs/"+songName;
    audio.src = newSource;
  });

var state = 0;
$(window).load(function () {
    $(".loader").hide();
    $(".player").show();
    
});
$(document).ready(function () {
    $(".power").click(function () {
        
        $(".record").toggleClass('on');
        $(".stick").toggleClass('play');
        if (state == 0) {
            setTimeout(function () {
                $(".mysong")[0].play();
            }, 1000);
            state = 1;
        }
        else {
            $(".mysong")[0].pause();
            state = 0;
        }
        $(".slider").change(function () {
            $(".mysong")[0].volume = this.value;
        });
    });

});






