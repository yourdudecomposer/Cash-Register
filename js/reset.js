
import { price, cash, cashIn, table2 } from "./set id and get const/constans.js";
import checkInput from "./checkInput.js";

export default function reset() {
    for (let i = 0; i < cashIn.length; i++) {
        cashIn[i].value = '';
    }
    price.value = '';
    cash.value = '';
    checkInput()
    table2.style.display = 'table';
    if (document.querySelector('.change div')) {
        let notCh = document.querySelector('.change div');
        notCh.parentNode.removeChild(notCh)
    }
    if (document.querySelector('.closed')) {
        let cl = document.querySelector('.closed');
        cl.parentNode.removeChild(cl)
    }
}