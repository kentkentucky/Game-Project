//start(code without assistance)
//draw clouds
function drawCloud(t_cloud)
{
    fill(255,255,255);
    ellipse(t_cloud.x, t_cloud.y - 30, 200, 30);
    ellipse(t_cloud.x - 50, t_cloud.y - 50, 60, 40);
    ellipse(t_cloud.x - 15, t_cloud.y - 50, 50, 70);
    ellipse(t_cloud.x + 25, t_cloud.y - 60, 60, 75);
    ellipse(t_cloud.x + 60, t_cloud.y - 50, 60, 50);
    ellipse(t_cloud.x - 50, t_cloud.y - 25, 40, 30);
    ellipse(t_cloud.x + 30, t_cloud.y - 25, 40, 30);
    ellipse(t_cloud.x + 70, t_cloud.y - 25, 25, 20);

    fill(255);
    ellipse(t_cloud.x + 600, t_cloud.y - 30, 250, 15);
    arc(t_cloud.x + 530, t_cloud.y - 35, 60, 50, radians(170), radians(0));
    arc(t_cloud.x + 580, t_cloud.y - 35, 90, 80, radians(180), radians(0));
    arc(t_cloud.x + 640, t_cloud.y - 35, 60, 50, radians(180), radians(10));
    arc(t_cloud.x + 680, t_cloud.y - 35, 40, 30, radians(180), radians(10));
    arc(t_cloud.x + 550, t_cloud.y - 30, 60, 30, radians(0), radians(180));
    arc(t_cloud.x + 610, t_cloud.y - 30, 80, 25, radians(0), radians(180));
    arc(t_cloud.x + 660, t_cloud.y - 30, 40, 35, radians(0), radians(180));
}

//draw canyon
function drawCanyon(t_canyon)
{
    stroke(0);
    fill(0);
    quad(t_canyon.x, t_canyon.y, t_canyon.x + 100, t_canyon.y, t_canyon.x + 70, height, t_canyon.x + 30, height);
}

//draw desert on right side canvas
function drawRightDesert(r_desert)
{
    noStroke();
    fill(244,164,96);
    triangle(r_desert.x - 600, sandPos_y, r_desert.x - 350, r_desert.y + 50, r_desert.x, sandPos_y);
    fill(0,0,0,50);
    triangle(r_desert.x - 250, sandPos_y, r_desert.x - 350, r_desert.y + 50, r_desert.x, sandPos_y);
    fill(244,164,96);
    triangle(r_desert.x - 300, sandPos_y, r_desert.x - 100, r_desert.y, r_desert.x + 150, sandPos_y);
    fill(0,0,0,50);
    triangle(r_desert.x - 120, sandPos_y, r_desert.x - 100, r_desert.y, r_desert.x + 150, sandPos_y);
    fill(244,164,96);
    triangle(r_desert.x - 100, sandPos_y, r_desert.x + 150, r_desert.y + 30, r_desert.x + 400, sandPos_y);
    fill(0,0,0,50);
    triangle(r_desert.x - 20, sandPos_y, r_desert.x + 150, r_desert.y + 30, r_desert.x + 400, sandPos_y);
    triangle(r_desert.x - 100, sandPos_y, r_desert.x + 550, r_desert.y + 225, r_desert.x + 400, sandPos_y);
}

//draw desert on the left side of canvas
function drawLeftDesert(l_desert)
{
    noStroke();
    fill(244,164,96);
    triangle(l_desert.x - 100, sandPos_y, l_desert.x + 150, l_desert.y + 30, l_desert.x + 400, sandPos_y);
    fill(0,0,0,50);
    triangle(l_desert.x - 100, sandPos_y, l_desert.x + 150, l_desert.y + 30, l_desert.x + 250, sandPos_y);
    fill(244,164,96);
    triangle(l_desert.x - 300, sandPos_y, l_desert.x - 100, l_desert.y, l_desert.x + 150, sandPos_y);
    fill(0,0,0,50);
    triangle(l_desert.x + 20, sandPos_y, l_desert.x - 100, l_desert.y, l_desert.x - 300, sandPos_y);
    fill(244,164,96);
    triangle(l_desert.x - 600, sandPos_y, l_desert.x - 350, l_desert.y + 50, l_desert.x, sandPos_y);
    fill(0,0,0,50);
    triangle(l_desert.x - 250, sandPos_y, l_desert.x - 350, l_desert.y + 50, l_desert.x - 600, sandPos_y);
    triangle(l_desert.x + 50, sandPos_y, l_desert.x - 680, l_desert.y + 235, l_desert.x - 600, sandPos_y);
}

