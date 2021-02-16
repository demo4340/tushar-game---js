function Lion(){

    if(frameCount % 350 === 0){

        lion = createSprite(displayWidth/7, displayHeight - 150);
        lion.addAnimation("animal", lionImg);
        lion.velocityX = 8;
        lion.scale = 0.7;
        lionGroup.add(lion);
    }

}