var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// c.fillRect(Math.random() * window.innerWidth, Math.random() * window.innerHeight, 100, 100);




//

// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 50);
// c.lineTo(340, 350);
// c.strokeStyle = "black";
// c.stroke();


//


console.log(canvas);
// for (var j = 0; j < 20; j++) {

//     c.strokeStyle = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";

//     c.beginPath();
//     c.arc(Math.random() * innerWidth, Math.random() * innerHeight, 30, 0, 6.28, false);
//     // c.strokeStyle = "red";
//     c.stroke();


// }

// c.beginPath();
// c.arc(300, 350, 30, 0, 6.28, false);
// c.strokeStyle = "red";
// c.stroke();




function Circle(x, y, dx, dy, radius) {

    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, 6.28, false);
        c.strokeStyle = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";

        c.stroke();
    }

    this.update = function () {
        if ((this.x > innerWidth - this.radius) || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        this.x = this.x + this.dx;
        if ((this.y > innerHeight - this.radius) || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.y = this.y + this.dy;
        this.draw();
    };
}

var cirArr = [];
for (var i = 0; i < 5; i++) {
    var radius = 30 + 20 * Math.random()
    var x = (innerWidth - (2 * radius)) * Math.random() + radius;
    var dx = 5 * (Math.random() - 0.5);
    var y = (innerHeight - (2 * radius)) * Math.random() + 2 + radius;
    var dy = 5 * (Math.random() - 0.5);

    cirArr.push(new Circle(x, y, dx, dy, radius));
    // var circle = new Circle(200, 200, 5 + i, 5 - i, 30);
}
console.log(cirArr);

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (var p = 0; p < cirArr.length; p++) {
        cirArr[p].update();
    }
    // p++;
    // c.beginPath();
    // c.arc(x, y, 30, 0, 6.28, false);
    // c.strokeStyle = "red";
    // c.stroke();

    // console.log('asd');
}

animate();
