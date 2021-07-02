document.body.appendChild(document.createElement('div'));
document.body.firstElementChild.setAttribute('class', 'mainDiv');

document.querySelector('.mainDiv').appendChild(document.createElement('div'));
document.querySelector('.mainDiv').firstElementChild.setAttribute('class', 'content');

document.querySelector('.content').appendChild(document.createElement('div'));
document.querySelector('.content').firstElementChild.setAttribute('class', 'tableDiv');

/*---table creator---*/

let table = document.createElement('table');

tableCreator();

function tableCreator(){
	let tr1 = document.createElement('tr');
	let tr2 = document.createElement('tr');
	let tr3 = document.createElement('tr');

	for(let i = 0; i < 3; i++){
		let td = document.createElement('td');
		tr1.appendChild(td);
		tr1.children[i].setAttribute('id', 'id1' + i );
	}

	for(let i = 0; i < 3; i++){
		let td = document.createElement('td');
		tr2.appendChild(td);
		tr2.children[i].setAttribute('id', 'id2' + i );
	}

	for(let i = 0; i < 3; i++){
		let td = document.createElement('td');
		tr3.appendChild(td);
		tr3.children[i].setAttribute('id', 'id3' + i );
	}

	table.appendChild(tr1);
	table.appendChild(tr2);
	table.appendChild(tr3);

	document.querySelector('.tableDiv').appendChild(table);
	document.querySelector('.tableDiv').firstElementChild.setAttribute('class', 'table');
}

/*---restart button---*/

document.querySelector('.content').appendChild(document.createElement('div'));
document.querySelector('.content').lastElementChild.setAttribute('class', 'buttons');

document.querySelector('.buttons').appendChild(document.createElement('button'));
document.querySelector('.buttons').firstElementChild.setAttribute('class', 'restart');

document.querySelector('.restart').innerText = 'RESTART'

document.querySelector('.restart').addEventListener('click',function(el){
	document.querySelector('.tableDiv').removeChild(document.querySelector('.table'));
	document.querySelector('.content').style.border = '20px solid #9932CC';
	document.querySelector('.restart').style.color = ' #9932CC';
	document.querySelector('.content').removeChild(document.querySelector('.win'));
		tableClickCounter = 0;
		table.innerHTML= '';
		tableCreator();
		document.querySelector('.table').disabled = false;
})

/*---table---*/

let tableClickCounter = 0;

document.querySelector('.table').disabled = false;
	document.querySelector('.table').addEventListener('click', function(el){
		if(document.querySelector('.table').disabled == false){
			let elemId = '#' + el.target.id;
		if(((tableClickCounter % 2) == 0) && document.querySelector(elemId).outerText == '') {
			document.querySelector(elemId).innerText = 'X';
			tableClickCounter += 1;
		}
		else if(((tableClickCounter % 2) == 1)&& document.querySelector(elemId).outerText == '') {
			document.querySelector(elemId).innerText = 'O';
			tableClickCounter += 1;
		}
	chekHorizontal();
	chekVertical();
	checkDiagonalleft();
	checkDiagonalRight();
	}
})

/*---functions---*/

function chekHorizontal(){
	let table = document.querySelector('.table');
	for(let i = 0, j = 0; j < 3; j++){
		if((table.rows[j].cells[i].outerText  == 'X') && (table.rows[j].cells[i+1].outerText  == 'X') && (table.rows[j].cells[i+2].outerText  == 'X')){
			for(let k = 0;k < 3; k++){
				table.rows[j].cells[k].appendChild(document.createElement('div'));
				table.rows[j].cells[k].firstElementChild.setAttribute('class', 'horizontalLine');
			}
			win('crosses');
		}
		else if((table.rows[j].cells[i].outerText  == 'O') && (table.rows[j].cells[i+1].outerText  == 'O') && (table.rows[j].cells[i+2].outerText  == 'O')){
			for(let k = 0;k < 3; k++){
				table.rows[j].cells[k].appendChild(document.createElement('div'));
				table.rows[j].cells[k].firstElementChild.setAttribute('class', 'horizontalLine');
			}
			win('noughts');
		}
	}
}

