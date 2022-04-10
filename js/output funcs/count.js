export default function count() {
    console.log(432)
    let cid = makeArrayFromCiD();
console.log(cid);
    let result = checkCashRegister(price.value, cash.value, cid)

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
}