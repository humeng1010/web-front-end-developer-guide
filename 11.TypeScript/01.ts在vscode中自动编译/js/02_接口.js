// 接口是一种能力,一种约束
(() => {
    // 输出姓名
    function showName(person) {
        return person.firstName + '_' + person.lastName;
    }
    const person = {
        firstName: '东方',
        lastName: '不败',
    };
    console.log(showName(person));
})();
