
loadEvents();

//현재날짜와 시간을 구하는 함수.
function getNowDate() {
    return new Date().toLocaleString();
}



function loadEvents(){
    document.querySelector('form').addEventListener('submit',submit);
    document.getElementById('clear').addEventListener('click',clearList)


    let now = getNowDate()


    let task1 = {title: '샤워하고 향수', date: now}
    let task2 = {title: '선물 전달', date: now}
    let task3 = {title: '이지라이더 감상', date:now}

    let array1 =[task1,task2,task3]
    for(const task of array1){
        addTask(task)
    }
}

function submit(e){
    e.preventDefault();
    let input = document.querySelector('input');

    if(input.value != '') {

        let now = getNowDate()
        let taskNew = {title:input.value,date:now}
        addTask(taskNew);
        input.value = '';
    }
}

function addTask(task){

    console.log(task)

    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = `
        <span class="delete">×</span>
        <span class="task-date">${task.date}</span>
        <label>
            <input type="checkbox" class="check">
            <span class="task-title">${task.title}</span>
        </label>
        `;


    li.addEventListener('click',deleteOrTick);

    ul.appendChild(li);
}

function clearList(e){
    let ul=document.querySelector('ul').innerHTML='';
}

function deleteOrTick(e){

    if(e.target.className == 'delete') {
        deleteTask(e);
    } else {
        tickTask(e);
    }
}


function deleteTask(e){
    console.log(e.target)
    console.log(e.currentTarget)
    let parentNode = e.currentTarget.parentNode;
    parentNode.removeChild(e.currentTarget);
}


function tickTask(e){

    if(e.target.checked) {
        e.currentTarget.className = 'item-checked'
    }else {
        e.currentTarget.className = null;
    }

}

