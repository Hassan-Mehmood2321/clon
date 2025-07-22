const audio = document.getElementById('audio');

audio.addEventListener('play', () => {
    console.log('Audio is playing');
});

audio.addEventListener('pause', () => {
    console.log('Audio is paused');
});

audio.addEventListener('ended', () => {
    console.log('Audio has ended');
});
