const buttonElem = document.querySelector('button');
const inputElem = document.querySelector('input');
const listElem = document.querySelector('ul');

buttonElem.addEventListener('click', ()=>{
    const value = inputElem.value;
    const listElemItem = document.createElement('li');
    listElemItem.textContent = value;
    listElem.appendChild(listElemItem);
    inputElem.value ='';
});