btnCount.addEventListener('click', count);

function count() {
    let cid = makeArrayFromCiD();
    let result = checkCashRegister(price.value, cash.value, cid);
    // switch (result.status) {
    //     case 'OPEN':
    //         console.log(result.change);
    //         //fillTable(result.change);
    //         break;
    //     case 'CLOSED':
    //         fillTableAndClose(result.change);
    //         break;
    //     case 'INSUFFICIENT_FUNDS':
    //         notMoney();
    //         break;
    //     default: console.log('something wrong in switch case');
    //         break;
    // }
    console.log('result');
    console.log(result);
}