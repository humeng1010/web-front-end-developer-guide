import ComponentCLess from "./ComponentC.module.less"
console.log('ComponentCLess', ComponentCLess)

const content = document.createElement("div")
document.body.appendChild(content)
content.classList.add(ComponentCLess.content)

const main = document.createElement("div")
content.appendChild(main)
main.classList.add(ComponentCLess.main)
