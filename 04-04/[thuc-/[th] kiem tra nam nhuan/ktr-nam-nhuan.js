let nam = parseInt(prompt("Nhập Số Năm"));
// Xử lý dữ liệu
if (nam % 4 == 0) {
    if (nam % 100 == 0) {
        if (nam % 400 == 0) {
            alert("Năm Nhuận")
        } else {
            alert("Không phải năm nhuận")
        }

    } else {
        alert("Năm Nhuận")
    }
} else {
    alert("Không phải năm nhuận")
}