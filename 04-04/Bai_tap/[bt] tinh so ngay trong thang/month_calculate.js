function tinhtoan() {
    let hienthi = document.getElementById("hienthi")
    let thang = document.getElementById("thang").value;
    switch (thang) {
        case'1':
        case'3':
        case'5':
        case'7':
        case'8':
        case'10':
        case'12':
            hienthi.innerHTML = "Tháng này có 31 ngày";
            break
        case'4':
        case'6':
        case'9':
        case'11':
            hienthi.innerHTML = "Tháng này có 30 ngày";
            break
        case'2':
            hienthi.innerHTML = "Tháng này có 28 hoặc 29 ngày";
            break

    }
}