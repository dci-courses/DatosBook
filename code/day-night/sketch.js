// Add some header info
// For TM template code

// Video
let video;
let classifier;
let modelLoaded = 'https://teachablemachine.withgoogle.com/models/bXy2kDNi/';
let label = 'esperando...';

// STEP 1: Load the model!

function preload(){
  classifier = ml5.imageClassifier(modelLoaded);
}

function setup() {
  createCanvas(640, 520);
  // Create the video
  video = createCapture(VIDEO);
  video.hide();

  // STEP 2: Start classifying
  classifyVideo();
}

// STEP 2 classify!
function classifyVideo() {
  classifier = classifier.classify(video, gotResults);
}

function draw() {
  background(0);
  
  // Draw the video
  image(video, 0, 0);

  // STEP 4: Draw the label
  textSize(30);
  textAlign(CENTER, CENTER);
  fill(255);
  text(label, width / 2, height - 16);
}


// STEP 3: Get the classification!
function gotResults(error, results) {
  // Something went wrong!
  if (error) {
    console.error(error);
    return;
  }
  console.log(results);
  //console.log(results[0].label);
  label = results[0].label;
  
}