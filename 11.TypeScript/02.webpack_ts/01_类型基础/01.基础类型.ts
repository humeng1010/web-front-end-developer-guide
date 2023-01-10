(() => {
    // 布尔类型---boolean
    let flag: boolean = true
    console.log(flag)

    // 数字类型---number
    let a1: number = 10//十进制
    let a2: number = 0b1010//二进制
    let a3: number = 0o12//八进制
    let a4: number = 0xa//十六进制
    console.log(a1, a2, a3, a4)

    // 字符串类型---string
    let str1: string = '锦瑟无端五十弦'
    let str2: string = '一弦一柱思华年'
    console.log(str1 + str2)

    // 数组类型
    // 方式1
    let arr1: number[] = [1, 2, 3]
    // 方式2:泛型写法
    let arr2: Array<number> = [4, 5, 6]
    console.log(arr1, arr2)

    // 元组类型
    let arr3: [string, number, boolean, number[]] = ['你好', 2023, true, [1, 2, 3]]
    console.log(arr3)
    // 注意:元组类型使用的时候,数据类型定义的位置和个数 应该和使用的时候一致
    console.log(arr3[3].sort((a, b) => b - a))
    console.log(arr3[0].split(''))


    console.log('=======枚举类型=========')

    // 枚举类型,枚举里面的每个数据类型都可以叫元素,每个元素都有自己的编号,编号默认从0开始
    enum Color {
        // 让编号从1开始
        red = 1,
        green,
        blue,
    }

    let color: Color = Color.red
    console.log(color)//1
    console.log(Color.red, Color.green, Color.blue)//1 2 3
    console.log(Color['red'], Color['green'], Color['blue'])//1 2 3
    console.log(Color[3])//blue

    // any类型---任意类型
    let str: any = 123
    str = '字符串'
    console.log(str)
    let arr: any[] = [1, '2', true]
    console.log(arr)

    // void类型---没有类型
    function showMsg(): void {
        console.log('abc')
    }
    // 箭头函数写法
    const showTime = (): string => {
        let time = new Date()
        let res = time.toLocaleTimeString()
        return res
    }
    console.log(showMsg())//undefined
    console.log(showTime())

    // object类型
    function getObj(obj: object): object {
        console.log(obj)
        return {
            name: '张三'
        }
    }
    console.log(getObj({ name: '李四' }))

    // 联合类型
    function numberAndString(r: number | string): string {
        return r.toString()
    }

    console.log(numberAndString(10))

    // 类型断言
    // 需求:接收一个number或者string类型的数字,进行相互转换
    function numberAndStringEachChange(r: number | string): string | number {
        if (r === '') return '请输入内容'
        // 字符串可以调用.length获取长度
        // 类型断言的第一种写法(<string>r)
        if ((<string>r).length) {
            // 第二种写法 r as string
            return parseInt(r as string)
        }
        return r.toString()
    }
    console.log(numberAndStringEachChange(''))//请输入内容
    console.log(numberAndStringEachChange('1234abc123'))//1234
    console.log(numberAndStringEachChange(1234))//'1234'

    // 类型推断
    let txt = 100//ts会自动推断定义时候的类型
    // txt = '11'//报错
    console.log(txt)

    let txt2 //没有赋值被推断为any类型
    txt2 = 1
    txt2 = '123'
    console.log(txt2)

})()