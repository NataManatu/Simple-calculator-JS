let display = document.getElementById("display")
let calc = document.querySelector(".calc")
let button = document.querySelector("button")

calc.addEventListener("click", function (event) {
    let value = event.target.innerText

    let space = " "

    console.log(event.target.closest("button"))

    if (event.target.closest("button") != null) {

        if (value === "Clear") {
            display.value = ""
        }
        else if (value === "=") {
            display.value += "=" + eval(display.value)
        }
        else if (value === "X") {
            display.value += "*"

            // alert("X")
            // display.value = eval(display.innerText)
        }

        else if (value === "%") {
            display.value += "%" + space + "=" + space + eval(display.value)
        }

        else if (value === "Delete") {
            display.value += "Delete"-1  eval(display.value)
            
        }

        else {
            display.value += value

        }
    }


})