//draw cactus on the right side of canvas
function drawCactus(r_cactus)
{
    stroke(0);
    fill(34,139,34);
    point(r_cactus.x + 20, sandPos_y);
    point(r_cactus.x + 15, r_cactus.y + 10);
    point(r_cactus.x + 45, r_cactus.y + 10);
    point(r_cactus.x + 40, sandPos_y);
    beginShape();
    curveVertex(r_cactus.x + 20, sandPos_y);
    curveVertex(r_cactus.x + 20, sandPos_y);
    curveVertex(r_cactus.x + 15, r_cactus.y + 10);
    curveVertex(r_cactus.x + 45, r_cactus.y + 10);
    curveVertex(r_cactus.x + 40, sandPos_y);
    curveVertex(r_cactus.x + 40, sandPos_y);
    endShape();
    point(r_cactus.x + 42, r_cactus.y + 50);
    point(r_cactus.x + 53, r_cactus.y + 50);
    point(r_cactus.x + 53, r_cactus.y + 30);
    point(r_cactus.x + 63, r_cactus.y + 30);
    point(r_cactus.x + 63, r_cactus.y + 60);
    point(r_cactus.x + 42, r_cactus.y + 60);
    beginShape();
    curveVertex(r_cactus.x + 42, r_cactus.y + 50);
    curveVertex(r_cactus.x + 42, r_cactus.y + 50);
    curveVertex(r_cactus.x + 53, r_cactus.y + 50);
    curveVertex(r_cactus.x + 53, r_cactus.y + 30);
    curveVertex(r_cactus.x + 63, r_cactus.y + 30);
    curveVertex(r_cactus.x + 63, r_cactus.y + 60);
    curveVertex(r_cactus.x + 42, r_cactus.y + 60);
    curveVertex(r_cactus.x + 42, r_cactus.y + 60);
    endShape();
    point(r_cactus.x + 17, r_cactus.y + 50);
    point(r_cactus.x + 8, r_cactus.y + 30);
    point(r_cactus.x - 4, r_cactus.y + 36);
    point(r_cactus.x + 19, r_cactus.y + 65);
    beginShape();
    curveVertex(r_cactus.x + 17, r_cactus.y + 50);
    curveVertex(r_cactus.x + 17, r_cactus.y + 50);
    curveVertex(r_cactus.x + 8, r_cactus.y + 30);
    curveVertex(r_cactus.x - 4, r_cactus.y + 36);
    curveVertex(r_cactus.x + 19, r_cactus.y + 65);
    curveVertex(r_cactus.x + 19, r_cactus.y + 65);
    endShape();
    noStroke();
    fill(0,0,0,50);
    point(r_cactus.x + 20, sandPos_y);
    point(r_cactus.x + 95, r_cactus.y + 100);
    point(r_cactus.x + 125, r_cactus.y + 100);
    point(r_cactus.x + 40, sandPos_y);
    beginShape();
    curveVertex(r_cactus.x + 20, sandPos_y);
    curveVertex(r_cactus.x + 20, sandPos_y);
    curveVertex(r_cactus.x + 95, r_cactus.y + 100);
    curveVertex(r_cactus.x + 125, r_cactus.y + 100);
    curveVertex(r_cactus.x + 40, sandPos_y);
    curveVertex(r_cactus.x + 40, sandPos_y);
    endShape();
    point(r_cactus.x + 30, sandPos_y);
    point(r_cactus.x + 25, r_cactus.y + 10);
    point(r_cactus.x + 45, r_cactus.y + 10);
    point(r_cactus.x + 40, sandPos_y);
    beginShape();
    curveVertex(r_cactus.x + 30, sandPos_y);
    curveVertex(r_cactus.x + 30, sandPos_y);
    curveVertex(r_cactus.x + 25, r_cactus.y + 10);
    curveVertex(r_cactus.x + 45, r_cactus.y + 10);
    curveVertex(r_cactus.x + 40, sandPos_y);
    curveVertex(r_cactus.x + 40, sandPos_y);
    endShape();
    point(r_cactus.x + 42, r_cactus.y + 50);
    point(r_cactus.x + 53, r_cactus.y + 50);
    point(r_cactus.x + 53, r_cactus.y + 30);
    point(r_cactus.x + 63, r_cactus.y + 30);
    point(r_cactus.x + 63, r_cactus.y + 60);
    point(r_cactus.x + 42, r_cactus.y + 60);
    beginShape();
    curveVertex(r_cactus.x + 42, r_cactus.y + 50);
    curveVertex(r_cactus.x + 42, r_cactus.y + 50);
    curveVertex(r_cactus.x + 53, r_cactus.y + 50);
    curveVertex(r_cactus.x + 53, r_cactus.y + 30);
    curveVertex(r_cactus.x + 63, r_cactus.y + 30);
    curveVertex(r_cactus.x + 63, r_cactus.y + 60);
    curveVertex(r_cactus.x + 42, r_cactus.y + 60);
    curveVertex(r_cactus.x + 42, r_cactus.y + 60);
    endShape();
}

