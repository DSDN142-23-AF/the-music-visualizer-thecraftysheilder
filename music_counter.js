let wordBrightness = 255;
let yOffset = 0;
//default variables
let lineSwap =true;
let doLineSwap=true;
//lineswap alows the lines to swap which side they apear from, dolineswap is which mode its in
let oldBlockMove
let spin=true
//if the center thing spins
let switchedLineSwap=false;
let switchedColorSwap=false;
let waitingToChange=false;
//waiting to change makes sure the animation doesnt change mid animation
let color1=0;
function draw_one_frame(words, vocal, drum, bass, other, counter) {
background(0);
rectMode(CENTER);
textAlign(CENTER);
textFont('Luminari '); // please use CSS safe fonts
//default code
let angle=60;

let volume_vocal = map(vocal, 0, 100, 0, 0.7 * height, true);
let volume_drum  = map(drum, 0, 100, 0, 0.7 * height, true);
let volume_bass  = map(bass, 0, 100, 0, 0.7 * height, true);
let volume_other = map(other, 0, 100, 0, 0.7 * height, true);
//default code
let S = map(vocal, 0, 100, 0, 0.7/6 * height, true);
let B  = map(drum, 0, 100, 0, 0.7/6 * height, true);
//hsb numbers
fill(200)
textAlign(LEFT);
// demonstrate use of non-documented "counter" variable
let seconds = counter
if(seconds > 0) {
  textSize(60);
  text(nf(seconds, 3, 2), 20, height-20);
}
//default code
colorMode(HSB,100);
rectMode(CENTER);
let rectY = height/2
let rectX = width/2
//since its a square thease are the same thing
translate(rectX,rectY);
if (volume_bass<150&&!switchedLineSwap){
  waitingToChange=true;
  switchedLineSwap=true;
  //this changes wether there is one set of lines on screen or two
}
if (volume_bass>150&&switchedLineSwap)switchedLineSwap=false;
if (volume_other<300&&!switchedColorSwap){
  color1+=20;
  if (color1>99)color1=0;
  switchedColorSwap=true;
  //changes the color of the lines
}
if (volume_other>300&&switchedColorSwap)switchedColorSwap=false;
fill(color1,S,B);
let blockLength=Math.sqrt((height*height)+(width*width))/2
//pythagRUs BAY-BEEEE
let blockMove=((counter*blockLength)%blockLength*3)-1.5*blockLength
//i wanted the lines to move all the way off screen but this is fine too
if (blockMove<oldBlockMove){
  if (lineSwap){
    lineSwap=false;
  }
  else lineSwap=true;
  
  if (waitingToChange){
    if (doLineSwap)doLineSwap=false;
    else doLineSwap=true;
    waitingToChange=false;
  }
  //this makes the lines turn around.
}
oldBlockMove=blockMove
if (lineSwap||!doLineSwap){
rect(0,blockMove,width/60,blockLength);
rect(blockMove,0,blockLength,width/60);
}
if (!lineSwap||!doLineSwap){
rect(0,-blockMove,width/60,blockLength);
rect(-blockMove,0,blockLength,width/60);
}
rotate(45);
if (lineSwap||!doLineSwap){
rect(0,blockMove,width/60,blockLength);
rect(blockMove,0,blockLength,width/60);
}
if (!lineSwap||!doLineSwap){
rect(0,-blockMove,width/60,blockLength);
rect(-blockMove,0,blockLength,width/60);
}
//this actualy draws the star patterns
colorMode(RGB,255);
rotate(counter*angle);
fill(200, 0, 0);//red
rect((3*width/8)-rectX, 0, width/60, volume_vocal);
fill(0, 200, 0);//green
rect(0, (3*width/8)-rectY, volume_drum, width/60);
fill(200, 200, 0);//yellow
rect((5*width/8)-rectX, 0, width/60, volume_bass);
fill(0, 0, 200);//blue
rect(0,(5*width/8)-rectY, volume_other, width/60);
fill(200, 0, 0);
noStroke();
rect((3*width/8)-rectX, volume_vocal/4, width/60, volume_vocal/2);
//this is ajusted default code. the lines were made thiner and put into a square shape
//the last one makes it so that they all go over one line and under one line
}
