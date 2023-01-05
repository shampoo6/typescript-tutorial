// 知识点
// 什么是函数的签名
// 定义函数类型
// 构造函数
// 泛型函数 -> 详见《泛型》
// 可选参数
// 函数重载
// 定义 rest parameters





// 什么是函数的签名
// 函数的参数列表 + 返回值叫函数签名
// 签名: 这个概念源自于java，ts具备类型定义的能力，所以也有签名


// 定义函数类型
// 包含参数列表和返回值的定义
// 定义函数类型其实就是定义函数的签名部分的类型
type MyFn = (a: string | number, b: string | number) => number

function sub(a: string | number, b: string | number): number {
    return Number(a) - Number(b)
}

// void 代表没有返回值 
function exec(mf: MyFn): void {
    console.log(mf(1, 2))
}

exec(sub)

// 若类型为 Function 则代表任意签名的函数
const myFunction: Function = () => { }

// 调用签名
// 函数的本质是对象，所以可以用定义对象类型的方式定义函数，但是要加上一个调用签名，例如
type testCallSignature = {
    // 此处依然可以定义函数的其他属性
    something: string,
    // 这一句描述了这个类型是一个函数，且签名如下
    (x: number, y: number): number
}

function testCallSignature(fn: testCallSignature) {
    console.log(fn.something);
    console.log(fn(1, 2));
}

let sfn: any = (a, b) => a + b
sfn.something = 'this is a function'

testCallSignature(sfn)







// 构造函数
// 使用 new() 来定义一个构造函数
// class类的构造函数若满足该定义 则将通过类型检测
type CarConst = { new(name: string, price: number) }

class Car {
    public name: string
    public price: number
    constructor(name: string, price: number) {
        this.name = name
        this.price = price
    }
}

// 参数 c 只要有一个符合 CarConst 描述的构造函数，则该class类通过类型检测
function fn(c: CarConst) {
    console.log(new c('车', 11111));
}

fn(Car)







// 泛型函数
// 当函数内的部分内容的类型由函数参数提供，此类函数就是泛型函数
// function printAll<CP>(arr: CP[]) {
//     arr.forEach((el: CP) => {
//         console.log(el.toString())
//     })
// }

// printAll([{ name: '张三', toString() { return '我是' + this.name } }, { name: '李四', toString() { return '你好' + this.name } }])

// 泛型约束
// type CanSize = { size: number }
// function compare<Type extends CanSize>(a: Type, b: Type) {
//     return a.size > b.size
// }
// compare({ size: 1 }, { size: 2 })

// 手动指定泛型类型
// function forEach<Type>(a: Type[], b: Type[]) {
//     a.forEach(el => { console.log(el) })
//     b.forEach(el => { console.log(el) })
// }
// 若调用时，参数类型不同则会报错
// forEach([1,2,3], ['hello', 'world'])
// 此时可以指定泛型类型
// forEach<number | string>([1, 2, 3], ['hello', 'world'])













// 可选参数
function pickableParams(msg?: string) {
    console.log(msg ? msg : 'default');
}
// 可选参数应该放在其他参数的后面
// 例如以下函数就是错误的
// function pickableParams(a?: string, b: boolean){
//     console.log(a);
//     console.log(b);
// }


// 函数重载 (override)
// 函数名相同，参数列表和返回值不同的函数称为函数的重载
// 参数列表 + 返回值 称为签名
// 所以函数重载就是函数名相同，但签名不同的函数
function getTime(timestamp: number): Date
// 第二个getTime函数重载了第一个函数
function getTime(year: number, month: number, day: number): number
// 第三个getTime函数是具体的函数实现
function getTime(tOrY: number, m?: number, d?: number): Date | number {
    if (m === undefined) {
        return new Date(tOrY)
    }
    return new Date(tOrY, m, d).getTime()
}
console.log(getTime(1637197166122));
console.log(getTime(1997, 6, 1));


// 定义 rest parameters
// c 是一个 rest parameters 可以传入任意个数的参数
function rest(a: string, b: number, ...c: any[]) {
    console.log(a);
    console.log(b);
    console.log(c);
}