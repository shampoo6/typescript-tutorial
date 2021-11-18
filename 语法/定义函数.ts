// 通常函数
// 包含参数列表和返回值的定义
type MyFn = (a: string | number, b: string | number) => number

function sub(a: string | number, b: string | number): number {
    return Number(a) - Number(b)
}

function exec(mf: MyFn): void {
    console.log(mf(1, 2))
}

exec(sub)

// 构造函数

type CarConst = { new(name: string, price: number) }

class Car {
    public name: string
    public price: number
    constructor(name: string, price: number) {
        this.name = name
        this.price = price
    }
}

function fn(c: CarConst) {
    console.log(new c('车', 11111));
}

fn(Car)


// 泛型函数
// 当函数内的部分内容的类型由函数参数提供，此类函数就是泛型函数
function printAll<CP>(arr: CP[]) {
    arr.forEach((el: CP) => {
        console.log(el.toString())
    })
}

printAll([{ name: '张三', toString() { return '我是' + this.name } }, { name: '李四', toString() { return '你好' + this.name } }])

// 泛型约束
type CanSize = { size: number }
function compare<Type extends CanSize>(a: Type, b: Type) {
    return a.size > b.size
}
compare({ size: 1 }, { size: 2 })

// 手动指定泛型类型
function forEach<Type>(a: Type[], b: Type[]) {
    a.forEach(el => { console.log(el) })
    b.forEach(el => { console.log(el) })
}
// 若调用时，参数类型不同则会报错
// forEach([1,2,3], ['hello', 'world'])
// 此时可以指定泛型类型
forEach<number | string>([1, 2, 3], ['hello', 'world'])


// 可选参数
function pickableParams(msg?: string) {
    console.log(msg ? msg : 'default');
}


// 函数重载
// 函数名相同，参数列表和返回值不同的函数称为函数的重载
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