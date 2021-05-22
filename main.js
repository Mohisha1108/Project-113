function preload(){

}
function setup(){
canvas = createCanvas(530,500);
canvas.position(100,250);
video = createCapture(VIDEO);
video.hide();
}
function draw(){
image(video,100,100,325,300);
circle(60,60,100)
stroke("green");
fill("blue");
square(100,35,50);
circle(190,60,100);
square(100,35,50);
square(230,35,50);
circle(325,60,100);
square(230,35,50);
square(370,35,50);
circle(460,60,100);
square(370,35,50);

square(35,100,50);
square(35,150,50);
square(35,200,50);
square(35,250,50);
square(35,300,50);
square(35,350,50);
square(35,400,50);

circle(60,450,100);
square(100,430,50);
square(100,430,50);
circle(190,450,100);
square(230,430,50);
square(230,430,50);
circle(320,450,100);
square(360,430,50);
circle(450,450,100);

square(440,100,50);
square(440,150,50);
square(440,200,50);
square(440,250,50);
square(440,300,50);
square(440,350,50);
square(440,400,50);
}
function take_snapshot(){
    save('my_pic.png');
}