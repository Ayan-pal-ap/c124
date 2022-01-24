function setup(){
    canvas=createCanvas(240,240);
    canvas.position(560,150);
    video=createCapture(VIDEO);
     video.size(550,500);
     poseNet=ml5.poseNet(video,modalloaded);
     poseNet.on("pose",gotResult);
}
function modalloaded(){
    console.log(" p is working");
}
function draw(){
    background('#b1f5b0');
}
function gotResult(result){
  if(result.lenth>0){
      console.log("result");
      
  }
}
