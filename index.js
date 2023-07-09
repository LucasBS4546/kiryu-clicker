var kiryus = 0

var repetidor1 = 0

function atualizarValorVisual() {

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
        buttonStart.onclick = function() {iniciarJogo(10)};
        buttonStart.id = 'botaoIniciar'

        var areaInicial = document.getElementById("area");
        areaInicial.appendChild(buttonStart);

        repetidor1 = 1;
        console.log(repetidor1)
    }

}


function AlterarValor(quantidadeClick) {

    kiryus = kiryus + quantidadeClick;

    atualizarValorVisual();
    eventosValor();

}


function iniciarJogo(custoItem) {

    if(kiryus < custoItem){
        
        alert('Pobre')
        
    } else {
        
        AlterarValor(-custoItem);
        var botaoIniciar = document.getElementById("botaoIniciar");
        botaoIniciar.remove();
    
        document.getElementById("column1").style.display = "flex";
        document.getElementById("column3").style.display = "flex";
        
    }
}



//Loja

function itemUm(custoItem) {

    if(kiryus < custoItem){
        
        alert('Pobre')
        
    } else {
        
        AlterarValor(-custoItem);
        
    }

}

function itemDois(custoItem) {

    if(kiryus < custoItem){
        
        alert('Pobre')
        
    } else {
        
        AlterarValor(-custoItem);
        
    }

}

function itemTres(custoItem) {

    if(kiryus < custoItem){
        
        alert('Pobre')
        
    } else {
        
        AlterarValor(-custoItem);
        
    }

}



//Upgrades

var upgrade3comprado = false;
var upgrade4comprado = false;

function desativarBotaoUpgrade(numeroid) {
    var botaoAtual = document.getElementById("Bupgrade" + numeroid);
    botaoAtual.disabled = true;
    botaoAtual.className = "desativado";
}

function upgrade1(custoItem) {

    if(kiryus < custoItem){
        
        alert('Pobre')
        
    } else {
        
        AlterarValor(-custoItem);

        desativarBotaoUpgrade(1);

        document.getElementById("linha2").style.opacity = "1";

        var proxBotao = document.getElementById("Bupgrade2");
        proxBotao.onclick = function() {upgrade2(25)}
  
    }

}


function upgrade2(custoItem) {
    
    if(kiryus < custoItem){
        
        alert('Pobre')
        
    } else {
        
        AlterarValor(-custoItem);

        desativarBotaoUpgrade(2);

        document.getElementById("linha3").style.opacity = "1";

        var proxBotao = document.getElementById("Bupgrade3");
        proxBotao.onclick = function() {upgrade3(25)}

        var proxBotao = document.getElementById("Bupgrade4");
        proxBotao.onclick = function() {upgrade4(25)}

    }

}

function upgrade3(custoItem) {
    
    if(kiryus < custoItem){
        
        alert('Pobre')
        
    } else {
        
        AlterarValor(-custoItem);

        desativarBotaoUpgrade(3);

        upgrade3comprado = true;

        if(upgrade3comprado && upgrade4comprado) {

            document.getElementById("linha4").style.opacity = "1";

            var proxBotao = document.getElementById("Bupgrade5");
            proxBotao.onclick = function() {upgrade5(25)}

        }
        
    }
    
}

function upgrade4(custoItem) {
    
    if(kiryus < custoItem){
        
        alert('Pobre')
        
    } else {
        
        AlterarValor(-custoItem);

        desativarBotaoUpgrade(4);

        upgrade4comprado = true;

        if(upgrade3comprado && upgrade4comprado) {
            
            document.getElementById("linha4").style.opacity = "1";

            var proxBotao = document.getElementById("Bupgrade5");
            proxBotao.onclick = function() {upgrade5(25)}
            
        }
        
    }

}

function upgrade5(custoItem) {
    
    if(kiryus < custoItem){
        
        alert('Pobre')
        
    } else {
        
        AlterarValor(-custoItem);

        desativarBotaoUpgrade(5);
        
    }
    
}