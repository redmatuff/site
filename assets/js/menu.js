let menuAtivo = 0;

const hamburgerIcon = document.querySelector('.hamb-icon');
const menu = document.querySelector('.div-btns-barra');
const menuBtn = document.querySelectorAll('.menu-btn');
// console.log(menuBtn);
hamburgerIcon.addEventListener('click', function(){
    // console.log('ctrlMenu chamado');
    if (menuAtivo == 0){
        menu.style.visibility = 'visible';
        for (let i = 0; i < menuBtn.length; i++){
            menuBtn[i].style.visibility = 'visible';
        }
        menuAtivo = 1;
        console.log('menu visivel');
    }else{
        menu.style.visibility = 'hidden';
        for (let i = 0; i < menuBtn.length; i++){
            menuBtn[i].style.visibility = 'hidden';
        }        
        menuAtivo = 0;   
        console.log('menu escondido');
    }
});

window.addEventListener('resize', function(){
    if (window.innerWidth > 768){
        menu.style.visibility = 'visible';
        for (let i = 0; i < menuBtn.length; i++){
            menuBtn[i].style.visibility = 'hidden';
        }        menuAtivo = 1;
        // console.log(menuAtivo);
    }else{
        menu.style.visibility = 'hidden';
        for (let i = 0; i < menuBtn.length; i++){
            menuBtn[i].style.visibility = 'hidden';
        }        menuAtivo = 0;
        // console.log(menuAtivo);
    }
});

document.addEventListener('click', function(event) {
    if (menu.contains(event.target) || hamburgerIcon.contains(event.target)) {
        // console.log('Clique dentro do menu!');
    }else {
        if(window.innerWidth <= 768){
            menu.style.visibility = 'hidden';
            for (let i = 0; i < menuBtn.length; i++){
                menuBtn[i].style.visibility = 'hidden';
            }        
            menuAtivo = 0;
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const botoes = document.querySelectorAll('.btn-barra');
    const menus = document.querySelectorAll('.menu-btn');

    console.log(botoes);
    console.log(menus);

    botoes.forEach(function(botao, index) {
        botao.addEventListener('click', function() {


            if(window.innerWidth > 768){
                console.log("botao clicado");
                // Fecha todos os menus
                menus.forEach(function(menu) {
                    menu.style.visibility = 'hidden';
                    console.log("escondeu");
                });
                // Abre o menu associado ao botão clicado
                menus[index].style.visibility = 'visible';            
            }



        });
    });

    // Adiciona um ouvinte de clique ao documento para fechar o menu se clicar fora do botão/menus
    document.addEventListener('click', function(event) {
        if (!event.target.matches('.div-btns-barra .btn-barra') && window.innerWidth > 768) {
            menus.forEach(function(menu) {
                menu.style.visibility = 'hidden';
            });
        }
    });
});
