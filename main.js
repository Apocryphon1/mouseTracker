function init() {
    const anchor = document.getElementById('rick');
    const rekt = anchor.getBoundingClientRect();
    const anchorX = rekt.left + rekt.width / 2;
    const anchorY = rekt.top + rekt.height / 2;
    const eyes = document.querySelectorAll('.eye');

    document.addEventListener('mousemove', function (e) {

        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const angleDegree = angle(mouseX, mouseY, anchorX, anchorY);

        console.log(angleDegree);
        eyes.forEach(function (eye) {
            eye.style.transform = `rotate(${90 + angleDegree}deg)`;
            anchor.style.filter = `hue-rotate(${90 + angleDegree}deg)`;
        });

    })
}

function angle(cx, cy, ex, ey) {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx); // range (-PI, PI)
    const deg = rad * 180 / Math.PI;
    return deg;
}

window.onload = init;