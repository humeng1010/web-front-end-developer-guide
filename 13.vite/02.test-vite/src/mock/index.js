import mockJS from "mockjs"
const userList = mockJS.mock({
    "data|100": [{
        name: "@cname",//表示生成不同的中文名
        ename: "@name",//生成不同的英文名
        "id|+1": 1,//id从1自增
        birthDay: "@datetime"
    }]
})

module.exports = [
    {
        method: "post",
        url: "/api/users",
        response: ({ body }) => {
            // body请求体
            return {
                code: 200,
                msg: "success",
                data: userList,
            }
        }
    }
]