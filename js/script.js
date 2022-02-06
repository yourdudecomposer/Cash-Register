btnCount.addEventListener('click', count);

function count(){
    let cid = makeArrayFromCid();
    let result = checkCashRegister(price, cash, cid);
console.log('result');
console.log(result);
}