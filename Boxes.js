document.addEventListener('DOMContentLoaded', () => {
    const boxes = [
        { element: document.getElementById('box1'), x: 0, y: 0 },
        { element: document.getElementById('box2'), x: 100, y: 100 },
        { element: document.getElementById('box3'), x: 200, y: 200 }
    ];
    const step = 10;
    let activeBox = boxes[0];

    function moveBox(box, dx, dy) {
        box.x = Math.min(Math.max(box.x + dx, 0), 350);
        box.y = Math.min(Math.max(box.y + dy, 0), 350);
        box.element.style.transform = `translate(${box.x}px, ${box.y}px)`;
    }

    document.addEventListener('keydown', (e) => {
        switch(e.key) {
            case 'ArrowUp':
                moveBox(activeBox, 0, -step);
                break;
            case 'ArrowDown':
                moveBox(activeBox, 0, step);
                break;
            case 'ArrowLeft':
                moveBox(activeBox, -step, 0);
                break;
            case 'ArrowRight':
                moveBox(activeBox, step, 0);
                break;
            case 'p':
            case 'P':
                activeBox = boxes[0];
                break;
            case 'g':
            case 'G':
                activeBox = boxes[1];
                break;
            case 'b':
            case 'B':
                activeBox = boxes[2];
                break;
        }
    });

    // Initial positioning of boxes
    boxes.forEach(box => {
        box.element.style.transform = `translate(${box.x}px, ${box.y}px)`;
    });
});
