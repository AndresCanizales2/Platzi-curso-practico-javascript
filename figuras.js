

//console.group("cuadrados")
// Código del cuadrado
//const ladoCuadrado = 5


//console.log(`los lados de cuadrado miden: ${ladoCuadrado} cm `) 
//console.log(`El perímetro del cuadrado mide:  ${perimetroCuadrado} cm `)
//console.log(`el area del cuadrado mide: ${areacuadrado} cm²`)
//console.groupEnd()



// Código del triangulo
/* console.group("Triangulo")
const ladoTriangulo1 = 6
const ladoTriangulo2 = 6
const baseTriangulo = 4
const alturaTriangulo = 5.5

console.log(`Los lados del triangulo miden  ${ladoTriangulo1} cm`)
console.log(`Los lados del triangulo miden  ${ladoTriangulo2} cm`)
console.log(`Los lados del triangulo miden  ${baseTriangulo} cm`)
console.log(`La altura del triangulo es de  ${alturaTriangulo} cm`)
console.log(`El perimetro del triangulo   ${perimetroTriangulo} cm`)
console.log(`El area del triangulo   ${areaTriangulo} cm`)

console.groupEnd()
*/



//circulo




/* 
console.group("Circulo")
console.log(`el radio del circulo es ${RadioCirculo} cm `)
console.log(`el diametro del circulo es ${DiametroCirculo} cm `)
console.log(`pi es ${PI} cm `)
console.log(`el perimetro del circulo es ${perimetroCirculo} cm `)
console.log(`el circulo area del circulo es ${areaCirculo} cm `)
console.groupEnd()
 */
//cuadrado 
const perimetroCuadrado = lado => lado *4 ;
const areacuadrado = lado => lado * lado ;
//triangulo 
const perimetroTriangulo = (base, lado1, lado2) => base+lado1+lado2
const areaTriangulo = (base,altura) => (base * altura) / 2
//circulo
const diametrocirculo = (radio) => radio * 2 
const PI = Math.PI 
const perimetroCirculo  = radio => diametrocirculo(radio) * PI
const areaCirculo = radio => (radio  * radio) *2 

/* 
aqui interactuamos con el html  */



function calcularCirculo(){

    document.getElementById("formulario2").classList.add("was-validated")


  
    const radio = parseInt(document.getElementById("inputRadio").value) 

    const diametro = diametrocirculo(radio)
    const perimetro = perimetroCirculo(radio)
    const area = areaCirculo(radio)

  
    
    
    if (radio){

        document.getElementById("RespuestaAreaCirculo").innerHTML=`${area.toFixed(1)} cm`
        document.getElementById("RespuestaperimetroCirculo").innerHTML=`${perimetro.toFixed(1)} cm`
        document.getElementById("RespuestaDiametroCirculo").innerHTML=`${diametro.toFixed(1)} cm`
        
    }else if (!radio) {
        document.getElementById("RespuestaAreaCirculo").innerHTML=`0 cm`
        document.getElementById("RespuestaperimetroCirculo").innerHTML=`0 cm`
        document.getElementById("RespuestaDiametroCirculo").innerHTML=`0 cm`
    }

}



function CalcularCuadrado(){
    document.getElementById("formulario3").classList.add("was-validated")

    const lados = parseInt(document.getElementById("inputLadosCuadrado").value)
    const perimetro = perimetroCuadrado(lados)
    const area = areacuadrado(lados)



    
    if (lados){

        document.getElementById("RespuestaAreaCuadrado").innerHTML=`${area.toFixed(1)} cm²`
        document.getElementById("RespuestaperimetroCuadrado").innerHTML=`${perimetro.toFixed(1)} cm`
        
    }else if (!lados) {
        document.getElementById("RespuestaAreaCuadradoRespuestaperimetroCuadrado").innerHTML=`0 cm`
        document.getElementById("RespuestaperimetroCuadrado").innerHTML=`0 cm`
        
    }

}

function calcularTriangulo(){


    document.getElementById("formulario").classList.add("was-validated")


    const altura = parseInt(document.getElementById("inputTrainguloAltura").value) 
    const base =  parseInt(document.getElementById("inputTrainguloBase").value)
    const ladoA = parseInt(document.getElementById("inputTrainguloLadoA").value)
    const ladoB = parseInt(document.getElementById("inputTrainguloLadoB").value)



    const perimetro =perimetroTriangulo(base,ladoA,ladoB)
    const area = areaTriangulo(base,altura)




    if (altura&base&ladoA&ladoB){

        document.getElementById("RespuestaArea").innerHTML=`${area.toFixed(1)} cm`
        document.getElementById("Respuestaperimetro").innerHTML=`${perimetro.toFixed(1)} cm`
        
    }else if (altura,base, ladoA,ladoB == 0) {
        document.getElementById("RespuestaArea").innerHTML=`0 cm`
        document.getElementById("Respuestaperimetro").innerHTML=`0 cm`
        
    }
}



