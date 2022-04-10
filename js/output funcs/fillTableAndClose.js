export default function fillTableAndClose(a) {
    console.log('closed');
    fillTable(a);
    let closed = document.createElement('img');
    closed.classList.add('closed');
    closed.style.position = 'absolute'
    closed.src = '/img/closed.png';
    body.append(closed)
}t