var muzich = " ";

function preload(){
    muzich = loadSound('music.mp3')
}
function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 0, 0, 600, 500)
}
function babagi(){
    muzich.play();
}
function fortinaiti(){
    muzich.pause();
}