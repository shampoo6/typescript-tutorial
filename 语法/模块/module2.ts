// import type {Cat, ITapable} from "./module1.js";
import {PI, type Cat, type ITapable} from "./module1";

let c: Cat = {name: 'maomao', age: 1, color: 'orange'}
let t: ITapable = {
    tap(ev) {
        console.log(ev)
    }
}

console.log(c)
console.log(t)
console.log(PI)
