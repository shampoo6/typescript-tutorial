// ts 中可以给变量，函数参数，返回值等定义数据类型
// 在使用时必须使用符合类型条件的数据

// 定义变量类型

// 基本数据类型
let a: number = 1
let b: string = 'hello world'
let c: boolean = true
// 若类型为 any 则任意类型都可以被接受
// 使用 any 类型时 tsc 编译器不会检测其类型
let d: any = '任意类型'
let e = false // 未显式声明的变量都被当作 any

// 无法给定义了类型的变量赋值错误类型的数据，如：
// a = 'hello world' // tsc 编译时会报错


// 联合类型
// 支持多个类型
let f: number | string = 666
f = 'hello'



// 定义json对象
let obj: { [key: string]: any } = { name: '法外狂徒张三' }

// 定义必须包含某些属性的特殊对象
// obj2 是一个必须包含 name age sex 属性的对象
let obj2: { name: string, age: number, sex: string } = {
    name: '李四',
    sex: 'female',
    age: 16
}

// 对象可选属性
// 属性名后使用问号“?”来定义可选属性
// 对象赋值时可以不提供可选属性
let obj3: { name: string, price?: number } = {
    name: '冰箱'
}

// 类型别名
// 一个普通的json类型在定义时可能会书写很复杂，所以可以给此类型添加别名
// 例如定义一个向量类型
type Vector2D = {
    // 方向
    direction: { x: number, y: number },
    // 长度
    length: number
}
let v: Vector2D = {
    direction: { x: 1, y: 0 },
    length: 5
}

// 定义数组
// 数组类型后面的尖括号代表的是泛型
// 泛型的意思是：接收不同的类型那么数组的类型就会随之改变
// 例如：
// Array<number> 代表数字数组
// Array<string> 代表字符串数组
// Array<any> 代表数组成员可以是任意类型
let arr: Array<number> = [1, 2, 3]
let arr2: Array<string> = ['a', 'b', 'c']
// 数组也能使用方括号定义
let arr3: string[] = ['x', 'y', 'z']

// 定义函数
// 在变量fn后定义函数类型，圆括号为参数列表，箭头后的是返回值类型
// 参数列表的参数和返回值也能定义类型
let fn: (x: number, y: number) => number = (x: number, y: number) => {
    return x - y
}

// 当函数没有返回值时，就使用 void
let fn2: () => void = () => {
    console.log('this is a function')
}

// 返回联合类型
// 返回值可以是几种可选类型的其中之一
let fn3: (x: number | string, y: number | string) => number | string = (x, y) => {
    return typeof x === 'number' && typeof y === 'number' ?
        Number(x + y) : String(x) + String(y)
}

// 返回可选值
// 返回值只能在给定结果中取值
let fn4: () => 'male' | 'female' | 'other' = () => {
    return 'female'
}

// 任意函数类型可以使用 Function
// 以下fn5可以存放任意的函数
let fn5: Function = () => { }


// 参数可以使用 as 进行类型断言
// 类型断言用于给 ts 提供他们不知道的类型信息
// 若断言失败可能导致程序的运行错误
// 例如：node.js 自带的变量 __filename 对于 ts 来说没有定义过 __filename 变量，所以需要告诉 ts __filename 是什么东西？
declare const __filename
console.log(__filename)
console.log((__filename as string).length);
// 注意：类型断言不是类型的强制转换，例如：
let sToB: any = ''
sToB = sToB as boolean
console.log(sToB);


