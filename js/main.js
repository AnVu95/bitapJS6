var numArray = [];
function nhapNum() {
    var num = document.getElementById("inpNumb").value;
    numArray.push(num);
    document.getElementById("txtMang").innerHTML = " " + numArray;
}
document.getElementById("btn-num").onclick = nhapNum;


/* Bài 1 */
function tongSoDuong() {
    var sum = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            sum += Number(numArray[i]);
        }
    }
    document.getElementById("txtTongSD").innerHTML = "Tổng các số dương là: " + sum;
}
document.getElementById("btn-tinhTong").onclick = tongSoDuong;


/* Bài 2 */
function demSoDuong() {
    var dem = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            dem++;
        }
    }
    document.getElementById("txtDemSD").innerHTML = "Có " + dem + " số dương trong mảng";
}
document.getElementById("btn-demSD").onclick = demSoDuong;


/* Bài 3 */
function findMin() {
    var min = numArray[0];
    for (var i = 1; i < numArray.length; i++) {
        if (Number(numArray[i]) < min) {
            min = numArray[i];
        }
    }
    document.getElementById("txtFindMin").innerHTML = "Số nhỏ nhất trong mảng là: " + min;
}
document.getElementById("btn-FindMin").onclick = findMin;


/* Bài 4 */
function findSoDuongMin() {
    var soDuong = [];
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            soDuong.push(numArray[i]);
        }
    }
    var minDuong = soDuong[0];
    if (soDuong.length > 0) {
        for (var i = 0; i < soDuong.length; i++) {
            if (soDuong[i] < minDuong) {
                minDuong = soDuong[i];
            }
        }
        document.getElementById("txtFindSDMin").innerHTML = "Số dương nhỏ nhất trong mảng là: " + minDuong;
    } else {
        document.getElementById("txtFindSDMin").innerHTML = "Không có số dương trong mảng";
    }

}
document.getElementById("btn-FindSDMin").onclick = findSoDuongMin;


/* Bài 5 */
function timSoChanlast() {
    var soChan = -1;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] % 2 == 0) {
            soChan = numArray[i];
        }
    }
    document.getElementById("txtFindSoChanLast").innerHTML = "Số chẵn cuối cùng là: " + soChan;
}
document.getElementById("btn-FindSoChanLast").onclick = timSoChanlast;


/* Bài 6 */
function doiCho() {
    var viTri1 = document.getElementById("inpVT1").value;
    var viTri2 = document.getElementById("inpVT2").value;
    var temp = 0;
    var mangDoiCho = [];
    for (var i = 0; i < numArray.length; i++) {
        mangDoiCho.push(numArray[i]);
    }
    temp = mangDoiCho[viTri1];
    mangDoiCho[viTri1] = mangDoiCho[viTri2];
    mangDoiCho[viTri2] = temp;

    document.getElementById("txtDoiCho").innerHTML = "Mảng sau khi đổi chỗ: " + mangDoiCho;
}
document.getElementById("btn-DoiCho").onclick = doiCho;


/* Bài 7 */
function tangDan() {
    var tang = 0;
    var mangTangDan = [];
    for (var i = 0; i < numArray.length; i++) {
        mangTangDan.push(numArray[i]);
    }
    for (var i = 0; i < mangTangDan.length; i++) {
        for (var j = i + 1; j < mangTangDan.length; j++) {
            if (Number(mangTangDan[i]) > Number(mangTangDan[j])) {
                tang = mangTangDan[i];
                mangTangDan[i] = mangTangDan[j];
                mangTangDan[j] = tang;
            }
        }
    }
    document.getElementById("txtTangDan").innerHTML = "Mảng sau khi sắp xếp: " + mangTangDan;
}
document.getElementById("btn-TangDan").onclick = tangDan;


/* Bài 8 */
function timSNTDauTien() {
    var count = 0;
    var numFirst = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (Number(numArray[i]) >= 2) {
            for (var j = 2; j <= Math.sqrt(Number(numArray[i])); j++) {
                if (Number(numArray[i]) % j == 0) {
                    count++;
                }
            }
            if (count == 0) {
                numFirst = numArray[i];
                break;
            }
            count = 0;
        }
    }
    document.getElementById("txtSNT").innerHTML = "Số nguyên tố đầu tiên: " + numFirst;
}
document.getElementById("btn-SNT").onclick = timSNTDauTien;


/* Bài 9 */
var numArray2 = [];
function nhapNum2() {
    var num2 = document.getElementById("inpNumber").value;
    numArray2.push(num2);
    document.getElementById("txtSN").innerHTML = " " + numArray2;
}
document.getElementById("btn-num2").onclick = nhapNum2;

function demSoNguyen() {
    var count = 0;
    for (var i = 0; i < numArray2.length; i++) {
        if (Number.isInteger(numArray2[i]) == true) {
            count++;
        }
    }
    document.getElementById("txtDemSN").innerHTML = "Số nguyên: " + count;
}
document.getElementById("btn-DemSN").onclick = demSoNguyen;

/* Bài 10 */
function soSanhAD() {
    var soDuong = 0;
    var soAm = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            soDuong++;
        }
        if (numArray[i] < 0) {
            soAm++;
        }
    }
    if (soDuong > soAm) {
        document.getElementById("txtSoSanh").innerHTML = "Số dương" + " > Số âm";
    } else if (soDuong < soAm) {
        document.getElementById("txtSoSanh").innerHTML = "Số dương" + " < Số âm";
    } else {
        document.getElementById("txtSoSanh").innerHTML = "Số dương" + " = Số âm";
    }
}
document.getElementById("btn-soSanh").onclick = soSanhAD;
