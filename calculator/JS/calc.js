
function keyboard(){ // Evento teclado
    var x = event.charCode;
    if(x == 55){
            var seven = document.calc.visor.value;
            document.calc.visor.value = seven + 7;
    }else if(x == 56){
            var eight = document.calc.visor.value
            document.calc.visor.value = eight + 8;
    }else if(x == 57){
            var nine = document.calc.visor.value
            document.calc.visor.value = nine + 9;
    }else if(x == 52){
            var four = document.calc.visor.value
            document.calc.visor.value = four + 4;
    }else if(x == 53){
            var five = document.calc.visor.value
            document.calc.visor.value = five + 5;
    }else if(x == 54){
            var six = document.calc.visor.value
            document.calc.visor.value = six + 6;
    }else if(x == 49){
            var one = document.calc.visor.value
            document.calc.visor.value = one + 1;
    }else if(x == 50){
            var two = document.calc.visor.value
            document.calc.visor.value = two + 2;
    }else if(x == 51){
            var three = document.calc.visor.value
            document.calc.visor.value = three + 3;
    }else if(x == 48){
            var zero = document.calc.visor.value
            document.calc.visor.value = zero + 0;
    }else if(x == 47){
            var div = document.calc.visor.value
            document.calc.visor.value = div + '/';
    }else if(x == 42){
            var mult = document.calc.visor.value
            document.calc.visor.value = mult + '*';
    }else if(x == 43){
            var adi = document.calc.visor.value
            document.calc.visor.value = adi + '+';
    }else if(x == 45){
            var sub = document.calc.visor.value
            document.calc.visor.value = sub + '-';
    }else if(x == 44){
            var pon = document.calc.visor.value
            document.calc.visor.value = pon + '.';
    }else if(x == 61){
            display = document.calc.visor.value
            document.calc.visor.value = eval(display)
        }
    }

function igual(){ //Click mouse
    var nothing = document.calc.visor.value;
    document.calc.visor.value = eval(nothing)
    if(r == '')
        document.calc.visor.value = '';
}
function btS(num){
    let sete = document.calc.visor.value; 
    document.calc.visor.value = sete + num;
}
function btO(num){
    var oito = document.calc.visor.value;
    document.calc.visor.value = oito + num;
}
function btN(num){
    var nove = document.calc.visor.value;
    document.calc.visor.value = nove + num;
}
function divisao(div){
    var d = document.calc.visor.value;
    document.calc.visor.value = d + div;
}

function btQ(num){
    var quatro = document.calc.visor.value;
    document.calc.visor.value = quatro + num
}   
function btC(num){
    var cinco = document.calc.visor.value;
    document.calc.visor.value = cinco + num;
}
function btS(num){
    var seis = document.calc.visor.value;
    document.calc.visor.value = seis + num;
}
function multiplica(mult){
    var m = document.calc.visor.value;
    document.calc.visor.value = m + mult;
}

function btU(num){
    var um = document.calc.visor.value;
    document.calc.visor.value = um + num;
}
function btD(num){
    var dois = document.calc.visor.value;
    document.calc.visor.value = dois + num;
}
function btT(num){
    var tres = document.calc.visor.value;
    document.calc.visor.value = tres + num;
}
function subtrai(sub){
    var s = document.calc.visor.value;
    document.calc.visor.value = s + sub;
}
function btZ(num){
    var zero = document.calc.visor.value;
    document.calc.visor.value = zero + num;
}
function virgula(vir){
    var vir = document.calc.visor.value;
    document.calc.visor.value = vir + vir;
}
function soma(somar){
    
    var mais = document.calc.visor.value;
    document.calc.visor.value = mais + somar;
}
function voltar() {
    back = document.getElementById('display').value;
    back = back.slice(0,-1);
    document.calc.visor.value = back;
}



