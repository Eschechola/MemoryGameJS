function abrirFases(){
    let fases = document.getElementsByClassName('fases')[0];
    fases.style.display = "block";
    $('html, body').animate({scrollTop:915}, 'slow');
}

function fecharMenu(){
    $('html, body').animate({scrollTop:10}, 'slow');
    setTimeout(fecharFases, 500);
}

function fecharFases(){
    let fases = document.getElementsByClassName('fases')[0];
    fases.style.display = "none";
}


function abrirDropDownTraducao(){
    let droplanguages = document.getElementsByClassName('item-menu')[1];
    let dropdown = document.getElementsByClassName('drop-down')[0];
    let textolanguages = document.getElementsByClassName('language-line');
    dropdown.style.height = "150px";
    droplanguages.style.backgroundColor = "#36668e";

    for(let i =0; i< textolanguages.length;i++){
        textolanguages[i].style.fontSize = "200%"
    }
}

function fecharDropDownTraducao(){
    let droplanguages = document.getElementsByClassName('item-menu')[1];
    let dropdown = document.getElementsByClassName('drop-down')[0];
    let textolanguages = document.getElementsByClassName('language-line');
    dropdown.style.height = "0px";
    droplanguages.style.backgroundColor = "transparent";

    for(let i =0; i< textolanguages.length;i++){
        textolanguages[i].style.fontSize = "0%"
    }
}

function traduzirPortugues(){
    let sobreMenu = document.getElementsByClassName('item-menu')[0].innerHTML = "<center><p>Sobre</p></center>";
    let idiomasMenu = document.getElementsByClassName('item-menu')[1].innerHTML = "<center><p>Idiomas</p></center>";
    let playMenuCentral = document.getElementsByClassName('menu-play')[0].innerHTML = "<h2>Jogar</h2>";
    let sobreMenuCentral = document.getElementsByClassName('menu-play')[1].innerHTML = "<h2>&nbsp;Sobre</h2>";
    let tituloFases = document.getElementsByClassName('title-fases')[0].innerHTML ="<h1><center>Complete as fases para ir desbloqueando as próximas</center></h1>"
}

function traduzirIngles(){
    let sobreMenu = document.getElementsByClassName('item-menu')[0].innerHTML = "<center><p>About</p></center>";
    let idiomasMenu = document.getElementsByClassName('item-menu')[1].innerHTML = "<center><p>Language</p></center>";
    let playMenuCentral = document.getElementsByClassName('menu-play')[0].innerHTML = "<h2>Play</h2>";
    let sobreMenuCentral = document.getElementsByClassName('menu-play')[1].innerHTML = "<h2> About</h2>";
    let tituloFases = document.getElementsByClassName('title-fases')[0].innerHTML ="<h1><center>Complete the phases to unlock the others</center></h1>"
}

function abrirPrimeiraFase(n){
    let quadrados = document.getElementsByClassName('content-game')[n];
    quadrados.innerHTML = `<div class="item-game" onclick="revelarNumero(0,0)"></div>
    <div class="item-game" onclick="revelarNumero(1,0)"></div>
    <div class="item-game" onclick="revelarNumero(2,0)"></div>
    <div class="item-game" onclick="revelarNumero(3,0)"></div>
    <div class="item-game" onclick="revelarNumero(4,0)"></div>
    <div class="item-game" onclick="revelarNumero(5,0)"></div>
    <div class="item-game" onclick="revelarNumero(6,0)"></div>
    <div class="item-game" onclick="revelarNumero(7,0)"></div>
    <div class="item-game" onclick="revelarNumero(8,0)"></div>
    <div class="item-game" onclick="revelarNumero(9,0)"></div>
    <div class="item-game" onclick="revelarNumero(10,0)"></div>
    <div class="item-game" onclick="revelarNumero(11,0)"></div>
    <div class="item-game" onclick="revelarNumero(12,0)"></div>
    <div class="item-game" onclick="revelarNumero(13,0)"></div>
    <div class="item-game" onclick="revelarNumero(14,0)"></div>
    <div class="item-game" onclick="revelarNumero(15,0)"></div>`;

    let paginaVitoria = document.getElementsByClassName('winner')[n];
    paginaVitoria.style.width = "0%";
    paginaVitoria.style.display = "none";

    let paginaDerrota = document.getElementsByClassName('loser')[n];
    paginaDerrota.style.display = "none";
    paginaDerrota.style.width = "0%";


    let fases = document.getElementsByClassName('fases')[0];
    fases.style.display = "none";

    let conteudo = document.getElementsByClassName('content')[0];
    conteudo.style.display = "none";

    let fase1 = document.getElementsByClassName('layout-1-fase')[0];
    fase1.style.display = "block";
    fase1.style.position = "fixed";
    fase1.style.marginTop = "0";

    let fundo = document.getElementsByClassName('init-game-1')[n];
    let modal = document.getElementsByClassName('modal-start-game')[n];
    modal.style.opacity = "1";
    modal.style.display = "block";
    fundo.style.width = "100%";
}