//draw cactus on the left side of canvas
function drawLeftCactus(l_cactus)
{
    stroke(0);
    fill(34,139,34);
    point(l_cactus.x + 20, sandPos_y);
    point(l_cactus.x + 15, l_cactus.y + 10);
    point(l_cactus.x + 45, l_cactus.y + 10);
    point(l_cactus.x + 40, sandPos_y);
    beginShape();
    curveVertex(l_cactus.x + 20, sandPos_y);
    curveVertex(l_cactus.x + 20, sandPos_y);
    curveVertex(l_cactus.x + 15, l_cactus.y + 10);
    curveVertex(l_cactus.x + 45, l_cactus.y + 10);
    curveVertex(l_cactus.x + 40, sandPos_y);
    curveVertex(l_cactus.x + 40, sandPos_y);
    endShape();
    point(l_cactus.x + 42, l_cactus.y + 50);
    point(l_cactus.x + 53, l_cactus.y + 50);
    point(l_cactus.x + 53, l_cactus.y + 30);
    point(l_cactus.x + 63, l_cactus.y + 30);
    point(l_cactus.x + 63, l_cactus.y + 60);
    point(l_cactus.x + 42, l_cactus.y + 60);
    beginShape();
    curveVertex(l_cactus.x + 42, l_cactus.y + 50);
    curveVertex(l_cactus.x + 42, l_cactus.y + 50);
    curveVertex(l_cactus.x + 53, l_cactus.y + 50);
    curveVertex(l_cactus.x + 53, l_cactus.y + 30);
    curveVertex(l_cactus.x + 63, l_cactus.y + 30);
    curveVertex(l_cactus.x + 63, l_cactus.y + 60);
    curveVertex(l_cactus.x + 42, l_cactus.y + 60);
    curveVertex(l_cactus.x + 42, l_cactus.y + 60);
    endShape();
    point(l_cactus.x + 17, l_cactus.y + 50);
    point(l_cactus.x + 8, l_cactus.y + 30);
    point(l_cactus.x - 4, l_cactus.y + 36);
    point(l_cactus.x + 19, l_cactus.y + 65);
    beginShape();
    curveVertex(l_cactus.x + 17, l_cactus.y + 50);
    curveVertex(l_cactus.x + 17, l_cactus.y + 50);
    curveVertex(l_cactus.x + 8, l_cactus.y + 30);
    curveVertex(l_cactus.x - 4, l_cactus.y + 36);
    curveVertex(l_cactus.x + 19, l_cactus.y + 65);
    curveVertex(l_cactus.x + 19, l_cactus.y + 65);
    endShape();
    noStroke();
    fill(0,0,0,50);
    point(l_cactus.x + 20, sandPos_y);
    point(l_cactus.x - 65, l_cactus.y + 100);
    point(l_cactus.x - 25, l_cactus.y + 100);
    point(l_cactus.x + 40, sandPos_y);
    beginShape();
    curveVertex(l_cactus.x + 20, sandPos_y);
    curveVertex(l_cactus.x + 20, sandPos_y);
    curveVertex(l_cactus.x - 65, l_cactus.y + 100);
    curveVertex(l_cactus.x - 25, l_cactus.y + 100);
    curveVertex(l_cactus.x + 40, sandPos_y);
    curveVertex(l_cactus.x + 40, sandPos_y);
    endShape();
    point(l_cactus.x + 30, sandPos_y);
    point(l_cactus.x + 35, l_cactus.y + 10);
    point(l_cactus.x + 14, l_cactus.y + 10);
    point(l_cactus.x + 19, sandPos_y);
    beginShape();
    curveVertex(l_cactus.x + 30, sandPos_y);
    curveVertex(l_cactus.x + 30, sandPos_y);
    curveVertex(l_cactus.x + 35, l_cactus.y + 10);
    curveVertex(l_cactus.x + 14, l_cactus.y + 10);
    curveVertex(l_cactus.x + 19, sandPos_y);
    curveVertex(l_cactus.x + 19, sandPos_y);
    endShape();
    point(l_cactus.x + 17, l_cactus.y + 50);
    point(l_cactus.x + 8, l_cactus.y + 30);
    point(l_cactus.x - 4, l_cactus.y + 36);
    point(l_cactus.x + 19, l_cactus.y + 65);
    beginShape();
    curveVertex(l_cactus.x + 17, l_cactus.y + 50);
    curveVertex(l_cactus.x + 17, l_cactus.y + 50);
    curveVertex(l_cactus.x + 8, l_cactus.y + 30);
    curveVertex(l_cactus.x - 4, l_cactus.y + 36);
    curveVertex(l_cactus.x + 19, l_cactus.y + 65);
    curveVertex(l_cactus.x + 19, l_cactus.y + 65);
    endShape();
}

//draw collectables on the right side of canvas
function drawCollectable(r_collectable)
{
    if(r_collectable.isFound == false)
    {
        stroke(255,215,0);
        strokeWeight(3);
        fill(160,82,45);
        quad(r_collectable.x + 70, r_collectable.y - 32, r_collectable.x + 150, r_collectable.y - 32, r_collectable.x + 140, r_collectable.y, r_collectable.x + 80, r_collectable.y);
        point(r_collectable.x + 70, r_collectable.y - 37);
        point(r_collectable.x + 80, r_collectable.y - 62);
        point(r_collectable.x + 140, r_collectable.y - 62);
        point(r_collectable.x + 150, r_collectable.y - 37);
        beginShape();
        curveVertex(r_collectable.x + 70, r_collectable.y - 37);
        curveVertex(r_collectable.x + 70, r_collectable.y - 37);
        curveVertex(r_collectable.x + 80, r_collectable.y - 62);
        curveVertex(r_collectable.x + 140, r_collectable.y - 62);
        curveVertex(r_collectable.x + 150, r_collectable.y - 37);
        curveVertex(r_collectable.x + 150, r_collectable.y - 37);
        endShape();
        fill(255,215,0);
        ellipse(r_collectable.x + 110, r_collectable.y - 37, 25, 25);
        rect(r_collectable.x + 70, r_collectable.y - 37, 80, 5);
        fill(0,0,0,150);
        noStroke();
        quad(r_collectable.x + 107, r_collectable.y - 39, r_collectable.x + 113, r_collectable.y - 39, r_collectable.x + 115, r_collectable.y - 27, r_collectable.x + 105, r_collectable.y - 27);
        ellipse(r_collectable.x + 110, r_collectable.y - 42, 11, 11);
        stroke(0,0,0,100);
        line(r_collectable.x + 76, r_collectable.y - 22, r_collectable.x + 144, r_collectable.y - 22);
        line(r_collectable.x + 79, r_collectable.y - 12, r_collectable.x + 141, r_collectable.y - 12);
        line(r_collectable.x + 75, r_collectable.y - 53, r_collectable.x + 145, r_collectable.y - 53);
        fill(0,0,0,50);
        noStroke();
        point(r_collectable.x + 80, r_collectable.y);
        point(r_collectable.x + 140, r_collectable.y + 15);
        point(r_collectable.x + 230, r_collectable.y + 15);
        point(r_collectable.x + 140, r_collectable.y);
        beginShape();
        curveVertex(r_collectable.x + 80, r_collectable.y);
        curveVertex(r_collectable.x + 80, r_collectable.y);
        curveVertex(r_collectable.x + 140, r_collectable.y + 15);
        curveVertex(r_collectable.x + 230, r_collectable.y + 15);
        curveVertex(r_collectable.x + 140, r_collectable.y);
        curveVertex(r_collectable.x + 140, r_collectable.y);
        endShape();
    }

}

