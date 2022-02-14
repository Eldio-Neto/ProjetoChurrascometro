// Carne 400g por pessoa + 6h 650g
// Cerveja - 1200ml por pessoa + 6h 2000 ml
//refrigerante/agua - 1000ml por pessoa + 6horas 1500ml
//crianças valem por 0,5

var inputadultos = document.getElementById("adultos");
var inputcriancas = document.getElementById("criancas");
var inputhoras = document.getElementById("duracao");
var resultado = document.getElementById("resultado")
var carne;
var refri;
var cerv;
const carne1 = 0.4;       // kg de carne
const carne2 = 0.65;      // kg de carne
const refri1 = 1.0;       // litros de refri
const refri2 = 1.5;       // litros de refri
const cerv1 = 1.2         // litros de cerveja 
const cerv2 = 2.0         // litros de cerveja 

function calcularCarne() {

    
    if (inputhoras.value >= 6) {


        let adultos = inputadultos.value;
        let criancas = inputcriancas.value;


        carne = carne2 * adultos + (carne2 / 2 * criancas);

        return carne 
        
    }

    else {

        let adultos = inputadultos.value;
        let criancas = inputcriancas.value;


        carne = carne1 * adultos + (carne1 / 2 * criancas);

        return carne 
    }

    
    

}
function calcularCerveja() {

    if (inputhoras.value >= 6) {


        let adultos = inputadultos.value
       


        cerv = cerv2 * adultos 

        return cerv 

    }

    else {

        let adultos = inputadultos.value
        


        cerv = cerv1 * adultos 

        return cerv 
    }


}
function calcularRefrigerante() {

    if (inputhoras.value >= 6) {


        let adultos = inputadultos.value
        let criancas = inputcriancas.value


        refri = refri2 * adultos + (refri2 / 2 * criancas);

        return refri 

    }

    else {

        let adultos = inputadultos.value
        let criancas = inputcriancas.value


        refri = refri1 * adultos + (refri1 / 2 * criancas);

        return refri 
    }
}
function showdisplay(){
    resultado.style.display = "block"
}
function calcular() {
    calcularCarne()
    calcularCerveja()
    calcularRefrigerante()
    showdisplay()
    inputadultos.value = ""
    inputcriancas.value = ""
    inputhoras.value = ""

    resultado.innerHTML = `<p> <img src="./SRC/images/meat.png" alt=""> ${Math.ceil(carne)} kg de carne  </p>`
    resultado.innerHTML += `<p> <img src="./SRC/images/beer.png" alt=""> ${Math.ceil(cerv)} L de cerveja </p>`
    resultado.innerHTML += `<p> <img src="./SRC/images/soda.png" alt=""> ${Math.ceil(refri)} L de refrigerante/água </p>`

    
}



