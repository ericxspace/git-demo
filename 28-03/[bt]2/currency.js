
function convert() {
    let a = document.getElementById("amount").value
    let b = document.getElementById("From").value
    let c = document.getElementById("To").value

    let result = (a*c)/b

    document.getElementById("result").innerHTML=result
}
