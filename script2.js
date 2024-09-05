const PI = 3.1415926535897932384626433832795;
const e = 2.7182818284590452353602874713527;
const tela = document.getElementById("numeros");
let mostraResult = true;
let temPonto = true;
//falta completar operacoes auxiliares e QoL;

function escreveNum(num){
    let ini = tela.value;
    
    if(ini==0||mostraResult){
        tela.value = num;
        mostraResult = false;
    } else {
        tela.value +=num;
    }

    
}

function abrePar(){
    if(tela.value=='0'){
        tela.value="(";
    }
    else {
        tela.value += "(";
    }
}

function fechaPar(){
    
    tela.value += ")";
}

function escreveOp(op){
    let ini = tela.value;
    if(op=='^'&&second){
        op='^(1÷';
    }

    if(ini.endsWith('×')||ini.endsWith('÷')||ini.endsWith('+')||ini.endsWith('-')||ini.endsWith('%')||ini.endsWith('^')||ini=='0'||mostraResult){
        op="";
    }

    tela.value+=op;


}

function CE(){

    mostraResult=false;

    tela.value = 0;


}

let second = false;

function nxtOps(){
    if(second){
        document.getElementById('2nd').classList.remove('azul');
        document.getElementById('elevax').innerHTML = 'x<sup>2</sup>';
        document.getElementById('sqrt').innerHTML = '<sup>2</sup>√x';
        document.getElementById('elevay').innerHTML = 'x<sup>y</sup>';
        document.getElementById('10x').innerHTML = '10<sup>x</sup>';
        document.getElementById('log').innerHTML = 'log';
        document.getElementById('ln').innerHTML = 'ln';

        second = false;
    } else {
        second = true;
        document.getElementById('2nd').classList.add('azul');
        document.getElementById('elevax').innerHTML = 'x<sup>3</sup>';
        document.getElementById('sqrt').innerHTML = '<sup>3</sup>√x';
        document.getElementById('elevay').innerHTML = '<sup>y</sup>√x';
        document.getElementById('10x').innerHTML = '2<sup>x</sup>';
        document.getElementById('log').innerHTML = 'log<sub>y</sub>x';
        document.getElementById('ln').innerHTML = 'e<sup>x';
    }
}

function fatorial(){
    igual();
    let aux = parseFloat(tela.value);
    tela.value = f1(aux);

}

function f1(num){
    if(num<=1){
        return 1;
    }
    return num*f1(num-1);
}

function deleta1(){
    let temp = tela.value;
    let aux = temp.substring(0, temp.length-1);

    tela.value=aux;
}

function opsTela(opp){
    igual();
    let aux = parseFloat(tela.value);
    switch(opp){
        case '^':
            quadradoCubo(aux);break;
        case 'sqrt':
            raizQuadCub(aux);break;
        case '10x':
            baseElev(aux);break;
        case 'log':
            calcLog(aux);break;
        case 'ln':
            ene(aux);break;
    }
}

function ene(aux){
    if(second){
        tela.value = Math.E**aux;
    }else {
        tela.value = Math.log(aux)/Math.log(Math.E);
    }
}

function inverteSinal(){
    tela.value*=(-1);
}

let logaritmando;
let base;
let midcalclog = false;
function calcLog(aux){
    if(second){
        if(!midcalclog){
            logaritmando = Number(tela.value);
            tela.value = 0;
            midcalclog = true;
        } else {
            base = Number(tela.value);
            var log = Math.log(logaritmando)/Math.log(base);
            tela.value = log;
            midcalclog = false;
        }

    }else{
        tela.value = Math.log(aux);
    }
}

function baseElev(aux){
    if(second){
        tela.value = 2**aux;
    }else{
        tela.value = 10**aux;
    }
}

function quadradoCubo(aux){
    if(second){
        tela.value = aux**3;
    } else {
        tela.value = aux**2;
    }

}

function raizQuadCub(aux){
    if(second){
        tela.value = Math.cbrt(aux);
    } else {
        tela.value = Math.sqrt(aux);
    }
}

function modulo(){
    igual();
    let aux = parseFloat(tela.value)
    if(aux<0){
        tela.value = aux*(-1);
    }
}



function ponto() {
    let temp = tela.value;
    let cont=0;
    for(var i=0;i<temp.length;i++){
        if(temp.charAt(i)=='.'){
            cont++;
        }
    }

    if(cont<1){
        tela.value +=".";
        temPonto=true
    }

    
}

const troca = () => window.location.href = "index.html";

function notacao(){
    igual();
    let aux = tela.value;
    let sla = aux.substring(0, indexP(aux));
    let len = sla.length;
    if(temPonto){
        sla = aux/(10**(len-1));
        tela.value = `${sla}e+${len-1}`
    } else {
        sla = aux/(10**(len));
        tela.value = `${sla}e+${len}`
    }
    
}

function indexP(temp){
    let len = temp.length;
    for(let i = 0; i<len;i++){
        if(temp.charAt(i)=='.'){
            temPonto=true;
            return i;
        }
    }
    temPonto=false;
    return len-1;
}

function divideX(){
    igual();
    let aux = parseFloat(tela.value);
    tela.value= 1/aux;
}

function igual() {
    let temPonto = false;
    const sum = tela.value;
    let st = "";
    let comp = sum.length;
    for(let i=0;i<comp;i++){
        num = sum.charAt(i);
        switch(num){
            case '÷': 
                num = "/";break;
            case '×': 
                num = "*";break;
            case 'π':
                num=Math.PI;break;
            case 'e':
                num=Math.E;break;
            case '^':
                num="**";break;
        }

        st+=num;
    }
    tela.value = eval(st);
    mostraResult = true;
}

function memo(opp){
    let aux = parseFloat(document.getElementById("memo").innerHTML);
    switch(opp){
        case "add":
            aux+=parseFloat(tela.value);break;
        case "sub":
            aux-=parseFloat(tela.value);break;
        case 0:
            aux = 0;break;
        case "mr":
            tela.value=aux;
            mostraResult = false;
    }

    document.getElementById("memo").innerHTML = aux;
}