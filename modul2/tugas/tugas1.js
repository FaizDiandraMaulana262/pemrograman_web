function submitFun(){
    let bilangan_pertama = document.getElementById("bilangan_pertama").value
    let bilangan_kedua = document.getElementById("bilangan_kedua").value
    const result = parseInt(bilangan_pertama) + parseInt(bilangan_kedua)
    document.getElementById("penjumlahan").submit(
        alert("Hasil Penjumlahan : "+ result)
    )
}   
