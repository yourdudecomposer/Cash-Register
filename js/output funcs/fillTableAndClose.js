import fillTable from "./fillTable.js";
import { body } from "../set id and get const/constans.js";

export default function fillTableAndClose(a) {
    fillTable(a);
    let closed = document.createElement('img');
    closed.classList.add('closed');
    closed.style.position = 'absolute'
    closed.src = 'img/closed.png';
    body.append(closed)
}

