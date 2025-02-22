var header = document.getElementsByTagName('header')[0];

header.innerHTML = `
        <!-- Header 1. Barra Superior -->
        <div class="barra-sup">

            <!-- Header 1.1. Titulo e Logo -->
            <div class="titulo-container">
                
                <!-- Header 1.1.1. Logo -->
                <a href="https://redmatuff.github.io/site/index.html">
                    <!-- <img src="https://redmatuff.github.io/site/assets/icons/logo-transparente.png" alt="logo REDMat" class="logo"> -->
                    <img src="https://redmatuff.github.io/site/assets/icons/logo-transparente.png" alt="logo REDMat" class="logo">
                </a>

                    <!--const img = document.querySelector("header img");
                    if (img) {
                    img.style.setProperty("width", "50%", "important");
                    }-->

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
                    <a href="https://redmatuff.github.io/site/pages/quem-somos.html">
                        <button class="btn-barra">Quem Somos</button>
                    </a>
                    <div class="menu-btn">

                    </div>
                </div>
                <!-- Fim do Botão 1 -->
                
                <!-- Botão 2 -->
                <div>
                    <a href="https://redmatuff.github.io/site/pages/seja-monitor">
                        <button class="btn-barra">Seja Monitor</button>
                    </a>
                    <div class="menu-btn">

                    </div>
                </div>
                <!-- Fim do Botão 2 -->

                <!-- Botão 3 -->
                <div>
                    <a href="https://redmatuff.github.io/site/pages/pre-calculo.html">
                        <button class="btn-barra">Pré-Cálculo</button>
                    </a>
                    <div class="menu-btn">

                    </div>
                </div>
                <!-- Fim do Botão 3 -->

                <!-- Botão 4 -->
                <div>
                    <a href="https://redmatuff.github.io/site/pages/calculo.html">
                        <button class="btn-barra">Cálculo</button>
                    </a>
                    <div class="menu-btn">

                    </div>
                </div>
                <!-- Fim do Botão 4 -->

                <!-- Botão 5 -->
                <div>
                    <a href="https://redmatuff.github.io/site/pages/equacoes-diferenciais.html">
                        <button class="btn-barra">Equações Diferenciais</button>
                    </a>
                    <div class="menu-btn">

                    </div>
                </div>
                <!-- Fim do Botão 5 -->

                <!-- Botão 6 -->
                <div>
                    <a href="https://redmatuff.github.io/site/pages/Cursos.html">
                        <button class="btn-barra">Cursos</button>
                    </a>
                    <div class="menu-btn">

                    </div>
                </div>
                <!-- Fim do Botão 6 -->

               

            </div>

             <!-- Header 1.3. Ícone do Menu Hamburguer -->
            <div class="hamb-icon-container">
                <img class="hamb-icon" src="https://redmatuff.github.io/site/assets/icons/hamb-traco.png" alt="icone-hamburguer">
            </div>

        </div>


`