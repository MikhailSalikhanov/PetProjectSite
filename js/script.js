'use strict';
var scroolActive = document.querySelector('.scrool_active');

let scroolBefore = document.querySelector('.example_picture_scrool_line_before');
let scroolAfter = document.querySelector('.example_picture_scrool_line_after');
let cat1 = document.querySelector('.example_picture_cat1');
let cat2 = document.querySelector('.example_picture_cat2');

function transformToAfter() {
    scroolAfter.classList.add('scrool_active');
    scroolBefore.classList.remove('scrool_active');
    cat1.classList.add('hidden_cat');
    cat1.classList.remove('unhidden_cat');
    cat2.classList.remove('hidden_cat');
    cat2.classList.add('unhidden_cat');
    // scroolBefore.removeEventListener('mousedown', onMouseDown1);
};

function transformToBefore () {
    scroolBefore.classList.add('scrool_active');
    scroolAfter.classList.remove('scrool_active');
    cat1.classList.remove('hidden_cat');
    cat1.classList.add('unhidden_cat');
    cat2.classList.remove('unhidden_cat');
    cat2.classList.add('hidden_cat');
    // scroolAfter.removeEventListener('mousedown', onMouseDown2);
};

scroolBefore.onclick = function() {
    transformToBefore ();
};    

scroolAfter.onclick = function() {
    transformToAfter ();
};


scroolBefore.addEventListener ('mousedown', onMouseDown1);
scroolAfter.addEventListener ('mousedown', onMouseDown2);

scroolBefore.addEventListener ('touchstart', onMouseDown11);
scroolAfter.addEventListener ('touchstart', onMouseDown22);

function onMouseDown11 (event){
    if (scroolBefore.classList.contains('scrool_active')) {
        let firstTouch = event.touches[0].clientX;
        document.addEventListener('touchend', onMouseMove);
        function onMouseMove (event){
            let carrentX = event.changedTouches[event.changedTouches.length-1].pageX;
            if (firstTouch < carrentX) {
                transformToAfter();           
                document.removeEventListener ('touchend', onMouseMove);
            } 
        }
    }
}

function onMouseDown22 (event){
    if (scroolAfter.classList.contains('scrool_active')) {
        let firstTouch = event.touches[0].clientX;
        document.addEventListener('touchend', onMouseMove);
        function onMouseMove (event){
            let carrentX = event.changedTouches[event.changedTouches.length-1].pageX;
            if (firstTouch > carrentX) {
                transformToBefore();           
                document.removeEventListener ('touchend', onMouseMove);
            } 
        }
    }
}

var src = document.getElementById("source");

src.addEventListener('touchmove', function(e) {
  // Iterate through the touch points that have moved and log each
  // of the pageX/Y coordinates. The unit of each coordinate is CSS pixels.
  var i;
  for (i=0; i < e.changedTouches.length; i++) {
    console.log("touchpoint[" + i + "].pageX = " + e.changedTouches[i].pageX);
    console.log("touchpoint[" + i + "].pageY = " + e.changedTouches[i].pageY);
  }
}, false);
  
// scroolActive.addEventListener ('mousedown', onMouseDown);

function onMouseDown1 (event){
    if (scroolBefore.classList.contains('scrool_active')) {
        // console.log(scroolActive);
        let carrentX = event.pageX;
            // console.log(carrentX);
            document.addEventListener('mousemove', onMouseMove);
            function onMouseMove (event){
            if (event.pageX > carrentX) {
                transformToAfter();           
                document.removeEventListener ('mousemove', onMouseMove);
            } 
        }
    }
}

function onMouseDown2 (event){
    if (scroolAfter.classList.contains('scrool_active')) {
        // console.log(scroolActive);
        let carrentX = event.pageX;
        // console.log(carrentX);
        document.addEventListener('mousemove', onMouseMove);
        function onMouseMove (event){
            if (event.pageX < carrentX)  {
                transformToBefore();
                document.removeEventListener ('mousemove', onMouseMove);
            }
        }
    }
}
    



let cards = document.querySelectorAll('.cards_wrapper');
for (let one of cards)
    one.onclick = function(){
    one.classList.toggle("cards_wrapper_clicked");
}