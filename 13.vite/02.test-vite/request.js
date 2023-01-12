console.log('import.meta.env////', import.meta.env)
// 根据当前的开发环境的不同,读取不同的环境变量,发送请求不同的服务器


// axios.baseUrl = import.meta.env.ENV_BASE_URL
/* axios.baseUrl = "https://dev.api"
axios.baseUrl = "https://test.api"
axios.baseUrl = "https://prod.api"

const getUserPosition = () => {
    axios.post({
        url: "/position",
        data: {
            // APP_KEY: import.meta.env.ENV_APP_KEY
            APP_KEY: 110,
            APP_KEY: 111,
            APP_KEY: 112
        }
    })
} */


/* axios.baseUrl = "https://dev.api"
// axios.baseUrl = "https://test.api"
// axios.baseUrl = "https://prod.api"
const getUserPosition = () => {
    axios.post({
        url: "/position",
        data: {
            APP_KEY: 110,
            // APP_KEY: 111,
            // APP_KEY: 112
        }
    })
} */
/* const getCurrentLoginUserInfo = () => {
    axios.post({
        url: "/user/info"
    })
}  */
