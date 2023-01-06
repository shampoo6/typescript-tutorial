// 官网: <https://www.typescriptlang.org/docs/handbook/namespaces-and-modules.html>

// 命名空间
// 为了避免全局变量声明造成变量污染的问题，ts 引入了命名空间的概念，在不同命名空间中可以存在相同的变量名而不会互相干扰
// 命名空间中可以书写任意的代码
// 命名空间本质上就是一个闭包的函数空间

namespace N1 {
    let a = 1
    let b = 2
    function add(x: number, y: number) {
        return x + y
    }
    console.log(add(a, b));

    // 命名空间内可以使用 export 进行导出，导出的内容可以在 命名空间外使用
    export let eNum = 666
    export function sub(x: number, y: number) { return x - y }
}

// 使用命名空间名称加点运算符，可以调用命名空间导出的内容
console.log(N1.eNum);
console.log(N1.sub(3, 1));


namespace N2 {
    let a = 2
    let b = '1'
    function add(x: number | string, y: number | string) {
        x = Number(x)
        y = Number(y)
        return x + y
    }
    console.log(add(a, b));
}