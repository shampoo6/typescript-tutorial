// 知识点
// 什么是 typeof
// 应用场景
// ReturnType<Function>




// 什么是 typeof
// ts 里除了 js 中 typeof 关键字的功能外，ts 还定义了自己的 typeof 关键字
// 在 ts 中 typeof 可以用来引用某个变量对应的类型

type A = { x: number, y: number }
let a: A = { x: 1, y: 2 }
let b: typeof a = { x: 1, y: 2 }


// 应用场景
// 配合 ReturnType<Function> 使用，多用于获取一个函数的返回类型


// ReturnType<Function>
// 用于获取函数返回值的类型

function add(x: number, y: number): number {
    return x + y
}

// 声明一个类型为 函数 add 的返回值类型
type C = ReturnType<typeof add>
// c 的类型是 add 函数的返回值类型 number
let c: C = 0