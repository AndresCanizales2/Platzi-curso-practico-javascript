

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
const perimetroTriangulo = (base, lado1, lado2) => base+ lado1 + lado2
const areaTriangulo = (base,altura) => (base * altura) / 2
//circulo
const DiametroCirculo = radio => radio * 2 
const PI = Math.PI 
const perimetroCirculo  = radio => DiametroCirculo(radio) * PI
const areaCirculo = radio => (radio  * radio) *2 