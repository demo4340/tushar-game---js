function Dragon(){

    if(frameCount % 80 === 0){
        dragon = createSprite(0, displayHeight- (displayHeight-10));
        dragon.x = Math.round(random(20, displayHeight-50));
        dragon.addAnimation("animal", dragonImg);
        dragon.visible = false;
        dragon.velocityY = 5;
        dragon.velocityX = 5;
        dragon.scale = 0.5;
        dragonGroup.add(dragon);
        
        s_random = Math.round(random(1,10));
        if(s_random === 1 || s_random === 3 || s_random === 9){

            dragon.visible = true;
            dragon.lifetime = displayWidth/1.5;
            
        }

        
    }

}