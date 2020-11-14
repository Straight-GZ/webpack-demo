import x from "./x.js"
import png from "./assets/1.png"

const div = document.getElementById("app")
console.log("hi")
// div.innerHTML = `
//     <img src='${png}'>
// `
const button = document.createElement("button")
button.innerText = "懒加载"
button.onclick = () => {
  const promise = import("./lazy.js")
  promise.then(
    (module) => {
      const fn = module.default
      fn()
    },
    () => {
      console.log("加载错误")
    }
  )
}
div.appendChild(button)
