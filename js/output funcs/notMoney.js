export default function notMoney() {
    console.log('not money');
    // if (table2.style.display !== 'none') {
    table2.style.display = 'none';
    let str = "<h2>There is No Change</h2>"
    let notCh = document.createElement('div');
    notCh.innerHTML = str;
    notCh.style.display = 'block'
    notCh.style.position = 'relative'
    notCh.style.top = '25vh'
    notCh.style.background = 'red'
    classChange.append(notCh)
    // }
}