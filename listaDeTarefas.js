// import BotaoConclui  from './componentes/concluiTarefa.js';
// import BotaoDeDeleta from './componentes/deletaTarefa.js';
(() => {
    const criarTarefa = (evento)=>{

    evento.preventDefault();

    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;

    const tarefa = document.createElement('li');
    tarefa.classList.add('task');
    const conteudo = `<p class="content">${valor}</p>`;

    tarefa.innerHTML = conteudo;

    tarefa.appendChild(BotaoConclui());
    tarefa.appendChild(BotaoDeDeleta());
    lista.appendChild(tarefa); //coloca a tarefa sempre no final
    input.value = " ";

}

const novaTarefa = document.querySelector("[data-form-button]");

//escutador - precisa do evento , ex click , 2 ° lugar do evento (botaão) e 3° o que acontece depois (fui clicado)
novaTarefa.addEventListener('click', criarTarefa);

//criar componente - uma parte do todo -> varios componentes criam a aplicação
//criar botão 
    const BotaoConclui = ()=>{
    const botaoConclui = document.createElement('button');

    botaoConclui.classList.add('check-button');
    botaoConclui.innerText = ' concluir';

    botaoConclui.addEventListener('click',concluirTarefa);     // caso alguem clique vai acontecer uma ação

    return botaoConclui; // retorna o botao
}

const concluirTarefa = (evento)=> {
    const botaoConclui = evento.target  //alvo do evento - sobe um no na arvore do DOM

    const tarefaCompleta = botaoConclui.parentElement;

    tarefaCompleta.classList.toggle('done'); //executar a classe css no momento q clica no botao

}
const BotaoDeDeleta = () =>{ //componentes começam com letra maiscula
    const botaoDeleta = document.createElement('button');

    botaoDeleta.innerText = 'deletar';
    botaoDeleta.addEventListener('click', deletarTarefa)

    return botaoDeleta;
}

const deletarTarefa = (evento)=>{
    const botaoDeleta = evento.target;

    const tarefaCompleta = botaoDeleta.parentElement; //elemento pai do botão é a li

    tarefaCompleta.remove();

    return botaoDeleta;
}
})() // encapsula o código