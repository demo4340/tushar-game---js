function Elephant(){

    if(frameCount % 450 === 0){

        elephant = createSprite(displayWidth/6, displayHeight - 150);
        elephant.addAnimation("animal", elephantImg);
        elephant.velocityX = 3;
        elephant.scale = 0.5;
        elephantGroup.add(elephant);
    }

}