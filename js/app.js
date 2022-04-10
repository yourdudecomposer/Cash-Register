import idForCharge from './set id and get const/idForCharge.js';
import checkInput from './input funcs/checkInput.js';

import count from './output funcs/count.js';
import reset from './reset.js';

import { btnCount, btnReset } from './set id and get const/constans.js'




window.addEventListener('load', idForCharge);
window.addEventListener('load', checkInput);

price.addEventListener('input', checkInput);
cash.addEventListener('input', checkInput);

btnCount.addEventListener('click', count);
btnReset.addEventListener('click', reset);

