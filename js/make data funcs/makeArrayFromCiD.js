export default function makeArrayFromCiD() {
    let cid = [["PENNY"], ["NICKEL"], ["DIME"], ["QUARTER"], ["ONE"], ["FIVE"], ["TEN"], ["TWENTY"], ["ONE HUNDRED"]];
    cid.map((el, i) => {
        if (cashIn[i].value === '') {
            el[1] = 0;
        } else el[1] = parseFloat(cashIn[i].value)
    });
    return cid;
}