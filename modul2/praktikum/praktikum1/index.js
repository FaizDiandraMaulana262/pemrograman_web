let inputs = ""

function onClickButon(value){
    console.log(value)
    let calculatorInput = document.getElementById("calculatorInput")
    
    if (value === "AC") {
        inputs = "0"
    }
    else if(value === "X2"){
        inputs = inputs + "**2"
    }
    else if(value === "MOD"){
        inputs = inputs + "%"
    }
    else{
        inputs = inputs + value
    }
    
    calculatorInput.value = inputs

}

function onClickSubmit(){
    let result = eval(inputs)
    let calculatorInput = document.getElementById("calculatorInput")
    calculatorInput.value = result
}