let pendulum;
let g = 1;
let canvas;
let buffer;
let sliderL1;
let labelL1;
let LabelL2;
let sliderL2;
let sliderM1;
let labelM1;
let sliderM2;
let labelM2;

function setup() {
  canvas = createCanvas(600, 600);
  canvas.parent(container);
  buffer = createGraphics(width, height);
  buffer.background(0);

  sliderL1 = createSlider(50, 200, 100, 5).position(40, 10);
  sliderL1.changed(setValues);
  sliderL1.parent(container);
  labelL1 = createP("L1").position(10, -10);
  labelL1.parent(container);

  sliderL2 = createSlider(50, 200, 100, 5).position(225, 10);
  sliderL2.changed(setValues);
  sliderL2.parent(container);
  labelL2 = createP("L2").position(200, -10);
  labelL2.parent(container);

  sliderM1 = createSlider(5, 59, 10, 1).position(40, 60);
  sliderM1.changed(setValues);
  sliderM1.parent(container);
  labelM1 = createP("M1").position(10, 40);
  labelM1.parent(container);

  sliderM2 = createSlider(5, 59, 10, 1).position(230, 60);
  sliderM2.changed(setValues);
  sliderM2.parent(container);
  labelM2 = createP("M2").position(200, 38);
  labelM2.parent(container);

  pendulum = new Pendulum(Math.PI / 3, Math.PI / 2, 100, 100, 10, 10);
}

function draw() {
  background(0);
  image(buffer, 0, 0);

  pendulum.draw();
  pendulum.update();
}
function setValues() {
  pendulum = new Pendulum(
    Math.PI / 3,
    Math.PI / 2,
    sliderL1.value(),
    sliderL2.value(),
    sliderM1.value(),
    sliderM2.value()
  );
  buffer.clear();
 
}

function windowResized() {
  resizeCanvas(600, 600);
}
