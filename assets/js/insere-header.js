var header = document.getElementsByTagName('header')[0];

header.innerHTML = `
        <!-- Header 1. Barra Superior -->
        <div class="barra-sup">

            <!-- Header 1.1. Titulo e Logo -->
            <div class="titulo-container">
                
                <!-- Header 1.1.1. Logo -->
                <a href="https://redmatuff.github.io/site/index.html">
                    <!-- <img src="../assets/icons/logo-transparente.png" alt="logo REDMat" class="logo"> -->
                    <img src="https://redmatuff.github.io/site/assets/icons/logo-transparente.png" alt="logo REDMat" class="logo">
                    
                </a>

                <!-- Header 1.1.2. Títulos Longos e Curtos -->
                <div class="titulo-barra">

                    <div class="titulo-barra-longo">
                        <a href="https://www.uff.br/">                   
                            <h3>Universidade Federal Fluminense</h3>
                        </a>
                        <a href="https://ime.uff.br/">
                            <h3>Instituto de Matemática e Estatística</h3>
                        </a>
                        <h2>Recursos&nbsp;Educacionais&nbsp;Digitais para o Ensino&nbsp;da&nbsp;Matemática</h2>
                    </div>
                        
                    <div class="titulo-barra-curto">
                        <a href="https://www.uff.br/">                   
                            <h3>Universiade Federal Fuminense</h3>
                        </a>
                        <a href="https://ime.uff.br/">
                            <h3>Instituto de Matemática e Estatística</h3>
                        </a>
                    </div>

                </div>

            </div>

            <!-- Header 1.2. Barra de Botões ou Menu -->
            <div class="div-btns-barra">

                <!-- Botão 1 -->
                <div>
                    <a href="https://redmatuff.github.io/site/index.html">
                        <button class="btn-barra">Home</button> <!-- Botão da barra-->
                    </a>
                    <div class="menu-btn">
                        <!-- Colocar tags <a> aqui para criar o menu do botão -->
                        <!-- <a href="../link">Exemplo</a> -->
                    </div>
                </div>
                <!-- Fim do Botão 1. Pra criar novos botões basta copiar estas ultimas ~10 linhas de código -->
                <!-- A criação de novos botões pode prejudicar a responsividade do código. Recomenda-se manter o número de botões menor ou igual a 7, e avaliar qual botão é dispensável. Exemplo: Quem Somos e Seja Membro pode se fundir em um único botão. Além disso, Home é um botão dispensável já que é possível is para página inicial clicando no logo na barra -->


                <!-- Botão 2 -->
                <div>
                    <a href="https://redmatuff.github.io/site/pages/quem-somos.html">
                        <button class="btn-barra">Quem Somos</button>
                    </a>
                    <div class="menu-btn">

                    </div>
                </div>
                <!-- Fim do Botão 2 -->
                
                <!-- Botão 3 -->
                <div>
                    <a href="https://redmatuff.github.io/site/pages/seja-membro.html">
                        <button class="btn-barra">Seja Membro</button>
                    </a>
                    <div class="menu-btn">

                    </div>
                </div>
                <!-- Fim do Botão 3 -->

                <!-- Botão 4 -->
                <div>
                    <a href="https://redmatuff.github.io/site/pages/proj-ensino.html">
                        <button class="btn-barra">Projetos de Ensino</button>
                    </a>
                    <div class="menu-btn">
                        <a href="https://redmatuff.github.io/site/pages/proj-ensino.html#geog-3d">Geogebra 3D (2020-2021)</a>
                        <a href="https://redmatuff.github.io/site/pages/proj-ensino.html#disc-dist-soc">Disciplinas no distanciamento social (2020)</a>
                        <a href="https://redmatuff.github.io/site/pages/proj-ensino.html#novas-tec-ensino">Novas tecnologias de ensino (2020--)</a>
                        <a href="https://redmatuff.github.io/site/pages/proj-ensino.html#gacv">GACV (2020-2022)</a>
                        <a href="https://redmatuff.github.io/site/pages/proj-ensino.html#fcg">FCG (2023--)</a>
                    </div>
                </div>
                <!-- Fim do Botão 4 -->

                <!-- Botão 5 -->
                <div>
                    <a href="https://redmatuff.github.io/site/pages/livros-eletronicos.html">
                        <button class="btn-barra">Livros Eletrônicos</button>
                    </a>        
                    <div class="menu-btn">
                        <a href="https://redmatuff.github.io/site/pages/livros-eletronicos.html#calc-geogebra-v1">Calculo com Geobebra 3D vol. I</a>
                        <a href="https://redmatuff.github.io/site/pages/livros-eletronicos.html#calc-geogebra-v2">Calculo com Geobebra 3D vol. II</a>
                        <a href="https://redmatuff.github.io/site/pages/livros-eletronicos.html#geom-an-geogebra">Geometria Analítica com Geogebra</a>
                        <a href="https://redmatuff.github.io/site/pages/livros-eletronicos.html#ap-calc-varias-var">Apostila Cálculo Diferencial de Várias Variáveis</a>
                        <a href="https://redmatuff.github.io/site/pages/livros-eletronicos.html#site-calc-1a">Site Cálculo 1A (em andamento)</a>
                        <a href="https://redmatuff.github.io/site/pages/livros-eletronicos.html#site-calc-2b">Site Cálculo 2B (em andamento)</a>
                        <a href="https://redmatuff.github.io/site/pages/livros-eletronicos.html#site-calc-3a">Site Cálculo 3A (em andamento)</a>
                    </div>
                </div>
                <!-- Fim do Botão 5 -->
                
                <!-- Botão 6 -->
                <div>
                    <a href="https://redmatuff.github.io/site/pages/recursos.html">
                        <button class="btn-barra">Recursos Digitais</button>
                    </a>
                    
                    <div class="menu-btn">
                        <a href="https://redmatuff.github.io/site/pages/recursos.html#func-uma-var">Funções de Uma Variável</a>
                        <a href="https://redmatuff.github.io/site/pages/recursos.html#calc-func-uma-var">Cálculo de Funções de Uma Variável</a>
                        <a href="https://redmatuff.github.io/site/pages/recursos.html#calc-func-varias-var">Cálculo de Funções de Várias Variáveis</a>
                        <a href="https://redmatuff.github.io/site/pages/recursos.html#edo">Equações Diferenciais Ordinárias</a>
                    </div>               
                </div>
                <!-- Fim do Botão 6 -->
                
                <!-- Botão 7 -->
                <div>
                    <a href="https://redmatuff.github.io/site/pages/contato.html">
                        <button class="btn-barra">Contato</button>
                    </a>
                    <div class="menu-btn">

                    </div>
                </div>
            </div>
            <!-- Fim do Botão 7 -->

             <!-- Header 1.3. Ícone do Menu Hamburguer -->
            <div class="hamb-icon-container">
                <img class="hamb-icon" src="https://redmatuff.github.io/site/assets/icons/hamb-traco.png" alt="icone-hamburguer">
            </div>

        </div>


        <!-- Header 2. Banner -->
        <div class="banner-container">

            <!-- Header 2.1. Imagem do Banner -->
            <img class="banner-img" src="https://redmatuff.github.io/site/assets/img/banner-redmat%20V5%20brilho.png" alt="banner">

            <!-- Header 2.2. Textos do Banner -->
            <div class="banner-txt-container">
                <div class = "txt-banner">
                    <a href="https://www.uff.br/">                   
                        <h4>Universidade Federal Fluminense</h4>
                    </a>
                    <a href="https://ime.uff.br/">
                        <h4>Instituto de Matemática e Estatística</h4>
                    </a>
                    <a href="https://redmatuff.github.io/site/index.html">
                        <h1>REDMat</h1>
                    </a>
                    <hr>
                    <h5 class="titulo-dir">Recursos&nbsp;Educacionais&nbsp;Digitais para&nbsp;o&nbsp;ensino&nbsp;da&nbsp;Matemática</h5>
                </div>
            </div>

        </div>

`