// setTimeout(func, delay);
// let timerId = setTimeout(sayHello, 3000);
// clearTimeout(timerId);  //используют что бы остановить действие



// let timerId = setInterval(sayHello, 3000); //повторение действия через определенное время
// clearTimeout(timerId);

// function sayHello() {
//     console.log('Hello worid');
// }



// рекурсивный вызов функции (для случая когда интервал быстрее чем выполнение самой функции)

// let timerId = setTimeout(function log() {
//     console.log('Hello');
//     setTimeout(log, 2000);
// });

let btn = document.querySelector('.btn'),
    elem = document.querySelector('.box');

function myAnimation() {
    let pos = 0;

    let id = setInterval(frame, 1);

    function frame () {
        if (pos == 300) {
            clearInterval();
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);


let btnBlock = document.querySelector('.btn-block'),
    btns = document.getElementsByTagName('button');

btnBlock.addEventListener('click', function(e) {
    if (e.target && e.target.tagName == 'BUTTON') {
        console.log(1);
    }

    if (e.target && e.target.classList.contains('first')) {
        console.log('first');
    }

    if (e.target && e.target.matches('button.first')) {
        console.log('button-first');
    }

});