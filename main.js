import BtnConcluir from './componentes/concluiTarefas.js';
import BtnDeletar from './componentes/deletaTarefas.js';
    
    const criarTarefa = (evento) =>{
    evento.preventDefault();

    const lista = document.querySelector('[data-list]');
    const formInput = document.querySelector('[data-form-input]');
    const valor = formInput.value;
  
    const tarefa = document.createElement('li');
    tarefa.classList.add('task');
    //const tarefa = document.querySelector('[data-task]');
    const conteudo = `<p class="content">${valor}</p>`

    tarefa.innerHTML = conteudo;

    tarefa.appendChild(BtnConcluir());
    tarefa.appendChild(BtnDeletar());
    lista.appendChild(tarefa);
    formInput.value = " ";
}

const novaTarefa = document.querySelector('[data-form-button]');
novaTarefa.addEventListener('click', criarTarefa);









