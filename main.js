left_wristx=0;
right_wristx=0;
difference=0;
function setup(){
canvas=createCanvas(550,550);
canvas.position(560,150);
video=createCapture(VIDEO);
video.size(550,550);

posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotposes);
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        left_wristx=results[0].pose.leftWrist.x;
        right_wristx=results[0].pose.rightWrist.x;
        console.log("right wrist= "+right_wristx+"left wrist= "+left_wristx);
        difference=floor(left_wristx-right_wristx);
        console.log("difference = "+difference);
    }
}
function modelLoaded(){
    console.log('poseNet is initialized');
}
function draw(){
    background(51);
    textSize(difference); 
    fill('#FFE787');
text('Bubesh', 50, 400);
}
