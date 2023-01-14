console.log("hello")
let str = "helloworld"//类型推导
// str = 123
console.log(str)
interface IPerson {
    name: string,
    age: number
}
function demo(person: IPerson) {
    console.log(`i am ${person.name} and ${person.age} years old`)
}
demo({ name: 'jack', age: 18 })

// 这个我们在ts中访问环境变量 会因为我们没有配置而出现报错
console.log("meta", import.meta.env.VITE_PROXY_TARGET)