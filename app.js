function intiger() {
    var numberInput = document.getElementById("factorial");
    var number = parseInt(numberInput.value);


    var result = factorial(number);
    function factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }

    var resultElement = document.getElementById('result');
    resultElement.innerHTML = 'Factorial of ' + number + ' is: ' + result;


}