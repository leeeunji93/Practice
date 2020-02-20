const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document. getElementById("jsSave ")

const INITAL_COLOR = "#2c2c2c"
const CANVAS_SIZE =700;
//css 크기말고 픽셀을 다룰 수 있는 엘리먼트로 만드는거니까 크기 지정 필
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;
//캔버스 색상은 흰색으로 디폴트 처
ctx.fillStyle = "white";
ctx.fillRect(0,0,CANVAS_SIZE,CANVAS_SIZE);

//캔버스에 처음 쓰는
ctx.strokeStyle = INITAL_COLOR;
ctx.fillStyle = INITAL_COLOR;
ctx.lineWidth = 2.5;
let painting = false;
let filling = false;

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    //패스 그리다가 클릭하면 패스의 끝나는지점으로 선택된 거임 그래서 클릭하고 움직이면 작동ㄴ
    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        //현재 마지막 점을 특정 좌표와 직선으로 연결(위에 패쓰랑 연결된다)
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    console.log(color);
    //스토르크 스타일이 타겟에 있는 색상이 되는거
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function handleRangeChange(event) {
    const size = event.target.value;
    ctx.lineWidth = size;
}

function handleCanvasClick() {
    if (filling) {
        ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    }
}

//= value값 === value data type값 비교
function handleModeClick(){
    if (filling === true) {
        filling = false;
        mode.innerText ="Fill";
    } else{
        filling = true;
        mode.innerText = "Paint";
    }
}

function handleCanvasClick(){
ctx.fillRect(0,0,CANVAS_SIZE,CANVAS_SIZE);
}

function handleSaveClick(){
    const image = canvas.toDataURL("image/jpeg");
    const link = document.createElement("a");
    link.href = image;
    //download는 anchor("a")태그의 attribute, image이름을 가져야
    link.download = "PaintJS[EXPORT]";
    link.click();
}


if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click",handleCanvasClick);
}

//color는 array 안에 있는 각각의 아이템들을 대표하는 것. 이름을 다르게 해도 노상관
Array.from(colors).forEach(color =>
    color.addEventListener("click", handleColorClick)
);



if (range){
    range.addEventListener("input",handleRangeChange);
}

if(mode){
    mode.addEventListener("click",handleModeClick)
}

if(saveBtn){
    saveBtn.addEventListener("click", handleSaveClick);
}

