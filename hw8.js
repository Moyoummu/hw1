function dot(x, y){
    let point = document.querySelector('#first');
    point.setAttribute('d', 'M' + x + ' ' + y + ' H 290 V 390 H ' + x + ' Z')
}

function draw(x, y, width, height, fill){
    let canvas = document.querySelector('#second')
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = fill;
    ctx.fillRect(x, y, width, height);
}