//draw collectables on the left side of canvas
function drawLeftCollectable(l_collectable)
{
    if(l_collectable.isFound == false)
    {
        stroke(255,215,0);
        strokeWeight(3);
        fill(160,82,45);
        quad(l_collectable.x + 70, l_collectable.y - 32, l_collectable.x + 150, l_collectable.y - 32, l_collectable.x + 140, l_collectable.y, l_collectable.x + 80, l_collectable.y);
        point(l_collectable.x + 70, l_collectable.y - 37);
        point(l_collectable.x + 80, l_collectable.y - 62);
        point(l_collectable.x + 140, l_collectable.y - 62);
        point(l_collectable.x + 150, l_collectable.y - 37);
        beginShape();
        curveVertex(l_collectable.x + 70, l_collectable.y - 37);
        curveVertex(l_collectable.x + 70, l_collectable.y - 37);
        curveVertex(l_collectable.x + 80, l_collectable.y - 62);
        curveVertex(l_collectable.x + 140, l_collectable.y - 62);
        curveVertex(l_collectable.x + 150, l_collectable.y - 37);
        curveVertex(l_collectable.x + 150, l_collectable.y - 37);
        endShape();
        fill(255,215,0);
        ellipse(l_collectable.x + 110, l_collectable.y - 37, 25, 25);
        rect(l_collectable.x + 70, l_collectable.y - 37, 80, 5);
        fill(0,0,0,150);
        noStroke();
        quad(l_collectable.x + 107, l_collectable.y - 39, l_collectable.x + 113, l_collectable.y - 39, l_collectable.x + 115, l_collectable.y - 27, l_collectable.x + 105, l_collectable.y - 27);
        ellipse(l_collectable.x + 110, l_collectable.y - 42, 11, 11);
        stroke(0,0,0,100);
        line(l_collectable.x + 76, l_collectable.y - 22, l_collectable.x + 144, l_collectable.y - 22);
        line(l_collectable.x + 79, l_collectable.y - 12, l_collectable.x + 141, l_collectable.y - 12);
        line(l_collectable.x + 75, l_collectable.y - 53, l_collectable.x + 145, l_collectable.y - 53);
        fill(0,0,0,50);
        noStroke();
        point(l_collectable.x + 80, l_collectable.y);
        point(l_collectable.x, l_collectable.y + 15);
        point(l_collectable.x + 80, l_collectable.y + 15);
        point(l_collectable.x + 140, l_collectable.y);
        beginShape();
        curveVertex(l_collectable.x + 80, l_collectable.y);
        curveVertex(l_collectable.x + 80, l_collectable.y);
        curveVertex(l_collectable.x, l_collectable.y + 15);
        curveVertex(l_collectable.x + 80, l_collectable.y + 15);
        curveVertex(l_collectable.x + 140, l_collectable.y);
        curveVertex(l_collectable.x + 140, l_collectable.y);
        endShape();
    }
}
//end

