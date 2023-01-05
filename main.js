function setup() {
    video = createCapture(VIDEO);
    video.size(650, 500);
    canvas = createCanvas(550, 500);
    canvas.position(1360, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('poseNet se incio!');
}
function gotPoses(results) {
   if(results.length > 0) {
    console.log((results));
   }
}
function draw() {
    background('rebeccapurple');
}
function modelLoaded() {
    console.log('¡PoseNet está inicializado!');
  }
function gotPoses(results) {
   if(results.length > 0) {
    console.log((results));
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX ="+noseX+"noseY ="+ noseY);
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);
    console.log("leftWristX ="+leftWristX+"rightWristX ="+rightWristX+"difference"+difference);
   }
}
function draw() {
    background('rebeccapurple');
    document.getElementById("square_side").innerHTML = "el ancho y alto de la fuente es igual a "+difference+"pixeles";
    textSize(difference);
    fill('black')
    text('Luka', noseX, noseY);
}