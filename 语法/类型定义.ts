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
// 参数列表的参数也能定义类型，返回值定义在参数列表的圆括号后面
let fn: Function = (x: number, y: number): number => {
    return x + y
}
// 当函数没有返回值时，就使用 void
let fn2: Function = function (): void {
    console.log('this is a function');
}

// 返回可选值
// fn3 返回值必须是 1 2 3 中的一个
let fn3: Function = (x, y): 1 | 2 | 3 => {
    return 1
}
