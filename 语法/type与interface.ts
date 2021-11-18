// type 和 interface 是两种定义类型的手段 大多情况下两者是可以互换的 但interface具有更方便的扩展性

// 注意：无论 type 还是 interface 他们都是抽象的，并不代表某个具体的 class

// 例如以下例子，定义一个汽车类型

// 使用 type 定义
type TCar = { name: string }
type TCar2 = TCar & { price: number } // 扩展 TCar 的属性

// 定义变量来检测
let car: TCar = { name: '小轿车' }
let car2: TCar2 = { name: '客车', price: 1111 }

// 使用 interface 定义
// 有点儿类似定义 class
interface ICar { name: string }
// 使用 extends 进行扩展 类似继承
interface ICar2 extends ICar { price: number }
// 也能继续给已有的接口追加新属性
interface ICar { wheelCount: number }
let iCar: ICar = { name: '小轿车', wheelCount: 4 }
let iCar2: ICar2 = { name: '客车', wheelCount: 4, price: 1111 }