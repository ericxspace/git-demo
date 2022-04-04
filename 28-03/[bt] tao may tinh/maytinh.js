function clickButton(a) {
    document.getElementById("manhinh").value += a
}

function cal() {
    let phepTinh = document.getElementById("manhinh").value
    let ketqua = eval(phepTinh);
    document.getElementById('manhinh').value = ketqua;
}
