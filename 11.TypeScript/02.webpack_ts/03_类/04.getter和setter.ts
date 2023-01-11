(() => {
    class Father {
        private readonly _idCar: string
        private _name: string
        private readonly _age: number
        protected _money: number
        public air: any
        constructor({ idCar, name, age, money }: { idCar: string; name: string; age: number; money: number }) {
            this._idCar = idCar
            this._name = name
            this._age = age
            this._money = money
        }
        public get idCar(): string {
            return this._idCar
        }
        public get name(): string {
            return this._name
        }
        public set name(value: string) {
            this._name = value
        }
        public get age(): number {
            return this._age
        }
        protected get money(): number {
            return this._money
        }
        protected set money(value: number) {
            this._money = value
        }
        /**
         * say
         */
        public say() {
            console.log('我是大老板,我叫')
        }
    }
    const father = new Father({ idCar: '111', name: '张三', age: 38, money: 500000 })
    father.name = '张四'
    console.log(father)

    class Son extends Father {
        constructor(obj: { idCar: string; name: string; age: number; money: number }) {
            super(obj)
        }
        /**
         * say
         */
        /* public say() {
            console.log('我是老板的儿子,我叫' + this.name)
        } */
    }

    const son = new Son({ idCar: '4444', name: '张无', age: 18, money: 1000 })
    console.log(son)
    son.say()

})()