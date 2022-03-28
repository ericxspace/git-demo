// input thông tin
let ly = prompt("Nhập điểm Lý");
let hoa = prompt("Nhập điểm Hoá");
let sinh = prompt("Nhập điểm Sinh");

// Vì prompt luôn luôn là string nên cần chuyển đổi lại số
ly = parseInt(ly);
hoa = parseInt(hoa);
sinh = parseInt(sinh);

let trungbinh =(ly+hoa+sinh)/3;
let tong =ly+hoa+sinh;

// out put thông tin
document.write("Điểm trung bình ="+ trungbinh);
document.write("</br>")
document.write("Tổng Điểm ="+ tong);
