function setup() {
  air = createCanvas(300,300);background("gray")
  air.parent("canvas")
  var sesentafotosporsec = createCapture(VIDEO)
  sesentafotosporsec.parent("video")
  sesentafotosporsec.size(300,300)
}