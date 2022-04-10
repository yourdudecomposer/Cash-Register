const btnCount = document.querySelector('button:nth-child(1)'),
    price = document.querySelector('#price'),
    cash = document.querySelector('#cash'),
    cashIn = document.querySelectorAll('.cid input'),
    btnReset = document.querySelector('button:nth-child(2)'),
    table2 = document.querySelector('.change table:nth-child(2)'),
    classChange = document.querySelector('.change'),
    changeOut = document.querySelectorAll('.change td:nth-child(2)'),
    body = document.querySelector('body')

export {
    btnCount,
    price,
    cash,
    cashIn,
    btnReset,
    table2,
    classChange,
    changeOut,
    body
}