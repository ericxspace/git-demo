// Input
let weight = prompt("Vui lòng nhập cân nặng (KG)");
let height = prompt("Vui lòng nhập chiều cao (mét)");
let BMI = parseInt(weight / (height) ^ 2)
// Processing
if (BMI < 18.5) {
    alert("Underweight")
}
if (18.5 <= BMI && BMI < 25.0) {
    alert("Normal")
}
if (25.0 <= BMI && BMI < 30) {
    alert("Overweight")
}
if (30 <= BMI) {
    alert("Obese")
}
