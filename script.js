const openFormBtn = document.getElementById('openForm');
const closeFormBtn = document.getElementById('closePop');
const popUp = document.getElementById('popUp');
const task = document.getElementById('task');
const redo = document.getElementById('redo');
const taskTitle = document.getElementById('taskTitle');
const taskDescrip = document.getElementById('taskDesc');
const taskPriority = document.getElementById('taskPriority');
const submitBtn = document.getElementById('submitBtn');
const tasksDiv = document.getElementById('tasksDiv');

const typeOfTask = document.getElementById('typeOfTask');
const descInput = document.getElementById('descInput');
const priority = document.getElementById('priority');

openFormBtn.addEventListener('click', ()=>{
    popUp.style.display = 'flex';
})

closeFormBtn.addEventListener('click', ()=>{
    popUp.style.display = 'none';
})

task.addEventListener('click', ()=>{
    taskTitle.style.textDecoration = 'red line-through';
    taskDescrip.style.textDecoration = 'red line-through';
    taskPriority.style.textDecoration = 'red line-through';
})

task.addEventListener('dblclick', ()=>{
    task.style.display = 'none';
})

submitBtn.addEventListener('click', ()=>{
    const appTask = document.createElement('div');
    const type = document.createElement('h1');
    const desc = document.createElement('h2');
    const prior = document.createElement('h2');
    
    appTask.className = 'task';

    type.textContent = typeOfTask.value;
    desc.textContent = descInput.value;
    prior.textContent = priority.value;

    type.style.textDecoration = 'underline';

    if(priority.value === 'Low'){
        appTask.style.backgroundColor = 'rgb(3, 252, 7)';
    } else if (priority.value === 'Medium'){
        appTask.style.backgroundColor = 'rgb(244, 247, 17)';
    } else if (priority.value === 'High'){
        appTask.style.backgroundColor = 'rgb(252, 84, 255)';
    }

    if(typeOfTask.value ==='Homework' || typeOfTask.value ==='Study'){
        type.style.backgroundColor = 'rgba(0, 47, 255, 0.50)';
        type.style.textShadow = '1px 1px 1px black';
    } else if(typeOfTask.value ==='Grocery' || typeOfTask.value ==='Gift'){
        type.style.backgroundColor = 'rgba(255, 81, 0, 0.50)';
        type.style.textShadow = '1px 1px 1px black';
    } else if(typeOfTask.value ==='Birthday' || typeOfTask.value ==='Work'){
        type.style.backgroundColor = 'rgba(221, 40, 22, 0.50)';
        type.style.textShadow = '1px 1px 1px black';
    } else if (typeOfTask.value ==='Other'){
        type.style.backgroundColor = 'rgba(22, 179, 221, 0.50)';
        type.style.textShadow = '1px 1px 1px black';
    }

    appTask.addEventListener('click', ()=>{
        appTask.style.textDecoration = 'red line-through';
    })

    appTask.addEventListener('dblclick', ()=>{
        appTask.style.display = 'none';
    })
    if(descInput.value === ''){
        alert('Please enter a descripton')
    } else{
    appTask.style.display = 'flex';

    appTask.appendChild(type);
    appTask.appendChild(desc);
    appTask.appendChild(prior);

    tasksDiv.appendChild(appTask);
    }
})

