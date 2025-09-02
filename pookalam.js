function setup() {
  // Initial canvas setup.
  createCanvas(800, 800);
  angleMode(DEGREES);
  noStroke();
}

function draw() {
  // Main drawing function.
  background(252, 251, 245); // Set the background color.

  // Onam greeting text.
  drawOnamGreeting();

  // Center the artwork.
  translate(width / 2, height / 2);

  // Draw all the layers, from outside to inside.
  drawGlowAuraRing(310);
  drawOuterPetalLayer(280);
  drawWavyPetalLayer(240);
  drawSunburstLayer(220);
  drawLotusBudLayer(200);
  drawLayeredGreenLeaves(175);
  drawConchSpiralLayer(180);
  drawInnerPetalDustRing(140);
  drawPeacockFeatherRing(125);
  drawBeadLayer(110);
  drawChainLinkLayer(100);
  drawMandalaLaceLayer(90);
  drawKolamCenter(60);
  drawStarFlowerCenter(30);

  
  fill(50);
  textAlign(RIGHT, BOTTOM);

  
  textSize(16);
  text("CREATED BY SAYANTH", width / 2 - 20, height / 2 - 40);

  
  textSize(12);
  text("www.linkedin.com/in/sayanthkrishnaks", width / 2 - 20, height / 2 - 20);

  noLoop(); // Stop the draw loop.
}

// LAYERS


function drawOnamGreeting() {
  fill("#C04000");
  textSize(24);
  textAlign(CENTER, TOP);
  text("ഓണം ആശംസകൾ", width / 2, 20);
}

// Creates a soft glow around the pookalam.
function drawGlowAuraRing(radius) {
  for (let r = radius; r < radius + 60; r += 4) {
    let alpha = map(r, radius, radius + 60, 80, 0);
    fill(255, 215, 0, alpha);
    circle(0, 0, r * 2);
  }
}

// The main outer petal ring.
function drawOuterPetalLayer(radius) {
  let innerColor = color("#FFD700");
  let outerColor = color("#FF6347");
  let petalCount = 28;

  for (let i = 0; i < petalCount; i++) {
    let angle = (360 / petalCount) * i;
    push();
    rotate(angle);

    // Shadow effect for depth.
    fill(0, 0, 0, 10);
    for (let j = 0; j < 9; j++) {
      let rOffset = j * 4;
      let angleOffset = j * 2;
      push();
      translate(3, 3);
      rotate(angleOffset);
      beginShape();
      vertex(radius - 50 - rOffset, 0);
      bezierVertex(
        radius - rOffset, -50,
        radius + 20 - rOffset, -40,
        radius + 50 - rOffset, 0
      );
      bezierVertex(
        radius + 20 - rOffset, 40,
        radius - rOffset, 50,
        radius - 50 - rOffset, 0
      );
      endShape(CLOSE);
      pop();
    }

    // Layered petals for a gradient effect.
    for (let j = 0; j < 9; j++) {
      let rOffset = j * 4;
      let angleOffset = j * 2;
      let grad = map(j, 0, 8, 0.9, 0);
      let petalColor = lerpColor(outerColor, innerColor, grad);
      fill(petalColor);

      push();
      rotate(angleOffset);
      beginShape();
      vertex(radius - 50 - rOffset, 0);
      bezierVertex(
        radius - rOffset, -50,
        radius + 20 - rOffset, -40,
        radius + 50 - rOffset, 0
      );
      bezierVertex(
        radius + 20 - rOffset, 40,
        radius - rOffset, 50,
        radius - 50 - rOffset, 0
      );
      endShape(CLOSE);
      pop();
    }
    pop();
  }
}

// A layer of wavy, flowing petals.
function drawWavyPetalLayer(radius) {
  let colorWave = color("#FFC0CB");
  let colorAccent = color("#FFD700");
  let petalCount = 48;

  for (let i = 0; i < petalCount; i++) {
    let angle = (360 / petalCount) * i;
    push();
    rotate(angle);
    fill(i % 2 === 0 ? colorWave : colorAccent); // Alternate petal colors.
    beginShape();
    vertex(radius, 0);
    bezierVertex(radius - 10, -30, radius + 40, -20, radius + 50, 0);
    bezierVertex(radius + 40, 20, radius - 10, 30, radius, 0);
    endShape(CLOSE);
    pop();
  }
}

// A sunburst pattern.
function drawSunburstLayer(radius) {
  let sunColor = color("#FF8C00");
  let rayCount = 48;
  for (let i = 0; i < rayCount; i++) {
    let angle = (360 / rayCount) * i;
    push();
    rotate(angle);
    fill(sunColor);
    triangle(radius - 20, 0, radius + 20, 0, radius, -30);
    pop();
  }
}

// A ring of lotus buds.
function drawLotusBudLayer(radius) {
  let budColor = color("#9370DB");
  let highlightColor = color(255, 255, 255, 150);
  let budCount = 60;

  for (let i = 0; i < budCount; i++) {
    let angle = (360 / budCount) * i;
    push();
    rotate(angle);
    fill(budColor);
    ellipse(radius, 0, 40, 20); // Bud shape
    fill(highlightColor);
    ellipse(radius - 5, -5, 15, 8); // Highlight
    pop();
  }
}

