// ts中书写js中的类
(() => {
    class Person {
        constructor(firstName, lastName) {
            // 更新属性
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = this.firstName + '-' + this.lastName;
        }
    }
    function showFullName(person) {
        return person.firstName + '-' + person.lastName;
    }
    const person = new Person('驴', '德华');
    console.log(showFullName(person));
    console.log(person);
})();
