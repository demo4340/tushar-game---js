function Snake(){

    if(frameCount % 200 === 0){
        snake = createSprite(displayWidth/6, displayHeight-160);
        snake.addAnimation("animal", snakeImg);
        snake.visible = false;
        snake.velocityX = 2;
        snake.scale = 0.5;
        snakeGroup.add(snake);
        
        s_random = Math.round(random(1,10));
        if(s_random === 1 || s_random === 5 || s_random === 10){

            snake.visible = true;
            snake.lifetime = displayWidth/1.5;
            
        }

        
    }

}