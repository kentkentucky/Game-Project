//character facing front
function luffyFacingFront()
{
    stroke(0);
    fill(255,228,196);
    ellipse(gameChar_x, gameChar_y - 60, 18, 20);
    //ears
    arc(gameChar_x - 9, gameChar_y - 60, 5, 6, radians(90), radians(270));
    arc(gameChar_x + 9, gameChar_y - 60, 5, 6, radians(270), radians(90));
    //nose
    point(gameChar_x, gameChar_y - 59);
    //body
    noStroke();
    rect(gameChar_x - 12.25, gameChar_y - 50, 25, 30);
    //left leg
    stroke(0);
    beginShape()
    vertex(gameChar_x - 1, gameChar_y - 20);
    vertex(gameChar_x - 6, gameChar_y + 2);
    vertex(gameChar_x - 16.25, gameChar_y + 2);
    vertex(gameChar_x - 11.25, gameChar_y - 20);
    endShape(CLOSE);
    //right leg
    beginShape()
    vertex(gameChar_x + 1, gameChar_y - 20);
    vertex(gameChar_x + 6, gameChar_y + 2);
    vertex(gameChar_x + 16.25, gameChar_y + 2);
    vertex(gameChar_x + 11.25, gameChar_y - 20);
    endShape(CLOSE);
    //right arm
    beginShape()
    vertex(gameChar_x + 11.25, gameChar_y - 50);
    vertex(gameChar_x + 11.25, gameChar_y - 35);
    vertex(gameChar_x + 17.25, gameChar_y - 20);
    vertex(gameChar_x + 22.25, gameChar_y - 25);
    vertex(gameChar_x + 14.25, gameChar_y - 50);
    endShape(CLOSE);
    //left arm
    beginShape()
    vertex(gameChar_x - 11.25, gameChar_y - 50);
    vertex(gameChar_x - 11.25, gameChar_y - 35);
    vertex(gameChar_x - 17.25, gameChar_y - 20);
    vertex(gameChar_x - 22.25, gameChar_y - 25);
    vertex(gameChar_x - 14.25, gameChar_y - 50);
    endShape(CLOSE);
    //hands
    arc(gameChar_x - 20, gameChar_y - 23, 8, 8, radians(0), radians(240));
    arc(gameChar_x + 20, gameChar_y - 23, 8, 8, radians(300), radians(180));
    fill(0);
    //shoes
    strokeWeight(1);
    fill(0);
    arc(gameChar_x - 11, gameChar_y + 4, 11, 9, radians(180), radians(0));
    arc(gameChar_x + 11, gameChar_y + 4, 11, 9, radians(180), radians(0));
    //eyes
    noStroke();
    fill(255);
    ellipse(gameChar_x - 4, gameChar_y - 61, 5, 5);
    ellipse(gameChar_x + 4, gameChar_y - 61, 5, 5);
    fill(0);
    stroke(0);
    ellipse(gameChar_x - 4, gameChar_y - 61, 1, 1);
    ellipse(gameChar_x + 4, gameChar_y - 61, 1, 1);
    //mouth
    fill(255);
    arc(gameChar_x, gameChar_y - 57, 12, 8, radians(0), radians(180));
    line(gameChar_x - 6, gameChar_y - 57, gameChar_x + 6, gameChar_y - 57);
    //scar under eye
    stroke(0);
    strokeWeight(0.5);
    line(gameChar_x + 4, gameChar_y - 58, gameChar_x + 7, gameChar_y - 60);
    //shirt
    strokeWeight(1);
    fill(220,20,60);
    rect(gameChar_x - 12.25, gameChar_y - 50, 25, 30);
    fill(255,228,196);
    arc(gameChar_x, gameChar_y - 50, 15, 10, radians(0), radians(180));
    arc(gameChar_x - 13, gameChar_y - 43, 6, 15, radians(270), radians(90));
    arc(gameChar_x + 13, gameChar_y - 43, 6, 15, radians(90), radians(270));
    //pants
    fill(70,130,180);
    beginShape()
    vertex(gameChar_x + 12.25, gameChar_y - 22);
    vertex(gameChar_x - 12.25, gameChar_y - 22);
    vertex(gameChar_x - 17, gameChar_y - 8);
    vertex(gameChar_x - 2, gameChar_y - 8);
    vertex(gameChar_x, gameChar_y - 15);
    vertex(gameChar_x + 2, gameChar_y - 8);
    vertex(gameChar_x + 17, gameChar_y - 8);
    endShape(CLOSE);
    //straw hat
    fill(218,165,32);
    arc(gameChar_x, gameChar_y - 69, 20, 20, radians(180), radians(0));
    ellipse(gameChar_x, gameChar_y - 67, 35, 10);
    fill(220,20,60);
    point(gameChar_x - 13, gameChar_y - 69);
    point(gameChar_x + 13, gameChar_y - 69);
    point(gameChar_x + 11, gameChar_y - 71);
    point(gameChar_x + 8, gameChar_y - 73);
    point(gameChar_x - 8, gameChar_y - 73);
    point(gameChar_x - 11, gameChar_y - 71);
    beginShape();
    curveVertex(gameChar_x - 13, gameChar_y - 69);
    curveVertex(gameChar_x + 13, gameChar_y - 69);
    curveVertex(gameChar_x + 11, gameChar_y - 71);
    curveVertex(gameChar_x + 8, gameChar_y - 73);
    curveVertex(gameChar_x - 8, gameChar_y - 73);
    curveVertex(gameChar_x - 11, gameChar_y - 71);
    endShape(CLOSE);
}

