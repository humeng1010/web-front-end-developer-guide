const dayjs = require('dayjs');


setInterval(() => {
    let now = dayjs().format("YYYY-MM-DD HH:mm:ss")
    console.log(now);
}, 1000);