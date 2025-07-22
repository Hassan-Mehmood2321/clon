recorder.ondataavailable = (e) => {
    if (e.data.size > 0) {
        chunks.push(e.data);
    }
};

recorder.onstop = () => {
    const blob = new Blob(chunks, { type: 'video/webm' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'capture.webm';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};
try {
    const stream = await navigator.mediaDevices.getDisplayMedia();
    const recorder = new MediaRecorder(stream);
    const chunks = [];

    recorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
            chunks.push(e.data);
        }
    };

    recorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'capture.webm';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    recorder.start();

    const [video] = stream.getVideoTracks();

    video.addEventListener("ended", () => {
        recorder.stop();
    });
} catch (error) {
    console.log("Recording failed", error);
}
