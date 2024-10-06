const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let obj = {
    x:0,
    y:0,
    size:20,
    speed:10,
    exists:false,
};
canvas.onclick = function(event){
    if (obj.exists) return;
    obj.x = event.offsetX - obj.size/2;
    obj.y = event.offsetY - obj.size/2;
    obj.exists = true;
    draw();
}
document.onkeydown = function(event){
    if (!obj.exists) return;
if (event.key === "w")obj.y -= obj.speed;
    if (event.key === "s")obj.y += obj.speed;
if (event.key === "a")obj.x -= obj.speed;
if (event.key === "d")obj.x += obj.speed;
obj.x = Math.max(0,Math.min(obj.x, canvas.width - obj.size));
obj.y = Math.max(0,Math.min(obj.y, canvas.height -obj.size));
draw();

};
function draw(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    if (obj.exists) {
    ctx.fillStyle = "blue";
    ctx.fillRect(obj.x, obj.y, obj.size, obj.size);}
}