const btnCount = document.querySelector('button:nth-child(1)'),
    price = document.querySelector('#price'),
    cash = document.querySelector('#cash'),
    cashIn = document.querySelectorAll('.cid input'),
    btnReset = document.querySelector('button:nth-child(2)'),
    table2 = document.querySelector('.change table:nth-child(2)'),
    classChange = document.querySelector('.change'),
    body = document.querySelector('body'),
    changeOut = document.querySelectorAll('.change td:nth-child(2)');


for (let i = 0; i < changeOut.length; i++) {
    let idS = ["PENNY", "NICKEL", "DIME", "QUARTER", "ONE", "FIVE", "TEN", "TWENTY", "ONE HUNDRED"];
    changeOut[i].id = idS[i]
}




function makeArrayFromCiD() {
    let cid = [["PENNY"], ["NICKEL"], ["DIME"], ["QUARTER"], ["ONE"], ["FIVE"], ["TEN"], ["TWENTY"], ["ONE HUNDRED"]];
    cid.map((el, i) => {
        if (cashIn[i].value === '') {
            el[1] = 0;
        } else el[1] = parseFloat(cashIn[i].value)
    });
    return cid;
}
function checkCashRegister(price, cash, cid) {

    function makeObj(arr, ch, outArr) {
        let tArr = outArr;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i][1] !== 0) {
                st = "OPEN";
                outArr = tArr;
                break;
            } else {
                st = "CLOSED"
                outArr = cid;
            }
        }
        if (ch != 0) {
            st = "INSUFFICIENT_FUNDS";
            outArr = []
        }
        let obj = {};
        obj.status = st;
        obj.change = outArr;
        return obj
    }

    function round(x) {
        return Number.parseFloat(x).toFixed(2);
    }

    let ch = cash - price,
        arr = [[100, 0, ""], [20, 0, ""], [10, 0, ""], [5, 0, ""], [1, 0, ""], [0.25, 0, ""], [0.1, 0, ""], [0.05, 0, ""], [0.01, 0, ""]],
        inArr = [],
        outArr = [];


    for (let i = 0; i < arr.length; i++) {
        arr[i][1] = cid[arr.length - i - 1][1]
        arr[i][2] = cid[arr.length - i - 1][0]
    }

    for (let i = 0; i < arr.length; i++) {
        let name = arr[i][2],
            rest = arr[i][1],
            numName = arr[i][0];
        ch = round(ch);
        if (ch >= numName) {
            if (rest >= ch) {
                let give = Math.floor(ch / numName) * numName;

                inArr[0] = name;
                inArr[1] = give;
                outArr.push(inArr);
                inArr = [...inArr];
                rest -= give;
                arr[i][1] = rest;
                ch -= give;
            }
            else if (rest > 0 && rest - ch < 0) {

                let give = Math.floor(rest / numName) * numName;
                inArr[0] = name;
                inArr[1] = give;
                outArr.push(inArr);
                inArr = [...inArr]
                ch -= give;
                rest -= give
                arr[i][1] = rest;
            }
        }
    }
    let st = "";

    return makeObj(arr, ch, outArr);
}
function reset() {
    for (let i = 0; i < cashIn.length; i++) {
        cashIn[i].value = '';
    }
    price.value = '';
    cash.value = '';
    checkInput()
    table2.style.display = 'table';
    if (notCh) console.log(1232132);
}
function checkInput() {
    if (price.value !== '' && cash.value !== '') {
        btnCount.style.pointerEvents = 'initial';
        btnCount.style.color = '#000';
    } else {
        btnCount.style.pointerEvents = 'none';
        btnCount.style.color = '#ccc';
    }
}






function fillTable(a) {
console.log('fill');
    table2.style.display = 'table';
    for (let i = 0; i < changeOut.length; i++) {
        for (let k = 0; k < a.length; k++) {
            if (changeOut[i].id === a[k][0] && a[k][1] !== 0) {
                changeOut[i].innerHTML = a[k][1];
            }
        }
    }
}



function fillTableAndClose(a) {
    console.log('closed');
    fillTable(a);
    let closed = document.createElement('img');
    closed.classList.add('closed');
    closed.style.position = 'absolute'
    closed.src = '/img/closed.png';
    body.append(closed)
}

function notMoney() {
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

