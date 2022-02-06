btnCount.addEventListener('click', count);

function count() {
    let cid = makeArrayFromCid();
    let result = checkCashRegister(price, cash, cid);
    switch (result.status) {
        case 'OPEN':
            fillTable(result.change);
            break;
        case 'CLOSED':
            fillTableAndClose(result.change);
            break;
        case 'INSUFFICIENT_FUNDS':
            notMoney();
            break;
        default: console.log('something wrong in switch case');
            break;
    }
    console.log('result');
    console.log(result);
}