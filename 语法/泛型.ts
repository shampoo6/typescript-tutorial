// 知识点
// 什么是泛型
// 应用场景
// 声明带泛型的类型
// 各种集合的泛型
//      泛型数组
//      泛型map
//      泛型set
//      readonly 数组 map set
// 泛型函数
// 泛型约束
//      extends
//      extends keyof



// 什么是泛型
// 定义类型时，将另一个类型作为参数，则该参数类型是泛型

// 应用场景
// 类型定义时，某些可变的类型可以声明成泛型
// 最常用的泛型应用就是数据集合的泛型

// 声明带泛型的类型
type Container<T> = {
    list: T[],
    showType: (t: T) => void
}

function fn(c: Container<number>) {
    console.log(c.list);
    c.showType(123)
}

// 声明一个 Container 类型实例
let c: Container<boolean> = {
    list: [false, true],
    showType(t) {
        console.log(typeof t);
    }
}

console.log(c.list);
// 调用函数时，参数必须是指定的泛型类型
c.showType(false)




// 泛型数组
let arr: Array<string> = ['1', 'b', 'z']
// 泛型map
let map: Map<string, Object> = new Map([
    ['a', { a: 1 }],
    ['b', { b: 2 }],
    ['c', { c: 2 }],
])
// 泛型set
let set: Set<number> = new Set([2, 656, 687, 12, 90])




// readonly 数组 map set
let roArr: ReadonlyArray<string> = ['a', 'b', 'c']
let roMap: ReadonlyMap<string, string> = new Map([
    ['x', '1'],
    ['y', '2'],
    ['z', '3'],
])
let roSet: ReadonlySet<string> = new Set(['x', 'y', 'z'])
// ReadonlyArray 的简写如下:
let sroArr: readonly string[] = ['a', 'b', 'c']





// 泛型函数
// 给函数指定泛型，可以让参数或返回值的类型是泛型类型
function fn2<O, S>(a: O, b: S): S {
    return b
}

fn2<boolean, string>(true, 'ok')
// 泛型函数调用时可以不指定泛型
fn2('hello', 123)




// 泛型约束
class Point {
    x: number
    y: number
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}
// 泛型 P 通过 extends 被添加了一个约束
// 现在的 P 不代表任何类型 而仅代表 Point 类型的子类
function showPoint<P extends Point>(p: P) {
    console.log(`x: ${p.x}; y: ${p.y}`);
}
// 约束也可以这样写
// function showPoint<P extends {x: number, y: number}>(p: P) {

class Vector2D extends Point {
    length: number
    constructor(x, y, len) {
        super(x, y)
        this.length = len
    }
}

showPoint(new Vector2D(1, 2, 3))
// 由于ts是进行结构化类型检测，所以即使不声明类名Vector2D，只要结构符合条件也可以通过类型检测
showPoint({ x: 1, y: 2, len: 3 })

// 泛型约束配合keyof使用
// 用于指定一个变量值是另一个对象的key
// 参考: https://www.typescriptlang.org/docs/handbook/2/keyof-types.html
function showKey<T, Key extends keyof T>(obj: T, k: Key) {
    console.log(obj[k]);
}

showKey<{ [key: string]: any }, string>({ a: 1, b: 2 }, 'a')