var button = document.getElementById('enter');
var buttonReset = document.querySelector('#reset');
var itemRemove = document.querySelector('ul');
var input = document.getElementById('userinput');
var ul = document.querySelector('ul');
var itemDone = document.querySelector('ul');

function inputLength() {
	return input.value.length;
}

function liLength(){
	return document.querySelectorAll('ul li').length;
}

function clearInputField(){
	input.value = "";
}

function createListElement() {
	var divRow = document.createElement('div');
	var divColOne = document.createElement('div');
	var divColTwo = document.createElement('div');
	var li = document.createElement('li');
	var button = document.createElement('button');
	// var i = document.createElement('i');
	// li.appendChild(i);
	// i.className = 'far fa-check-square';
	li.appendChild(document.createTextNode(' ' + input.value));
	button.appendChild(document.createTextNode('x'));
	ul.appendChild(divRow);
		divRow.classList.add('row');
		divRow.appendChild(divColOne)
			divColOne.classList.add('column-one', 'col-hide');
			divColOne.appendChild(button);
				button.classList.add('remove');
		divRow.appendChild(divColTwo)
			divColTwo.classList.add('column-two');
			divColTwo.appendChild(li);
			
	input.value = "";
	input.focus();
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
		noItemsText();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
		noItemsText();
	}
}

function resetListAfterClick(e){
	let rows = document.querySelectorAll('.row');
	clearInputField();
	for(i=0; i< rows.length; i++){
		if(e.target.id === 'reset'){
			rows[i].remove();
			noItemsText();
		}
	}
}

function listItemDone(e){
	if(e.target.nodeName === 'LI'){
	e.target.classList.toggle('done')
	e.target.parentElement.parentElement.firstElementChild.classList.toggle('col-hide');
	console.log(e.target.firstElementChild);
	}
}

function listItemRemove(e){
	if(e.target.nodeName === 'BUTTON'){
	e.target.parentElement.parentElement.remove();
	input.focus();
	noItemsText();
	}
}

function noItemsText(){
	let emptyListText = document.querySelector('#empty-list-text');
	if(liLength() > 0){
		emptyListText.classList.add('text-hide');
	} else {
		emptyListText.classList.remove('text-hide');
	}
}

itemRemove.addEventListener('click', listItemRemove);

itemDone.addEventListener('click', listItemDone);

input.addEventListener('keypress', addListAfterKeypress);

button.addEventListener('click', addListAfterClick);

buttonReset.addEventListener('click', resetListAfterClick);
