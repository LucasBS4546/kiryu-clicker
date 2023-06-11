var kiryus = 0

var repetidor1 = 0

function atualizarValor() {

    var buttonValue = document.getElementById("value");

    if(kiryus == 1){

        buttonValue.innerHTML = kiryus + ' Kiryu';

    } else if(kiryus == 69){

        buttonValue.innerHTML = kiryus + ' Nice :)';

    }else {

        buttonValue.innerHTML = kiryus + ' Kiryus';

    }

}



function eventosValor() {


    if(kiryus == 10 && repetidor1 == 0) {

        var buttonStart = document.createElement('button');
        buttonStart.innerText = 'Iniciar jogo (10 kiryus)';
        buttonStart.onclick = function() {iniciarJogo()};
        buttonStart.id = 'botaoIniciar'

        var areaInicial = document.getElementById("area");
        areaInicial.appendChild(buttonStart);

        repetidor1 = 1;
        console.log(repetidor1)
    }

}


function KiryuClick(quantidadeClick) {

    kiryus = kiryus + quantidadeClick;

    atualizarValor();
    eventosValor();

}


function comprarAlgo(custoItem) {
    
    if(kiryus < custoItem){
        
        alert('Pobre')
        
    } else {
        
        KiryuClick(-custoItem);
        
    }
    
    
}


function iniciarJogo() {

    comprarAlgo(10);

    var botaoIniciar = document.getElementById("botaoIniciar");
    botaoIniciar.remove();

    document.getElementById("column1").style.display = "flex";
    document.getElementById("column3").style.display = "flex";

}


function itemUm() {

    comprarAlgo(1);

}

function itemDois() {

    comprarAlgo(3);

}

function itemTres() {

    comprarAlgo(5);

}