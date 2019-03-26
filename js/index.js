  var arrowRight = document.querySelector('.arrow-right');
  var arrowLeft = document.querySelector('.arrow-left');
  var menuAngle = 0;
  var iconAngle = 0;
  var icons = document.querySelectorAll('i');
  var hexWrapper = document.querySelector('.hex-row-wrapper');

function moveRight() {
  menuAngle += 60;
  iconAngle -= 60;
  //rotate icon
  for(let i = 0; i < icons.length; i ++){
    icons[i].setAttribute("style", 'transform: rotate(' + iconAngle + 'deg);');
  }
  //rotate menu
  hexWrapper.setAttribute("style", 'transform: rotate(' + menuAngle + 'deg);' );
};
function moveLeft() {
  menuAngle -= 60;
  iconAngle += 60;
  //rotate icon
  for(let i = 0; i < icons.length; i ++){
    icons[i].setAttribute("style", 'transform: rotate(' + iconAngle + 'deg);');
  }
  //rotate menu
  hexWrapper.setAttribute("style", 'transform: rotate(' + menuAngle + 'deg);' );
};
  
  arrowLeft.addEventListener("click", function(){
    moveLeft();
  });
  arrowRight.addEventListener("click", function(){
    moveRight();
  });

  document.body.addEventListener("keydown", function(e){
    var keycode = e.charCode || e.keyCode;
    switch ( keycode ) {
      default: 
          console.log('nothing to enter');
          break;
      case 37:
           moveLeft();
           break; 
      case 39:  
          moveRight();
    }
  });