(() => {
    class Person {
        // 定义属性
        name: string
        age: number
        gender: string
        // 构造函数函数传参
        constructor(name: string = 'root', age: number = 19, gender: string = '男') {
            this.name = name
            this.age = age
            this.gender = gender
        }
        sayHi(str: string) {
            console.log('str:' + str, this.name, this.age, this.gender)
        }
    }
    const person = new Person()
    person.sayHi('wdf')


})()