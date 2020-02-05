loadEvents();

function loadEvents(){
    document.querySelector('form').addEventListener('submit',submit);
    document.getElementById('clear').addEventListener('click',clearList)
    document.querySelector('ul').addEventListener('click',deleteOrTick);
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
    li.innerHTML = `<span class="delete">×</span><label>
        <input type="checkbox" class="check"><span>${task}</span></label>`;
    ul.appendChild(li);
    document.querySelector('.tasksBoard').style.display = 'block';
}

function clearList(e){
    let ul=document.querySelector('ul').innerHTML='';
}

function deleteOrTick(e){
    if(e.target.className == 'delete') {
        deleteTask(e);
    } else if(e.target.className == 'check') {
        tickTask(e);
    } else {
        etcTask(e);
    }
}

//만약에 e(ul태그가 클릭 됐을때)가 타겟팅된 클래스네임이 delete라면 델리트테스크로 가랏
//아니면 틱테스크로~이벤트 추가할때 ul태그에서 체크할걸 x아니면 체크박스뿐이라는걸 기억하셈

function deleteTask(e){
    let remove = e.target.parentNode;
    let parentNode = remove.parentNode;
    parentNode.removeChild(remove);
}
//deleteTask함수는 {
// e(=deletetask)함수의 타겟팅된 부모는 remove 변수에 들감
// paranode=remove의 부모노드 들가라}


function tickTask(e){
    const task = e.target.nextSibling;
    if(e.target.checked){
        task.style.textDecoration = "line-through";
        task.style.color = "#a9210b";
    }else {
        task.style.textDecoration = "none";
        task.style.color = "#000000";
    }
}

//task변수엔 ticktask의 타겟팅된 옆에 위치한애
//만약 틱테스크 옆에 타겟팅된 애가 체크 되면~~해라
function etcTask(e){
    const etc = e.target;
    if(etc.checked){
        etc.style.textDecoration = "line-through";
        etc.style.color = "#a9210b";
    }else {
        etc.style.textDecoration = "none";
        etc.style.color = "#000000";
    }
}