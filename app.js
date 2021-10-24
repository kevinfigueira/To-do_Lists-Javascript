//Selection DOM
const input = document.querySelector('.tasks_input');
const button = document.querySelector('.button');
const list = document.querySelector('.list');
const filterOption = document.querySelector('.filter');

//Events
button.addEventListener('click', addTodo);
list.addEventListener('click', deleteEditCheck);
filterOption.addEventListener('click', filter);

//Functions
function addTodo(event){
    event.preventDefault()

    const toDoDiv = document.createElement('div');
    toDoDiv.classList.add('toDo');

    const toDoLi = document.createElement('li');
    toDoLi.classList.add('toDo_li');
    toDoLi.textContent = input.value;
    input.value = '';

    toDoDiv.appendChild(toDoLi)

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('completed_btn');
    toDoDiv.appendChild(completedButton);

    const editButton = document.createElement('button');
    editButton.innerHTML = '<i class="fas fa-edit"></i>';
    editButton.classList.add('edit_btn')
    toDoDiv.appendChild(editButton);

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash_btn');
    toDoDiv.appendChild(trashButton);

    list.appendChild(toDoDiv);
}

// Função Deletar, Editar e Apagar

function deleteEditCheck(e){
    const item = e.target;
    const toDo = item.parentElement

    if(item.classList[0] === 'trash_btn'){
        toDo.classList.add('fall');
        toDo.addEventListener('transitionend', () => toDo.remove())
    }
    if(item.classList[0] === 'completed_btn'){
        toDo.classList.toggle('completed');
    }
}

function filter(e){
    const listChidren = list.childNodes;
    
    listChidren.forEach( (toDo) => {
        switch(e.target.value){
            case 'all':
                toDo.style.display = 'flex';
                break;
            case 'completed':
                if(toDo.classList.contains('completed')){
                    toDo.style.display = 'flex';
                }else{
                    toDo.style.display = 'none';
                }
                break;
            case 'uncompleted':
                if(!toDo.classList.contains('uncompleted')){
                    toDo.style.display = 'flex';
                }else{
                    toDo.style.display = 'none';
                }
                break;
        }
    } )
}