function countdown(param1, param2) {
    const sum = param1 + param2;

    function printCountdown(num) {
        console.log(num);
        if (num > 0) {
            setTimeout(() => {
                printCountdown(num - 1);
            }, 1000);
        }
    }

    printCountdown(sum);
}

countdown(3, 5);