// A ring of green leaves.
function drawLayeredGreenLeaves(radius) {
  let lightGreen = color("#3CB371");
  let darkGreen = color("#228B22");
  let leafCount = 60;

  for (let i = 0; i < leafCount; i++) {
    let angle = (360 / leafCount) * i;
    push();
    rotate(angle);

    // Shadow
    fill(0, 0, 0, 10);
    push();
    translate(2, 2);
    beginShape();
    vertex(radius, 0);
    bezierVertex(radius - 15, -25, radius + 25, -25, radius + 35, 0);
    bezierVertex(radius + 25, 25, radius - 15, 25, radius, 0);
    endShape(CLOSE);
    pop();

    // Leaf
    fill(i % 2 === 0 ? lightGreen : darkGreen);
    beginShape();
    vertex(radius, 0);
    bezierVertex(radius - 15, -25, radius + 25, -25, radius + 35, 0);
    bezierVertex(radius + 25, 25, radius - 15, 25, radius, 0);
    endShape(CLOSE);
    pop();
  }
}

// A layer of spirals.
function drawConchSpiralLayer(radius) {
  let spiralColor = color("#8B5CF6");
  stroke(spiralColor);
  noFill();
  strokeWeight(2);

  for (let i = 0; i < 12; i++) {
    let angle = (360 / 12) * i;
    push();
    rotate(angle);
    for (let t = 0; t < 180; t += 15) {
      let x = (radius + t / 2) * cos(t);
      let y = (radius + t / 2) * sin(t);
      point(x, y);
    }
    pop();
  }
  noStroke();
}

// A textured ring 
function drawInnerPetalDustRing(maxRadius) {
  let purple1 = color("#6A5ACD");
  let purple2 = color("#9370DB");

  for (let i = 0; i < 300000; i++) {
    let radius = random(maxRadius - 30, maxRadius);
    let angle = random(360);
    let x = radius * cos(angle);
    let y = radius * sin(angle);
    stroke(random() > 0.5 ? purple1 : purple2);
    point(x, y);
  }
  noStroke();
}

// A ring of peacock feathers.
function drawPeacockFeatherRing(radius) {
  let featherMain = color("#1E90FF");
  let featherEye = color("#FFD700");
  let featherCenter = color("#006400");
  let featherCount = 24;

  for (let i = 0; i < featherCount; i++) {
    let angle = (360 / featherCount) * i;
    let x = radius * cos(angle);
    let y = radius * sin(angle);

    push();
    translate(x, y);
    rotate(angle + 90); // Align feather
    fill(featherMain);
    ellipse(0, 0, 40, 70);
    fill(featherEye);
    ellipse(0, -10, 20, 30);
    fill(featherCenter);
    circle(0, -10, 10);
    pop();
  }
}

// A ring of small beads.
function drawBeadLayer(radius) {
  let beadColor = color("#FFD700");
  let beadHighlight = color(255, 255, 200, 150);
  let beadCount = 80;

  for (let i = 0; i < beadCount; i++) {
    let angle = (360 / beadCount) * i;
    let x = radius * cos(angle);
    let y = radius * sin(angle);

    fill(beadColor);
    circle(x, y, 12);

    fill(beadHighlight);
    circle(x - 2, y - 2, 4);
  }
}

// A chain pattern.
function drawChainLinkLayer(radius) {
  stroke("#CD7F32");
  strokeWeight(2);
  noFill();
  let linkCount = 48;
  for (let i = 0; i < linkCount; i++) {
    let angle = (360 / linkCount) * i;
    push();
    rotate(angle);
    arc(radius, 0, 20, 20, -120, 120);
    pop();
  }
  noStroke();
}

// A decorative lace pattern.
function drawMandalaLaceLayer(radius) {
  stroke("#DAA520");
  noFill();
  let laceCount = 36;

  for (let i = 0; i < laceCount; i++) {
    let angle = (360 / laceCount) * i;
    let x = radius * cos(angle);
    let y = radius * sin(angle);

    push();
    translate(x, y);
    rotate(angle);
    ellipse(0, 0, 20, 40); // The lace shape
    pop();
  }
  noStroke();
}

// The central  design.
function drawKolamCenter(radius) {
  noFill();

  // Green circles
  strokeWeight(3);
  stroke("#006A4E");
  let circleCount = 12;
  for (let i = 0; i < circleCount; i++) {
    let angle = (360 / circleCount) * i;
    let r = radius * 0.7;
    let x = r * cos(angle);
    let y = r * sin(angle);
    circle(x, y, radius);
  }

  // Golden arcs
  strokeWeight(1.5);
  stroke("#FFD700");
  for (let i = 0; i < circleCount; i++) {
    let angle = (360 / circleCount) * i;
    push();
    rotate(angle + 360 / circleCount / 2);
    arc(0, 0, radius * 0.8, radius * 0.8, -40, 40);
    arc(0, 0, radius * 1.5, radius * 1.5, -20, 20);
    pop();
  }

  // Red lines
  strokeWeight(1);
  stroke("#B22222");
  for (let i = 0; i < 24; i++) {
    let angle = (360 / 24) * i;
    line(0, 0, radius * 1.1 * cos(angle), radius * 1.1 * sin(angle));
  }

  // White accent arcs
  strokeWeight(4);
  stroke(255);
  for (let i = 0; i < circleCount; i++) {
    let angle = (360 / circleCount) * i;
    push();
    rotate(angle);
    arc(0, 0, radius * 1.2, radius * 1.2, -35, 35);
    pop();
  }
  noStroke();
}

// The flower at the center.
function drawStarFlowerCenter(radius) {
  let starColor = color("#FF4500");
  let highlightColor = color("#FFD700");
  let pointCount = 8;

  fill(starColor);
  beginShape();
  for (let i = 0; i < pointCount * 2; i++) {
    // Alternate between outer and inner points.
    let r = i % 2 === 0 ? radius : radius * 0.4;
    let angle = (360 / (pointCount * 2)) * i;
    let x = r * cos(angle);
    let y = r * sin(angle);
    vertex(x, y);
  }
  endShape(CLOSE);

  // Center dot
  fill(highlightColor);
  circle(0, 0, radius * 0.3);
}

