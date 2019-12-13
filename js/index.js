// const products = [10, 20, 30, 40, 50, 15];
// let price = document.querySelector('.price');
// price.textContent = products[0];
// let num = document.querySelector('.num');
// num.textContent = 1;

// const coppyDiv = document.querySelector('.coppy-div');
// const coppySec = document.querySelector('.coppy-sec');
// coppyDiv.classList.add('dynamic');

// for (i = 1; i < products.length; i++) {
//     const newDiv = coppyDiv.cloneNode(true);
//     coppySec.appendChild(newDiv);
//     price.textContent = products[i];
//     num.textContent = i + 1;
// }
// let price = document.querySelector('.price');
// price.textContent = products[0];
// let num = document.querySelector('.num');
// num.textContent = 1;



const products = [10, 20, 60, 40, 50, 15];

const coppySec = document.querySelector('.coppy-sec');

for (i = 0; i < products.length; i++) {
const div = document.createElement('div');
coppySec.appendChild(div);

const list = document.createElement('p');
const price = document.createElement('p');
const button = document.createElement('button');
const input = document.createElement('input');

div.appendChild(list);
div.appendChild(price);
div.appendChild(button);
div.appendChild(input);
list.textContent = 'Товар ' + Number(i + 1);
price.textContent = 'Ціна: ' + products[i] + ' грн.';
button.textContent = 'купити';
input.placeholder = 'ваш коментар';
input.type = 'text';
}

// const coppySec = document.querySelector('.coppy-sec');
// coppyDiv.classList.add('dynamic');

// for (i = 1; i < products.length; i++) {
//     const newDiv = coppyDiv.cloneNode(true);
//     coppySec.appendChild(newDiv);
//     price.textContent = products[i];
//     num.textContent = i + 1;
// }

//  const listItem = document.createElement('li');



// const list = document.querySelector('ol');
// const input = document.querySelector('input');
// const button = document.querySelector('button');

// button.onclick = function() {
// let myItem = input.value;
// input.value = '';

// const listItem = document.createElement('li');
// const listText = document.createElement('span');
// const listBtn = document.createElement('button');

// listItem.appendChild(listText);
// listText.textContent = myItem;
// listItem.appendChild(listBtn);
// listBtn.textContent = 'Видалити';
// list.appendChild(listItem);

// listBtn.onclick = function() {
//     list.removeChild(listItem);
// }

// input.focus();
// }
