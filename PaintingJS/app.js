const canvas = document.getElementById("jsCanvas")
const ctx = canvas.getContext("2d")

//캔버스에 처음 쓰는
ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;


let painting = false;


//캔버스 내 마우스 움직임
function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
}

// 캔버스내에 마우스를 클릭
function onMouseDown(event) {
  painting = true;
}

function stopPainting(event){
    painting = false;
}

/*
캔버스내에 마우스를 놓으면. 이 함수는 stopPainting으로 바꾸지 않은 건
나중에 실제로 그리는 라인이 필요해서 납두는거임. 반면 mouseLeave는 그런거 없으니 if문에서
바꾼거야! JS-1 8분쯤 참조
*/

function onMouseUp(event){
    stopPainting();
}



if(canvas){
    canvas.addEventListener('mousemove',onMouseMove)
    canvas.addEventListener('mousedown',onMouseDown)
    canvas.addEventListener('mouseup',onMouseUp)
    canvas.addEventListener("mouseleave",stopPainting)
}











/*
clientX,Y 스크린 크기
offsetX,Y 캔버스 내 좌표 크기

2.마우스 이벤트
- `mousemove` : 마우스가 엘리먼트에서 움직일때
- `mousedown` : 마우스를 누르는 그 순간! (click과는 다르게 press하는 순간입니다)
- `mouseup` : down과 반대로 마우스를 누르고 있다가 손가락을 떼는 그 순간!

[출처] : (https://itpangpang.xyz/297 [ITPangPang])

3.canvas
html요소인데 context(요소 안에서 우리가 픽셀에 접근할 수 있는 방법) 가짐 <br>
const ctx = canvas.getContext('2d') 여기서 getContext 처럼 다양한 거 가
 */