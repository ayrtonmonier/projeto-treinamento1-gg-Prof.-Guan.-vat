function mudaFoto(foto)
{
    document.getElementById("icone").src = foto;
}


function calc_total() {
	
	var qtd = parseInt(document.getElementById('cQtd').value);
	
	var tot = qtd * 1500;
	
	document.getElementById('cTot').value = tot;
}


function exibirMensagem() {
	
	alert('Olá, você mexeu no formulario!');

}

/*
function somar(A, B)
{
return A + B;
}




EXEMPLOS DE CÓDIGOS
Javascript

======================
if / else - comandos de decisão
======================

if(condição 1)
{
    //ação se condição 1 verdadeira
}
else if (condição 2)
{
    //ação se condição 2 verdadeira
}
else
{
    //ação se nenhuma das condições for verdadeira
}

----------------------
Exemplo de utilização
======================

if(idade > 18)
{
alert(“É maior de idade”).
}
else
{
alert(“É menor de idade”);
}

---------------------

switch(variável)
{
case valor1:
//ações caso valor1
break;
case valor2:
//ações caso valor2
break;
case valor3:
//ações caso valor3
break;
default:
//ações caso nenhum dos valores
break
}


while(condição)
{
//ações
}


var contador = 0;
while(contador < 5)
{
alert(“Olá”);
contador = contador + 1;
}


do
{
    //ações
}
while(condição)
	
	
var contador = 0;
do
{
alert(“Olá”);
contador = contador + 1;
}
while(contador < 5)


for(inicialização; condição; complemento)
{
    //ações
}


var contador;
for(contador = 0; contador < 10; contador++)
{
    alert(contador);
}


*/





