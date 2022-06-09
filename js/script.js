'use strict';
var scrollActive = document.querySelector('.scroll_active');

let scrollBefore = document.querySelector('.example_picture_scroll_line_before');
let scrollAfter = document.querySelector('.example_picture_scroll_line_after');
let cat1 = document.querySelector('.example_picture_cat1');
let cat2 = document.querySelector('.example_picture_cat2');

function transformToAfter() {
    scrollAfter.classList.add('scroll_active');
    scrollBefore.classList.remove('scroll_active');
    cat1.classList.add('hidden_cat');
    cat1.classList.remove('unhidden_cat');
    cat2.classList.remove('hidden_cat');
    cat2.classList.add('unhidden_cat');
};

function transformToBefore () {
    scrollBefore.classList.add('scroll_active');
    scrollAfter.classList.remove('scroll_active');
    cat1.classList.remove('hidden_cat');
    cat1.classList.add('unhidden_cat');
    cat2.classList.remove('unhidden_cat');
    cat2.classList.add('hidden_cat');
};

scrollBefore.onclick = function() {
    transformToBefore ();
};    

scrollAfter.onclick = function() {
    transformToAfter ();
};


scrollBefore.addEventListener ('mousedown', onMouseDown1);
scrollAfter.addEventListener ('mousedown', onMouseDown2);

scrollBefore.addEventListener ('touchstart', onMouseDown11);
scrollAfter.addEventListener ('touchstart', onMouseDown22);

function onMouseDown11 (event){
    if (scrollBefore.classList.contains('scroll_active')) {
        let firstTouch = event.touches[0].clientX;
        document.addEventListener('touchend', onMouseMove);
        function onMouseMove (event){
            let currentX = event.changedTouches[event.changedTouches.length-1].pageX;
            if (firstTouch < currentX) {
                transformToAfter();           
                document.removeEventListener ('touchend', onMouseMove);
            } 
        }
    }
}

function onMouseDown22 (event){
    if (scrollAfter.classList.contains('scroll_active')) {
        let firstTouch = event.touches[0].clientX;
        document.addEventListener('touchend', onMouseMove);
        function onMouseMove (event){
            let currentX = event.changedTouches[event.changedTouches.length-1].pageX;
            if (firstTouch > currentX) {
                transformToBefore();           
                document.removeEventListener ('touchend', onMouseMove);
            } 
        }
    }
}

function onMouseDown1 (event){
    if (scrollBefore.classList.contains('scroll_active')) {
        let currentX = event.pageX;
            document.addEventListener('mousemove', onMouseMove);
            function onMouseMove (event){
            if (event.pageX > currentX) {
                transformToAfter();           
                document.removeEventListener ('mousemove', onMouseMove);
            } 
        }
    }
}

function onMouseDown2 (event){
    if (scrollAfter.classList.contains('scroll_active')) {
        let currentX = event.pageX;
        document.addEventListener('mousemove', onMouseMove);
        function onMouseMove (event){
            if (event.pageX < currentX)  {
                transformToBefore();
                document.removeEventListener ('mousemove', onMouseMove);
            }
        }
    }
}
    
document.querySelector('.navigation_mobile_menu').onclick = function(){
    document.querySelector('.navigation_mobile_menu').classList.toggle('burgerOpen');
    document.querySelector('.navigation_menu').classList.toggle('burgerOpen');

}

