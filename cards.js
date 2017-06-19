let textInput = document.getElementById('textInput');
let createBtn = document.getElementById('createBtn');

function createCard() {
	let card = document.createElement('section');
	card.className = 'card';

	let cardParagraph = document.createElement('p');
	cardParagraph.appendChild(document.createTextNode(textInput.value));
	card.appendChild(cardParagraph);

	let deleteBtn = document.createElement('button');
	deleteBtn.appendChild(document.createTextNode('Delete'));
	deleteBtn.addEventListener('click', function() {
		document.body.removeChild(card);
	});

	card.appendChild(deleteBtn);

	document.body.appendChild(card);
}



createBtn.addEventListener('click', createCard);