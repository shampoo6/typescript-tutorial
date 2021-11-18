// 声明构造函数类型
type HumanConst = {
    new(name: string, sex: string, age: number)
}

interface IHumanConst {
    new(name: string, sex: string, age: number)
}

// 声明类
class Human {
    // 类属性
    public name: string
    public sex: string
    public age: number
    private income: number // 收入
    constructor(name: string, sex: string, age: number) {
        this.name = name
        this.sex = sex
        this.age = age
    }
    // 类行为
    public say(msg: string): void {
        console.log(msg);
    }
}

function NewConst(c: IHumanConst) {
    console.log(new c('张三', 'male', 16));
}

NewConst(Human)