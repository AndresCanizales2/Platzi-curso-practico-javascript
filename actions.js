var triangulo = document.getElementById("triangulo")
var cuadrado = document.getElementById("cuadrado")
var circulo = document.getElementById("circulo")
var rtriangulo = document.getElementById("rtriangulo")
var rcuadrado = document.getElementById("rcuadrado")
var rcirculo = document.getElementById("rcirculo")


function mostrarTriangulo() {
    triangulo.style.display = "block"
    cuadrado.style.display = "none"
    circulo.style.display = "none"


    rtriangulo.style.display = "block"
    rcuadrado.style.display = "none"
    rcirculo.style.display = "none"
}
function mostrarCirculo() {
    triangulo.style.display = "none"
    cuadrado.style.display = "none"
    circulo.style.display = "block"
    
    rtriangulo.style.display = "none"
    rcuadrado.style.display = "none"
    rcirculo.style.display = "block"
}
function mostrarCuadrado() {
    triangulo.style.display = "none"
    cuadrado.style.display = "block"
    circulo.style.display = "none"
    
    rtriangulo.style.display = "none"
    rcuadrado.style.display = "block"
    rcirculo.style.display = "none"
}