function voltarMenuPrincipal(nFase){
    let fases = document.getElementsByClassName('fases')[0];
    fases.style.display = "block";

    let conteudo = document.getElementsByClassName('content')[0];
    conteudo.style.display = "block";

    let fase = document.getElementsByClassName(nFase)[0];
    fase.style.display = "none";
    fase.style.position = "none";
    fase.style.marginTop = "2400px";
    $('html, body').animate({scrollTop:1360}, 'slow');

    for(let i =0;i<5;i++){
        fecharSaidaFase(i);
    }
}

function confirmarSaidaFase(fase){
    let telasaida = document.getElementsByClassName('confirm-close')[fase];
    telasaida.style.display = "block"
}

function fecharSaidaFase(fase){
    let telasaida = document.getElementsByClassName('confirm-close')[fase];
    telasaida.style.display = "none"
}

function gerarNumerosAleatorios(quantidadefase){
    let primeirasCasas = [];
    let ultimasCasas = [];
    let vetorCompleto = [];
    let aux;

    for(let i =0; i<quantidadefase*2;i++){
        aux = Math.floor(Math.random() * quantidadefase + 1);
        if(primeirasCasas.length < quantidadefase){
            if(primeirasCasas.includes(aux)){
                i--;
            }
            else{
                primeirasCasas.push(aux);
            }
        }
        else{
            if(ultimasCasas.includes(aux)){
                i--;
            }
            else{
                ultimasCasas.push(aux);
            }
        }
    }

    for(let j = 0; j<quantidadefase;j++){
        vetorCompleto.push(primeirasCasas[j]);
        vetorCompleto.push(ultimasCasas[j]);
    }

    return vetorCompleto;
}


let vetorPrimario = [];

function iniciarJogo(numPlay, nomeClasse, segundos){
    quadrado1 = null;
    quadrado2 = null;
    var time = new Number;
    time = segundos;
    startTempo(time,numPlay);

    let animacaoEsconderNumero = document.getElementsByClassName('hide-block');
    vetorPrimario = [];

    for(let i =0; i< animacaoEsconderNumero.length;i++){
        animacaoEsconderNumero[i].style.animationPlayState = "running";
    }

    let limparQuadrados = document.getElementsByClassName('item-game');
    for(let j = 0; j < limparQuadrados.length;j++)
    {
        limparQuadrados[j].style.backgroundColor = "white";
    }

    let fundo = document.getElementsByClassName('init-game-1')[numPlay];
    let modal = document.getElementsByClassName('modal-start-game')[numPlay];
    modal.style.opacity = "0";
    modal.style.display = "none";
    fundo.style.width = "0%";

    let vetor = [];

    switch(numPlay)
    {
        case 0:
            vetor = gerarNumerosAleatorios(8);
            break;

        case 1:
            vetor = gerarNumerosAleatorios(10);
            break;

        case 2:
            vetor = gerarNumerosAleatorios(10);
            break;

        case 3:
            vetor = gerarNumerosAleatorios(12);
            break;

        case 4:
            vetor = gerarNumerosAleatorios(12);
            break;
    }

    quantidadeDeQuadrados = document.getElementsByClassName(nomeClasse);

    for(let i = 0; i< quantidadeDeQuadrados.length;i++){
        quantidadeDeQuadrados[i].innerHTML = "<center><p class='hide-block'>"+vetor[i]+"</p></center>";
    }

    vetorPrimario = [];
    vetorPrimario = vetor;
}