function chekVertical(){
	let table = document.querySelector('.table');
	for(let i = 0, j = 0; j < 3; j++){
		if((table.rows[i].cells[j].outerText  == 'X') && (table.rows[i+1].cells[j].outerText  == 'X') && (table.rows[i+2].cells[j].outerText  == 'X')){
			for(let k = 0;k < 3; k++){
				table.rows[k].cells[j].appendChild(document.createElement('div'));
				table.rows[k].cells[j].firstElementChild.setAttribute('class', 'verticalLime');
			}
			win('crosses');
		}
		else if((table.rows[i].cells[j].outerText  == 'O') && (table.rows[i+1].cells[j].outerText  == 'O') && (table.rows[i+2].cells[j].outerText  == 'O')){
			for(let k = 0;k < 3; k++){
				table.rows[k].cells[j].appendChild(document.createElement('div'));
				table.rows[k].cells[j].firstElementChild.setAttribute('class', 'verticalLime');
			}
			win('noughts');
		}
	}
}

function checkDiagonalleft(){
	let table = document.querySelector('.table');
	if((table.rows[0].cells[0].outerText  == 'X') && (table.rows[1].cells[1].outerText  == 'X') && (table.rows[2].cells[2].outerText  == 'X')){
		for(let k = 0;k < 3; k++){
				table.rows[k].cells[k].appendChild(document.createElement('div'));
				table.rows[k].cells[k].firstElementChild.setAttribute('class', 'diagonalLineLeft');
			}
			win('crosses');
	}
	if((table.rows[0].cells[0].outerText  == 'O') && (table.rows[1].cells[1].outerText  == 'O') && (table.rows[2].cells[2].outerText  == 'O')){
		for(let k = 0;k < 3; k++){
				table.rows[k].cells[k].appendChild(document.createElement('div'));
				table.rows[k].cells[k].firstElementChild.setAttribute('class', 'diagonalLineLeft');
			}
			win('noughts');
	}

}
function checkDiagonalRight(){
	let table = document.querySelector('.table');
	if((table.rows[0].cells[2].outerText  == 'X') && (table.rows[1].cells[1].outerText  == 'X') && (table.rows[2].cells[0].outerText  == 'X')){
			table.rows[0].cells[2].appendChild(document.createElement('div'));
			table.rows[0].cells[2].firstElementChild.setAttribute('class', 'diagonalLineRight');
			table.rows[1].cells[1].appendChild(document.createElement('div'));
			table.rows[1].cells[1].firstElementChild.setAttribute('class', 'diagonalLineRight');
			table.rows[2].cells[0].appendChild(document.createElement('div'));
			table.rows[2].cells[0].firstElementChild.setAttribute('class', 'diagonalLineRight');
			win('crosses');
	}
	if((table.rows[0].cells[2].outerText  == 'O') && (table.rows[1].cells[1].outerText  == 'O') && (table.rows[2].cells[0].outerText  == 'O')){
			table.rows[0].cells[2].appendChild(document.createElement('div'));
			table.rows[0].cells[2].firstElementChild.setAttribute('class', 'diagonalLineRight');
			table.rows[1].cells[1].appendChild(document.createElement('div'));
			table.rows[1].cells[1].firstElementChild.setAttribute('class', 'diagonalLineRight');
			table.rows[2].cells[0].appendChild(document.createElement('div'));
			table.rows[2].cells[0].firstElementChild.setAttribute('class', 'diagonalLineRight');
			win('noughts');
	}
}

function win(e){
	document.querySelector('.table').disabled = true;
	document.querySelector('.content').style.border = '20px solid #228B22';
	document.querySelector('.restart').style.color = '#228B22';
	document.querySelector('.content').appendChild(document.createElement('div'));
	document.querySelector('.content').lastElementChild.setAttribute('class', 'win')
	document.querySelector('.win').innerText = e + ' win'
}
