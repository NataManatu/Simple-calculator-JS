let display = document.getElementById("display")
let calc = document.querySelector(".calc")
let button = document.querySelector("button")
let buttonClear = document.querySelector(".clear")

calc.addEventListener("click", function (event) {

    let value = event.target.innerText

    let space = " "

    // Состояние дублирующегося оператора в инпуте
    let statusOperator

    // Индекс последнего элемента в строке инпута
    let nowLastItemIndex

    nowLastItemIndex = display.value.length - 1
    statusOperator = checkLastItem(nowLastItemIndex)

    console.log(event.target.closest("button"))

    if (event.target.closest("button") != null) {


        if (value === "Clear") {
            display.value = ""
        }
        else if (value === "=") {
            display.value = eval(display.value)
        }

        // 
        else if (value === "x") {
            if (statusOperator) {
                let nowStr = display.value
                nowStr = nowStr.split("")
                nowStr[nowLastItemIndex] = "*"
                display.value = nowStr.join("")
            } else {
                display.value += "*"
            }
        }

        else if (value === "%") {
            display.value += "%" + space + "=" + space + eval(display.value)
        }

        else if (value === "/") {
            if (statusOperator) {
                let nowStr = display.value
                nowStr = nowStr.split("")
                nowStr[nowLastItemIndex] = "/"
                display.value = nowStr.join("")
            } else {
                display.value += value
            }
        }
        else if (value === "+") {
            if (statusOperator) {
                let nowStr = display.value
                nowStr = nowStr.split("")
                nowStr[nowLastItemIndex] = "+"
                display.value = nowStr.join("")
            } else {
                display.value += value
            }
        }

        else if (value === "-") {

            if (statusOperator) {
                let nowStr = display.value
                nowStr = nowStr.split("")
                nowStr[nowLastItemIndex] = "-"
                display.value = nowStr.join("")
            } else {
                display.value += value
            }
        }

        // 

        else if (value === "Delete") {
            display.value = display.value.substring(0, display.value.length - 1)
        }

        else if (value === "√") {
            display.value = Math.sqrt(display.value)
        }

        else if (value === "square") {
            display.value = eval(display.value) * eval(display.value)
        }

        else if (value === "Enter") {
            display.value = eval(display.value)
        }

        else {
            display.value += value
        }
    }
})

function checkLastItem(lastItemIDX) {
    let lastItem = display.value[lastItemIDX]

    let resultOperator

    switch (lastItem) {
        case "+":
            resultOperator = true
            break;
        case "-":
            resultOperator = true
            break;
        case "*":
            resultOperator = true
            break;
            case "/":
                resultOperator = true
                break;
        default:
            resultOperator = false
            break;
    }

    return resultOperator
}




buttonClear.addEventListener("mouseover", function () {
    buttonClear.style.color = "red"
    buttonClear.style.background = "pink"

})
buttonClear.addEventListener("mouseout", function () {
    buttonClear.style.color = "black"
    buttonClear.style.background = "rgb(239, 239, 239)"
})



