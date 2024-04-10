document.addEventListener("DOMContentLoaded",function(){
    let inputNumber1 = document.querySelector("#inputValue1");
    let inputNumber2 = document.querySelector("#inputValue2");
    let add = document.querySelector("#add");
    let sub = document.querySelector("#sub");
    let multiply = document.querySelector("#multiply");
    let div = document.querySelector("#div");
    let pow = document.querySelector("#pow");
    let fact = document.querySelector("#fact")
    let result = document.querySelector("#result");

    add.addEventListener("click", function(){
    let num1 = parseFloat(inputNumber1.value);
    let num2 = parseFloat(inputNumber2.value);
    calc = num1 + num2;
    result.innerHTML = "Result : " + calc
})

    sub.addEventListener("click", function(){
    let num1 = parseFloat(inputNumber1.value);
    let num2 = parseFloat(inputNumber2.value);
    calc = num1 - num2;
    result.innerHTML = "Result : " + calc


})

    multiply.addEventListener("click", function(){
        let num1 = parseFloat(inputNumber1.value);
        let num2 = parseFloat(inputNumber2.value);
        let calc = num1 * num2;
        result.innerHTML = "Result : " + calc
    })



    div.addEventListener("click", function(){
        let num1 = parseFloat(inputNumber1.value);
        let num2 = parseFloat(inputNumber2.value);
        let calc = num1 / num2;
        result.innerHTML = "Result : " + calc
    })


    pow.addEventListener("click", function(){
        let num1 = parseFloat(inputNumber1.value);
        let num2 = parseFloat(inputNumber2.value);
        let calc = Math.pow(num1, num2);
        result.innerHTML = "Result : " + calc
    })

    fact.addEventListener("click", function() {
        let num = parseInt(inputNumber1.value);
        let fact = 1;
        if (num < 0) {
            result.innerHTML = "Factorial is not defined for negative numbers";
        } else {
            for (let i = 2; i <= num; i++) {
                fact *= i;
            }
            result.innerHTML = "Factorial of " + num + " is " + fact;
        }
    });
})