//draw character walking right
function luffyWalkingRight()
{
    stroke(0);
    fill(255,228,196);
    ellipse(gameChar_x, gameChar_y - 60, 12, 20);
    //ears
    arc(gameChar_x, gameChar_y - 60, 5, 6, radians(90), radians(270));
    //nose
    triangle(gameChar_x + 5, gameChar_y - 60, gameChar_x + 8, gameChar_y - 56, gameChar_x + 5, gameChar_y - 57);
    //body
    noStroke();
    rect(gameChar_x - 5, gameChar_y - 50, 10, 30);
    //left leg
    stroke(0);
    beginShape()
    vertex(gameChar_x - 4, gameChar_y - 20);
    vertex(gameChar_x - 9, gameChar_y + 2);
    vertex(gameChar_x - 2, gameChar_y + 2);
    vertex(gameChar_x + 3, gameChar_y - 20);
    endShape(CLOSE);
    //left shoes
    strokeWeight(1);
    fill(0);
    arc(gameChar_x - 4, gameChar_y + 4, 11, 8, radians(270), radians(0));
    rect(gameChar_x - 8, gameChar_y, 4, 3);
    //right leg
    fill(255,228,196);
    beginShape()
    vertex(gameChar_x + 4, gameChar_y - 20);
    vertex(gameChar_x + 9, gameChar_y + 2);
    vertex(gameChar_x + 2, gameChar_y + 2);
    vertex(gameChar_x - 3, gameChar_y - 20);
    endShape(CLOSE);
    //right shoes
    strokeWeight(1);
    fill(0);
    arc(gameChar_x + 6, gameChar_y + 4, 11, 8, radians(270), radians(0));
    rect(gameChar_x + 3, gameChar_y, 4, 3);
    //left arm
    fill(255,228,196);
    beginShape()
    vertex(gameChar_x - 3, gameChar_y - 50);
    vertex(gameChar_x - 3, gameChar_y - 35);
    vertex(gameChar_x - 8, gameChar_y - 20);
    vertex(gameChar_x - 13, gameChar_y - 25);
    vertex(gameChar_x - 5, gameChar_y - 50);
    endShape(CLOSE);
    //left hand
    arc(gameChar_x - 10.5, gameChar_y - 23, 8, 8, radians(0), radians(250));
    //eyes
    noStroke();
    fill(255);
    arc(gameChar_x + 5, gameChar_y - 61, 5, 5, radians(290), radians(160));
    fill(0);
    stroke(0);
    ellipse(gameChar_x + 7, gameChar_y - 61, 0.5, 0.5);
    //mouth
    fill(255);
    line(gameChar_x + 5, gameChar_y - 53, gameChar_x + 2, gameChar_y - 55);
    //shirt
    strokeWeight(1);
    fill(220,20,60);
    rect(gameChar_x - 5, gameChar_y - 50, 10, 30);
    fill(255,228,196);
    ellipse(gameChar_x, gameChar_y - 43, 10, 15);
    //right arm
    beginShape()
    vertex(gameChar_x - 5, gameChar_y - 48);
    vertex(gameChar_x + 2, gameChar_y - 35);
    vertex(gameChar_x + 8, gameChar_y - 20);
    vertex(gameChar_x + 13, gameChar_y - 25);
    vertex(gameChar_x + 2, gameChar_y - 48);
    endShape(CLOSE);
    arc(gameChar_x, gameChar_y - 45, 6, 7, radians(135), radians(315));
    //right hand
    arc(gameChar_x + 10.5, gameChar_y - 23, 8, 8, radians(305), radians(155));
    //pants
    fill(70,130,180);
    triangle(gameChar_x - 5, gameChar_y - 22, gameChar_x + 2, gameChar_y - 8, gameChar_x - 9, gameChar_y - 8);
    beginShape()
    vertex(gameChar_x + 5, gameChar_y - 22);
    vertex(gameChar_x + 9, gameChar_y - 8);
    vertex(gameChar_x - 2, gameChar_y - 8);
    vertex(gameChar_x - 5, gameChar_y - 22);       
    endShape(CLOSE);
    //hair
    fill(0);
    triangle(gameChar_x + 2, gameChar_y - 70, gameChar_x - 7, gameChar_y - 56, gameChar_x - 8, gameChar_y - 70);
    triangle(gameChar_x + 6, gameChar_y - 70, gameChar_x + 1, gameChar_y - 59, gameChar_x - 5, gameChar_y - 70);
    //straw hat
    fill(218,165,32);
    arc(gameChar_x, gameChar_y - 67, 17, 20, radians(180), radians(0));
    ellipse(gameChar_x, gameChar_y - 65, 30, 5);
    fill(220,20,60);
    point(gameChar_x - 10, gameChar_y - 67);
    point(gameChar_x + 10, gameChar_y - 67);
    point(gameChar_x + 9, gameChar_y - 69);
    point(gameChar_x + 5, gameChar_y - 71);
    point(gameChar_x - 5, gameChar_y - 71);
    point(gameChar_x - 8, gameChar_y - 69);
    beginShape();
    curveVertex(gameChar_x - 10, gameChar_y - 67);
    curveVertex(gameChar_x + 10, gameChar_y - 67);
    curveVertex(gameChar_x + 9, gameChar_y - 69);
    curveVertex(gameChar_x + 5, gameChar_y - 71);
    curveVertex(gameChar_x - 5, gameChar_y - 71);
    curveVertex(gameChar_x - 8, gameChar_y - 69);
    endShape(CLOSE);
}

