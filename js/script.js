//script for plus/minus ammount
let input = document.querySelectorAll(".input__order");

let buttonMinus = document.querySelectorAll(".button__minus");
let buttonPlus = document.querySelectorAll(".button__plus");

for (let index = 0; index < buttonMinus.length; index++) {

    buttonMinus[index].addEventListener("click", function () {
        if (input[index].value === '0 шт.') {
            input[index].value = '0 шт.'
        }
        else {
            input[index].value.length -= 4;
            input[index].value = parseFloat(input[index].value);
            input[index].value -= 1;
            input[index].value += ' шт.';
        }
    });

    buttonPlus[index].addEventListener("click", function () {

        input[index].value.length -= 4;
        input[index].value = parseFloat(input[index].value);
        input[index].value -= -1;
        input[index].value += ' шт.';

    });

}

//pagination

let pagination = document.querySelector('.pagination__pages');
let pages = pagination.getElementsByTagName('a');

for (let index = 0; index < pages.length; index++) {
    pages[index].addEventListener("click", function () {

        if (!this.classList.contains('active-page')) {
            for (let i = 0; i < pages.length; i++) {
                pages[i].classList.remove('active-page')
            }
            this.classList.toggle('active-page')
        }

    })
}