
var font;
var vehicles = [];
var bi;
function preload() {
  font = loadFont('AvenirNextLTPro-Demi.otf');
  bi = loadImage('bi1.jpg')
 
  
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(51);

  var points = font.textToPoints('HAPPY FATHERS DAY', 100, 400, 116, {
    sampleFactor: 0.35
  });

  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    
    var vehicle = new Vehicle(pt.x, pt.y);
  
    vehicles.push(vehicle);
    
  }
}
function draw() {
  background(bi);


  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
     
    v.behaviors();
    v.update();
    v.show();
   //stroke(255);
    

 }
}
  
