import { changeOut } from "./constans.js";

export default function idForCharge() {
    
    for (let i = 0; i < changeOut.length; i++) {
        let idS = ["PENNY", "NICKEL", "DIME", "QUARTER", "ONE", "FIVE", "TEN", "TWENTY", "ONE HUNDRED"];
        changeOut[i].id = idS[i]
    }
}