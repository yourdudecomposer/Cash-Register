import { price, btnCount, cash } from '../constans.js';

export default function checkInput() {
    if (price.value && cash.value) {
        btnCount.style.pointerEvents = 'initial';
        btnCount.style.color = '#000';
        btnCount.style.background = '#04859D'
    } else {
        btnCount.style.pointerEvents = 'none';
        btnCount.style.color = '#aaa';
        btnCount.style.background = '#666';

    }
} 