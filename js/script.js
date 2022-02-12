btnCount.addEventListener('click', count);
btnReset.onclick = reset;
price.oninput = checkInput;
cash.oninput = checkInput;




function count() {
    let cid = makeArrayFromCiD();

    console.log(
        checkCashRegister(price.value, cash.value, cid)
    );

    // switch (result.status) {
    //     case 'OPEN':
    //         fillTable(result.change);
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
}