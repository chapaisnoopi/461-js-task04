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



function click () {

const newDiv = document.querySelector('.new-div');
const result = document.createElement('li');
newDiv.appendChild(result);
result.textContent = 'Товар ' ;
}


