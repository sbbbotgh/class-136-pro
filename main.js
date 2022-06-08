statuss = "";
values = "";

function setup(){
    canvas = createCanvas(480, 380);
    video = createCapture(VIDEO);
    video.size(480, 380);
    video.hide();
}

function draw(){
    canvas.center();
    image(video, 0, 0, 480, 380);
}

function start(){
    objectDetecter = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    values = document.getElementById("search").value;
}

function modelLoaded(){
    console.log("model loaded");
    statuss = "true";
}