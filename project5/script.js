const addTask=document.getElementById('add-task');
const taskContainer =document.getElementById('add-task-container');
const  inputTask =document.getElementById('input-task');



// event listener for add button


addTask.addEventListener('click',function(){
    let task =document.createElement('div');
    task.classList.add('task');
    let li=document.createElement('li');
    li.innerText=`${inputTask.value}`;
    task.appendChild(li);
    


    let CheckButton=document.createElement("button");
    CheckButton.innerHTML=`<i class="fa-solid fa-check"></i>`;
    CheckButton.classList.add('checkTask');
    task.appendChild(CheckButton)

    let deleteButton=document.createElement("button");
    deleteButton.innerHTML=`<i class="fa-solid fa-trash-can"></i>`;
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton)

    if(inputTask.value ===""){
        alert('please enter a task')
    }else{
        taskContainer.appendChild(task);
    }
    inputTask.value="";


    CheckButton.addEventListener('click',function(){
        CheckButton.parentElement.style.textDecoration="line-through";
    });
    deleteButton.addEventListener('click',function(e){

        let target =e.target;
        target.parentElement.remove();

    });
})
