export default function fillTable(a) {
    console.log('fill');
    table2.style.display = 'table';
    for (let i = 0; i < changeOut.length; i++) {
        for (let k = 0; k < a.length; k++) {
            if (changeOut[i].id === a[k][0] && a[k][1] !== 0) {
                changeOut[i].innerHTML = a[k][1];
            }
        }
    }
}