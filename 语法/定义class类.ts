// 知识点
// 声明属性
// 声明行为
// 访问修饰符
// readonly 修饰符
// static 修饰符
// abstract 抽象类和属性 参考: https://www.typescriptlang.org/docs/handbook/2/classes.html#abstract-classes-and-members


// 声明属性
class Duck {
    color: string
    age: number
    constructor(color: string, age: number) {
        this.color = color
        this.age = age
    }
}

const duck = new Duck('红色', 2)
console.log(duck);


// 声明行为
class Car {
    flash(active: boolean): void {
        console.log(`开关闪光灯: ${active}`);
    }
}

new Car().flash(true)









// 访问修饰符
// 访问修饰符 只有 class类中的属性和行为可以添加，甚至是构造函数
// 访问修饰符 的作用是用来规定属性或行为的访问级别，哪些地方可以访问，那些地方不能

// 访问修饰符有3中  public private protected



class Human {
    // public 公开的
    // 带有 public 修饰符的属性或行为可以在任何地方访问
    public name: string
    // protected 受保护的
    // 带有 protected 修饰符的属性或行为可以在当前class类及其子类中访问
    protected sex: 'male' | 'female' | 'other'

    // private 私有的
    // 带有 private 修饰符的属性或行为只能在当前class类的实例对象中访问

    // 构造函数也可以添加访问修饰符
    public constructor(name, sex) {
        this.name = name
        this.sex = sex
        // private 的函数只能在类内部访问
        this.init()
    }

    private init() {
        console.log('init');
    }
}

let h = new Human('张三', 'male')
// public 的属性可以在任何位置访问
console.log(h.name);

class ChinesePeople extends Human {
    public introduce() {
        console.log(`我的名字叫: ${this.name}; 性别是: ${this.sex}`);
    }
}

let cp = new ChinesePeople('李四', 'female')
cp.introduce()








// readonly 只读修饰符
class Computer {
    readonly cpu: string
    constructor(cpu) {
        this.cpu = cpu
    }
}

// static 静态修饰符
class Bot {
    static provider: string = '光圈科技'
    static showProvider(): void {
        console.log(Bot.provider);
    }
}
console.log(Bot.provider);
Bot.showProvider()