//draw background function in th middle of the canvas
function drawAlubarna()
{
    //background desert
    fill(244,164,96,220);
    triangle(-200, sandPos_y, alubarna.x - 250, alubarna.y - 100, alubarna.x + 300, sandPos_y);
    fill(0,0,0,50);
    triangle(alubarna.x - 200, sandPos_y, alubarna.x - 250, alubarna.y - 100, alubarna.x + 300, sandPos_y);
    fill(244,164,96,230);
    triangle(alubarna.x - 200, sandPos_y, alubarna.x + 300, alubarna.y - 50, width + 200, sandPos_y);
    fill(0,0,0,50);
    triangle(alubarna.x + 330, sandPos_y, alubarna.x + 300, alubarna.y - 50, width + 200, sandPos_y);

    push();
    translate(150,50);
    scale(0.7);
    //alabasta
    //main building
    fill(192,255,181);
    rect(alubarna.x - 165, alubarna.y - 100, 300, 200);
    fill(255,255,255,230);
    quad(alubarna.x + 135, alubarna.y - 100, alubarna.x + 190, alubarna.y - 70, alubarna.x + 190, alubarna.y + 90, alubarna.x + 135, alubarna.y + 90);
    quad(alubarna.x - 220, alubarna.y - 70, alubarna.x - 165, alubarna.y - 100, alubarna.x - 165, alubarna.y + 90, alubarna.x - 220, alubarna.y + 90);
    fill(0,0,0,50);
    beginShape();
    vertex(alubarna.x - 165, alubarna.y - 100);
    vertex(alubarna.x + 135, alubarna.y - 100);
    vertex(alubarna.x + 190, alubarna.y - 70);
    vertex(alubarna.x + 190, alubarna.y + 90);
    vertex(alubarna.x + 30, alubarna.y + 90);
    endShape(CLOSE);
    //entrance
    fill(120,120,120,255);
    arc(alubarna.x - 15, alubarna.y + 90, 40, 350, radians(180), radians(0));
    fill(255);
    arc(alubarna.x - 15, alubarna.y + 90, 35, 300, radians(180), radians(0));   //entrance stairs
    for (i = 0; i < 18; i++)
    {
        stroke(0,0,0,150);
        line(alubarna.x - 31, alubarna.y + (i * 5), alubarna.x + 1, alubarna.y + (i * 5));
    }
    //roof
    noStroke();
    fill(255,255,255,220);
    rect(alubarna.x - 100, alubarna.y - 135, 170, 35);
    arc(alubarna.x - 15, alubarna.y - 135, 170, 25, radians(180), radians(0));
    //rooftop dome
    for (var i = 0; i < 3; i++)
    {
        fill(255,255,255,220);
        rect(alubarna.x - 95 + (i * 55), alubarna.y - 160, 50, 25);
        fill(218,165,32,220);
        arc(alubarna.x - 70 + (i * 55), alubarna.y - 159, 50, 50, radians(180), radians(0));
        triangle(alubarna.x - 75 + (i * 55), alubarna.y - 180, alubarna.x - 70 + (i * 55), alubarna.y - 195, alubarna.x - 65 + (i * 55), alubarna.y - 180);
        fill(0,0,0,50);
        triangle(alubarna.x - 85 + (i * 55), alubarna.y - 160, alubarna.x - 45 + (i * 55), alubarna.y - 130, alubarna.x - 45 + (i * 55), alubarna.y - 160);
    }
    for (var i = 0; i < 2; i++)
    {
        strokeWeight(5);
        stroke(255);
        fill(0,0,0,100);
        rect(alubarna.x - 87.5 + (i * 110), alubarna.y - 140, 35, 35);
        arc(alubarna.x - 70 + (i * 110), alubarna.y - 140, 35, 30, radians(180), radians(0));
        stroke(255);
        strokeWeight(2);
        line(alubarna.x - 85 + (i * 110), alubarna.y - 122.5, alubarna.x - 50 + (i * 110), alubarna.y - 122.5);
        line(alubarna.x - 70 + (i * 110), alubarna.y - 155, alubarna.x - 70 + (i * 110), alubarna.y - 107);
    }
    //clock
    stroke(0,0,0,200);
    fill(255);
    ellipse(alubarna.x - 15, alubarna.y - 130, 50, 50);
    line(alubarna.x - 15, alubarna.y - 130, alubarna.x, alubarna.y - 133);
    line(alubarna.x - 15, alubarna.y - 130, alubarna.x - 15, alubarna.y - 110);
    strokeWeight(5);
    point(alubarna.x - 15, alubarna.y - 130);
    strokeWeight(1);
    //windows on the left
    stroke(0);
    for(var i = 0; i < 2; i++)
    {
        fill(255,182,193);
        noStroke();
        rect(alubarna.x - 151.5 + (i * 52.5), alubarna.y - 90, 40, 180);
        fill(255);
        arc(alubarna.x - 130 + (i * 50), alubarna.y + 90, 40, 300, radians(180), radians(0));
        fill(0,0,0,180);
        arc(alubarna.x - 130 + (i * 50), alubarna.y - 15, 15, 60, radians(180), radians(0));
        stroke(255);
        line(alubarna.x - 130 + (i * 50), alubarna.y - 45, alubarna.x - 130 + (i * 50), alubarna.y - 15);
        line(alubarna.x - 137.5 + (i * 50), alubarna.y - 30, alubarna.x - 122.5 + (i * 50), alubarna.y - 30);
        stroke(0);
    }
    //windows on side buildings
    for(var i = 0; i < 2; i++)
    {
        fill(255,182,193);
        noStroke();
        quad(alubarna.x - 210, alubarna.y - 60, alubarna.x - 172, alubarna.y - 80, alubarna.x - 172, alubarna.y + 90, alubarna.x - 210, alubarna.y + 90);
        quad(alubarna.x + 142, alubarna.y - 80, alubarna.x + 180, alubarna.y - 60, alubarna.x + 180, alubarna.y + 90, alubarna.x + 142, alubarna.y + 90);
    }
    for(var i = 0; i < 2; i++)
    {
        fill(255);
        arc(alubarna.x - 190 + (i * 350), alubarna.y + 90, 35, 280, radians(180), radians(0));
        fill(0,0,0,180);
        arc(alubarna.x - 190 + (i * 350), alubarna.y - 10, 15, 50, radians(180), radians(0));
        stroke(255);
        line(alubarna.x - 190 + (i * 350), alubarna.y - 10, alubarna.x - 190 + (i * 350), alubarna.y - 30);
        line(alubarna.x - 195 + (i * 350), alubarna.y - 20, alubarna.x - 185 + (i * 350), alubarna.y - 20);
    }
    //windows on the right
    for(var i = 0; i < 2; i++)
    {
        fill(255,182,193);
        noStroke();
        rect(alubarna.x + 27.5 + (i * 52.5), alubarna.y - 90, 40, 180);
        fill(255);
        arc(alubarna.x + 50 + (i * 50), alubarna.y + 90, 40, 300, radians(180), radians(0));
        fill(0,0,0,180);
        arc(alubarna.x + 50 + (i * 50), alubarna.y - 15, 15, 60, radians(180), radians(0));
        stroke(255);
        line(alubarna.x + 50 + (i * 50), alubarna.y - 45, alubarna.x + 50 + (i * 50), alubarna.y - 10);
        line(alubarna.x + 42.5 + (i * 50), alubarna.y - 30, alubarna.x + 57.5 + (i * 50), alubarna.y - 30);
        stroke(0);
    }
    //houses on the left
    for(var i = 0; i < 5; i++)
    {
        fill(230,133,63);
        noStroke();
        arc(alubarna.x - 320 + (i * 50), alubarna.y + 90, 60, 200, radians(180), radians(0));
    }
    //houses on the right
    for(var i = 0; i < 6; i++)
    {
        fill(230,133,63);
        noStroke();
        arc(alubarna.x + 60 + (i * 50), alubarna.y + 90, 60, 210, radians(180), radians(0));
    }
    //wall
    fill(210,105,30);
    noStroke();
    rect(alubarna.x - 265, alubarna.y + 20, 210, 70);
    rect(alubarna.x + 25, alubarna.y + 20, 210, 70);
    quad(alubarna.x - 265, alubarna.y + 20, alubarna.x - 265, alubarna.y + 90, alubarna.x - 365, alubarna.y + 90, alubarna.x - 365, alubarna.y + 40);
    quad(alubarna.x + 235, alubarna.y + 20, alubarna.x + 235, alubarna.y + 90, alubarna.x + 350, alubarna.y + 90, alubarna.x + 350, alubarna.y + 40);
    fill(0,0,0,50);
    noStroke();
    quad(alubarna.x - 265, alubarna.y + 20, alubarna.x - 55, alubarna.y + 20, alubarna.x - 55, alubarna.y + 90, alubarna.x - 155, alubarna.y + 90);
    beginShape();
    vertex(alubarna.x + 25, alubarna.y + 20);
    vertex(alubarna.x + 235, alubarna.y + 20);
    vertex(alubarna.x + 350, alubarna.y + 40);
    vertex(alubarna.x + 350, alubarna.y + 90);
    vertex(alubarna.x + 235, alubarna.y + 90);
    vertex(alubarna.x + 100, alubarna.y + 90);
    endShape(CLOSE);
    //sand base
    fill(244,164,96,240);
    quad(alubarna.x - 365, alubarna.y + 90, alubarna.x + 350, alubarna.y + 90, alubarna.x + 390, sandPos_y, alubarna.x - 405, sandPos_y);
    fill(255,255,255);
    //stairs
    rect(alubarna.x - 50, alubarna.y + 90, 70, 85);
    for (i = 0; i < 18; i++)
    {
        stroke(0,0,0,150);
        line(alubarna.x - 50, alubarna.y + 90 + (i * 5), alubarna.x + 20, alubarna.y + 90 + (i * 5));
    }
    fill(175,238,238);
    rect(alubarna.x - 55, alubarna.y + 90, 10, 85);
    rect(alubarna.x + 15, alubarna.y + 90, 10, 85);
    fill(0,0,0,50);
    noStroke();
    quad(alubarna.x - 155, alubarna.y + 90, alubarna.x - 35, alubarna.y + 90, alubarna.x + 70, sandPos_y, alubarna.x - 55, sandPos_y);
    triangle(alubarna.x + 100, alubarna.y + 90, alubarna.x + 350, alubarna.y + 90, alubarna.x + 550, sandPos_y + 20);
    pop();
}

