var kiryus = 0

var repetidor1 = 0

var kps = 0;

var clickValor = 1

var percentualKpsClick = 0

var secaoFala = document.getElementById('caixaDeFala');


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

function atualizarKpsVisual() {

    var kpsvalue = document.getElementById("valuekps");

    if(kps == 69){

        kpsvalue.innerHTML = kps + ' Nice :)';

    }else {

        kpsvalue.innerHTML = kps + ' kps';

    }

}

function atualizarKpcVisual() {

    var kpcvalue = document.getElementById("valuekpc");
    
    if(percentualKpsClick > 0) {

        var valorPercent = Math.floor(kps*percentualKpsClick)        
        kpcvalue.innerHTML = clickValor + valorPercent + ' kpc'

    } else {
        
        kpcvalue.innerHTML = clickValor + ' kpc';

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

    }

}

function KiryuClick(numeroClick) {

    if(percentualKpsClick > 0) {

        var valorPercent = Math.floor(kps*percentualKpsClick)
        kiryus += numeroClick + valorPercent;

    } else {

        kiryus += numeroClick;
        
    }

    atualizarValorVisual();
    eventosValor();

}


function AlterarValor(quantidade) {

    kiryus += quantidade;

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
        

        setInterval(function () {

            atualizarKpsVisual()
            atualizarKpcVisual()
            AlterarValor(kps)

        }, 1000);

    }
}



//Loja

var qntItem1 = 0
var qntItem2 = 0
var qntItem3 = 0

function item1(custoItem) {

    if(kiryus < custoItem){
        
        alert('Pobre')
        
    } else {
        
        AlterarValor(-custoItem);

        kps += 1;
        atualizarKpsVisual()
        atualizarKpcVisual()

        qntItem1++;

        var novoValor = Math.ceil(69*(1.15**qntItem1))

        var botaoAtual = document.getElementById("Bitem1")

        botaoAtual.onclick = function() {item1(parseFloat(novoValor))}

        var texto = document.getElementById("H4item1")
        texto.innerText = novoValor + " Kiryus"

        var textoQnt = document.getElementById("H5item1")
        textoQnt.innerText = qntItem1;
        
    }

}

function item2(custoItem) {

    if(kiryus < custoItem){
        
        alert('Pobre')
        
    } else {
        
        AlterarValor(-custoItem);

        kps += 5;
        atualizarKpsVisual()
        atualizarKpcVisual()

        qntItem2++;

        var novoValor = Math.ceil(569*(1.15**qntItem2))

        var botaoAtual = document.getElementById("Bitem2")

        botaoAtual.onclick = function() {item2(parseFloat(novoValor))}

        var texto = document.getElementById("H4item2")
        texto.innerText = novoValor + " Kiryus"

        var textoQnt = document.getElementById("H5item2")
        textoQnt.innerText = qntItem2;

    }

}

function item3(custoItem) {

    if(kiryus < custoItem){
        
        alert('Pobre')
        
    } else {
        
        AlterarValor(-custoItem);

        kps += 20;
        atualizarKpsVisual()
        atualizarKpcVisual()

        qntItem3++;

        
        var novoValor = Math.ceil(1420*(1.15**qntItem3))

        var botaoAtual = document.getElementById("Bitem3")

        botaoAtual.onclick = function() {item3(parseFloat(novoValor))}

        var texto = document.getElementById("H4item3")
        texto.innerText = novoValor + " Kiryus"

        
        var textoQnt = document.getElementById("H5item3")
        textoQnt.innerText = qntItem3;
        
    }

}



//Upgrades

var upgrade3comprado = false;
var upgrade4comprado = false;

function desativarBotaoUpgrade(numeroid) {
    var botaoAtual = document.getElementById("Bupgrade" + numeroid);
    botaoAtual.disabled = true;
    botaoAtual.className = "desativado";
    document.getElementById("H4upgrade" + numeroid).style.color = "lightgray"
}

function mudarBotaoImagem(numeroimg) {
    var imagemAtual = document.getElementById("kiryu");
    imagemAtual.src = "imagens/kiryu"+ numeroimg +".png";
}

function upgrade1(custoItem) {

    if(kiryus < custoItem){
        
        alert('Pobre')
        
    } else {
        
        AlterarValor(-custoItem);

        desativarBotaoUpgrade(1);

        document.getElementById("linha2").style.opacity = "1";

        var proxBotao = document.getElementById("Bupgrade2");
        proxBotao.onclick = function() {upgrade2(150)}

        document.getElementById("TextoArvoreEmCima").style.opacity = "1"

        document.getElementById("Bupgrade1").style.display = "none"

  
    }

}


