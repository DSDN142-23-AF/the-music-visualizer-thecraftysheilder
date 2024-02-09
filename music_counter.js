
let lastWords = "...";
let wordBrightness = 255;
let yOffset = 0;
let lineSwap =true;
let doLineSwap=false
let oldBlockMove
let spin=true
function draw_one_frame(words, vocal, drum, bass, other, counter) {
background(0);
rectMode(CENTER);
textAlign(CENTER);
textFont('Luminari '); // please use CSS safe fonts
let angle=60;
let angle2=0;

//if (words == "") {
//  wordBrightness = int(wordBrightness * 0.95); //fade brightness 
//  words = lastWords; // safe the last known word so we can display 
//  if (yOffset < height / 4) {
//    yOffset = yOffset + 1;
//  }
//} else {
//  wordBrightness = 255; // set brightness to max
//  yOffset = 0; //don't offset down
//  lastWords = words; // keep track of what the most recent word is
//}

//fill(wordBrightness);
//textSize(40);
//text(words, width / 2, height / 5 + yOffset); // display current lyric in middle of page, then fade down

let volume_vocal = map(vocal, 0, 100, 0, 0.7 * height, true);
let volume_drum  = map(drum, 0, 100, 0, 0.7 * height, true);
let volume_bass  = map(bass, 0, 100, 0, 0.7 * height, true);
let volume_other = map(other, 0, 100, 0, 0.7 * height, true);
fill(200)
textAlign(LEFT);
// demonstrate use of non-documented "counter" variable
let seconds = counter
if(seconds > 0) {
  textSize(60);
  text(nf(seconds, 3, 2), 20, height-20);
}
colorMode(HSB,100);
rectMode(CENTER);
let rectY = height/2
let rectX = width/2
translate(rectX,rectY);
let vol1=100;
let vol2=100;
let vol3=100;
//if (vo1>volume_vocal)vol1=volume_vocal;
//if (vo1>volume_drum)vol1=volume_drum;
//if (vo1>volume_bass)vol1=volume_bass;
//if (vo1>volume_other)vol1=volume_other;
//if (vo2>volume_vocal&&volume_vocal!=vol1)vol2=volume_vocal;
//if (vo2>volume_drum&&volume_drum!=vol1)vol2=volume_drum;
//if (vo2>volume_bass&&volume_bass!=vol1)vol2=volume_bass;
//if (vo2>volume_other&&volume_other!=vol1)vol2=volume_other;
//if (vo3>volume_vocal&&volume_vocal!=vol1&&volume_vocal!=vol2)vol3=volume_vocal;
//if (vo3>volume_drum&&volume_drum!=vol1&&volume_drum!=vol2)vol3=volume_drum;
//if (vo3>volume_bass&&volume_bass!=vol1&&volume_bass!=vol2)vol3=volume_bass;
//if (vo3>volume_other&&volume_other!=vol1&&volume_other!=vol2)vol3=volume_other;
fill(vol1,vol2,vol3);
let blockLength=Math.sqrt((height*height)+(width*width))/2

let blockMove=((counter*blockLength)%blockLength*3)-1.5*blockLength
if (blockMove<oldBlockMove){
  if (lineSwap){
    lineSwap=false;
  }
  else lineSwap=true;
}
if (spin)rotate(counter*angle2);
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
colorMode(RGB,255);
if (spin)rotate(-counter*angle2);
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


//rect(width/4, rectY,10,10);
//rect(rectX, width/4,10,10);
//rect(3*width/4, rectY,10,10);
//rect(rectX, 3*width/4,10,10);

}