//draw character walking left
function luffyWalkingLeft()
{
    stroke(0);
    fill(255,228,196);
    ellipse(gameChar_x, gameChar_y - 60, 12, 20);
    //ears
    arc(gameChar_x, gameChar_y - 60, 5, 6, radians(270), radians(90));
    //nose
    triangle(gameChar_x - 5, gameChar_y - 60, gameChar_x - 8, gameChar_y - 55, gameChar_x - 5, gameChar_y - 57);
    //body
    noStroke();
    rect(gameChar_x - 5, gameChar_y - 50, 10, 30);
    //right leg
    stroke(0);
    beginShape()
    vertex(gameChar_x + 4, gameChar_y - 20);
    vertex(gameChar_x + 9, gameChar_y + 2);
    vertex(gameChar_x + 2, gameChar_y + 2);
    vertex(gameChar_x - 3, gameChar_y - 20);
    endShape(CLOSE);
    // right shoes
    strokeWeight(1);
    fill(0);
    arc(gameChar_x + 3, gameChar_y + 4, 11, 9, radians(180), radians(270));
    rect(gameChar_x + 3, gameChar_y, 5, 3);
    //left leg
    fill(255,228,196);
    beginShape()
    vertex(gameChar_x - 4, gameChar_y - 20);
    vertex(gameChar_x - 9, gameChar_y + 2);
    vertex(gameChar_x - 2, gameChar_y + 2);
    vertex(gameChar_x + 3, gameChar_y - 20);
    endShape(CLOSE);
    //left shoes
    strokeWeight(1);
    fill(0);
    arc(gameChar_x - 6, gameChar_y + 4, 11, 9, radians(180), radians(270));
    rect(gameChar_x - 6, gameChar_y, 3, 3);
    //right arm
    fill(255,228,196);
    beginShape()
    vertex(gameChar_x + 3, gameChar_y - 50);
    vertex(gameChar_x + 3, gameChar_y - 35);
    vertex(gameChar_x + 8, gameChar_y - 20);
    vertex(gameChar_x + 13, gameChar_y - 25);
    vertex(gameChar_x + 5, gameChar_y - 50);
    endShape(CLOSE);
    //right hands
    arc(gameChar_x + 10.5, gameChar_y - 23, 8, 8, radians(300), radians(180));
    //eyes
    noStroke();
    fill(255);
    arc(gameChar_x - 5, gameChar_y - 61, 5, 5, radians(90), radians(270));
    fill(0);
    stroke(0);
    ellipse(gameChar_x - 7, gameChar_y - 61, 0.5, 0.5);
    //mouth
    fill(255);
    line(gameChar_x - 5, gameChar_y - 53, gameChar_x - 2, gameChar_y - 55);
    //shirt
    strokeWeight(1);
    fill(220,20,60);
    rect(gameChar_x - 5, gameChar_y - 50, 10, 30);
    fill(255,228,196);
    ellipse(gameChar_x, gameChar_y - 43, 10, 15);
    //left arm
    beginShape()
    vertex(gameChar_x + 5, gameChar_y - 48);
    vertex(gameChar_x - 2, gameChar_y - 35);
    vertex(gameChar_x - 8, gameChar_y - 20);
    vertex(gameChar_x - 13, gameChar_y - 25);
    vertex(gameChar_x - 2, gameChar_y - 48);
    endShape(CLOSE);
    arc(gameChar_x, gameChar_y - 45, 6, 7, radians(180), radians(45));
    //left hand
    arc(gameChar_x - 10.5, gameChar_y - 23, 8, 8, radians(0), radians(240));
    //pants
    fill(70,130,180);
    triangle(gameChar_x + 5, gameChar_y - 22, gameChar_x - 2, gameChar_y - 8, gameChar_x + 9, gameChar_y - 8);
    beginShape()
    vertex(gameChar_x - 5, gameChar_y - 22);
    vertex(gameChar_x - 9, gameChar_y - 8);
    vertex(gameChar_x + 2, gameChar_y - 8);
    vertex(gameChar_x + 5, gameChar_y - 22);       
    endShape(CLOSE);
    //hair
    fill(0);
    triangle(gameChar_x - 2, gameChar_y - 70, gameChar_x + 7, gameChar_y - 56, gameChar_x + 8, gameChar_y - 70);
    triangle(gameChar_x - 6, gameChar_y - 70, gameChar_x - 1, gameChar_y - 59, gameChar_x + 5, gameChar_y - 70);
    //straw hat
    fill(218,165,32);
    arc(gameChar_x, gameChar_y - 67, 17, 20, radians(180), radians(0));
    ellipse(gameChar_x, gameChar_y - 65, 30, 5);
    fill(220,20,60);
    point(gameChar_x - 10, gameChar_y - 67);
    point(gameChar_x + 10, gameChar_y - 67);
    point(gameChar_x + 9, gameChar_y - 69);
    point(gameChar_x + 5, gameChar_y - 71);
    point(gameChar_x - 5, gameChar_y - 71);
    point(gameChar_x - 8, gameChar_y - 69);
    beginShape();
    curveVertex(gameChar_x - 10, gameChar_y - 67);
    curveVertex(gameChar_x + 10, gameChar_y - 67);
    curveVertex(gameChar_x + 9, gameChar_y - 69);
    curveVertex(gameChar_x + 5, gameChar_y - 71);
    curveVertex(gameChar_x - 5, gameChar_y - 71);
    curveVertex(gameChar_x - 8, gameChar_y - 69);
    endShape(CLOSE);
}

