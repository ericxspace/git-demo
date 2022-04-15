let hanghoa1 = ['samsung', 'nokia', 'xiaomi', 'sony'];

function hienthi() {
    let str = `<tr>
                    <td>Productname</td>
                </tr>`
    for (let i = 0; i < hanghoa1.length; i++) {
        str += `<tr>
                    <td>${hanghoa1[i]}</td>
                    <td><button type="button" onclick="edit(${i})">Edit</button></td>
                    <td><button type="button" onclick="remove(${i})">Remove</button> </td>
                </tr>`;
    }
    document.getElementById('bang').innerHTML = str
}

hienthi()

function Add() {
    let newsp = document.getElementById('sp').value;
    hanghoa1.push(newsp)
    hienthi()

}
function remove(index) {
    hanghoa1.splice(index, 1)
    hienthi();
}

function edit(index) {
    name=prompt("Nhap thay doi");
    hanghoa1[index]= name;
    hienthi();
}



