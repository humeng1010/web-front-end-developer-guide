import componentBCss from "./ComponentB.module.css"
console.log('componentBCss', componentBCss)
const div = document.createElement("div")
document.body.appendChild(div)
div.classList.add(componentBCss.footer)