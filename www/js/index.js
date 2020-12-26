
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    document.getElementById('playAudio').addEventListener('click',onPlayAudio);
    document.getElementById('pauseAudio').addEventListener('click',onPauseAudio);
    document.getElementById('stopAudio').addEventListener('click',onStopAudio);
    document.getElementById('volumeUp').addEventListener('click',onVolumeUp);
    document.getElementById('volumeDown').addEventListener('click',onVolumeDown);
 
}

var media = null;
function onPlayAudio() {
    var src= './media/audio.mp3';

    if(media== null) {
        media=new Media(src, onSuccess, onError);
    }
    function onSuccess() {
        console.log('Playing Audio Successfully');
    }
    function onError(err) {
        console.log('Error in playing audio with message :'+err.code)
    }
    media.play();
}
