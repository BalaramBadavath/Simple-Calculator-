
let input1 = document.getElementById("input1")

let input2 = document.getElementById("input2")

let operator = document.getElementById("operator")

let resultElement = document.getElementById("result")

function calculate()
{
    let operation = operator.value
    if(operation==='+')
    {
        addition()
    }
    else if(operation==='-')
    {
        subtraction()
    }
    else if(operation==='/')
    {
        divison()
    }
    else if(operation==='*')
    {
        multiple()
    }
}

function addition()
{
    let output = parseInt(input1.value) + parseInt(input2.value)
        console.log(output)
        let res = document.getElementById("result")
        res.textContent=`RESULT : ${output}`
}

function subtraction()
{
    let output = parseInt(input1.value) - parseInt(input2.value)
        console.log(output)
        let res = document.getElementById("result")
        res.textContent=`RESULT : ${output}`
}

function multiple()
{
    let output = parseInt(input1.value) * parseInt(input2.value)
    console.log(output)
    let res = document.getElementById("result")
    res.textContent=`RESULT : ${output}`
}

function divison()
{
    let output = parseInt(input1.value) / parseInt(input2.value)
        console.log(output)
        let res = document.getElementById("result")
        res.textContent=`RESULT : ${output}`
}

