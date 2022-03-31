// Nhập input
function convert() {
    let input = document.getElementById("doC").value;
    // input = parseInt(input)

 // Xử lý dữ liệu
    let result = ((input/5)*9) + 32;

    document.getElementById("result").innerHTML=result
}

