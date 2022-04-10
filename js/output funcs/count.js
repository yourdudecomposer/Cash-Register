import { cash, price } from "../set id and get const/constans.js";
import makeArrayFromCiD from "../make data funcs/makeArrayFromCiD.js";
import checkCashRegister from "../make data funcs/checkCashRegister.js";
import fillTable from "./fillTable.js";
import fillTableAndClose from "./fillTableAndClose.js";

export default function count() {
    let cid = makeArrayFromCiD();
    let result = checkCashRegister(price.value, cash.value, cid)

    console.log(result);

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