import {price, cash, btnCount, btnReset } from './set id and get const/constans.js'

import idForCharge from './set id and get const/idForCharge.js';
import checkInput from './checkInput.js';

window.addEventListener('load', idForCharge);
window.addEventListener('load', checkInput);

import fillInput from './second funcs/initialState.js'
fillInput()

import count from './output funcs/count.js';
import reset from './reset.js';

price.addEventListener('input', checkInput);
cash.addEventListener('input', checkInput);

btnCount.addEventListener('click', count);

btnReset.addEventListener('click', reset);

