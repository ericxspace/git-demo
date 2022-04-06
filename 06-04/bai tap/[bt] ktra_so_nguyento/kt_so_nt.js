
function check() {
    let number = prompt("add number");
    if (number < 2) {
        alert(number +" Không phải là số nguyên tố");
    } else {
        for (i = 2; i < number; i++) {
            console.log(i)
            if (number % i == 0) {
                alert(number +" Không phải là số nguyên tố");
                return;
            }
        }
        alert(number + " Là số nguyên tốt")
    }
}
check();