function setup() {
  air = createCanvas(300,300);background("gray")
  air.parent("canvas")
  var sesentafotosporsec = createCapture(VIDEO)
  sesentafotosporsec.parent("video")
  sesentafotosporsec.size(300,300)
  var pose = ml5.poseNet(sesentafotosporsec, listoready) 
  pose.on("pose",respuestallegada)
  imageMode(CENTER)
}
function listoready() {
  console.log ("ml5 pose net cargado")
}
var posenetxnose = 0
var posenetynose = 0
var posenetxwristleft = 0
var posenetxwristrigh = 0
function respuestallegada(resultado) {
  if (resultado[0]) {
    console.log (resultado);
    posenetxnose = resultado[0].pose.nose.x
    posenetynose = resultado[0].pose.nose.y
    posenetxwristleft = resultado[0].pose.leftWrist.x
    posenetxwristrigh = resultado[0].pose.rightWrist.x
  }
}
function draw() {
  background ("gray")
  dinstansia = posenetxwristleft - posenetxwristrigh
  image(como,posenetxnose,posenetynose,dinstansia,dinstansia)
}
function preload(){
  como = loadImage("como.png")
}