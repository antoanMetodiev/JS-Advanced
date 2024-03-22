function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    let result = document.getElementById('result');
    gradient.addEventListener('mousemove', onClick);

    function onClick(event) {
        console.log(event);
        result.textContent = Math.floor(Number(event.offsetX) / 3) + '%';
    }
}