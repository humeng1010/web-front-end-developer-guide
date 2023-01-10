// ts中书写js中的类
(() => {
    interface IPerson {
        firstName: string,
        lastName: string
    }
    class Person {
        firstName: string
        lastName: string
        fullName: string
        constructor(firstName: string, lastName: string) {
            // 更新属性
            this.firstName = firstName
            this.lastName = lastName
            this.fullName = this.firstName + '-' + this.lastName
        }
    }
    function showFullName(person: IPerson) {
        return person.firstName + '-' + person.lastName
    }

    const person = new Person('驴', '德华')
    console.log(showFullName(person))
    console.log(person)

})()