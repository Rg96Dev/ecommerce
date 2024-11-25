//função que seleciona os botoes
document.addEventListener("DOMContentLoaded", function (params) {
    const buttons = document.querySelectorAll("[data-tab-button]");
    const question = document.querySelectorAll('[data-faq-question]');

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

//efeitos seção faq
for (let i = 0; i < question.length; i++) {
    question[i].addEventListener("click", abreOuFechaResposta);
    
}
});

// Função que abre e fecha abas de perguntas
function abreOuFechaResposta(elemento) {
     // Obtem o elemento pai do alvo do evento (o botão ou a pergunta clicada)
    const classe = "faq__questions__item--is-open";
    const elementoPai = elemento.target.parentNode;

     // Adiciona ou remove a classe no elemento pai
    elementoPai.classList.toggle(classe);
    
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

    for (let i  = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove("shop__nav--is-active");
        
    }
}


