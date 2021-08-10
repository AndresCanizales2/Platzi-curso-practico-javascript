

console.group("cuadrados")
// Código del cuadrado
const ladoCuadrado = 5
const perimetroCuadrado = ladoCuadrado *4 
const areacuadrado = ladoCuadrado * ladoCuadrado


console.log(`los lados de cuadrado miden: ${ladoCuadrado} cm `) 
console.log(`El perímetro del cuadrado mide:  ${perimetroCuadrado} cm `)
console.log(`el area del cuadrado mide: ${areacuadrado} cm²`)
console.groupEnd()
// Código del triangulo
console.group("Triangulo")
const ladoTriangulo1 = 6
const ladoTriangulo2 = 6
const baseTriangulo = 4
const alturaTriangulo = 5.5

const perimetroTriangulo = baseTriangulo + ladoTriangulo2 + ladoTriangulo1
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2
console.log(`Los lados del triangulo miden  ${ladoTriangulo1} cm`)
console.log(`Los lados del triangulo miden  ${ladoTriangulo2} cm`)
console.log(`Los lados del triangulo miden  ${baseTriangulo} cm`)
console.log(`La altura del triangulo es de  ${alturaTriangulo} cm`)
console.log(`El perimetro del triangulo   ${perimetroTriangulo} cm`)
console.log(`El area del triangulo   ${areaTriangulo} cm`)

console.groupEnd()


console.group("Circulo")

const RadioCirculo = 4
const DiametroCirculo = RadioCirculo * 2 
const PI = Math.PI 
const perimetroCirculo  = DiametroCirculo * PI
const areaCirculo = (RadioCirculo * RadioCirculo) *2 

console.log(`el radio del circulo es ${RadioCirculo} cm `)
console.log(`el diametro del circulo es ${DiametroCirculo} cm `)
console.log(`pi es ${PI} cm `)
console.log(`el perimetro del circulo es ${perimetroCirculo} cm `)
console.log(`el circulo area del circulo es ${areaCirculo} cm `)


console.groupEnd()