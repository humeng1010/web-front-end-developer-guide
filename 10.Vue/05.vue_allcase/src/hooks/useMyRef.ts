import { customRef } from 'vue'

/**
 * 
 * @param value 
 * @param delay 
 * @returns {Ref<string | number>}
 */
export default function (value: string | number, delay: number) {
    return customRef((track, trigger) => {
        let timer: number
        return {
            get() {
                console.log(`有人从 myRef 这个容器中读取数据了，我把${value}给它了`)
                //通知 vue 追踪返回的数据的变化(提前和 getter 商量好，让它认为 value 是有用的)
                track()//追踪
                return value
            },
            set(newValue) {
                console.log(`有人把 myRef 这个容器中的数据改为了${newValue}`)

                clearTimeout(timer)
                timer = setTimeout(() => {
                    value = newValue
                    trigger()
                }, delay);

            }
        }

    })

}