(() => {
    // 声明类
    // 用户类
    class User {
        id?: number
        name: string
        age: number
        gender: string
        constructor({ name, age, gender }: { name: string, age: number, gender: string }) {
            this.name = name
            this.age = age
            this.gender = gender
        }
    }
    // VIP用户类
    class VIP extends User {
        vidCarId?: number
        constructor(obj: { name: string, age: number, gender: string }) {
            super(obj)
        }
    }

    interface IUserService<T> {
        userList: Array<T>
        addUser: (user: T) => T
        getUserById: (id: number) => T | undefined
    }
    class UserServiceImpl implements IUserService<User> {
        userList: Array<User>
        constructor() {
            this.userList = []
        }
        addUser(user: User): User {
            user.id = Date.now() + Math.random()
            this.userList.push(user)
            return user
        }
        getUserById(id: number | undefined): User | undefined {
            return this.userList.find(user => user.id === id)
        }
    }
    const user = new UserServiceImpl()
    user.addUser(new User({ name: 'aa', age: 18, gender: '男' }))
    user.addUser(new User({ name: 'bb', age: 18, gender: '男' }))
    user.addUser(new User({ name: 'cc', age: 18, gender: '男' }))
    const { id } = user.addUser(new User({ name: 'jack', age: 18, gender: '男' }))
    console.log(user.userList)
    console.log(user.getUserById(id))

    class VIPUserServiceImpl implements IUserService<VIP>{
        userList: Array<VIP>
        constructor() {
            this.userList = []
        }
        addUser(user: VIP): VIP {
            user.id = Date.now() + Math.random()
            user.vidCarId = Date.now() + Math.random()
            this.userList.push(user)
            return user
        }
        getUserById(id: number | undefined): VIP | undefined {
            return this.userList.find(user => user.id === id)
        }
    }
    const vuser = new VIPUserServiceImpl()
    vuser.addUser(new VIP({ name: 'aa', age: 18, gender: '男' }))
    vuser.addUser(new VIP({ name: 'bb', age: 18, gender: '男' }))
    vuser.addUser(new VIP({ name: 'cc', age: 18, gender: '男' }))
    const { id: vid } = vuser.addUser(new VIP({ name: 'jack', age: 18, gender: '男' }))
    console.log(vuser.userList)
    console.log(vuser.getUserById(vid))
})()