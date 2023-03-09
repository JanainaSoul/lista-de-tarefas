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


//componemntes -modulos são pequenas parte de codigo que juntas forma o todo

export default BotaoConclui;