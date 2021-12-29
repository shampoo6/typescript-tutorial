// ts 中可以使用 EcmaScript 的模块语法，详见 module1.ts
// ts 中也已用关键字 module 声明模块，详见 module2.ts

import { msg, sayOk } from './module1'
import m1 from './module1'
import m2 from './module2'
import {N2} from './module2'

console.log(msg);
sayOk()
console.log(m1);
console.log(m2);
console.log(m2.increaseCount());
console.log(N2);


// 从语法上看 module 关键字和 namespace 关键字声明的模块和命名空间没有区别，编译出来的结果也没有区别
// 但是 es 模块与上述两者是不同的
// 所以这里总结了两者的区别：https://www.typescriptlang.org/docs/handbook/namespaces-and-modules.html

// 总结：
// 关键字 module 和 namespace 声明的模块和命名空间本质是个对象，可以用来组织全局作用域的数据结构
// 在写 ts 时更推荐使用 es 模块，因为他具有独立作用域，不会造成全局污染
