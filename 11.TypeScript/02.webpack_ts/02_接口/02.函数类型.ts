(() => {
    // 函数类型
    interface ISearchFun {
        (source: string, subString: string): boolean
    }

    const searchString: ISearchFun = (source, subString) => {
        return source.search(subString) > -1
    }
    console.log(searchString("我很菜", "菜"))//true
    console.log(searchString("我很菜", "厉害"))//false
})()