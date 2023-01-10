
(() => {
    function showMsg(str: string) {
        return '床前明月光,' + str
    }
    const msg = '疑是地上霜'
    // const msg = [1, 2, 3]
    // 智能的错误提示信息
    console.log(showMsg(msg))
})()