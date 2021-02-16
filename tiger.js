function Tiger(){

    if(frameCount % 200 === 0){
        tiger = createSprite(0, displayHeight-160);
        tiger.addAnimation("animal", tigerImg);
        tiger.visible = false;
        tiger.velocityX = 5;
        tiger.scale = 0.8;
        tigerGroup.add(tiger);
        
        srandom = Math.round(random(1,10));
        if(srandom === 1 || srandom === 3 || srandom === 9){

            tiger.visible = true;
            tiger.lifetime = displayWidth/1.5;
            
        }

        
    }

}