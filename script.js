let index = 0;
let escolha; //por enquanto 1soma;2subtrai;3multiplica;4divide
let list = new Array(4); //array para armazenar objetos Num();

//construtor do objeto que armazena o numero antecedente e a operacao desejada

class Num{
    constructor(numero, operacao){
        this.num=numero;
        this.op=operacao;
    }
    get numero(){
        return parseFloat(this.num);
    }
    get operacao(){
        return this.op;
    }
    set numero(numero){
        this.num=numero;
    }
    set operacao(operacao){
        this.op=operacao;
    }
}

list[0] = new Num(0, 0);

//cria objeto usando antecedente e operacao escolhida, depois escreve os 2 na tela

function preparaOp(escolha){
    mostraResult = false;
    var tempNum = parseFloat(document.getElementById("tela").innerHTML);
    list[index] = new Num(tempNum, escolha);
    index++;
    var oppp = "";
    document.getElementById("tela").innerHTML = 0;
    switch(escolha) {
        case 1:
            oppp = "+";
            break;
        case 2:
            oppp = "-";
            break;
        case 3:
            oppp = "×";
            break;
        case 4:
            oppp = "÷";
            break;
    }
    if(document.getElementById("numeros").innerHTML==0){
        document.getElementById("numeros").innerHTML = (tempNum + " "+oppp+" ");
    } else {
        document.getElementById("numeros").innerHTML += (tempNum + " "+oppp+" ");
    }



}
//mostraResult: booleana para saber se a tela esta mostrando ou nao um resultado
let mostraResult = false;
let ultimoNumero;
let ultimaOp;

//pega o valor de cada elemento do array e realiza sua operacao com o numero do proximo elemento

function igual(){
    document.getElementById("numeros").innerHTML = 0;
    let total = 0;
    var aux = document.getElementById("tela").innerHTML
    list[index] = new Num(aux , 0);
    let lastNum;
    let n1, n2, op;
    if(!mostraResult){
        for(var i=0;i<index;i++){
            n1 = parseFloat(list[i].numero);
            n2 = parseFloat(list[i+1].numero);
            op = list[i].operacao;
            
            switch(op){
                case 1:
                    total=(n1+n2);
                    list[i+1].numero = total;
                    ultimaOp = 1;
                    ultimoNumero = n2;
                    break;
                case 2:
                    total=(n1-n2);
                    list[i+1].numero = total;
                    ultimaOp = 2;
                    ultimoNumero = n2;
                    break;
                case 3:
                    total=(n1*n2);
                    list[i+1].numero = total;
                    ultimaOp = 3;
                    ultimoNumero = n2;
                    break;
                case 4:
                    if(n2==0){
                        total="Error";
                        break;
                    }
                    total=(n1/n2);
                    list[i+1].numero = total;
                    ultimaOp = 4;
                    ultimoNumero = n2;
                    break;
            }
            
        }
        
        var tempAuxSeilaOq = list[index];
        document.getElementById("tela").innerHTML = total;
        mostraResult=true;
        list = new Array(4);
        index=0;
    }else if(mostraResult){//se ja tiver mostrando resultado, so realiza a ultima operacao do calculo anterior
        let semNome = parseFloat(document.getElementById("tela").innerHTML);
        let x = parseFloat(ultimoNumero);
        let op = parseFloat(ultimaOp);
        switch(op){
            case 1:
                semNome += x;
                break;
            case 2:
                semNome -= x;
                break;
            case 3:
                semNome *= x;
                break;
            case 4:
                semNome = semNome/x;
                break;
        }
        document.getElementById("tela").innerHTML = semNome;
        
    }
    
}

//abrir menu popup

function popup(){
    var pop = document.getElementById("popup");
    pop.classList.toggle("show");
}

//mudar de calculadora

function muda(){
    window.location.href = "doc.html";
}

//escreve na tela o numero escolhido pelo usuario

function escreveNum(num){
    var ini = document.getElementById("tela").innerHTML;
    //var newVal = (ini*10)+num;

    if(ini==0){
        document.getElementById("tela").innerHTML = num;
    } else {
        document.getElementById("tela").innerHTML +=num;
    }

    
}




//zera tada a operacao

function CE(){
    document.getElementById("tela").innerHTML = 0;
    mostraResult=false;
    list = new Array(4);
    document.getElementById("numeros").innerHTML = 0;
    index = 0;

}





//zera a tela

function limpaTela(){
    document.getElementById("tela").innerHTML = 0;
}

//gambiarra pra apagar o digito mais a direita

function deleta1() {
    var ini = document.getElementById("tela").innerHTML;
    var rm = ini%10;
    var newVal = (ini-rm)/10;
    document.getElementById("tela").innerHTML = newVal;
}

//retorna o valor ao quadrado do que esta na tela
function aoQuad() {
    var ini = document.getElementById("tela").innerHTML;
    var newVal = ini*ini;
    document.getElementById("tela").innerHTML = newVal;
}

//multiplica o que esta na tela por -1
function inverteSinal(){
    var ini = document.getElementById("tela").innerHTML;
    document.getElementById("tela").innerHTML = ini*(-1);
}

//adiciona um ponto e previne o usuario de botar mais de um ponto
function ponto() {
    var temp = document.getElementById("tela").innerHTML;
    var cont=0;
    for(var i=0;i<temp.length;i++){
        if(temp.charAt(i)=='.'){
            cont++;
        }
    }

    if(cont<1){
        document.getElementById("tela").innerHTML +=".";
    }

    
}



//escreve na tela o valor de 1 dividido pelo valor atual da tela
function divideX(){
    var temp = document.getElementById("tela").innerHTML;
    document.getElementById("tela").innerHTML = 1/temp;
}

//divide o valor na tela por cem
function porCem(){
    var temp = document.getElementById("tela").innerHTML;
    document.getElementById("tela").innerHTML = temp/100;
}

//escreve na tela a raiz do numero atual
function raiz(){
    var temp = document.getElementById("tela").innerHTML;
    document.getElementById("tela").innerHTML = Math.sqrt(temp);
}