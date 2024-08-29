let index = 0;
let escolha; //por enquanto 1soma;2subtrai;3multiplica;4divide
let list = new Array(4);


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

function preparaOp(escolha){
    mostraResult = false;
    var tempNum = parseFloat(document.getElementById("tela").innerHTML);
    list[index] = new Num(tempNum, escolha);
    index++;
    document.getElementById("tela").innerHTML = 0;


}

let mostraResult = false;
let ultimoNumero;
let ultimaOp;
function igual(){
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
    }else if(mostraResult){
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








function escreveNum(num){
    var ini = document.getElementById("tela").innerHTML;
    //var newVal = (ini*10)+num;

    if(ini==0){
        document.getElementById("tela").innerHTML = num;
    } else {
        document.getElementById("tela").innerHTML +=num;
    }

    
}






function CE(){
    document.getElementById("tela").innerHTML = 0;
    mostraResult=false;
    list = new Array(4);


}






function limpaTela(){
    document.getElementById("tela").innerHTML = 0;
}
function deleta1() {
    var ini = document.getElementById("tela").innerHTML;
    var rm = ini%10;
    var newVal = (ini-rm)/10;
    document.getElementById("tela").innerHTML = newVal;
}
function aoQuad() {
    var ini = document.getElementById("tela").innerHTML;
    var newVal = ini*ini;
    document.getElementById("tela").innerHTML = newVal;
}
function inverteSinal(){
    var ini = document.getElementById("tela").innerHTML;
    document.getElementById("tela").innerHTML = ini*(-1);
}
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




function divideX(){
    var temp = document.getElementById("tela").innerHTML;
    document.getElementById("tela").innerHTML = 1/temp;
}

function porCem(){
    var temp = document.getElementById("tela").innerHTML;
    document.getElementById("tela").innerHTML = temp/100;
}

function raiz(){
    var temp = document.getElementById("tela").innerHTML;
    document.getElementById("tela").innerHTML = Math.sqrt(temp);
}