//draw mountain function
function drawMountain()
{
    fill(244,164,96);
    triangle(alubarna.x - 600, sandPos_y, alubarna.x - 350, alubarna.y + 50, alubarna.x, sandPos_y);
    noStroke();
    fill(0,0,0,50);
    triangle(alubarna.x - 250, sandPos_y, alubarna.x - 350, alubarna.y + 50, alubarna.x, sandPos_y);
    fill(244,164,96);
    triangle(alubarna.x - 300, sandPos_y, alubarna.x - 100, alubarna.y, alubarna.x + 150, sandPos_y);
    fill(0,0,0,50);
    triangle(alubarna.x - 120, sandPos_y, alubarna.x - 100, alubarna.y, alubarna.x + 150, sandPos_y);
    fill(244,164,96);
    triangle(alubarna.x - 100, sandPos_y, alubarna.x + 150, alubarna.y + 30, alubarna.x + 400, sandPos_y);
    fill(0,0,0,50);
    triangle(alubarna.x + 100, sandPos_y, alubarna.x + 150, alubarna.y + 30, alubarna.x + 400, sandPos_y);
}

//draw sun function
function drawSun()
{
    fill(255,135,0,180);
    ellipse(sun.x - 150, sun.y - 50, 80, 80);
}

//draw one piece icon function
function drawOnePieceIcon()
{
    fill(255);
    push();
    translate(900,450);
    rotate(radians(45));
    rect(-10,10,120,10);
    rotate(radians(90));
    rect(-50 , -60, 120 , 10);
    pop();
    ellipse(877, 455, 15, 15);
    ellipse(887, 448, 15, 15);
    ellipse(969, 448, 15, 15);
    ellipse(979, 455, 15, 15);
    ellipse(884, 535, 15, 15);
    ellipse(894, 543, 15, 15);
    ellipse(965, 545, 15, 15);
    ellipse(973, 538, 15, 15);
    ellipse(930, 500, 50, 50);
    ellipse(930, 520, 30, 30);
    fill(218,165,32);
    ellipse(930, 485, 90, 10);
    arc(930, 485, 50, 55, radians(180), radians(0));
    fill(220,20,60);
    rect(910, 472, 40, 8);
    arc(910, 480, 10, 16, radians(180), radians(270));
    arc(950, 480, 10, 16, radians(270), radians(0));
    fill(0);
    ellipse(920, 500, 15, 15);
    ellipse(940, 500, 15, 15);
    ellipse(930, 512, 8, 8);
    stroke(0);
    fill(255);
    arc(930, 520, 20, 20, radians(0), radians(180));
    line(920, 520, 940, 520);
    arc(930, 520, 90, 10, radians(30), radians(150));
    line(930, 520, 930, 530);
    line(925, 520, 925, 528);
    line(935, 520, 935, 528);
}

