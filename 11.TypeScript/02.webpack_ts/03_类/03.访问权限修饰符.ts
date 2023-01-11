(() => {
    /* 
    访问修饰符: 用来描述类内部的属性/方法的可访问性
      public: 默认值, 公开的外部也可以访问
      private: 只能类内部可以访问
      protected: 类内部和子类可以访问
    */

    class Animal {
        // 默认公有
        public name: string

        public constructor(name: string) {
            this.name = name
        }

        public run(distance: number = 0) {
            console.log(`${this.name} run ${distance}m`)
        }
    }

    class Person extends Animal {
        // 私有
        private age: number = 18
        // 受保护的
        protected sex: string = '男'

        run(distance: number = 5) {
            console.log('Person jumping...')
            super.run(distance)
        }
    }

    class Student extends Person {
        run(distance: number = 6) {
            console.log('Student jumping...')

            console.log(this.sex) // 子类能看到父类中受保护的成员
            // console.log(this.age) //  子类看不到父类中私有的成员

            super.run(distance)
        }
    }

    console.log(new Person('abc').name) // 公开的可见
    // console.log(new Person('abc').sex) // 受保护的不可见
    // console.log(new Person('abc').age) //  私有的不可见
})()