var botaoGostei = document.createElement('button');
botaoGostei.id = 'myButton';
botaoGostei.innerHTML = 'Gostei';
//document.body.appendChild(botaoGostei);

//var meuBtn = document.querySelector('myButtonClass');
var contador = document.querySelector('.badge');

//document.querySelector('button').addEventListener('click', function(){
//  var numero = parseInt(contador.textContent) + 1;
//  contador.textContent = numero;
//});
document.querySelector('button').addEventListener(keyof, 'click', function(){
    var numero = parseInt(contador.textContent) + 1;
    contador.textContent = numero;    
}
) 