// 知识点
// 什么是装饰器(decorator)
// 应用场景
// 使用范围
// 配置tsconfig开启装饰器功能
// 类装饰器
// 方法装饰器
// 访问器装饰器
// 属性装饰器
// 参数装饰器


// 什么是装饰器
// 在编程过程中使用 @ at 符号，为类或类属性添加注解，用来在运行代码时，执行某些行为或赋值某些属性等

// 应用场景
// 对构造函数、属性、方法、访问器、或方法参数的预处理


// 使用范围
// 并非所有地方都能使用 decorator，只能在 类声明、方法、访问器、属性或参数 上使用


// 配置tsconfig开启装饰器功能
// 需要在编译选项中添加 "experimentalDecorators": true


// 类装饰器
@classDecorator('hello class decorator', 'ok')
class BugReport {
    type = "report";
    title: string;

    constructor(t: string) {
        this.title = t;
    }
}

// 装饰器本质上就是函数
// 装饰器函数的书写方式有两种

// 方法一: 装饰器 @decorator 后面不带参数的时候

// 类装饰器的第一个参数默认为类构造函数
// function classDecorator<T extends { new(...args: any[]): object }>(constructor: T) {
//     // 修改构造函数为另一个子类构造函数
//     // 此处是个匿名类所以没有名称
//     return class extends constructor {
//         myInfo: string = 'this is my info'
//     }
// }

// 方法二: 装饰器 @decorator(value) 后面带参数的时候

// 带参数的时候声明方法时，实际是个装饰器工厂函数
function classDecorator(...value: string[]) {
    console.log('classDecorator');
    console.log(value);

    // 返回一个装饰器函数
    return function <T extends { new(...args: any[]): object }>(constructor: T) {
        // 修改构造函数为另一个子类构造函数
        // 此处是个匿名类所以没有名称
        return class extends constructor {
            myInfo: string = 'this is my info'
        }
    }
}

let br = new BugReport('this is a title');
console.log(br)
// @ts-ignore
console.log(br.myInfo)


// 方法装饰器
class FunctionDecoratorClass {
    @functionDecorator('ok')
    fn(a: number, b: number): number {
        return a + b
    }
}

function functionDecorator(value: string) {
    // 第一个参数: 实例对象的原型
    // 第二个参数: 方法名
    // 第三个参数: 方法的属性描述
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('方法装饰器')
        console.log(target)
        console.log(propertyKey)
        console.log(descriptor)
    };
}

let fd = new FunctionDecoratorClass()
console.log(fd)
console.log(fd.fn(1, 2))





// 访问器装饰器
class Point {
    private _x: number
    private _y: number
    constructor(x: number, y: number) {
        this._x = x
        this._y = y
    }
    @accessorDecorator('ok')
    get x() {
        return this._x
    }
    set x(value) {
        this._x = value
    }
}

function accessorDecorator(value: string) {
    console.log('accessorDecorator');
    console.log(value);

    // 访问器修饰符返回的参数和方法修饰符相同
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    };
}

let p = new Point(1, 2)
console.log(p);



// 属性修饰符
class Greeter {
    @propertyDecorator('this is my property value')
    greeting: string
    constructor(greeting: string) {
        this.greeting = greeting
    }
}

function propertyDecorator(value: string) {
    console.log('propertyDecorator');
    console.log(value);

    // 参数和方法修饰符相同 不过没有第三个参数
    return function (target: any, propertyKey: string) {
        console.log(target);
        console.log(propertyKey);
    }
}

let g = new Greeter('hello my sir')
console.log(g);



// 参数修饰符
class Com {
    @validate
    add(@required x: number | undefined | null, @required y: number | undefined | null): number {
        console.log('add be called');
        console.log(this);
        return x + y
    }
}

// 参数装饰器函数中的参数
// 第一个参数: 实例对象的原型
// 第二个参数: 方法名
// 第三个参数: 添加该装饰器的参数索引
function required(target: { [key: string | symbol]: any }, propertyKey: string | symbol, parameterIndex: number) {
    console.log('required');
    console.log(typeof target[propertyKey]);
    console.log(target);
    console.log(propertyKey);
    console.log(parameterIndex);
    // 将需要校验的参数索引缓存到数组中
    let arr = (globalThis as any)['requiredKeyIndex']
    if (!Array.isArray(arr)) arr = [];
    arr.push(parameterIndex);
    (globalThis as any)['requiredKeyIndex'] = arr
}

function validate(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<any>) {
    console.log('validate');
    console.log((globalThis as any)['requiredKeyIndex'])
    console.log(target);
    console.log(propertyName);
    console.log(descriptor);
    const method = descriptor.value
    descriptor.value = function () {
        let arr = (globalThis as any)['requiredKeyIndex']
        if (Array.isArray(arr)) {
            // 数组存在就验证参数
            arr.forEach(index => {
                let value = arguments[index]
                console.log('add decorator be called');
                console.log(value);
                if (value === null || value === undefined) throw new Error('必填参数异常')
            })
        }
        return method.apply(this, arguments)
    }
}

let c = new Com()
console.log(c.add(1, undefined));
