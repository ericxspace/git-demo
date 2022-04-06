function check(number) {

    if (number < 2) {
        return false;
    }
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            return false
        }
    }
    return true

}

let count = 0
let i = 2;
while (count < 10000) {
    if (check(i) === true) {
        console.log(i)
        count++
    }
    i++;
}
