'use strict';

let point = document.querySelector('.example_slideControl_pointer');
// let cat1 = document.querySelector('.example_picture_cat1');
// let cat2 = document.querySelector('.example_picture_cat2');

point.ondragstart = function() {
    return false;
  };

let vw = window.innerWidth;
console.log(vw);


point.onmousedown = function (event) {
    
    let y = event.pageY - point.offsetHeight / 2;
    let realX;

    document.body.append(point);
    point.style.position = 'absolute';
    point.style.zIndex = 1000;
    
    moveAt(event.pageX, event.pageY);

    document.addEventListener('mousemove', onMouseMove);
    

    function moveAt(pageX, pageY) {
        let minX = 840 * vw / 1440;
        let maxX = 1268 * vw / 1440;
        let normalX;

        if (pageX < minX) realX = minX; 
        else if (pageX > maxX) realX = maxX; else realX = pageX;
    
        
        point.style.left = realX - point.offsetWidth / 2 + 'px';
        point.style.top = y + 'px';
        // console.log(y);
        console.log(point.style.top);
        console.log(point.style.left);
      }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
      }

    
    document.onmouseup = function() {
        // console.log(y);
        
        document.removeEventListener('mousemove', onMouseMove);
        // point.onmouseup = null;
        // console.log(event.pageX);

      };

    // cat1.classList.toggle("hidden_cat");
    // cat2.classList.toggle("hidden_cat");

}
// window.addEventListener('resize', resizeListener);
window.onresize = start;
function start  () {
    let currentTop = point.style.top;
    console.log(currentTop);
    let currentTop1 = parseInt(currentTop) * vw / 1440;
    console.log(currentTop1);
    point.style.top = currentTop1 + 'px' 
    // point.style.top = 2168 * vw / 1440  + 'px'; 
    // console.log(point.style.top);
    
    // point.style.left = 1029 * vw / 1440; 

  }