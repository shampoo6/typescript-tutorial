// 知识点
// 什么是 declare
// 应用场景
// declare 的使用
// namespace 在定义中的使用



// 什么是 declare (声明 表示 宣言)
// 字面意思是 声称有一个什么
// declare 是 ts 提供的一个关键字，用于告诉 ts 有个什么东西，但不用关心这些内容的来历
// 例如: 网页中引入jquery，那么 ts 中不能直接使用 $ 符号，此处可以使用 declare 告诉 ts 不用关心 $ 从哪里来


// 应用场景
// 非模块化引入外部文件的时候



// declare 的使用
// declare 关键字后面 使用对应声明用的关键字声明即可
// 例如:
// 声明变量: declare let <变量名>
declare function $(selector: string | object): object

console.log($(document.body));


// namespace 在定义中的使用
// 假设有一个我自己的库 myLib 包含属性 title 和一个方法 setTitle
// 那么可以使用 namespace 来规定 title 和 setTitle 属于 myLib 的
declare namespace myLib {
    // namespace 里面使用声明用关键字进行变量、方法等的声明
    let title: string
    function setTitle(title: string): void
}

myLib.setTitle('this is my title')
console.log(myLib.title);
