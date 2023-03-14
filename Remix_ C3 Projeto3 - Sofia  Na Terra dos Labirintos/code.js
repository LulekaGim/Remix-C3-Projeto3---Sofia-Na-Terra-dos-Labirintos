var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["958b19b0-2158-4ae2-a5fc-ad5846ed714a","200b0993-d707-4ebc-abd3-debaf3c06988","fa783428-328d-4e46-a894-ff9691de56f5"],"propsByKey":{"958b19b0-2158-4ae2-a5fc-ad5846ed714a":{"name":"kid_34_excited_1","sourceUrl":null,"frameSize":{"x":342,"y":381},"frameCount":1,"looping":true,"frameDelay":12,"version":"FH.GQWREjvjrSe5RjJlHYdecWRuopY2m","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":342,"y":381},"rootRelativePath":"assets/958b19b0-2158-4ae2-a5fc-ad5846ed714a.png"},"200b0993-d707-4ebc-abd3-debaf3c06988":{"name":"trophy_1","sourceUrl":null,"frameSize":{"x":381,"y":389},"frameCount":1,"looping":true,"frameDelay":12,"version":"GHQjobEnhV56PXSlGAJXAfmHewNy1lT.","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":381,"y":389},"rootRelativePath":"assets/200b0993-d707-4ebc-abd3-debaf3c06988.png"},"fa783428-328d-4e46-a894-ff9691de56f5":{"name":"trophy_1_copy_1","sourceUrl":"assets/api/v1/animation-library/gamelab/7x2COokMDKpyqrZGY9g1FYvMdliu6wtd/category_icons/trophy.png","frameSize":{"x":381,"y":389},"frameCount":1,"looping":true,"frameDelay":2,"version":"7x2COokMDKpyqrZGY9g1FYvMdliu6wtd","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":381,"y":389},"rootRelativePath":"assets/api/v1/animation-library/gamelab/7x2COokMDKpyqrZGY9g1FYvMdliu6wtd/category_icons/trophy.png"}}};
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

//criando as paredes do labirinto onde H é (Horizontal)e V é (Vertical)
var parede1H = createSprite(200, 10, 380, 10 );
var parede2H = createSprite(200, 390, 380, 10 );
var parede3V = createSprite(390, 200, 10, 390 );
var parede4V = createSprite(10, 200, 10, 390 );
var parede5H = createSprite(200, 90, 230, 10 );
var parede6V = createSprite(310, 170, 10, 150 );
var parede7H = createSprite(275, 310, 80, 10 );
var parede8V = createSprite(260, 200, 10, 90 );
var parede9V = createSprite(140, 200, 10, 90 );
var parede10V = createSprite(160, 280, 10, 70 );
var parede11V = createSprite(240, 280, 10, 70 );
var parede12H = createSprite(125, 310, 60, 10 );
var parede13H = createSprite(150, 245, 30, 10 );
var parede14H = createSprite(250, 245, 30, 10 );
var parede15H = createSprite(200, 160, 110, 10 );
var parede16V = createSprite(90, 130, 10, 80 );
var parede17H = createSprite(115, 170, 60, 10 );
var parede18H = createSprite(75, 235, 140, 10 );
var parede19V = createSprite(90, 275, 10, 80  );
var parede20V = createSprite(90, 350, 10, 80 );
var parede21V = createSprite(45, 310, 80, 10 );
var parede22H = createSprite(285, 245, 60, 10 );

//dando cor as paredes do labirinto
parede1H.shapeColor = "darkorange";
parede2H.shapeColor = "darkorange";
parede3V.shapeColor = "darkorange";
parede4V.shapeColor = "darkorange";
parede5H.shapeColor = "darkorange";
parede6V.shapeColor = "darkorange";
parede7H.shapeColor = "darkorange";
parede8V.shapeColor = "darkorange";
parede9V.shapeColor = "darkorange";
parede10V.shapeColor = "darkorange";
parede11V.shapeColor = "darkorange";
parede12H.shapeColor = "darkorange";
parede13H.shapeColor = "darkorange";
parede14H.shapeColor = "darkorange";
parede15H.shapeColor = "darkorange";
parede16V.shapeColor = "darkorange";
parede17H.shapeColor = "darkorange";
parede18H.shapeColor = "darkorange";
parede19V.shapeColor = "darkorange";
parede20V.shapeColor = "darkorange";
parede21V.shapeColor = "darkorange";
parede22H.shapeColor = "darkorange";



