
import { cashIn, table2 } from "./set id and get const/constans.js";
import checkInput from "./input funcs/checkInput.js";

export default function reset() {
    for (let i = 0; i < cashIn.length; i++) {
        cashIn[i].value = '';
    }
    price.value = '';
    cash.value = '';
    checkInput()
    table2.style.display = 'table';
    if (typeof notCh !== 'undefined') console.log(1232132);
}