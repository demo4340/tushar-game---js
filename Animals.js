function animals(){

    if(frameCount % 300 === 0){
  
      animal = createSprite(displayWidth/4, displayHeight-150);

      rand = Math.round(random(1, 5));
      switch(rand){
  
        case 1: animal.addAnimation("animal", elephantImg);
                animal.x = Math.round(random(displayWidth/4, displayWidth-100));
                animal.scale = 0.5;
                animal.velocityX = 2;
                break;
        case 2: animal.addAnimation("animal", snakeImg);
                animal.x = Math.round(random(displayWidth/4, displayWidth-100));
                animal.velocityX = 2.5;
                animal.scale = 0.3;
                break;
        case 3: animal.addAnimation("animal", tigerImg);
                animal.x = Math.round(random(displayWidth/4, displayWidth-100));
                animal.velocityX = 1.5;
                animal.scale = 0.8;
                break;
        case 4: animal.addAnimation("animal", lionImg);
                animal.x = Math.round(random(displayWidth/4, displayWidth-100));
                animal.velocityX = 3.5;
                animal.scale = 0.7;
                break;
        case 5: animal.addAnimation("animal", dragonImg);
                animal.y = Math.round(random(displayHeight/4, displayHeight-500));
                animal.scale = 0.8;
                animal.velocityY = 1;
                if(animal.y > displayHeight-300){

                        animal.destroy();

                }
                break;
        default : break;
  
      }
  
  
    }
  
  }