function upgrade2(custoItem) {
    
    if(kiryus < custoItem){
        
        alert('Pobre')
        
    } else {
        
        AlterarValor(-custoItem);

        desativarBotaoUpgrade(2);
        mudarBotaoImagem(2);

        document.getElementById("linha3").style.opacity = "1";

        var proxBotao = document.getElementById("Bupgrade3");
        proxBotao.onclick = function() {upgrade3(500)}

        var proxBotao = document.getElementById("Bupgrade4");
        proxBotao.onclick = function() {upgrade4(300)}

        var botaoKiryu = document.getElementById("botaoKiryu")

        clickValor += 1;
        atualizarKpcVisual()

    }

}

function upgrade3(custoItem) {
    
    if(kiryus < custoItem){
        
        alert('Pobre')
        
    } else {
        
        AlterarValor(-custoItem);

        desativarBotaoUpgrade(3);
        mudarBotaoImagem(3);

        upgrade3comprado = true;

        if(upgrade3comprado && upgrade4comprado) {

            document.getElementById("linha4").style.opacity = "1";

            var proxBotao = document.getElementById("Bupgrade5");
            proxBotao.onclick = function() {upgrade5(2000)}

        }

        percentualKpsClick += 0.1;
        atualizarKpcVisual()
        
    }
    
}

function upgrade4(custoItem) {
    
    if(kiryus < custoItem){
        
        alert('Pobre')
        
    } else {
        
        AlterarValor(-custoItem);

        desativarBotaoUpgrade(4);
        mudarBotaoImagem(4);

        upgrade4comprado = true;

        if(upgrade3comprado && upgrade4comprado) {
            
            document.getElementById("linha4").style.opacity = "1";

            var proxBotao = document.getElementById("Bupgrade5");
            proxBotao.onclick = function() {upgrade5(2000)}
            
        }

        clickValor += 3;
        atualizarKpcVisual()
        
    }

}

function upgrade5(custoItem) {
    
    if(kiryus < custoItem){
        
        alert('Pobre')
        
    } else {
        
        AlterarValor(-custoItem);

        desativarBotaoUpgrade(5);
        mudarBotaoImagem(5);
        
        document.getElementById("linha5").style.opacity = "1";

        var proxBotao = document.getElementById("Bupgrade6");
        proxBotao.onclick = function() {upgrade6(10000)}

        percentualKpsClick += 0.15;
        atualizarKpcVisual()
        
    }
    
}

function upgrade6(custoItem) {
    
    if(kiryus < custoItem){
        
        alert('Pobre')
        
    } else {
        
        AlterarValor(-custoItem);

        desativarBotaoUpgrade(6);
        mudarBotaoImagem(6);

        document.getElementById("inserirKiryus").style.display = "flex";
        
        dialogoUm()
    }
    
}



// Dialogo

function dialogoUm() {

    var elementoTextoP = document.createElement('p');
    elementoTextoP.id = 'falaKiryu';
    var iFala = 0;
    var txt = 'Olá, sou eu, o Kiryu do PCC. O que você deseja comigo?'; 
    var velocidade = 50; 

    secaoFala.appendChild(elementoTextoP);

    function typeWriter() {
        if (iFala < txt.length) {
        elementoTextoP.innerHTML += txt.charAt(iFala);
        iFala++;
        setTimeout(typeWriter, velocidade);
        }
    }
    typeWriter();
    
}

function resposta1() {

    secaoFala.removeChild(secaoFala.firstChild);

    var elementoTextoP = document.createElement('p');
    elementoTextoP.id = 'falaKiryu';
    var iFala = 0;
    var txt = 'Que assim seja, irei lhe conceder seu desejo. Apenas digite quantos Kiryus deseja, e você irá os receber.'; 
    var velocidade = 50; 

    secaoFala.appendChild(elementoTextoP);

    function typeWriter() {
        if (iFala < txt.length) {
        elementoTextoP.innerHTML += txt.charAt(iFala);
        iFala++;
        setTimeout(typeWriter, velocidade);
        }
    }
    typeWriter();

    document.getElementById("caixaDeFala").style.fontSize = "30px";

    document.getElementById("opcao2").style.display = "none"
    document.getElementById("opcao1").style.display = "none"

    document.getElementById("inputcaixa").style.display = "flex"
    document.getElementById("inputFala").style.width = "80%"


}


function resposta2() {

    secaoFala.removeChild(secaoFala.firstChild);

    var elementoTextoP = document.createElement('p');
    elementoTextoP.id = 'falaKiryu';
    var iFala = 0;
    var txt = 'Eu sou um ser inalcançável, acima de qualquer existência. Tu jamais conseguirias viver lado a lado comigo. Infelizmente, nosso amor é proibido.'; 
    var velocidade = 50; 

    secaoFala.appendChild(elementoTextoP);

    function typeWriter() {
        if (iFala < txt.length) {
        elementoTextoP.innerHTML += txt.charAt(iFala);
        iFala++;
        setTimeout(typeWriter, velocidade);
        }
    }
    typeWriter();

    document.getElementById("caixaDeFala").style.fontSize = "24px";

    var botaoResp = document.getElementById("opcao2")
    botaoResp.innerText = "Mas eu te amo"
    botaoResp.onclick = function() {resposta3()}

    document.getElementById("opcao1").style.display = "none"

}

