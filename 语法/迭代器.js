// 迭代器（iterator）是用来迭代集合用的函数
// 迭代的意思是指：一个又一个的查看集合中的元素，迭代一词本意是更迭换代的意思，所以经常会听说“产品迭代”“代码迭代”这样的说法，指的就是一个有一个进行更迭换代
var m = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);
// 使用 for of 迭代 Map
for (var _i = 0, m_1 = m; _i < m_1.length; _i++) {
    var value = m_1[_i];
    console.log(value);
}
// 结果发现：上述代码可以在浏览器上成功输出，但是ts中就不行
// 这是因为：当面向 ES5 或 ES3 兼容引擎时，迭代器只允许用于Array类型的值。for..of对非 Array 值使用循环是错误的
// 此时我们可以使用迭代器的经典使用方法：
var iterator = m.keys(); // keys 函数返回一个迭代器函数
var key; // 声明 key 用于存放每一个被遍历的 key
// 调用 iterator.next 则迭代器会从集合中取出一个成员
// 此处不仅取出了一个成员，还用 key 来保存了该成员
// 当取完所有成员时，next 函数将返回空，就可以跳出循环了
// 这是经典迭代器函数的使用方法，java c# 与此类似
while (key = iterator.next().value) {
    console.log(key);
}
