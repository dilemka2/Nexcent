const burgerBtn = document.querySelector('.burger');
const menuburg = document.querySelector('.menuforburger');
const sp1 = document.querySelector('.sp1');
const sp2 = document.querySelector('.sp2');
const sp3 = document.querySelector('.sp3');
const container = document.querySelector('.container');
let counter = 0; 

burgerBtn.addEventListener('click', function() {
    if (counter == 1) {
        menuburg.style.transform = 'translateX(-163px)';
        menuburg.style.display = 'block';
        counter = 0;
        setTimeout(function(){;
            sp3.style.transform = 'translate(0) rotate(0)';
            sp2.style.opacity = '1';
            sp1.style.transform = 'translate(0) rotate(0)';

        },200);
    }
    else {
        menuburg.style.transform = 'translateX(-163px)';
        menuburg.style.display = 'flex';
        setTimeout(function(){
            menuburg.style.transform = 'translateX(0px)';
            sp3.style.transform = 'translate(2px, -8px) rotate(-45deg)';
            sp2.style.opacity = '0';
            sp1.style.transform = 'translate(2px,8px) rotate(45deg)';
        },200);
        counter = 1;
    }
})