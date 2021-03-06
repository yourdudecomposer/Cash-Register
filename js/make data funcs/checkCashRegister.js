export default function checkCashRegister(price, cash, cid) {

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