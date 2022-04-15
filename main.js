leftWristX = 0;
rightWristX = 0;
difference = 0;
function setup() {
    webcam=createCapture(VIDEO);
    canvas=createCanvas(600,500);
    posenet=ml5.poseNet(webcam,modelLoaded);
    posenet.on('pose',gotPoses);
}
function modelLoaded() {
    console.log("Model Loaded");
}
function gotPoses(results) {
    if (results.length>1) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX-rightWristX)
        console.log(difference);
    }
}
function draw() {
    background("#e6fae8");
    textSize(difference);
    fill("green");
    text("Moving your left and right wrists, will change the size of this text!",50,30);
}