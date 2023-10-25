var banner = document.getElementById('banner');


function minhaFuncao() {

    banner.innerHTML = '';
    var numeroDeUns = 3000;
    var numeroDeZeros = 1500;
    var largura = banner.offsetWidth;
    var altura = banner.offsetHeight;
    var espaco = 50;


    for (var i = 0; i < numeroDeZeros; i++){
        var umElemento = document.createElement("div");
        umElemento.innerText = "0";

        // Definindo tamanho
        var tam = 7 * Math.floor(Math.random()** 3 * 40/10);
        umElemento.style.fontSize = tam + 'pt';

        // Definindo posição

        var posX = 20 + tam/32 * espaco * Math.floor(30/tam * Math.random() * largura/espaco);
        var posY = Math.floor(Math.random() * 0.75 * altura + 70);
        
        umElemento.style.position = "absolute";
        umElemento.style.left = posX + "px";
        umElemento.style.top = posY + "px";


        // Definindo cores RGB aleatórias (valores de 0 a 255)
        var corR = Math.floor(Math.random() * 0);
        var corG = Math.floor(Math.random() * 50);
        var corB = Math.floor(Math.random() * 256);
        var alpha = Math.random().toFixed(2); // Valor de 0 a 1 com 2 casas decimais
        alpha = alpha / 2;
        
        // Aplicando a cor ao elemento
        umElemento.style.color = `rgba(${corR}, ${corG}, ${corB}, ${alpha})`;
        



        banner.appendChild(umElemento);
    }

    for (var i = 0; i < numeroDeUns; i++){
        var umElemento = document.createElement("div");
        umElemento.innerText = "1";

        // Definindo tamanho
        var tam = 7 * Math.floor(Math.random()** 3 * 40/10);
        umElemento.style.fontSize = tam + 'pt';

        // Definindo posição

        var posX = 20 + tam/32 * espaco * Math.floor(30/tam * Math.random() * largura/espaco);
        var posY = Math.floor(Math.random() * 0.75 * altura + 70);
        
        umElemento.style.position = "absolute";
        umElemento.style.left = posX + "px";
        umElemento.style.top = posY + "px";


        // Definindo cores RGB aleatórias (valores de 0 a 255)
        var corR = Math.floor(Math.random() * 0);
        var corG = Math.floor(Math.random() * 50);
        var corB = Math.floor(Math.random() * 256);
        var alpha = Math.random().toFixed(2); // Valor de 0 a 1 com 2 casas decimais
        alpha = alpha / 2;
        
        // Aplicando a cor ao elemento
        umElemento.style.color = `rgba(${corR}, ${corG}, ${corB}, ${alpha})`;
        



        banner.appendChild(umElemento);
    }
}

window.addEventListener('resize', minhaFuncao);
window.addEventListener('load', minhaFuncao);




