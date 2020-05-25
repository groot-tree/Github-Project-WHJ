var thing1,thing2;

function setup() {
  createCanvas(400,400);
thing1 = createSprite (300,200,75,75);
thing2 = createSprite(100,200,75,75)
thing2.shapeColor = "yellow";
thing1.shapeColor = "purple"
thing1.velocityX = -7.5;
thing2.velocityX = 7.5;
}

function draw() {
backgorund = "grey";

  edges = createEdgeSprites();

thing1.bounceOff(edges)
thing2.bounceOff(edges)

  drawSprites();
}











