
function convert() {
    let amount = document.getElementById("amount").value
    let from = document.getElementById("From").value
    let to = document.getElementById("To").value

    let result = (amount*to)/from

    document.getElementById("result").innerHTML=result
}