//draw end point/ship
function drawShip()
{
    if(ship.isReached == true)
    {
        //base
        fill(184,102,20);
        beginShape();
        vertex(ship.x + 600, ship.y - 130);
        vertex(ship.x + 600, ship.y - 50);
        vertex(ship.x + 500, ship.y);
        vertex(ship.x, ship.y);
        vertex(ship.x - 100, ship.y - 50);
        vertex(ship.x - 100, ship.y - 130);
        endShape();
        //helm
        rect(ship.x + 250, ship.y - 200, 30, 70);
        rect(ship.x + 255, ship.y - 300, 20, 100);
        arc(ship.x + 265, ship.y - 300, 80, 20, radians(0), radians(180));
        rect(ship.x + 225, ship.y - 330, 80, 30);
        quad(ship.x + 150, ship.y - 310, ship.x + 150, ship.y - 320, ship.x + 400, ship.y - 300, ship.x + 400, ship.y - 290);
        rect(ship.x + 350, ship.y - 170, 150, 80);
        //trees
        fill(25,179,25);
        arc(ship.x + 425, ship.y - 170, 130, 100, radians(180), radians(0));
        ellipse(ship.x + 390, ship.y - 200, 50, 50);
        ellipse(ship.x + 455, ship.y - 200, 50, 50);
        ellipse(ship.x + 420, ship.y - 210, 50, 50);
        //flag
        fill(222, 184, 135);
        quad(ship.x + 150, ship.y - 310, ship.x + 400, ship.y - 290, ship.x + 380, ship.y - 150, ship.x + 165, ship.y - 150);
        //merry
        noStroke();
        fill(255, 255, 204);
        ellipse(ship.x - 130, ship.y - 220, 70, 60);
        beginShape();
        vertex(ship.x - 70, ship.y - 130);
        vertex(ship.x - 70, ship.y - 210);
        vertex(ship.x - 120, ship.y - 240);
        vertex(ship.x - 120, ship.y - 210);
        vertex(ship.x - 100, ship.y - 200);
        vertex(ship.x - 100, ship.y - 130);
        endShape(CLOSE);
        fill(255);
        ellipse(ship.x - 150, ship.y - 230, 18);
        fill(0);
        ellipse(ship.x - 150, ship.y - 230, 12);
        stroke(0);
        strokeWeight(2);
        line(ship.x - 160, ship.y - 205, ship.x - 150, ship.y - 210);
        fill(188, 143, 143);
        arc(ship.x - 120, ship.y - 220, 20, 100, radians(200), radians(30));
        //railing
        fill(255,255,204);
        rect(ship.x - 100, ship.y - 150, 700, 10);
        for(var i = 0; i < 11; i++)
            {
                rect(ship.x - 100 + i * 68.5, ship.y - 150, 15, 20);
            }
        //jolly roger
        noStroke();
        fill(255);
        ellipse(ship.x + 190, ship.y - 270, 15);
        ellipse(ship.x + 200, ship.y - 280, 15);
        ellipse(ship.x + 200, ship.y - 180, 15);
        ellipse(ship.x + 210, ship.y - 170, 15);
        ellipse(ship.x + 370, ship.y - 260, 15);
        ellipse(ship.x + 360, ship.y - 270, 15);
        ellipse(ship.x + 350, ship.y - 180, 15);
        ellipse(ship.x + 340, ship.y - 170, 15);
        quad(ship.x + 200, ship.y - 180, ship.x + 210, ship.y - 170, ship.x + 370, ship.y - 260, ship.x + 360, ship.y - 270);
        quad(ship.x + 190, ship.y - 270, ship.x + 200, ship.y - 280, ship.x + 350, ship.y - 180, ship.x + 340, ship.y - 170);
        ellipse(ship.x + 280, ship.y - 215, 50, 80);
        ellipse(ship.x + 280, ship.y - 240, 80, 70);
        fill(0);
        ellipse(ship.x + 265, ship.y - 240, 23);
        ellipse(ship.x + 295, ship.y - 240, 23);
        ellipse(ship.x + 280, ship.y - 220, 15);
        fill(218,165,32);
        ellipse(ship.x + 280, ship.y - 260, 130, 10);
        arc(ship.x + 280, ship.y - 265, 80, 60, radians(170), radians(10));
        fill(220,20,60);
        rect(ship.x + 245, ship.y - 275, 70, 10);
        arc(ship.x + 245, ship.y - 265, 10, 20, radians(180), radians(270));
        arc(ship.x + 315, ship.y - 265, 10, 20, radians(270), radians(0));
        stroke(0);
        noFill();
        strokeWeight(1.5);
        curve(ship.x + 220, ship.y - 270, ship.x + 255, ship.y - 210, ship.x + 305, ship.y - 210, ship.x + 340, ship.y - 270);
        curve(ship.x + 220, ship.y - 260, ship.x + 258, ship.y - 200, ship.x + 303, ship.y - 200, ship.x + 340, ship.y - 260);
        curve(ship.x + 220, ship.y - 250, ship.x + 260, ship.y - 190, ship.x + 300, ship.y - 190, ship.x + 340, ship.y - 250);
        line(ship.x + 280, ship.y - 202, ship.x + 280, ship.y - 183);
        line(ship.x + 270, ship.y - 203, ship.x + 267, ship.y - 186);
        line(ship.x + 290, ship.y - 203, ship.x + 293, ship.y - 186);
        line(ship.x + 255, ship.y - 210, ship.x + 260, ship.y - 190);
        line(ship.x + 305, ship.y - 210, ship.x + 300, ship.y - 190);
        //ladder
        fill(255, 255, 204);
        rect(ship.x + 50, ship.y - 130, 8, 130);
        rect(ship.x + 100, ship.y - 130, 8, 130);
        for(var i = 0; i < 5; i++)
            {
                rect(ship.x + 50, ship.y - 120 + (i * 25), 58, 10);
            }
        noStroke();
    }
    else
    {
        fill(184,102,20);
        beginShape();
        vertex(ship.x + 600, ship.y - 130);
        vertex(ship.x + 600, ship.y - 50);
        vertex(ship.x + 500, ship.y);
        vertex(ship.x, ship.y);
        vertex(ship.x - 100, ship.y - 50);
        vertex(ship.x - 100, ship.y - 130);
        endShape();
        rect(ship.x + 250, ship.y - 200, 30, 70);
        rect(ship.x + 255, ship.y - 300, 20, 100);
        arc(ship.x + 265, ship.y - 300, 80, 20, radians(0), radians(180));
        rect(ship.x + 225, ship.y - 330, 80, 30);
        quad(ship.x + 150, ship.y - 310, ship.x + 150, ship.y - 320, ship.x + 400, ship.y - 300, ship.x + 400, ship.y - 290);
        rect(ship.x + 350, ship.y - 170, 150, 80);
        fill(25,179,25);
        arc(ship.x + 425, ship.y - 170, 130, 100, radians(180), radians(0));
        ellipse(ship.x + 390, ship.y - 200, 50, 50);
        ellipse(ship.x + 455, ship.y - 200, 50, 50);
        ellipse(ship.x + 420, ship.y - 210, 50, 50);
        fill(255,255,204);
        arc(ship.x + 175, ship.y - 310, 50, 30, radians(8), radians(185));
        arc(ship.x + 275, ship.y - 300, 160, 100, radians(5), radians(185));
        arc(ship.x + 375, ship.y - 292, 50, 30, radians(5), radians(185));
        rect(ship.x - 100, ship.y - 150, 700, 10);
        for(var i = 0; i < 11; i++)
            {
                rect(ship.x - 100 + i * 68.5, ship.y - 150, 15, 20);
            }
        //merry
        noStroke();
        fill(255, 255, 204);
        ellipse(ship.x - 130, ship.y - 220, 70, 60);
        beginShape();
        vertex(ship.x - 70, ship.y - 130);
        vertex(ship.x - 70, ship.y - 210);
        vertex(ship.x - 120, ship.y - 240);
        vertex(ship.x - 120, ship.y - 210);
        vertex(ship.x - 100, ship.y - 200);
        vertex(ship.x - 100, ship.y - 130);
        endShape(CLOSE);
        fill(255);
        ellipse(ship.x - 150, ship.y - 230, 18);
        fill(0);
        ellipse(ship.x - 150, ship.y - 230, 12);
        stroke(0);
        strokeWeight(2);
        line(ship.x - 160, ship.y - 205, ship.x - 150, ship.y - 210);
        fill(188, 143, 143);
        arc(ship.x - 120, ship.y - 220, 20, 100, radians(200), radians(30));
        noStroke();
    }
}

//draw lives card 
function drawVivreCard()
{
    for(var i = 0; i < lives; i++)
    {
        strokeWeight(2);
        stroke(89,0,179);
        fill(255);
        rect(40 * i + 900, 10 , 30, 30);
        strokeWeight(1);
        noStroke();
        fill(0,0,0,40);
        quad(40 * i + 900, 10, 40 * i + 930, 10, 40 * i + 930, 40, 40 * i + 925, 40);
    }
}