//draw character jumping right
function luffyJumpingRight()
{
    stroke(0);
    fill(255,228,196);
    ellipse(gameChar_x, gameChar_y - 80, 12, 20);
    //ears
    arc(gameChar_x, gameChar_y - 80, 5, 6, radians(90), radians(270));
    //nose
    triangle(gameChar_x + 5, gameChar_y - 80, gameChar_x + 8, gameChar_y - 76, gameChar_x + 5, gameChar_y - 77);
    //body
    noStroke();
    rect(gameChar_x - 5, gameChar_y - 70, 10, 30);
    //left leg
    stroke(0);
    beginShape()
    vertex(gameChar_x - 4, gameChar_y - 40);
    vertex(gameChar_x - 27, gameChar_y - 19);
    vertex(gameChar_x - 22, gameChar_y - 14);
    vertex(gameChar_x + 4, gameChar_y - 40);
    endShape(CLOSE);
    //left shoes
    strokeWeight(1);
    fill(0);
    quad(gameChar_x - 27, gameChar_y - 19, gameChar_x - 22, gameChar_y - 14, gameChar_x - 25, gameChar_y - 10, gameChar_x - 30, gameChar_y - 15);
    arc(gameChar_x - 26, gameChar_y - 12, 12, 9, radians(310), radians(55));
    //right leg
    fill(255,228,196);
    beginShape();
    vertex(gameChar_x + 5, gameChar_y - 40);
    vertex(gameChar_x + 20, gameChar_y - 35);
    vertex(gameChar_x + 17, gameChar_y - 18);
    vertex(gameChar_x + 11, gameChar_y - 20);
    vertex(gameChar_x + 13, gameChar_y - 32);
    vertex(gameChar_x - 5, gameChar_y - 40);
    endShape(CLOSE);
    //right shoes
    strokeWeight(1);
    fill(0);
    quad(gameChar_x + 11, gameChar_y - 20, gameChar_x + 18, gameChar_y - 17, gameChar_x + 16, gameChar_y - 13, gameChar_x + 9, gameChar_y - 16);
    arc(gameChar_x + 15, gameChar_y - 13, 10, 9, radians(290), radians(30));
    //left arm
    fill(255,228,196);
    beginShape();
    vertex(gameChar_x - 4, gameChar_y - 68);
    vertex(gameChar_x - 15, gameChar_y - 65);
    vertex(gameChar_x - 23, gameChar_y - 56);
    vertex(gameChar_x - 19, gameChar_y - 52);
    vertex(gameChar_x - 12, gameChar_y - 60);
    vertex(gameChar_x - 4, gameChar_y - 59);
    endShape(CLOSE);
    //left hand
    arc(gameChar_x - 21, gameChar_y - 55, 6, 8, radians(30), radians(220));
    //eyes
    noStroke();
    fill(255);
    arc(gameChar_x + 5, gameChar_y - 81, 5, 5, radians(290), radians(160));
    fill(0);
    stroke(0);
    ellipse(gameChar_x + 7, gameChar_y - 81, 0.5, 0.5);
    //mouth
    fill(255);
    line(gameChar_x + 5, gameChar_y - 73, gameChar_x + 2, gameChar_y - 75);
    //shirt
    strokeWeight(1);
    fill(220,20,60);
    rect(gameChar_x - 5, gameChar_y - 70, 10, 30);
    fill(255,228,196);
    ellipse(gameChar_x, gameChar_y - 63, 10, 15);
    //right arm
    beginShape();
    vertex(gameChar_x - 2, gameChar_y - 67);
    vertex(gameChar_x + 15, gameChar_y - 69);
    vertex(gameChar_x + 25, gameChar_y - 77);
    vertex(gameChar_x + 29, gameChar_y - 74);
    vertex(gameChar_x + 17, gameChar_y - 64);
    vertex(gameChar_x - 2, gameChar_y - 61);
    endShape(CLOSE);
    arc(gameChar_x, gameChar_y - 64, 6, 6, radians(90), radians(270));
    //right hand
    arc(gameChar_x + 27, gameChar_y - 75, 7, 6, radians(210), radians(90));
    //pants
    fill(70,130,180);
    beginShape();
    vertex(gameChar_x - 5, gameChar_y - 42);
    vertex(gameChar_x - 15, gameChar_y - 33);
    vertex(gameChar_x - 5, gameChar_y - 25);
    vertex(gameChar_x + 2, gameChar_y - 34);
    vertex(gameChar_x + 9, gameChar_y - 29);
    vertex(gameChar_x + 15, gameChar_y - 38);
    vertex(gameChar_x + 5, gameChar_y - 42);
    endShape(CLOSE);
    //hair
    fill(0);
    strokeWeight(1);
    beginShape();
    vertex(gameChar_x, gameChar_y - 93);
    vertex(gameChar_x + 3, gameChar_y - 91);
    vertex(gameChar_x + 8, gameChar_y - 93);
    vertex(gameChar_x + 5, gameChar_y - 90);
    vertex(gameChar_x + 8, gameChar_y - 88);
    vertex(gameChar_x + 9, gameChar_y - 84);
    vertex(gameChar_x + 2, gameChar_y - 90);
    vertex(gameChar_x + 4, gameChar_y - 82);
    vertex(gameChar_x + 2, gameChar_y - 82);
    vertex(gameChar_x, gameChar_y - 93);
    vertex(gameChar_x - 1, gameChar_y - 82);
    vertex(gameChar_x - 2, gameChar_y - 84);
    vertex(gameChar_x - 4, gameChar_y - 86);
    vertex(gameChar_x - 6, gameChar_y - 78);
    vertex(gameChar_x - 8, gameChar_y - 84);
    vertex(gameChar_x - 6, gameChar_y - 86);
    vertex(gameChar_x - 8, gameChar_y - 90);
    vertex(gameChar_x - 5, gameChar_y - 90);
    endShape(CLOSE);
    //straw hat
    fill(218,165,32);
    arc(gameChar_x, gameChar_y - 109, 17, 20, radians(180), radians(0));
    ellipse(gameChar_x, gameChar_y - 107, 30, 5);
    fill(220,20,60);
    point(gameChar_x - 10, gameChar_y - 109);
    point(gameChar_x + 10, gameChar_y - 109);
    point(gameChar_x + 9, gameChar_y - 111);
    point(gameChar_x + 5, gameChar_y - 113);
    point(gameChar_x - 5, gameChar_y - 113);
    point(gameChar_x - 8, gameChar_y - 111);
    beginShape();
    curveVertex(gameChar_x - 10, gameChar_y - 109);
    curveVertex(gameChar_x + 10, gameChar_y - 109);
    curveVertex(gameChar_x + 9, gameChar_y - 111);
    curveVertex(gameChar_x + 5, gameChar_y - 113);
    curveVertex(gameChar_x - 5, gameChar_y - 113);
    curveVertex(gameChar_x - 8, gameChar_y - 111);
    endShape(CLOSE);
}

