// *********** Ao redimensionar a tela de 769 para 766 px no PC o menu aparece de forma indesejada. A solução mais fácil que está comentada está com bug, fazendo o menu fechar ao fazer scroll em celular.


var urlHambX = 'assets/icons/hamb-x.png';
var urlHambTraco = 'assets/icons/hamb-traco.png';

// Corrige caminhos
var caminhoAtual = window.location.pathname;
if (!caminhoAtual.endsWith('index.html')) {
    urlHambX = '../assets/icons/hamb-x.png';
    urlHambTraco = '../assets/icons/hamb-traco.png';
}


let menuAtivo = 0;

const hamburgerIcon = document.querySelector('.hamb-icon');
const menu = document.querySelector('.div-btns-barra');
const menuBtn = document.querySelectorAll('.menu-btn');
const botoes = document.querySelectorAll('.btn-barra');




// Melhorar esta função abaixo para diferentes níveis onde a página se encontra


// urlHambX = verificarImagem(urlHambX);

// function verificarImagem(url) {
//     fetch(url, {
//         method: 'HEAD'
//     })
//     .then(response => {
//         if (response.ok) {
//             console.log('A imagem existe no servidor.');
//         } else {
//             console.log('A imagem não existe no servidor.');
//             return "../" + url;
//         }
//     })
//     .catch(error => {
//         console.error('Erro ao verificar a imagem:', error);
//     });
// }









// Adicionar listener no icone do menu hamburguer
hamburgerIcon.addEventListener('click', function(){
    if (menuAtivo == 0){
        menu.style.display = 'flex';
        for (let i = 0; i < menuBtn.length; i++){
            menuBtn[i].style.display = 'flex';
        }
        menuAtivo = 1;
        hamburgerIcon.src=urlHambX;
        // console.log('menu visivel');
    }else{




        menu.style.display = 'none';
        // menu.style.backgroundColor = 'green';





        for (let i = 0; i < menuBtn.length; i++){
            menuBtn[i].style.display = 'none';
        }        
        menuAtivo = 0;   
        hamburgerIcon.src=urlHambTraco;
        // console.log('menu escondido');
        
    }
});

// Adicionar listener ao ajustar tamanho da janela para não desconfigurar o menu sem precisar recarregar a página
window.addEventListener('resize', function(){
    if (window.innerWidth > 768){
        menu.style.display = 'flex';
        for (let i = 0; i < menuBtn.length; i++){
            menuBtn[i].style.display = 'none';
        }
        menuAtivo = 1;
        hamburgerIcon.src=urlHambTraco;
    }else{
        



        // Solução abaixo não funciona
        // Bug em Scroll em celulares está fechando o menu. O codigo abaixo testa se é um dispositivo móvel
        // if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            // console.log("Dispositivo móvel");
        // } else {
            // console.log("PC");
        // }




            // menu.style.display = 'none';
            // for (let i = 0; i < menuBtn.length; i++){
            //     menuBtn[i].style.display = 'none';
            // }
            // menuAtivo = 0;
            // hamburgerIcon.src=urlHambTraco;





    }
});

// Esconder o menu quando for dado um click fora do menu
document.addEventListener('click', function(event) {
    if (menu.contains(event.target) || hamburgerIcon.contains(event.target)) {
        // console.log('Clique dentro do menu!');
    }else {
        // console.log('Clique fora do menu!');
        if(window.innerWidth <= 768){



            menu.style.display = 'none';
            // menu.style.backgroundColor = 'blue';



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
