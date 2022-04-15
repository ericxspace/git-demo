
function isPalindrome() {
    let str = document.getElementById('input').value
    let a = true
    for (let i = 0; i < str.length/2; i++) {
        if (str[i] !== str[str.length - 1 -i])
        {
            a = false
            console.log(a)
            return a;
        }
    }  console.log (a);
        return a;
}



