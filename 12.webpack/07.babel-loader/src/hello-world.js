function getString() {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove('hello-world!!!!')
        }, 2000);
    })
}

async function helloworld() {
    let str = await getString()
    console.log(str)
    console.log('1')
}

export default helloworld