//criando a jogadora Sofia, sua imagem e seu tamanho, respectivamente
var Sofia = createSprite(49, 49, 20, 20);
Sofia.setAnimation("kid_34_excited_1");
Sofia.scale = 0.15;

//criando a taça, sua imagem e seu tamanho, respectivamente
 var cup = createSprite(200, 200, 20, 20);
  cup.setAnimation("trophy_1");
  cup.scale = 0.10;
   
function draw() {
  
 //mudando a cor do plano de fundo
  background("lightgreen");
  
  //dizendo para onde sofia se movimentara quando apertar determinada tecla
  if (keyDown("DOWN_ARROW")) {
  Sofia.y=Sofia.y+10;
  }
  
  if (keyDown("UP_ARROW")) {
  Sofia.y=Sofia.y-10;
  }
  
    if (keyDown("RIGHT_ARROW")) {
  Sofia.x=Sofia.x+10;
  }
  
  if (keyDown("LEFT_ARROW")) {
  Sofia.x=Sofia.x-10;
  }
  
//Aparecera um texto com tamanho,cor e posição desejadas se sofia tocar na taça
  if (Sofia.isTouching(cup)) {
  
 background("white");
  textSize(40);
  fill("black");
  stroke("black");
  text("Você Venceu!!!!", 60, 65);
  
 }

 //quando Sofia tocar nas paredes não conseguira "atravessa-las"
  Sofia.bounce(parede1H );
  Sofia.bounce(parede2H );
  Sofia.bounce(parede3V );
  Sofia.bounce(parede4V );
  Sofia.bounce(parede5H );
  Sofia.bounce(parede6V );
  Sofia.bounce(parede7H );
  Sofia.bounce(parede8V );
  Sofia.bounce(parede9V );
  Sofia.bounce(parede10V);
  Sofia.bounce(parede11V);
  Sofia.bounce(parede12H);
  Sofia.bounce(parede13H);
  Sofia.bounce(parede14H);
  Sofia.bounce(parede15H);
  Sofia.bounce(parede16V);
  Sofia.bounce(parede17H);
  Sofia.bounce(parede18H);
  Sofia.bounce(parede19V);
  Sofia.bounce(parede20V);
  Sofia.bounce(parede21V); 
  Sofia.bounce(parede22H);

//as sprites apareceram na tela
drawSprites();

}


/*function resetSofia()
{
  Sofia.bounceOff(wall1);
Sofia.bounceOff(wall2);
Sofia.bounceOff(wall3);
Sofia.bounceOff(wall4);
Sofia.bounceOff(wall5);
Sofia.bounceOff(wall6);
Sofia.bounceOff(wall7);
Sofia.bounceOff(wall8);
Sofia.bounceOff(wall9);
Sofia.bounceOff(wall10);
Sofia.bounceOff(wall11);
Sofia.bounceOff(wall12);
Sofia.bounceOff(wall13);
Sofia.bounceOff(wall14);
Sofia.bounceOff(wall15);
Sofia.bounceOff(wall16);
Sofia.bounceOff(wall17);
Sofia.bounceOff(wall18);
Sofia.bounceOff(wall19);
Sofia.bounceOff(wall20);
Sofia.bounceOff(wall21);
Sofia.bounceOff(wall22);
}

function checkwin()
{
  if ( Sofia.isTouching(cup))  
{
  textSize(40);
  stroke("red");
  text("Você Venceu", 200,200);
  }
}*/

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
