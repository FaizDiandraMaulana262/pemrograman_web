function submitFun() {
    let formNama = document.getElementById("nama").value
    let forEmail= document.getElementById("email").value
    let forAlamat= document.getElementById("alamat").value
    if (formNama === "" || forEmail === "" || forAlamat === "") {
        document.getElementById("form").submit(
            alert("Anda Harus Mengsi Data Dengan Lengkap")
        )
    }
}