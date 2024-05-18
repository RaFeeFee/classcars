function moveRight(){
    for(let i = 0; i < 10; i++){
        document.getElementById('carGroup').scrollLeft += 50;
    }
}
function moveLeft(){
    for(let i = 0; i < 10; i++){
        document.getElementById('carGroup').scrollLeft -= 50;
    }
}