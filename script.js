
function mascara_cnpj(){

let cnpj = document.getElementById("cnpj");

cnpj.addEventListener("input",() => {
    let CNPJ = document.getElementById("cnpj").value
    CNPJ = CNPJ.slice(0,18)
    document.getElementById("cnpj").value = CNPJ
    if(CNPJ [2] != "."){
        if (CNPJ[2] != undefined){
        document.getElementById("cnpj").value = CNPJ.slice(0,2) + "." + CNPJ[2];
        }
        
    }
    

})

cnpj.addEventListener("input",() => {
    let CNPJ = document.getElementById("cnpj").value
    CNPJ = CNPJ.slice(0,18)
    document.getElementById("cnpj").value = CNPJ
    if(CNPJ [6] != "."){
        if (CNPJ[6] != undefined){
        document.getElementById("cnpj").value = CNPJ.slice(0,6) + "." + CNPJ[6];


        }
    }   
})

cnpj.addEventListener("input",() => {
    let CNPJ = document.getElementById("cnpj").value
    CNPJ = CNPJ.slice(0,18)
    document.getElementById("cnpj").value = CNPJ
    if(CNPJ [10] != "/"){
        if (CNPJ[10] != undefined){
        document.getElementById("cnpj").value = CNPJ.slice(0,10) + "/" + CNPJ[10];

        }
    }
})

cnpj.addEventListener("input",() => {
    let CNPJ = document.getElementById("cnpj").value
    CNPJ = CNPJ.slice(0,18)
    document.getElementById("cnpj").value = CNPJ
    if(CNPJ [15] != "-"){
        if (CNPJ[15] != undefined){
        document.getElementById("cnpj").value = CNPJ.slice(0,15) + "-" + CNPJ[15];

        }
    }
})
}








function mascara_cpf(){

let cpf = document.getElementById("cpf");

cpf.addEventListener("input",() => {
    let CPF = document.getElementById("cpf").value
    CPF = CPF.slice(0,14)
    document.getElementById("cpf").value = CPF
    if(CPF [3] != "."){
        if (CPF[3] != undefined){
        document.getElementById("cpf").value = CPF.slice(0,3) + "." + CPF[3];
        }
        
    }
    

})

cpf.addEventListener("input",() => {
    let CPF = document.getElementById("cpf").value
    CPF = CPF.slice(0,18)
    document.getElementById("cpf").value = CPF
    if(CPF [7] != "."){
        if (CPF[7] != undefined){
        document.getElementById("cpf").value = CPF.slice(0,7) + "." + CPF[7];


        }
    }   
})

cpf.addEventListener("input",() => {
    let CPF = document.getElementById("cpf").value
    CPF = CPF.slice(0,18)
    document.getElementById("cpf").value = CPF
    if(CPF [11] != "-"){
        if (CPF[11] != undefined){
        document.getElementById("cpf").value = CPF.slice(0,11) + "-" + CPF[11];

        }
    }
})

}









function mascara_cep(){

let cep = document.getElementById("cep");

cpf.addEventListener("input",() => {
    let CEP = document.getElementById("cep").value
    CEP = CEP.slice(0,14)
    document.getElementById("cep").value = CEP
    if(CEP [2] != "-"){
        if (CEP[2] != undefined){
        document.getElementById("cep").value = CEP.slice(0,2) + "-" + CEP[2];
        }
        
    }
    

})

cep.addEventListener("input",() => {
    let CEP = document.getElementById("cep").value
    CEP = CEP.slice(0,18)
    document.getElementById("cep").value = CEP
    if(CEP [6] != "-"){
        if (CEP[6] != undefined){
        document.getElementById("cep").value = CEP.slice(0,6) + "-" + CEP[6];


        }
    }   
})


}




