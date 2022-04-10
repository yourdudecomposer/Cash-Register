import { table2 } from "../set id and get const/constans.js";
import { classChange } from "../set id and get const/constans.js";

export default function notMoney() {
    console.log('not money');
    table2.style.display = 'none';
    if (!document.querySelector('.change div')) {
        let str = "<h2>There is No Change</h2>"
        let notCh = document.createElement('div');
        notCh.innerHTML = str;
        notCh.style.display = 'block'
        notCh.style.position = 'relative'
        notCh.style.top = '25vh'
        notCh.style.background = 'red'
        classChange.append(notCh)
    }
}