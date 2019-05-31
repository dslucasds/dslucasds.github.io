pegarNum1 = function(){
	return inputs[0].value;
}

pegarNum2 = function(){
	return inputs[1].value;
}

entrdasVazias = function(){
	if(pegarNum1 === '' || pegarNum2 === ''){
		return true;
	}else{
		return false;
	}
}

atualizarResposta = function(){
	let num1 = pegarNum1();
	let num2 = pegarNum2();
	let soma = parseInt(num1) + parseInt(num2);

	resposta.textContent = num1 + ' + ' + num2 + ' = ' + soma;
}

somar = function(){
	if(entrdasVazias()){
		resposta.textContent = 
		'Erro: Preencha os dois campos numericos';
	}else{
		atualizarResposta();
	}
}
/*pegando o elemento pelo nome do elemnto*/
let inputs = document.querySelectorAll('input');
/*pegando o elemento pela classe, usa o ponto*/
let  resposta = document.querySelector('.resposta');
/*Pegando o elemento pelo ID*/
let button = document.querySelector('#btnSomar');


/*Espere o evento*/
/*Quando clicar no botao*/
button.addEventListener('click',somar);