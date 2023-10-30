// BÀI TẬP JS BUỔI 7 - 8 
var arrSoK = [] ;

document.getElementById('btnThemSo').onclick = function () {
    var soK = document.getElementById('txt-soK').value*1;
    arrSoK.push(soK); 
    console.log(arrSoK);
    document.getElementById('mangSoK').innerHTML = arrSoK;
}; 

document.getElementById('btnTinhTongSoDuong').addEventListener('click', function (){
    var tong = 0; 
    for (var i=0; i < arrSoK.length; i++)  {
        if (arrSoK[i] > 0) {
            tong += arrSoK[i];
        }
    }
    document.getElementById('tongSoDuong').innerHTML = tong; 
});


document.getElementById('btnDemSoDuong').addEventListener('click', function (){
    var tong = 0; 
    for (var i=0; i < arrSoK.length; i++)  {
        if (arrSoK[i] > 0) {
            tong++; 
        }
    }
    document.getElementById('demSoDuong').innerHTML = tong; 
});

// sắp xếp tăng dần 
document.getElementById('btnTangDan').addEventListener('click', function (){
    var newarrSoK = arrSoK.sort();
    console.log(newarrSoK);
    document.getElementById('tangDan').innerHTML = newarrSoK; 
});

// đổi chỗ 
document.getElementById('btnDoiCho').addEventListener('click', function (){
   var arrSoKReversed = [];
   for ( var z = arrSoK.length-1; z>=0; z--) {
    var soK = arrSoKReversed[z];
    arrSoKReversed.push(arrSoK);
   }
//    console.log(arrSoKReversed); 
document.getElementById('doiCho').innerHTML = arrSoKReversed; 
});
