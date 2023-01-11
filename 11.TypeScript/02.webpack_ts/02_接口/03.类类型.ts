// 类类型可以通过接口实现
(() => {
    // 定义一个接口
    interface IFly {
        fly(): any
    }
    // 定义一个类
    class Person implements IFly {
        // 实现接口中的方法
        fly() {
            console.log('hello,i can fly')
        }
    }

    new Person().fly()

    interface ISwing {
        swing(): Sport
    }

    // 类多实现接口
    class Sport implements IFly, ISwing {
        swing() {
            console.log('我可以游泳')
            return this
        }
        fly() {
            console.log("我可以飞")
        }
    }
    const sporter = new Sport()
    sporter.swing().fly()
    console.log('============')

    // 接口可以继承其他的接口
    interface IFlyAndSwingAndRun extends IFly, ISwing {
        run(): any
    }

    class SuperMan implements IFlyAndSwingAndRun {
        run() {
            console.log('我可以奔跑s')
        }
        fly() {
            console.log('我可以飞s')
        }
        swing(): any {
            console.log('我可以游泳s')
            return this
        }

    }
    const superMan = new SuperMan()
    superMan.swing().fly()



})()