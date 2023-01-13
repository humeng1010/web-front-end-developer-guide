import componentACss from "./ComponentA.module.css"
console.log('componentACss', componentACss)
const div = document.createElement('div')
document.body.appendChild(div)
div.className = componentACss.footerContent