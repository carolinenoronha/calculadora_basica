var inputResultado = document.getElementById("input");
var displayValInit = "0";
var primeiroValorRecebido = "";
var operacaoArray = [];
var botaoClear = document.getElementById("CE");

// inicia tudo ao carregar a pagina
window.addEventListener("load", function () {
    eventoNumeros();
    eventoOperador ();
})

//Adiciona um escutador para todos os numeros na calculadora (Precisei alterar o id de cada numero para numero0, numero1. etc)
function eventoNumeros () {
    for(let i = 0; i < 10; i++){

        document.getElementById("numero" + [i]).addEventListener("click", displayValor)
        
    }
        
}

//insere o numero no display da calculadora (Precisei alterar o input para uma div comum)
var displayValor = (eventoClick) => {

    var btnNumero = eventoClick.target.innerText;

    if(displayValInit === "0")

    displayValInit = " ";

        displayValInit += btnNumero;
        inputResultado.innerText = displayValInit;
   
}

// cria a funcao do botao CE no clique do usuario. O valor do display volta para o inicial "0"
botaoClear.onclick = () => {
    displayValInit = "0"
    inputResultado.innerHTML = displayValInit;
}

//Adiciona um escutador para todos os operadores na calculadora (Alterei o id dos operadores para operador0, operador1, etc)
function eventoOperador () {
    for(let i = 0; i < 5; i++){

        document.getElementById("operador" + [i]).addEventListener("click", executaOperacao)
        
    }
        
}

var executaOperacao = (eventoClick) => {

   var operador = eventoClick.target.innerText

   switch (operador){
    case "+":
        //O primeiro valor inserido 'e salvo na primeiroValorRecebido e o display volta a exibir 0, aguardando o segundo valor
        primeiroValorRecebido = displayValInit;
        displayValInit = "0";
        inputResultado.innerHTML = displayValInit;

        //O Array da operacao recebe o primeiro valor digitado e o operador Ex: operacaoArray = [5,"+"];
        operacaoArray.push(primeiroValorRecebido);
        operacaoArray.push(operador);

        break;

    case "-":
        
         primeiroValorRecebido = displayValInit;
         displayValInit = "0";
         inputResultado.innerHTML = displayValInit;
 
         operacaoArray.push(primeiroValorRecebido);
         operacaoArray.push(operador);
        
        break;

    case "/":

        primeiroValorRecebido = displayValInit;
        displayValInit = "0";
        inputResultado.innerHTML = displayValInit;

        operacaoArray.push(primeiroValorRecebido);
        operacaoArray.push(operador);
        
        break;

    case "*":

         primeiroValorRecebido = displayValInit;
         displayValInit = "0";
         inputResultado.innerHTML = displayValInit;
 
         operacaoArray.push(primeiroValorRecebido);
         operacaoArray.push(operador);
    
    break;

    case "=":
        //O ultimo valor digitado pelo usuario 'e inserido no array
        operacaoArray.push(displayValInit);
        //O array com a operacao 'e convertido em uma string e depois pelo "eval" ele 'e analisado como uma operacao matematica
        var calculoFinal = eval(operacaoArray.join(" "));
        //O valor do display 'e alterado para o valor que foi recebido no calculo final
        displayValInit = calculoFinal;
        inputResultado.innerText = displayValInit;
        // O valor do Array volta para o inicial
        operacaoArray = [];
    }
}







        /*let valorRecebido1 = parseInt(prompt ("digite numero1"));
        let valorRecebido2 = parseInt(prompt ("digite numero 2"));
        let operadorDigitado = prompt ("digite operador");

        switch (operador){
            case "+":
                console.log( valorRecebido1 + valorRecebido2);
                break;

            case "-":
                console.log( valorRecebido1 - valorRecebido2);
                break;

            case "/":
                if(valorRecebido2 != 0){
                    console.log( valorRecebido1 / valorRecebido2);
                } else {
                    console.log(NaN);
                }
                break;

            case "*":
            console.log( valorRecebido1 * valorRecebido2);
            
        }*/