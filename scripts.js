let btn1 = document.getElementById('btn1');
btn1.style.backgroundColor = 'dodgerblue';
let btn2 = document.getElementById('btn2');

let uczestnikControls = document.querySelectorAll('#s1 input');
let rezControls = document.querySelectorAll('#s2 input, #s2 select');

function uczestnik() {
    btn1.style.backgroundColor = 'dodgerblue';
    btn2.style.backgroundColor = 'skyblue';
    uczestnikControls.forEach(elem => {
        elem.disabled = false;
    })
    rezControls.forEach(elem => {
        elem.disabled = true;
    })
}

function rezerwacja() {
    btn1.style.backgroundColor = 'skyblue';
    btn2.style.backgroundColor = 'dodgerblue';
    uczestnikControls.forEach(elem => {
        elem.disabled = true;
    })
    rezControls.forEach(elem => {
        elem.disabled = false;
    })
}

let prev = document.getElementById('prev');
let next = document.getElementById('next');
let slider = document.getElementById('slider');
let city = document.getElementById('city');
let tabCity = ["Barcelona", "Londyn", "Rzym"];
let tabPictures = ["1.jpg", "2.jpg", "3.jpg"];
let imgStart = 0;

function prevNextFunction(clickElem) {
    if(clickElem === 'prev') {
        imgStart--;
    } else {
        imgStart++;
    }
    
    if(imgStart > 2) {
        imgStart = 0;
    }
    
    if (imgStart < 0) {
        imgStart = 2;
    }
    console.log(imgStart);

    city.innerHTML = tabCity[imgStart];
    slider.setAttribute('src', tabPictures[imgStart]);

}





