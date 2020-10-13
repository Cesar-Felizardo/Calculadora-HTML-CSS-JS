
function keyboard(){ // Evento teclado
    var x = event.charCode;
    if(x == 55){
        let seven = document.calc.visor.value;
            document.calc.visor.value = seven + 7;
    }else if(x == 56){
        let eight = document.calc.visor.value
            document.calc.visor.value = eight + 8;
    }else if(x == 57){  
        let nine = document.calc.visor.value
            document.calc.visor.value = nine + 9;
    }else if(x == 52){
        let four = document.calc.visor.value
            document.calc.visor.value = four + 4;
    }else if(x == 53){
        let five = document.calc.visor.value
            document.calc.visor.value = five + 5;
    }else if(x == 54){
        let six = document.calc.visor.value
            document.calc.visor.value = six + 6;
    }else if(x == 49){
        let one = document.calc.visor.value
            document.calc.visor.value = one + 1;
    }else if(x == 50){
        let two = document.calc.visor.value
            document.calc.visor.value = two + 2;
    }else if(x == 51){
        let three = document.calc.visor.value
            document.calc.visor.value = three + 3;
    }else if(x == 48){
        let zero = document.calc.visor.value
            document.calc.visor.value = zero + 0;
    }else if(x == 47){
        let div = document.calc.visor.value
            document.calc.visor.value = div + '/';
    }else if(x == 42){
        let mult = document.calc.visor.value
            document.calc.visor.value = mult + '*';
    }else if(x == 43){
        let adicao = document.calc.visor.value
            document.calc.visor.value = adicao + '+';
    }else if(x == 45){
        let sub = document.calc.visor.value
            document.calc.visor.value = sub + '-';
    }else if(x == 44){
        let ponto = document.calc.visor.value
            document.calc.visor.value = ponto + '.';
    }else if(x == 61){
            display = document.calc.visor.value
            document.calc.visor.value = eval(display)
        }
    }

function igual(){ //Click mouse
    let nothing = document.calc.visor.value;
    document.calc.visor.value = eval(nothing)
    if(nothing == '')
        document.calc.visor.value = '';
}
function btS(num){
    let sete = document.calc.visor.value; 
    document.calc.visor.value = sete + num;
}
function btO(num){
    let oito = document.calc.visor.value;
    document.calc.visor.value = oito + num;
}
function btN(num){
    let nove = document.calc.visor.value;
    document.calc.visor.value = nove + num;
} 
function divisao(div){
    let divisao = document.calc.visor.value;
    document.calc.visor.value = divisao + div;
}
function btQ(num){
    let quatro = document.calc.visor.value;
    document.calc.visor.value = quatro + num
}   
function btC(num){
    var cinco = document.calc.visor.value;
    document.calc.visor.value = cinco + num;
}
function btS(num){
    let seis = document.calc.visor.value;
    document.calc.visor.value = seis + num;
}
function multiplica(mult){
    let m = document.calc.visor.value;
    document.calc.visor.value = m + mult;
}
function btU(num){
    let um = document.calc.visor.value;
    document.calc.visor.value = um + num;
}
function btD(num){
    let dois = document.calc.visor.value;
    document.calc.visor.value = dois + num;
}
function btT(num){
    let tres = document.calc.visor.value;
    document.calc.visor.value = tres + num;
}
function subtrai(sub){
    let subtrair = document.calc.visor.value;
    document.calc.visor.value = subtrair + sub;
}
function btZ(num){
    let zero = document.calc.visor.value;
    document.calc.visor.value = zero + num;
}
function virgula(vir){
    let virgula = document.calc.visor.value;
    document.calc.visor.value = virgula + vir;
}
function soma(somar){
    let mais = document.calc.visor.value;
    document.calc.visor.value = mais + somar;
}
function voltar() {
    back = document.getElementById('display').value;
    last = back.slice(0,-1);
    document.calc.visor.value = last;
}



