'use strict'


/**
1. При каждом сабмите формы - пушить значение инпута в массив
2. Очищать форму после каждого сабмита
3. Рендерить на странице то, что было введено в форму
4. Валидация значения в инпуте при сабмите формы (На пустой инпут)
5. Добавить в элементы списка кнопку удаления, которая
удалит этот li элемент и соответствующее значение в массиве.
*/

const form = document.getElementById('#root-id');
const ul = document.querySelector('.list')

form.addEventListener('submit', getValueInput);

const infoArr = [];


function getValueInput(e) {
    e.preventDefault();
    const { target, target: { elements: { info } } } = e;
    if (info.value) {
        infoArr.push(info.value);
        ul.append(createList(info.value));
        target.reset();
    }
}

function createList(value) {
    const li = document.createElement('li');
    const textInfo = document.createElement('span');
    textInfo.classList.add('listInfo')
    textInfo.textContent = value
    li.append(textInfo)
    li.append(createBtn());
    li.prepend(createCheack());
    return li;
}


function createBtn() {
    const btn = document.createElement('button');
    btn.textContent = 'X';
    btn.addEventListener('click', deleteLi);
    return btn;
}

function createCheack() {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', ({ target: { parentNode }, target: { value } }) => {
        if (value) parentNode.classList.toggle('listItem')
    })
    return checkbox;
}

function deleteLi({ target: { parentNode }, target: { parentNode: { textContent } } }) {
    const textInfo = parentNode.querySelector('.listInfo').textContent;
    infoArr.splice(infoArr.indexOf(textInfo), 1)
    parentNode.remove();
}