function resposta3() {

    secaoFala.removeChild(secaoFala.firstChild);

    var elementoTextoP = document.createElement('p');
    elementoTextoP.id = 'falaKiryu';
    var iFala = 0;
    var txt = 'Se você insiste... eu conheço uma única forma de nos unirmos... de você realmente ter um relacionamento sério comigo... Você está disposto a passar por o que quer que seja para isso?'; 
    var velocidade = 50; 

    secaoFala.appendChild(elementoTextoP);

    function typeWriter() {
        if (iFala < txt.length) {
        elementoTextoP.innerHTML += txt.charAt(iFala);
        iFala++;
        setTimeout(typeWriter, velocidade);
        }
    }
    typeWriter();

    document.getElementById("caixaDeFala").style.fontSize = "22px";

    
    
    var botaoResp = document.getElementById("opcao2")
    botaoResp.innerText = "Não"
    botaoResp.onclick = function() {resposta4()}

    document.getElementById("opcao1").style.display = "flex"

    var botaoResp2 = document.getElementById("opcao1")
    botaoResp2.innerText = "Sim"
    botaoResp2.onclick = function() {resposta5()}

}


function resposta4() {

    secaoFala.removeChild(secaoFala.firstChild);

    var elementoTextoP = document.createElement('p');
    elementoTextoP.id = 'falaKiryu';
    var iFala = 0;
    var txt = 'Neste caso não tenho nada para dizer para você.'; 
    var velocidade = 50; 

    secaoFala.appendChild(elementoTextoP);

    function typeWriter() {
        if (iFala < txt.length) {
        elementoTextoP.innerHTML += txt.charAt(iFala);
        iFala++;
        setTimeout(typeWriter, velocidade);
        }
    }
    typeWriter();

    document.getElementById("opcao2").style.display = "none"

    
    var botaoResp2 = document.getElementById("opcao1")
    botaoResp2.innerText = "Eu desejo muitos Kiryus"
    botaoResp2.onclick = function() {resposta1()}

}

function resposta5() {

    secaoFala.removeChild(secaoFala.firstChild);

    var elementoTextoA = document.createElement('a');
    elementoTextoA.id = 'falaKiryuA';
    elementoTextoA.href = "https://store.steampowered.com/app/1088710/Yakuza_3_Remastered/"
    elementoTextoA.target = "_blank"
    var iFala = 0;
    var txt = 'ENTÃO COMPRE YAKUZA 3 POR APENAS R$89,50! A EXPERIÊNCIA DO JOGO SERÁ DE TAMANHA QUALIDADE QUE SERÁ QUASE O MESMO QUE TER UM RELACIONAMENTO SÉRIO COM O PRÓPRIO KIRYU!!! '; 
    var velocidade = 15; 

    secaoFala.appendChild(elementoTextoA);

    function typeWriter() {
        if (iFala < txt.length) {
        elementoTextoA.innerHTML += txt.charAt(iFala);
        iFala++;
        setTimeout(typeWriter, velocidade);
        }
    }
    typeWriter();

    document.getElementById("opcao2").style.display = "none"

    var botaoResp = document.getElementById("opcao1")
    botaoResp.innerText = "Não"
    botaoResp.onclick = function() {resposta4()}

}

function receberInput() {

    var numeroInserido = document.getElementById("inputFala").value;
    AlterarValor(Math.ceil(numeroInserido))
    document.getElementById("inputFala").value = '';

}


// AUDIO E MUSICA



function tocarMusica(numeroid) {

    var botaoClicado = document.getElementById("botaoMusica" + numeroid);
    botaoClicado.classList.remove('audioButton');
    botaoClicado.classList.add('audioPauseButton');
    botaoClicado.onclick = function() {pausarMusica(numeroid)}

    var musicaTocada = document.getElementById("musica" + numeroid);
    musicaTocada.play();
    musicaTocada.volume = 0.2;

    if(numeroid == 1) {

        pausarMusica(2);
        pausarMusica(3);

    } else if (numeroid == 2) {

        pausarMusica(1);
        pausarMusica(3);

    } else {

        pausarMusica(1);
        pausarMusica(2);
        
    }

}

function pausarMusica(numeroid) {

    var botaoClicado = document.getElementById("botaoMusica" + numeroid);
    botaoClicado.classList.remove('audioPauseButton');
    botaoClicado.classList.add('audioButton');
    botaoClicado.onclick = function() {tocarMusica(numeroid)}

    var musicaTocada = document.getElementById("musica" + numeroid);
    musicaTocada.pause();

}
