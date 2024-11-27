//função que seleciona os botoes
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("[data-tab-button]");
    const question = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector(".hero");
    const alturaHero = heroSection.clientHeight;

    window.addEventListener("scroll", function () {
        const posicaoAtual = window.scrollY;


        if (posicaoAtual < alturaHero) {
            exibeElementosDoHeader();
        }
        else {
            ocultaElementosDoHeader();

        }

    })


    //efeitos seção faq
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function (botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeAbas();
            aba.classList.add("shop__nav--is-active");
            removeBotaoAtivo();
            botao.target.classList.add("shop__tabs__button--is-active")
        });

    }

    for (let i = 0; i < question.length; i++) {
        question[i].addEventListener("click", abreOuFechaResposta);

    }
});

// funções que controlam o menu de navegação
function ocultaElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function exibeElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

// Função que abre e fecha abas de perguntas
function abreOuFechaResposta(elemento) {

    // Obtem o elemento pai do alvo do evento (o botão ou a pergunta clicada)
    const classe = "faq__questions__item--is-open";
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe); // Adiciona ou remove a classe no elemento pai

}

//função definida para remover a classe ativa do botão
function removeBotaoAtivo() {
    const buttons = document.querySelectorAll("[data-tab-button]");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("shop__tabs__button--is-active");
    }

}

function escondeAbas() {
    const tabsContainer = document.querySelectorAll("[data-tab-id]");

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove("shop__nav--is-active");

    }
}


