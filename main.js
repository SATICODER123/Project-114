moustacheX=0;
moustacheY=0;

function preload() {
  moustache = loadImage('https://w7.pngwing.com/pngs/314/989/png-transparent-moustache-mustache-hair-beard-mustache-png-thumbnail.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
}

function draw() {
}

function take_snapshot() {
    save('myFilterImage.png')
}