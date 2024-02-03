// Ao redimensionar a tela de 769 para 766 px no PC o menu aparece de forma indesejada.
// O valor ??? na linha que contem "window.addEventListener('resize', debounce(handleResize, ???));" controla o tempo do fechamento.
// Um valor menor minimiza o bug, mas torna o redimensionamento menos eficiente.
// 25 é um valor pouco eficiente mas sem bug. 250 é um valor muito eficiente mas com bug. (o bug é meramente visual)


var urlHambX = 'https://redmatuff.github.io/site/assets/icons/hamb-x.png';
var urlHambTraco = 'https://redmatuff.github.io/site/assets/icons/hamb-traco.png';
let menuAtivo = 0;

const hamburgerIcon = document.querySelector('.hamb-icon');
const menu = document.querySelector('.div-btns-barra');
const menuBtn = document.querySelectorAll('.menu-btn');
const botoes = document.querySelectorAll('.btn-barra');


// Adicionar listener no icone do menu hamburguer paa abrir e fechar o menu
hamburgerIcon.addEventListener('click', function(){
    if (menuAtivo == 0){
        menu.style.display = 'flex';
        for (let i = 0; i < menuBtn.length; i++){
            menuBtn[i].style.display = 'flex';
        }
        menuAtivo = 1;
        hamburgerIcon.src=urlHambX;
    }else{
        menu.style.display = 'none';
        for (let i = 0; i < menuBtn.length; i++){
            menuBtn[i].style.display = 'none';
        }        
        menuAtivo = 0;   
        hamburgerIcon.src=urlHambTraco;
    }
});










var larguraJanela = window.innerWidth;

// Função de debounce evita muitas chamadas da função ao executar um resize. Torna a navegação mais eficiente
function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Função chamada ao redimensionar
function handleResize() {
    if (window.innerWidth > 768){
        // Abre menu para desktop
        menu.style.display = 'flex';
        for (let i = 0; i < menuBtn.length; i++){
            menuBtn[i].style.display = 'none';
        }
        menuAtivo = 0;
        hamburgerIcon.src=urlHambTraco;
    }else{
        // Fecha menu completamente
        if(window.innerWidth != larguraJanela){
            console.log('innerwidth = '+window.innerWidth+'. LarguraJanela = '+larguraJanela);
            menu.style.display = 'none';
            for (let i = 0; i < menuBtn.length; i++){
                menuBtn[i].style.display = 'none';
            }
            menuAtivo = 0;
            hamburgerIcon.src=urlHambTraco;
        }
    }
    larguraJanela = window.innerWidth;

    console.log('Janela redimensionada!');
}



// Adiciona listener ao ajustar tamanho da janela para não desconfigurar o menu sem precisar recarregar a página. Este listener para redimensionamento usa o debounce para melhor eficiencia (chamadas de função e forma moderada durante redimensionamento).
window.addEventListener('resize', debounce(handleResize, 30));




// Adiciona listener ao ajustar tamanho da janela para não desconfigurar o menu sem precisar recarregar a página. Redundância com o código anterior para ação imediata, evitando bug quando o menu para celular estiver aberto e a largura da janela for ampliada
window.addEventListener('resize', function(){
    if (window.innerWidth > 768){
        menu.style.display = 'flex';
        for (let i = 0; i < menuBtn.length; i++){
            menuBtn[i].style.display = 'none';
        }
        menuAtivo = 1;
        hamburgerIcon.src=urlHambTraco;
    }
});

// Esconder o menu quando for dado um click fora do menu (ou dentro?)
document.addEventListener('click', function(event) {
    if (menu.contains(event.target) || hamburgerIcon.contains(event.target)) {
        // console.log('Clique dentro do menu!');
    }else {
        // console.log('Clique fora do menu!');
        if(window.innerWidth <= 768){
            menu.style.display = 'none';
            for (let i = 0; i < menuBtn.length; i++){
                menuBtn[i].style.display = 'none';
            }        
            menuAtivo = 0;
            hamburgerIcon.src=urlHambTraco;
        }
    }

    // Código adicionado para fechar o menu se houver clique pois ao voltar na pagina o menu estaria aberto (versão celular)
    if (menu.contains(event.target)) {
        if(window.innerWidth <= 768){
            menu.style.display = 'none';
            for (let i = 0; i < menuBtn.length; i++){
                menuBtn[i].style.display = 'none';
            }        
            menuAtivo = 0;
            hamburgerIcon.src=urlHambTraco;
        }
    }

});













// Listeners que só agem quando a tela for maior que 768px
document.addEventListener('DOMContentLoaded', function() {

    // Se o cursor entrar no botão e a tela for larga, fecha todos os outros menus de botão que podem estar abertos e abre o menu correto
    botoes.forEach(function(botao, index) {
        botao.addEventListener('mouseover', function() {
            if(window.innerWidth > 768){
                menuBtn.forEach(function(menu) {
                    menu.style.display = 'none';
                });
                menuBtn[index].style.display = 'flex';            
            }
        });
    });
    // Quando o mouse sai do botão ou do menu do botão (que é elemento filho do botão) então fecha o menu
    menuBtn.forEach(function(menu, index){
        menu.addEventListener('mouseleave', function() {
            if(window.innerWidth > 768){
                menu.style.display = 'none';
            }
        });
    });
    
    // Mesma lógica anterior mas para touchscreen
    // Se tocar no botão e a tela for larga, fecha todos os outros menus de botão que podem estar abertos e abre o menu correto
    botoes.forEach(function(botao, index) {
        botao.addEventListener('touchstart', function() {
            if(window.innerWidth > 768){
                menuBtn.forEach(function(menu) {
                    menu.style.display = 'none';
                });
                menuBtn[index].style.display = 'flex';            
            }

        });
    });

    // Adiciona um ouvinte de clique ao documento para fechar o menu se clicar fora do botão/menus (importante em celular exibindo versão para PC)
    document.addEventListener('click', function(event) {
        if (!event.target.matches('.div-btns-barra .btn-barra') && window.innerWidth > 768) {
            menuBtn.forEach(function(menu) {
                menu.style.display = 'none';
            });
        }
    });

});
