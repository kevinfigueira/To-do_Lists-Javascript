// Select DOM

const input = document.querySelector('#input');
const button = document.querySelector('.btn_addTasks');
const tasks = document.querySelector('.taks_list');

// ================= EVENTS ================= //
button.addEventListener('click', addTask);
tasks.addEventListener('click', checkAndTrash);

// =============== FUNCTIONS =============== //

// =========== Function Add tasks =========== //
function addTask(){

    // ===== validation for empaty
    if(input.value === ''){
        alert('Please add a task');
        task = false;
    }

    const child = document.createElement('li');
    child.classList.add('child_list');
    tasks.appendChild(child);

    const task = document.createElement('input');
    task.classList.add('task');
    child.appendChild(task);
    
    const checkButton = document.createElement('button');
    checkButton.classList.add('check_btn');
    checkButton.innerHTML = '<i class="fas fa-check"></i>';
    child.appendChild(checkButton);

    const trashButton = document.createElement('button');
    trashButton.classList.add('trash_btn');
    trashButton.innerHTML = '<i class="far fa-trash-alt"></i>';
    child.appendChild(trashButton);

    task.value = input.value; 

    input.value = '';
    
}

// ========== Function Check and trash ========== //
function checkAndTrash(e){
    const clickEvent = e.target;
    const before = clickEvent.previousElementSibling;
    const parent = clickEvent.parentElement;
    
    console.log(clickEvent);

    if(clickEvent.classList[0] === 'check_btn'){
        before.classList.add('completed');
        before.setAttribute('disabled', true);
        before.nextElementSibling.style.backgroundColor = '#3CB371';
    }

    if(clickEvent.classList[0] === 'trash_btn'){
        parent.classList.add('fall');
        parent.addEventListener('transitionend', () => {
            parent.remove()
        })
    }
}