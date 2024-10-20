//check if Luffy over left collectables
function luffyCollectedLeftCollectbles()
{
    for (var i = 0; i < leftcollectables.length; i++)
    {
        luffyCollectedLeftCollectable(leftcollectables[i]);
    }
}

//check if luffy over left collectable
function luffyCollectedLeftCollectable(l_collectable)
{
    if(l_collectable.isFound == false)
        {
            if(dist(gameChar_scroll_x, gameChar_y, (l_collectable.x + 110), l_collectable.y) < 10)
                {
                    l_collectable.isFound = true;
                    //increment game score
                    game_score++;
                    //play coin sound when luffy is over it
                    coin_sound.play();
                }
        }
    
}

//check luffy over right collectables
function luffyCollectedRightCollectables()
{
    for(var i = 0; i < collectables.length; i++)
    {
        luffyCollectedRightCollectable(collectables[i]);
    }
}

//check luffy over right collectable
function luffyCollectedRightCollectable(r_collectable)
{
    if(r_collectable.isFound == false)
        {
            if(dist(gameChar_scroll_x, gameChar_y, (r_collectable.x + 100), r_collectable.y) < 10)
                {
                    r_collectable.isFound = true;
                    //increment game score
                    game_score++;
                    //play coin sound when treasure is picked up
                    coin_sound.play();
                }
        }
    
}

//check luffy falling in canyons
function luffyFallingInCanyons()
{
    for(var i = 0; i < canyons.length; i++)
    {
        luffyFallingInCanyon(canyons[i]);
    }
}

//check luffy falling in canyon
function luffyFallingInCanyon(t_canyon)
{
    if(gameChar_y == floorPos_y && gameChar_scroll_x > t_canyon.x && gameChar_scroll_x < t_canyon.x + 100)
    {
        isPlummeting = true;
        if(lives > 1)
        {
            //play fall sound if luffy still has lives
            fall_sound.play();
        }
    }
}

//check if luffy has reached the ship and won the game
function ifLuffyReachShip()
{
    if(ship.isReached == false)
        {
            if(dist(gameChar_scroll_x, gameChar_y, ship.x + 250, ship.y) < 10)
                {
                    ship.isReached = true;
                    //game over
                    gameOver = true;
                }
        }
}

//check if luffy is dead
function checkIfLuffyIsDead()
{
    if(gameChar_y > height)
        {
            //decrement live
            lives--;
            //restart game if there are still lives
            if(lives > 0)
                {
                    initialise();
                    framecount = 0;
                }
            else if(lives <= 0)
                {
                    //gameover
                    gameOver = true;
                    background_sound.stop();
                }
        }
}