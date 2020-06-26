var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["83b26bf1-188d-4ca1-acad-b7921ddd48de","ca187996-3eaf-4b03-bda3-80b5da4a80ed","7d8963fd-41e7-4b06-b849-4b0d6737b8a3","e5213d19-9b5b-4b47-a72e-d9cbaae90826","c6697a93-84fd-47a2-b157-41ab3fae5718","464edaee-1428-4934-8fad-65395ec2fa9f","2a0db2b3-6ff2-4e0c-922b-b0411b7561f9"],"propsByKey":{"83b26bf1-188d-4ca1-acad-b7921ddd48de":{"name":"underwater_1","sourceUrl":"assets/api/v1/animation-library/gamelab/XN..6b7PQhL5yW3FILYOJpCswKVh.x95/category_backgrounds/background_underwater.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"XN..6b7PQhL5yW3FILYOJpCswKVh.x95","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/XN..6b7PQhL5yW3FILYOJpCswKVh.x95/category_backgrounds/background_underwater.png"},"ca187996-3eaf-4b03-bda3-80b5da4a80ed":{"name":"left","sourceUrl":"assets/api/v1/animation-library/gamelab/z5BYpOg69tglzqYJUDyX3FtoLSmHZkcM/category_animals/fish_green.png","frameSize":{"x":67,"y":47},"frameCount":2,"looping":true,"frameDelay":5,"version":"z5BYpOg69tglzqYJUDyX3FtoLSmHZkcM","loadedFromSource":true,"saved":true,"sourceSize":{"x":134,"y":47},"rootRelativePath":"assets/api/v1/animation-library/gamelab/z5BYpOg69tglzqYJUDyX3FtoLSmHZkcM/category_animals/fish_green.png"},"7d8963fd-41e7-4b06-b849-4b0d6737b8a3":{"name":"down_1","sourceUrl":null,"frameSize":{"x":67,"y":47},"frameCount":2,"looping":true,"frameDelay":12,"version":"j4zzD.fxeUMPgsUZj.1mg7qfAwUJQ32W","loadedFromSource":true,"saved":true,"sourceSize":{"x":67,"y":94},"rootRelativePath":"assets/7d8963fd-41e7-4b06-b849-4b0d6737b8a3.png"},"e5213d19-9b5b-4b47-a72e-d9cbaae90826":{"name":"right","sourceUrl":null,"frameSize":{"x":67,"y":47},"frameCount":2,"looping":true,"frameDelay":12,"version":"bQP9pa.xuQODvuNriBbsq4ZDvcprkeSG","loadedFromSource":true,"saved":true,"sourceSize":{"x":67,"y":94},"rootRelativePath":"assets/e5213d19-9b5b-4b47-a72e-d9cbaae90826.png"},"c6697a93-84fd-47a2-b157-41ab3fae5718":{"name":"up","sourceUrl":null,"frameSize":{"x":67,"y":47},"frameCount":2,"looping":true,"frameDelay":12,"version":"f8ztF6NL6puXbUm2aIHjHFG6vvzV95Sy","loadedFromSource":true,"saved":true,"sourceSize":{"x":67,"y":94},"rootRelativePath":"assets/c6697a93-84fd-47a2-b157-41ab3fae5718.png"},"464edaee-1428-4934-8fad-65395ec2fa9f":{"name":"bee_1","sourceUrl":"assets/api/v1/animation-library/gamelab/VEMUiSeOAlOF8fwy7A5JmdxbbBDgB6kx/category_animals/bee.png","frameSize":{"x":63,"y":50},"frameCount":2,"looping":true,"frameDelay":2,"version":"VEMUiSeOAlOF8fwy7A5JmdxbbBDgB6kx","loadedFromSource":true,"saved":true,"sourceSize":{"x":126,"y":50},"rootRelativePath":"assets/api/v1/animation-library/gamelab/VEMUiSeOAlOF8fwy7A5JmdxbbBDgB6kx/category_animals/bee.png"},"2a0db2b3-6ff2-4e0c-922b-b0411b7561f9":{"name":"fish_grered_1","sourceUrl":null,"frameSize":{"x":67,"y":47},"frameCount":2,"looping":true,"frameDelay":12,"version":"exkoBW3dXDaPdaZ_ocUEQQk8nCLexmBi","loadedFromSource":true,"saved":true,"sourceSize":{"x":67,"y":94},"rootRelativePath":"assets/2a0db2b3-6ff2-4e0c-922b-b0411b7561f9.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var back = createSprite(200, 200);
back.setAnimation("underwater_1");
var hurdle1 = createSprite(200, 320);
hurdle1.setAnimation("fish_grered_1");
var hurdle2 = createSprite(200, 240);
hurdle2.setAnimation("fish_grered_1");
var hurdle3 = createSprite(200, 160);
hurdle3.setAnimation("fish_grered_1");
var hurdle4 = createSprite(200, 80);
hurdle4.setAnimation("fish_grered_1");
var hero = createSprite(200, 375);
hero.setAnimation("left");
var enemy1 = createSprite(75,50, 200);
enemy1.setAnimation("bee_1");
var enemy2 = createSprite(350,50, 200);
enemy2.setAnimation("bee_1");
var enemy3 = createSprite(200, 200);
enemy3.setAnimation("bee_1");
var enemy4 = createSprite(350,350, 200);
enemy4.setAnimation("bee_1");
hurdle1.velocityX = 2;
hurdle2.velocityX = -2;
hurdle3.velocityX = 2;
hurdle4.velocityX = -2;
function draw() {
  createEdgeSprites(); 
  hurdle1.bounceOff(edges);

  hurdle2.bounceOff(edges);
   hurdle3.bounceOff(edges);
   hurdle4.bounceOff(edges);
    
      hero.bounceOff(hurdle2);
        hero.bounceOff(hurdle3);
  hero.bounce(enemy1);
    hero.bounce(enemy2);
 hero.bounce(enemy3);    
   hero.bounce(enemy4);  
  hero.bounceOff(hurdle1);
    
  hero.bounceOff(hurdle4);   
    if (keyDown("up")) {
      hero.velocityY = -4;
      hero.velocityX = 0;
      back.velocityX = 0;
    }
    if (keyDown("down")) {
      hero.velocityY = 4;
      hero.velocityX = 0;
    }
    if (keyDown("left")) {
      hero.velocityX = -4;
      hero.velocityY = 0;
    }
    if (keyDown("right")) {
      hero.velocityX = 4;
      hero.velocityY = 0;
    }
    
    
    
    
  drawSprites();
}

  
  

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
