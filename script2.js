const PI = 3.1415926535897932384626433832795;
const e = 2.7182818284590452353602874713527;
const tela = document.getElementById("numeros");
let mostraResult = true;

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
    if(tela.value=="0"){
        tela.value=="(";
    }
    else {
        tela.value += "(";
    }
}

function fechaPar(){
    if(tela.value=="0"){
        tela.value==")";
    }
    else {
        tela.value += ")";
    }
}

function escreveOp(op){
    let ini = tela.value;

    if(ini.endsWith(op)){
        op="";
    }

    tela.value+=op;


}

function CE(){

    mostraResult=false;

    tela.value = 0;


}

function igual() {
    const sum = tela.value;
    let st = "";
    let comp = sum.length;
    for(let i=0;i<comp;i++){
        num = sum.charAt(i);
        console.log(sum.charAt(i));
        switch(num){
            case '÷': 
                num = "/";break;
            case '×': 
                num = "*";break;
        }

        st+=num;
    }
    tela.value = eval(st);
    document.getElementById("memo").innerHTML = tela.value;
    mostraResult = true;
}