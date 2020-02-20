loadEvents();

function loadEvents(){
    document.querySelector('form').addEventListener('submit',submit);
    document.getElementById('clear').addEventListener('click',clearList)
    addTask('기본으로 추가한 태스크 하나');
}

function submit(e){
    e.preventDefault();
    let input = document.querySelector('input');
    if(input.value != '')
        addTask(input.value);
    input.value = '';
}

function addTask(task){
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = `<span class='delete'>×</span>
    <label><input type="checkbox" class="check">
    <span>${task}</span></label>`;

    li.addEventListener('click',deleteOrTick);
    ul.appendChild(li);
}

function clearList(e){
    let ul=document.querySelector('ul').innerHTML='';
}

function deleteOrTick(e){

    if(e.target.className == "delete") {
        deleteTask(e);
    } else {
        tickTask(e);
    }
}

function deleteTask(e){

    console.log('이벤트의 타겟 : ', e.target)
    console.log('이벤트가 연결된 노드 : ', e.currentTarget)

    var a= e.currentTarget;
    a.remove();
}



function tickTask(e) {
    console.log('이벤트의 타겟 : ', e.target)
    console.log('이벤트 타겟의 체크드 : ', e.target.checked)
    console.log('이벤트가 연결된 노드 : ', e.currentTarget)

    if(e.target.checked){
        e.currentTarget.className = 'item-checked'
    } else{
        e.currentTarget.className = null;
    }
}




