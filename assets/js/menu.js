let menuAtivo = 0;

const hamburgerIcon = document.querySelector('.hamb-icon');
const menu = document.querySelector('.div-btns-barra');
const menuBtn = document.querySelectorAll('.menu-btn');
const botoes = document.querySelectorAll('.btn-barra');

// const areaMenu = document.querySelector('.area-menu');


// console.log(menuBtn);
hamburgerIcon.addEventListener('click', function(){
    // console.log('ctrlMenu chamado');
    if (menuAtivo == 0){
        menu.style.display = 'flex';

        for (let i = 0; i < menuBtn.length; i++){
            menuBtn[i].style.display = 'flex';
        }
        menuAtivo = 1;
        console.log('menu visivel');
    }else{
        menu.style.display = 'none';
        for (let i = 0; i < menuBtn.length; i++){
            menuBtn[i].style.display = 'none';
        }        
        menuAtivo = 0;   
        console.log('menu escondido');
    }
});

window.addEventListener('resize', function(){
    if (window.innerWidth > 768){
        menu.style.display = 'flex';
        for (let i = 0; i < menuBtn.length; i++){
            menuBtn[i].style.display = 'none';
        }        menuAtivo = 1;
        // console.log(menuAtivo);
    }else{
        menu.style.display = 'none';
        for (let i = 0; i < menuBtn.length; i++){
            menuBtn[i].style.display = 'none';
        }        menuAtivo = 0;
        // console.log(menuAtivo);
    }
});


document.addEventListener('click', function(event) {
    if (menu.contains(event.target) || hamburgerIcon.contains(event.target)) {
        console.log('Clique dentro do menu!');
    }else {
        console.log('Clique fora do menu!');
        if(window.innerWidth <= 768){
            menu.style.display = 'none';
            for (let i = 0; i < menuBtn.length; i++){
                menuBtn[i].style.display = 'none';
            }        
            menuAtivo = 0;
        }
    }
});












// ****** BUSCAR MANEIRA DE REMOVER OU ADICIONAR LISTENER QUANDO A TELA ALTERAR O TAMANHO A INVER DE RECARREGAS A PAGINA INTEIRA ********************************
// window.onresize = function(event) {
    // Recarrega a página quando a janela é redimensionada
    // location.reload();
// };
// Precisa ser executado se a pagina sofrer variação de tamanho para adicionar ou remover os listeners abaixo





document.addEventListener('DOMContentLoaded', function() {


    botoes.forEach(function(botao, index) {
        botao.addEventListener('mouseover', function() {
            if(window.innerWidth > 768){
                // console.log("cursor entrou");
                // Fecha todos os menus
                menuBtn.forEach(function(menu) {
                    menu.style.display = 'none';
                    // console.log("escondeu");
                });
                // Abre o menu associado ao botão clicado
                menuBtn[index].style.display = 'flex';            
            }

        });
    });


    menuBtn.forEach(function(menu, index){
        if(window.innerWidth > 768){
            menu.addEventListener('mouseleave', function() {
                // console.log("mouse fora da area do menu");
                menu.style.display = 'none';
            });
        }
    });
    


    botoes.forEach(function(botao, index) {
        botao.addEventListener('touchstart', function() {
            if(window.innerWidth > 768){
                // console.log("cursor entrou");
                // Fecha todos os menus
                menuBtn.forEach(function(menu) {
                    menu.style.display = 'none';
                    // console.log("escondeu");
                });
                // Abre o menu associado ao botão clicado
                menuBtn[index].style.display = 'flex';            
            }

        });
    });


    menuBtn.forEach(function(menu, index){
        if(window.innerWidth > 768){
            menu.addEventListener('touchend', function() {
                // console.log("mouse fora da area do menu");
                menu.style.display = 'none';
            });
        }
    });
    







    // Adiciona um ouvinte de clique ao documento para fechar o menu se clicar fora do botão/menus
    document.addEventListener('click', function(event) {
        if (!event.target.matches('.div-btns-barra .btn-barra') && window.innerWidth > 768) {
            menuBtn.forEach(function(menu) {
                menu.style.display = 'none';
            });
        }
    });
});
