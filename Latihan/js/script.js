function validasi(); {
    var nama = document.getElementById("namaInput").value;
    var tanggallahir = document.getElementById("tanggalLahirInput").value;
    var jeniskelamin = document.getElementById("jenisKelamin").value;
    var pesan = document.getElementById("pesan"),value;
    if (nama !="" && tanggallahir!="" && jeniskelamin !="" && Pesan !="") {
        return true;
    } else {
        alert('Anda harus mengisi data dengan lengkap !') ;
    }
}
