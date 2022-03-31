// Nhập input
function convert() {
    let input = document.getElementById("R").value;
    // input = parseInt(input)

    // Xử lý dữ liệu diện tích hình tròn
    let dientich = input*input*3.14;
    document.write('Diện tích hình tròn ='+dientich);
    document.write('<br/>')

    // Xử lý dữ liệu chu vi hình tròn
    let chuvi = 2*input*3.14;
    document.write('Chu vi hình tròn ='+chuvi);
}