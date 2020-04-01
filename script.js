'use strict'

// hover drop down rendering, dropdown items get parents style

const hvdd = document.getElementById('hv-dd');
const hvdditems = document.getElementById('hv-dd-items');
const items = document.querySelectorAll('.hv-dd-item');

hvdditems.style.display = 'none';
// console.log(items);

hvdd.addEventListener('mouseenter', e => {
    hvdditems.style.display = 'block';
    hvdditems.style.position = 'absolute';
    hvdditems.style.top = `${e.toElement.offsetHeight + e.toElement.offsetTop}px`;
    hvdditems.style.left = `${e.toElement.offsetLeft}px`;

    for (let i = 0; i < items.length; i++) {
        items[i].style.backgroundColor = window.getComputedStyle(e.toElement.parentNode).backgroundColor;
        items[i].style.padding = window.getComputedStyle(e.toElement).padding;
        items[i].addEventListener('mouseover', () => {
            items[i].style.backgroundColor = window.getComputedStyle(e.toElement, ':hover').backgroundColor;
        })
        items[i].addEventListener('mouseout', () => {
            items[i].style.backgroundColor = window.getComputedStyle(e.toElement.parentNode).backgroundColor;
        })

    }
})

hvdd.addEventListener('mouseleave', e => {
    hvdditems.style.display = 'none';
})


//click dropdown

const cldd = document.getElementById('cl-dd');
const cldditems = document.getElementById('cl-dd-items');
const clitems = document.querySelectorAll('.cl-dd-item');

cldditems.style.display = 'none';

cldd.addEventListener('click', e => {
    cldditems.style.display = 'block';
    cldditems.style.position = 'absolute';
    cldditems.style.top = `${e.toElement.offsetHeight + e.toElement.offsetTop}px`;
    cldditems.style.left = `${e.toElement.offsetLeft}px`;

    for (let i = 0; i < clitems.length; i++) {
        clitems[i].style.backgroundColor = window.getComputedStyle(e.toElement.parentNode).backgroundColor;
        clitems[i].style.padding = window.getComputedStyle(e.toElement).padding;
        clitems[i].addEventListener('mouseover', () => {
            clitems[i].style.backgroundColor = window.getComputedStyle(e.toElement, ':hover').backgroundColor;
        })
        clitems[i].addEventListener('mouseout', () => {
            clitems[i].style.backgroundColor = window.getComputedStyle(e.toElement.parentNode).backgroundColor;
        })

    }
})

cldd.addEventListener('mouseleave', e => {
    cldditems.style.display = 'none';
})



//sidebar overlay

const sideo = document.getElementById('side-o');

sideo.addEventListener('click', () => {
    sideo.style.width = '0px';
    // sideo.style.display = 'none';
})

document.getElementById('o-but').addEventListener('click', () => {
    sideo.style.width = '200px';
    // sideo.style.display = 'block';
})


//sidebar push
const sidep = document.getElementById('side-p');

document.getElementById('p-but').addEventListener('click', () => {
    sidep.style.width = '200px';
})

sidep.addEventListener('click', () => {
    sidep.style.width = '0px';
})


//slider

const next = document.querySelector('.i-right');
const prev = document.querySelector('.i-left');
const imgs = document.querySelectorAll('.si');
const dots = document.querySelectorAll('.dot');

console.log();

next.addEventListener('click', e => {
    for (let i = 0; i < imgs.length; i++) {
        if (imgs[i].classList.contains('active')) {
            if (i == imgs.length - 1) {
                imgs[i].classList.remove('active');
                imgs[0].classList.add('active');
                break;
            }
            imgs[i].classList.remove('active');
            imgs[i + 1].classList.add('active');
            break;

        }
    }
    for (let i = 0; i < dots.length; i++) {
        if (dots[i].classList.contains('dot-active')) {
            if (i == dots.length - 1) {
                dots[i].classList.remove('dot-active');
                dots[0].classList.add('dot-active');
                break;
            }
            dots[i].classList.remove('dot-active');
            dots[i + 1].classList.add('dot-active');
            break;

        }
    }
});

prev.addEventListener('click', e => {
    for (let i = 0; i < imgs.length; i++) {
        if (imgs[i].classList.contains('active')) {
            if (i == 0) {
                imgs[0].classList.remove('active');
                imgs[imgs.length - 1].classList.add('active');
                break;
            }
            imgs[i].classList.remove('active');
            imgs[i - 1].classList.add('active');
            break;

        }
    }
    for (let i = 0; i < dots.length; i++) {
        if (dots[i].classList.contains('dot-active')) {
            if (i == 0) {
                dots[0].classList.remove('dot-active');
                dots[dots.length - 1].classList.add('dot-active');
                break;
            }
            dots[i].classList.remove('dot-active');
            dots[i - 1].classList.add('dot-active');
            break;

        }
    }
});


const dot = document.getElementsByClassName("dot");

for (let i in dot) {
    dot[i].addEventListener('click', e => {
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].classList.remove('active');
        }
        imgs[i].classList.add('active');
    })

    dot[i].addEventListener('click', e => {
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove('dot-active');
        }
        dots[i].classList.add('dot-active');
    })

}