//draw character jumping left
function luffyJumpingLeft()
{
    stroke(0);
    fill(255,228,196);
    ellipse(gameChar_x, gameChar_y - 80, 12, 20);
    //ears
    arc(gameChar_x, gameChar_y - 80, 5, 6, radians(270), radians(90));
    //nose
    triangle(gameChar_x - 5, gameChar_y - 80, gameChar_x - 8, gameChar_y - 76, gameChar_x - 5, gameChar_y - 77);
    //body
    noStroke();
    rect(gameChar_x - 5, gameChar_y - 70, 10, 30);
    //right leg
    stroke(0);
    beginShape()
    vertex(gameChar_x + 4, gameChar_y - 40);
    vertex(gameChar_x + 27, gameChar_y - 19);
    vertex(gameChar_x + 22, gameChar_y - 14);
    vertex(gameChar_x - 4, gameChar_y - 40);
    endShape(CLOSE);
    //right shoes
    strokeWeight(1);
    fill(0);
    quad(gameChar_x + 27, gameChar_y - 19, gameChar_x + 22, gameChar_y - 14, gameChar_x + 25, gameChar_y - 10, gameChar_x + 30, gameChar_y - 15);
    arc(gameChar_x + 26, gameChar_y - 10, 12, 12, radians(140), radians(230));
    //left leg
    fill(255,228,196);
    beginShape();
    vertex(gameChar_x - 5, gameChar_y - 40);
    vertex(gameChar_x - 20, gameChar_y - 35);
    vertex(gameChar_x - 17, gameChar_y - 18);
    vertex(gameChar_x - 11, gameChar_y - 20);
    vertex(gameChar_x - 13, gameChar_y - 32);
    vertex(gameChar_x + 5, gameChar_y - 40);
    endShape(CLOSE);
    //left shoes
    strokeWeight(1);
    fill(0);
    quad(gameChar_x - 11, gameChar_y - 20, gameChar_x - 18, gameChar_y - 17, gameChar_x - 16, gameChar_y - 13, gameChar_x - 9, gameChar_y - 16);
    arc(gameChar_x - 15, gameChar_y - 13, 11, 10, radians(150), radians(250));
    //right arm
    fill(255,228,196);
    beginShape();
    vertex(gameChar_x + 4, gameChar_y - 68);
    vertex(gameChar_x + 15, gameChar_y - 65);
    vertex(gameChar_x + 23, gameChar_y - 56);
    vertex(gameChar_x + 19, gameChar_y - 52);
    vertex(gameChar_x + 12, gameChar_y - 60);
    vertex(gameChar_x + 4, gameChar_y - 59);
    endShape(CLOSE);
    //left hand
    arc(gameChar_x + 21, gameChar_y - 54, 6, 8, radians(290), radians(180));
    //eyes
    noStroke();
    fill(255);
    arc(gameChar_x - 5, gameChar_y - 81, 5, 5, radians(290), radians(160));
    fill(0);
    stroke(0);
    ellipse(gameChar_x - 7, gameChar_y - 81, 0.5, 0.5);
    //mouth
    fill(255);
    line(gameChar_x - 5, gameChar_y - 73, gameChar_x - 2, gameChar_y - 75);
    //shirt
    strokeWeight(1);
    fill(220,20,60);
    rect(gameChar_x - 5, gameChar_y - 70, 10, 30);
    fill(255,228,196);
    ellipse(gameChar_x, gameChar_y - 63, 10, 15);
    //left arm
    beginShape();
    vertex(gameChar_x + 2, gameChar_y - 67);
    vertex(gameChar_x - 15, gameChar_y - 69);
    vertex(gameChar_x - 25, gameChar_y - 77);
    vertex(gameChar_x - 29, gameChar_y - 74);
    vertex(gameChar_x - 17, gameChar_y - 64);
    vertex(gameChar_x + 2, gameChar_y - 61);
    endShape(CLOSE);
    arc(gameChar_x, gameChar_y - 64, 6, 6, radians(270), radians(90));
    //left hand
    arc(gameChar_x - 27, gameChar_y - 75, 7, 6, radians(110), radians(340));
    //pants
    fill(70,130,180);
    beginShape();
    vertex(gameChar_x + 5, gameChar_y - 42);
    vertex(gameChar_x + 15, gameChar_y - 33);
    vertex(gameChar_x + 5, gameChar_y - 25);
    vertex(gameChar_x - 2, gameChar_y - 34);
    vertex(gameChar_x - 9, gameChar_y - 29);
    vertex(gameChar_x - 15, gameChar_y - 38);
    vertex(gameChar_x - 5, gameChar_y - 42);
    endShape(CLOSE);
    //hair
    fill(0);
    strokeWeight(1);
    beginShape();
    vertex(gameChar_x, gameChar_y - 93);
    vertex(gameChar_x - 3, gameChar_y - 91);
    vertex(gameChar_x - 8, gameChar_y - 93);
    vertex(gameChar_x - 5, gameChar_y - 90);
    vertex(gameChar_x - 8, gameChar_y - 88);
    vertex(gameChar_x - 9, gameChar_y - 84);
    vertex(gameChar_x - 2, gameChar_y - 90);
    vertex(gameChar_x - 4, gameChar_y - 82);
    vertex(gameChar_x - 2, gameChar_y - 82);
    vertex(gameChar_x, gameChar_y - 93);
    vertex(gameChar_x + 1, gameChar_y - 82);
    vertex(gameChar_x + 2, gameChar_y - 84);
    vertex(gameChar_x + 4, gameChar_y - 86);
    vertex(gameChar_x + 6, gameChar_y - 78);
    vertex(gameChar_x + 8, gameChar_y - 84);
    vertex(gameChar_x + 6, gameChar_y - 86);
    vertex(gameChar_x + 8, gameChar_y - 90);
    vertex(gameChar_x + 5, gameChar_y - 90);
    endShape(CLOSE);
    //straw hat
    fill(218,165,32);
    arc(gameChar_x, gameChar_y - 109, 17, 20, radians(180), radians(0));
    ellipse(gameChar_x, gameChar_y - 107, 30, 5);
    fill(220,20,60);
    point(gameChar_x - 10, gameChar_y - 109);
    point(gameChar_x + 10, gameChar_y - 109);
    point(gameChar_x + 9, gameChar_y - 111);
    point(gameChar_x + 5, gameChar_y - 113);
    point(gameChar_x - 5, gameChar_y - 113);
    point(gameChar_x - 8, gameChar_y - 111);
    beginShape();
    curveVertex(gameChar_x - 10, gameChar_y - 109);
    curveVertex(gameChar_x + 10, gameChar_y - 109);
    curveVertex(gameChar_x + 9, gameChar_y - 111);
    curveVertex(gameChar_x + 5, gameChar_y - 113);
    curveVertex(gameChar_x - 5, gameChar_y - 113);
    curveVertex(gameChar_x - 8, gameChar_y - 111);
    endShape(CLOSE);
}

