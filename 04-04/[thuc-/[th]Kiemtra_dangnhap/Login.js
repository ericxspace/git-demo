let username = prompt("Vui lòng nhập tên đăng nhập");
// Xử lý dữ liệu
if (username == "admin") {
    let password = prompt("Vui lòng nhập mật khẩu");
    if (password == "TheMaster") {
        alert("Welcome")
    }
    else if (password == "null") {
        alert("Cancel")
    }else {
        alert("Wrong password")
    }
} else if (username == "null") {
    alert("Canceld")
} else {
    alert ("I Don't know you")
}