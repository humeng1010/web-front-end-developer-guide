module.exports = function (aliasConf, content) {
    // es6的写法,把对象的key和value保存到一个数组中
    const entires = Object.entries(aliasConf)
    // console.log("entires", entires)
    /* entires[
        ['@', '/Users/humeng/Github/mycode/13.vite/04.vite-dev-server/src']
    ] */
    let lastContent = content
    entires.forEach(entire => {
        const [alias, path] = entire
        const srcIndex = path.indexOf('/src')
        const replacePath = path.slice(srcIndex, path.length)
        // console.log(alias, path, srcIndex, replacePath)
        lastContent = content.replace(alias, replacePath)
    })

    // console.log(lastContent)

    return lastContent

}