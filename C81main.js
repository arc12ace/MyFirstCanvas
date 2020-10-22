var canvas=document.getElementById("canvas")
ctx=canvas.getContext("2d")

var color="yellow"
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=3;
ctx.arc(450, 300, 50, 0, 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",md)

function md(e){
    mouse_x=e.clientX-canvas.offsetLeft
    mouse_y=e.clientY-canvas.offsetTop

    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=3;
    ctx.arc(mouse_x, mouse_y, 40, 0, 2*Math.PI);
    ctx.stroke();

}


