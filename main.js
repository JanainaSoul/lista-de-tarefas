import BotaoConclui  from './assets/componentes/concluiTarefa.js';
import BotaoDeDeleta from './assets/componentes/deletaTarefa.js';
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