function mascara_tel() {

let telefone = document.getElementById("telefone")

telefone.addEventListener("input", () => {
    let TELEFONE = document.getElementById("telefone").value
    TELEFONE = TELEFONE.slice(0, 15)
    document.getElementById("telefone").value = TELEFONE
    if (TELEFONE[0] != "(") {
        if (TELEFONE[0] != undefined) {
            document.getElementById("telefone").value = "(" + TELEFONE[0];
        }
    }

})

telefone.addEventListener("input", () => {
    let TELEFONE = document.getElementById("telefone").value
    TELEFONE = TELEFONE.slice(0, 15)
    document.getElementById("telefone").value = TELEFONE
    if (TELEFONE[3] != ")") {
        if (TELEFONE[3] != undefined) {
            document.getElementById("telefone").value = TELEFONE.slice(0,3) + ")" + TELEFONE[3];
        }
    }

})

telefone.addEventListener("input", () => {
    let TELEFONE = document.getElementById("telefone").value
    TELEFONE = TELEFONE.slice(0, 15)
    document.getElementById("telefone").value = TELEFONE
    if (TELEFONE[4] != " ") {
        if (TELEFONE[4] != undefined) {
            document.getElementById("telefone").value = TELEFONE.slice(0,4) + " " + TELEFONE[4];
        }
    }

})

telefone.addEventListener("input", () => {
    let TELEFONE = document.getElementById("telefone").value
    TELEFONE = TELEFONE.slice(0, 15)
    document.getElementById("telefone").value = TELEFONE
    if (TELEFONE[10] != "-") {
        if (TELEFONE[10] != undefined) {
            document.getElementById("telefone").value = TELEFONE.slice(0,10) + "-" + TELEFONE[10];
        }
    }

})
}






function mascara_code() {

let code = document.getElementById("code")

code.addEventListener("input", () => {
    let CODE = document.getElementById("code").value
    CODE = CODE.slice(0, 20)
    document.getElementById("code").value = CODE
    if (CODE[2] != "_") {
        if (CODE[2] != undefined) {
            document.getElementById("code").value = CODE.slice(0,2) + "_" + CODE[2];
        }
    }
    
})

code.addEventListener("input", () => {
    let CODE = document.getElementById("code").value
    CODE = CODE.slice(0, 20)
    document.getElementById("code").value = CODE
    if (CODE[5] != "/") {
        if (CODE[5] != undefined) {
            document.getElementById("code").value = CODE.slice(0,5) + "/" + CODE[5];
        }
    }
    
})

code.addEventListener("input", () => {
    let CODE = document.getElementById("code").value
    CODE = CODE.slice(0, 20)
    document.getElementById("code").value = CODE
    if (CODE[6] != "/") {
        if (CODE[6] != undefined) {
            document.getElementById("code").value = CODE.slice(0,6) + "/" + CODE[6];
        }
    }
    
})

code.addEventListener("input", () => {
    let CODE = document.getElementById("code").value
    CODE = CODE.slice(0, 20)
    document.getElementById("code").value = CODE
    if (CODE[10] != "-") {
        if (CODE[10] != undefined) {
            document.getElementById("code").value = CODE.slice(0,10) + "-" + CODE[10];
        }
    }
    
})

code.addEventListener("input", () => {
    let CODE = document.getElementById("code").value
    CODE = CODE.slice(0, 20)
    document.getElementById("code").value = CODE
    if (CODE[14] != ".") {
        if (CODE[14] != undefined) {
            document.getElementById("code").value = CODE.slice(0,14) + "." + CODE[14];
        }
    }
    
})

code.addEventListener("input", () => {
    let CODE = document.getElementById("code").value
    CODE = CODE.slice(0, 20)
    document.getElementById("code").value = CODE
    if (CODE[15] != "9") {
        if (CODE[15] != undefined) {
            document.getElementById("code").value = CODE.slice(0,15) + "9" + CODE[15];
        }
    }
    
})

code.addEventListener("input", () => {
    let CODE = document.getElementById("code").value
    CODE = CODE.slice(0, 20)
    document.getElementById("code").value = CODE
    if (CODE[16] != ".") {
        if (CODE[16] != undefined) {
            document.getElementById("code").value = CODE.slice(0,16) + "." + CODE[16];
        }
    }
    
})
}



document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 
        alert("Seu formulário foi enviado");
    });
});