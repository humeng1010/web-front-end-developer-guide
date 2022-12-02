function resolveData(data) {
    var arr = []
    for (var k in data) {
        arr.push(k + '=' + data[k])
    }
    return arr.join('&')
}

function myajax(options) {
    var xhr = new XMLHttpRequest()

    var qs = resolveData(options.data)

    if (options.type.toUpperCase() === 'GET') {
        xhr.open(options.type, options.url + '?' + qs);
        xhr.send()
    } else if (options.type.toUpperCase() === 'POST') {
        xhr.open(options.type, options.url);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xhr.send(qs)
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var result = JSON.parse(xhr.responseText)
            options.success(result)
        }
    }
}