//draw character jumping up
function luffyJumpingUp()
{
    stroke(0);
    fill(255,228,196);
    ellipse(gameChar_x, gameChar_y - 80, 18, 20);
    //ears
    arc(gameChar_x - 9, gameChar_y - 80, 5, 6, radians(90), radians(270));
    arc(gameChar_x + 9, gameChar_y - 80, 5, 6, radians(270), radians(90));
    //nose
    point(gameChar_x, gameChar_y - 79);
    //body
    noStroke();
    rect(gameChar_x - 12.25, gameChar_y - 70, 25, 30);
    //left leg
    stroke(0);
    beginShape()
    vertex(gameChar_x - 1, gameChar_y - 40);
    vertex(gameChar_x - 6, gameChar_y - 18);
    vertex(gameChar_x - 16.25, gameChar_y - 18);
    vertex(gameChar_x - 11.25, gameChar_y - 40);
    endShape(CLOSE);
    //right leg
    beginShape()
    vertex(gameChar_x + 1, gameChar_y - 40);
    vertex(gameChar_x + 6, gameChar_y - 18);
    vertex(gameChar_x + 16.25, gameChar_y - 18);
    vertex(gameChar_x + 11.25, gameChar_y - 40);
    endShape(CLOSE);
    //right arm
    beginShape()
    vertex(gameChar_x + 11.25, gameChar_y - 70);
    vertex(gameChar_x + 11.25, gameChar_y - 95);
    vertex(gameChar_x + 18.25, gameChar_y - 95);
    vertex(gameChar_x + 18.25, gameChar_y - 62);
    vertex(gameChar_x + 11.25, gameChar_y - 55);
    endShape(CLOSE);
    //left arm
    beginShape()
    vertex(gameChar_x - 11.25, gameChar_y - 70);
    vertex(gameChar_x - 11.25, gameChar_y - 95);
    vertex(gameChar_x - 18.25, gameChar_y - 95);
    vertex(gameChar_x - 18.25, gameChar_y - 62);
    vertex(gameChar_x - 11.25, gameChar_y - 55);
    endShape(CLOSE);
    //hands
    arc(gameChar_x - 14.75, gameChar_y - 93, 8, 8, radians(180), radians(0));
    arc(gameChar_x + 14.75, gameChar_y - 93, 8, 8, radians(180), radians(0));
    //hair
    fill(0);
    beginShape();
    vertex(gameChar_x, gameChar_y - 90);
    vertex(gameChar_x + 2, gameChar_y - 85);
    vertex(gameChar_x + 1, gameChar_y - 89);
    vertex(gameChar_x + 9, gameChar_y - 82);
    vertex(gameChar_x + 6, gameChar_y - 88);
    vertex(gameChar_x + 13, gameChar_y - 81);
    vertex(gameChar_x + 11, gameChar_y - 87);
    vertex(gameChar_x + 8, gameChar_y - 83);
    vertex(gameChar_x + 10, gameChar_y - 90);
    vertex(gameChar_x + 4, gameChar_y - 92);
    vertex(gameChar_x, gameChar_y - 95);
    vertex(gameChar_x, gameChar_y - 90);
    vertex(gameChar_x - 3, gameChar_y - 93);
    vertex(gameChar_x, gameChar_y - 90);
    vertex(gameChar_x - 2, gameChar_y - 91);
    vertex(gameChar_x - 9, gameChar_y - 89);
    vertex(gameChar_x, gameChar_y - 88);
    vertex(gameChar_x - 9, gameChar_y - 87);
    vertex(gameChar_x, gameChar_y - 90);
    vertex(gameChar_x - 13, gameChar_y - 84);
    vertex(gameChar_x - 4, gameChar_y - 90);
    vertex(gameChar_x - 9, gameChar_y - 84);
    vertex(gameChar_x - 13, gameChar_y - 82);
    vertex(gameChar_x - 1, gameChar_y - 89);
    vertex(gameChar_x - 2, gameChar_y - 85);
    vertex(gameChar_x - 3, gameChar_y - 85);
    endShape(CLOSE);
    //shoes
    strokeWeight(1);
    fill(0);
    arc(gameChar_x - 11, gameChar_y - 16, 11, 9, radians(180), radians(0));
    arc(gameChar_x + 11, gameChar_y - 16, 11, 9, radians(180), radians(0));
    //eyes
    noStroke();
    fill(255);
    ellipse(gameChar_x - 4, gameChar_y - 81, 5, 5);
    ellipse(gameChar_x + 4, gameChar_y - 81, 5, 5);
    fill(0);
    stroke(0);
    ellipse(gameChar_x - 4, gameChar_y - 81, 1, 1);
    ellipse(gameChar_x + 4, gameChar_y - 81, 1, 1);
    //mouth
    fill(255);
    ellipse(gameChar_x, gameChar_y - 74, 5, 4);
    //scar under eye
    stroke(0);
    strokeWeight(0.5);
    line(gameChar_x + 4, gameChar_y - 78, gameChar_x + 7, gameChar_y - 80);
    //shirt
    strokeWeight(1);
    fill(220,20,60);
    rect(gameChar_x - 12.25, gameChar_y - 70, 25, 30);
    fill(255,228,196);
    arc(gameChar_x, gameChar_y - 70, 15, 10, radians(0), radians(180));
    arc(gameChar_x - 13, gameChar_y - 63, 6, 15, radians(270), radians(90));
    arc(gameChar_x + 13, gameChar_y - 63, 6, 15, radians(90), radians(270));
    //pants
    fill(70,130,180);
    beginShape()
    vertex(gameChar_x + 12.25, gameChar_y - 42);
    vertex(gameChar_x - 12.25, gameChar_y - 42);
    vertex(gameChar_x - 17, gameChar_y - 28);
    vertex(gameChar_x - 2, gameChar_y - 28);
    vertex(gameChar_x, gameChar_y - 35);
    vertex(gameChar_x + 2, gameChar_y - 28);
    vertex(gameChar_x + 17, gameChar_y - 28);
    endShape(CLOSE);
    //straw hat
    fill(218,165,32);
    arc(gameChar_x, gameChar_y - 109, 20, 20, radians(180), radians(0));
    ellipse(gameChar_x, gameChar_y - 107, 35, 10);
    fill(220,20,60);
    point(gameChar_x - 13, gameChar_y - 109);
    point(gameChar_x + 13, gameChar_y - 109);
    point(gameChar_x + 11, gameChar_y - 111);
    point(gameChar_x + 8, gameChar_y - 113);
    point(gameChar_x - 8, gameChar_y - 113);
    point(gameChar_x - 11, gameChar_y - 111);
    beginShape();
    curveVertex(gameChar_x - 13, gameChar_y - 109);
    curveVertex(gameChar_x + 13, gameChar_y - 109);
    curveVertex(gameChar_x + 11, gameChar_y - 111);
    curveVertex(gameChar_x + 8, gameChar_y - 113);
    curveVertex(gameChar_x - 8, gameChar_y - 113);
    curveVertex(gameChar_x - 11, gameChar_y - 111);
    endShape(CLOSE);
}