let quadrado1 = null;
let quadrado2 = null;
let jogadasCertasFase1 = 0;
let jogadasCertasFase2 = 0;
let jogadasCertasFase3 = 0;
let jogadasCertasFase4 = 0;
let jogadasCertasFase5 = 0;

let primeiroQuadrado = false;


function revelarNumero(n,nFase){
    let quadrado = document.getElementsByClassName('item-game')[n];
    let numero = document.getElementsByClassName('hide-block')[n];
    numero.style.opacity = "1";
    quadrado.style.backgroundColor = "lightblue";

    let mudarNumero1;
    let mudarQuadrado1;
    let mudarNumero2;
    let mudarQuadrado2;

    if(quadrado1 == n||quadrado2==n)
    {

    }
    else if(primeiroQuadrado == false){
        quadrado1 = n;
        primeiroQuadrado = true;
    }
    else{
        quadrado2 = n;

        if(vetorPrimario[quadrado1]==vetorPrimario[quadrado2])
        {
            mudarQuadrado1 = document.getElementsByClassName('item-game')[quadrado1];
            mudarNumero1 = document.getElementsByClassName('hide-block')[quadrado1];
            mudarQuadrado1.style.backgroundColor = "lightgreen";
            mudarNumero1.style.opacity = "1";

            mudarQuadrado2 = document.getElementsByClassName('item-game')[quadrado2];
            mudarNumero2 = document.getElementsByClassName('hide-block')[quadrado2];
            mudarQuadrado2.style.backgroundColor = "lightgreen";
            mudarNumero2.style.opacity = "1";
            mudarQuadrado1.onclick = travarIguais();
            mudarQuadrado2.onclick = travarIguais();
            //ja carrega todas as fases de uma vez.
            jogadasCertasFase1++;
            jogadasCertasFase2++;
            jogadasCertasFase3++;
            jogadasCertasFase4++;
            jogadasCertasFase5++;
        }
        else
        {
            mudarQuadrado1 = document.getElementsByClassName('item-game')[quadrado1];
            mudarNumero1 = document.getElementsByClassName('hide-block')[quadrado1];
            mudarQuadrado1.style.backgroundColor = "white";
            mudarNumero1.style.opacity = "0";
            
            numero.style.opacity = "1";
            quadrado.style.backgroundColor = "lightblue";
            quadrado.style.animation = "teste";

            quadrado.style.backgroundColor = "white";
            numero.style.opacity = "0";
        }

        quadrado1 = null;
        quadrado2 = null;
        primeiroQuadrado = false;
    }

    if(jogadasCertasFase1 == 8||jogadasCertasFase2 == 10||jogadasCertasFase3 == 10||jogadasCertasFase4 == 12||jogadasCertasFase5 == 12)
    {
        jogadasCertasFase1 = 0;
        jogadasCertasFase2 = 0;
        jogadasCertasFase3 = 0;
        jogadasCertasFase4 = 0;
        jogadasCertasFase5 = 0;
        vitoria(nFase);
    }

}

function travarIguais()
{
    //criada apenas para travar, sem utilidaade
}

var tempo = new Number;
tempo = 00;

function startTempo(segundos, nFase)
{
    let d = nFase;
    tempo = segundos;
    cronometro(d);
}

function cronometro(nFase)
{
    tempo--;
    time.innerHTML = tempo;
    if(tempo == 0)
    {
        derrota(nFase);
    }
    else if(tempo >= 0)
    {
        setTimeout('cronometro('+nFase+')', 1000);
    }  
}

let verificarWin = true;

function derrota(nFase)
{
    if(verificarWin){
        let paginaDerrota = document.getElementsByClassName('loser')[nFase];
        paginaDerrota.style.display = "block";
        paginaDerrota.style.width = "100%";
    }
}

function vitoria(nFase)
{
    let paginaVitoria = document.getElementsByClassName('winner')[nFase];
    paginaVitoria.style.display = "block"
    paginaVitoria.style.width = "100%";
    verificarWin = false;

}