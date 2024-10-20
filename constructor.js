//create constructor function for sand particles
function Particle(x, y)
{
    //attributes of particles
    this.pos = createVector(x, y);
    this.velocity = p5.Vector.random2D();
    this.acceleration = createVector();
    this.maxSpeed = 3;
    this.maxForce = 0.5;
    //create target vector for particles to move towards
    var luffy = createVector(gameChar_x, gameChar_y - 50);
    
    //update particles movement
    this.update = function()
    {
        if(gameOver == false)
        {
            //calculate a force towards luffy
            var steer = this.steerTowards(luffy);

            //apply limits to acceleration
            this.acceleration.add(steer);
            this.acceleration.limit(this.maxForce);

            //update velocity and position
            this.pos.add(this.velocity);
            this.velocity.add(this.acceleration);
            this.velocity.limit(this.maxSpeed);

            //wrap around canvas edges
            this.wrapEdges();

            //reset acceleration
            this.acceleration.mult(0);
        }
    }
    
    //add vector to create a force to move particles towards
    this.steerTowards = function(target)
    {
        //calculate velocity from particles to luffy
        var v = p5.Vector.sub(target, this.pos);
        v.setMag(this.maxSpeed);
        //create force
        var force = p5.Vector.sub(v, this.velocity);
        force.limit(this.maxForce);
        
        return force;
    }
    
    //ensure particles stay in canvas
    this.wrapEdges = function()
    {
        if(this.pos.y < 0)
        {
            this.pos.y = height;
        }
        if(this.pos.y > height)
        {
            this.pos.y = 0;
        }
    }
    
    //draw sand particles
    this.drawParticle = function()
    {
        if(gameOver == false)
        {
            noStroke();
            fill(246, 215, 176);
            ellipse(this.pos.x, this.pos.y, 7);
        }
    }
    
    //check if the particles are on luffy and kill him
    this.luffyDying = function()
    {
        var d = dist(luffy.x, luffy.y, this.pos.x, this.pos.y);
        d = abs(d);
        if(d < 1)
        {
            dying_sound.play();
            dying_sound.pause(1);
            isPlummeting = true;
        }
    }
}

//constructor function to create a punch to kill enemy
function LuffyPunch(pos, direction)
{
    //attributes
    this.pos = pos;
    this.direction = direction;
    
    //draw punch
    this.drawPunch = function()
    {
        if(this.direction == -5)
        {
            //hit effect
            stroke(0);
            fill(220, 20, 60);
            beginShape();
            vertex(this.pos.x + 5, this.pos.y);
            vertex(this.pos.x, this.pos.y - 15);
            vertex(this.pos.x - 5, this.pos.y - 3);
            vertex(this.pos.x - 15, this.pos.y - 7);
            vertex(this.pos.x - 5, this.pos.y + 2);
            vertex(this.pos.x - 20, this.pos.y + 7);
            vertex(this.pos.x - 4, this.pos.y + 8);
            vertex(this.pos.x, this.pos.y + 20);
            vertex(this.pos.x + 10, this.pos.y);
            endShape(CLOSE);
            //fist
            fill(255,228,196);
            quad(this.pos.x - 7, this.pos.y - 5, this.pos.x - 10, this.pos.y + 10, this.pos.x + 10, this.pos.y + 8, this.pos.x + 10, this.pos.y - 1);
            arc(this.pos.x - 7, this.pos.y + 7, 10, 5, radians(90), radians(270));
            fill(0);
            triangle(this.pos.x - 4, this.pos.y - 1, this.pos.x - 6, this.pos.y + 5, this.pos.x, this.pos.y + 5);
        }
        if(this.direction == 5)
        {
            //hit effect
            stroke(0);
            fill(220, 20, 60);
            beginShape();
            vertex(this.pos.x - 5, this.pos.y);
            vertex(this.pos.x, this.pos.y - 15);
            vertex(this.pos.x + 5, this.pos.y - 3);
            vertex(this.pos.x + 15, this.pos.y - 7);
            vertex(this.pos.x + 5, this.pos.y + 2);
            vertex(this.pos.x + 20, this.pos.y + 7);
            vertex(this.pos.x + 4, this.pos.y + 8);
            vertex(this.pos.x, this.pos.y + 20);
            vertex(this.pos.x - 10, this.pos.y);
            endShape(CLOSE);
            //fist
            fill(255,228,196);
            quad(this.pos.x + 7, this.pos.y - 5, this.pos.x + 10, this.pos.y + 10, this.pos.x - 10, this.pos.y + 8, this.pos.x - 10, this.pos.y - 1);
            arc(this.pos.x + 7, this.pos.y + 7, 10, 5, radians(270), radians(90));
            fill(0);
            triangle(this.pos.x + 4, this.pos.y - 1, this.pos.x + 6, this.pos.y + 5, this.pos.x, this.pos.y + 5);
        }
    }
    
    //update punch
    this.updatePunch = function()
    {
        this.pos.x += this.direction;
    }
    
    //remove punch when it is out of attack range
    this.punchRange = function()
    {
        var d = dist(this.pos.x, this.pos.y, gameChar_x, gameChar_y);
        d = abs(d);
        if(d > 300)
        {
            punches.splice(this.pos,1);
        }
    }
    
    //check if punch hit enemy
    this.checkIfPunchHitCrocodile = function(enemy)
    {
        var d = abs(enemy.x - (this.pos.x - scrollPos));
        if(d < 5)
        {
            return true;
        }
    }
}

//check if luffy is close to crocodile and kill luffy if close
function checkIfLuffyIsNearCrocodile()
{
    for (var i = 0; i < crocodiles.length; i++)
    {
        crocodiles[i].createParticlesAroundCrocodile();
        crocodiles[i].checkIfLuffyIsCloseToCrocodile();
    }
}

//draw and update punch
function drawAndUpdatePunch()
{
    for(var i = 0; i < punches.length; i++)
    {
        punches[i].drawPunch();
        punches[i].updatePunch();
        //traverse through punch array and crocodile array
        for(var j = 0; j < crocodiles.length; j++)
        {
            //check if punch hit crocodile by adding crocodile properties to the function
            if(punches[i].checkIfPunchHitCrocodile(crocodiles[j]))
            {
                //if punch hit enemy, kill enemy
                crocodiles[j].crocodileIsDead();
            }
        }
        //if not enemy is not in range and remove punch out of screen
        punches[i].punchRange();
    }
}

//constructor function for platforms
function createPlatform(x, y, length)
{
    this.x = x;
    this.y = y;
    this.length = length;
    
    //draw platform
    this.drawPlatform = function()
    {
        stroke(0);
        strokeWeight(2);
        fill(139, 69, 19);
        rect(this.x, this.y, this.length, 10);
    }
    
    //check if luffy is in contact with platform 
    this.checkContact = function(x, y)
    {
        if(x > this.x - 20 && x < this.x + this.length + 20)
        {
            var d = this.y - y;
            if(d >= 0 && d < 5)
            {
                return true;
            }
        }
        return false;
    }
}