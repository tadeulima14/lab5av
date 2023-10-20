document.addEventListener("DOMContentLoaded", init);

function init() {


    //relable html variables in js using the id tags
    const myVideo = document.getElementById('video-1'); //start with the video element
    const playButton = document.getElementById('play_button');
    const pauseButton = document.getElementById('pause_button');
    const muteButton = document.getElementById('mute');
    const unmuteButton = document.getElementById('unmute');
    const beginningButton = document.getElementById('rewind');
    const endButton = document.getElementById('end');
    const videoSelect = document.getElementById('video_select');
    const musicSelect = document.getElementById('music-select');
    const changeBgColorButton = document.getElementById('changeBgColor');
    

    //define event listner action with variables
    playButton.addEventListener('click', (e) => { 
    myVideo.play();
    });

    pauseButton.addEventListener('click', (e) => {
    myVideo.pause();
    });

    muteButton.addEventListener('click', (e) => {
    myVideo.muted = true;
    });

    unmuteButton.addEventListener('click', (e) => {
    myVideo.muted = false;
    });

    beginningButton.addEventListener('click', (e) => {
    myVideo.currentTime = 0; //current time 0 used to set video to start 
    });

    endButton.addEventListener('click', (e) => {
    myVideo.currentTime = myVideo.duration; //duration used to jump to the end of media 
    });

    videoSelect.addEventListener('change', (event) => {
    let selectedVideo = event.target.value;
        myVideo.src = selectedVideo;
        myVideo.load();
        //myVideo.play(); autoplays when vid is loaded
    
    });

    musicSelect.addEventListener('change', (event) => {
        let selectedMusic = event.target.value;
            myVideo.src = selectedMusic;
            musicSelect.load();
            //myVideo.play(); autoplays when vid is loaded
        
        });

    myVideo.addEventListener('ended', func1);
    myVideo.addEventListener('ended', func2);
    myVideo.addEventListener('ended', func3)

}
 

function func1() {
    alert('The video has ended!');
}
// changes background color at the end of the video duration
function func2() {
    document.body.style.backgroundColor = "lightblue"; 
}

function func3() {
    const header = document.querySelector('header h1');
    header.style.color = "yellow"; 
}