'use strict';

let scroolBefore = document.querySelector('.example_picture_scrool_line_before');
let scroolAfter = document.querySelector('.example_picture_scrool_line_after');
let cat1 = document.querySelector('.example_picture_cat1');
let cat2 = document.querySelector('.example_picture_cat2');

scroolBefore.onclick = function () {
    scroolBefore.classList.add('scrool_active');
    scroolAfter.classList.remove('scrool_active');
    cat1.classList.remove('hidden_cat');
    cat1.classList.add('unhidden_cat');
    cat2.classList.remove('unhidden_cat');
    cat2.classList.add('hidden_cat');
};

scroolAfter.onclick = function () {
    scroolAfter.classList.add('scrool_active');
    scroolBefore.classList.remove('scrool_active');
    cat1.classList.add('hidden_cat');
    cat1.classList.remove('unhidden_cat');
    cat2.classList.remove('hidden_cat');
    cat2.classList.add('unhidden_cat');
};

