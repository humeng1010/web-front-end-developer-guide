// 接口,接口是对对象的状态(属性)和行为(方法)的抽象(描述)
// 是一种类型,是一种规范,是一种能力,是一种约束
(() => {

    interface IPerson {
        // readonly关键字表示id是只读的
        readonly id: number,
        name: string,
        age: number,
        // 属性后加"问号"表示可有可无的
        gender?: string

    }
    const person: IPerson = {
        id: 1,
        name: '张三',
        age: 18,
        // gender: '男'
    }
    console.log(person)
})()