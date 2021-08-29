

const onClickButtonPriceDiscount = () => {
   
    document.getElementById("formulario").classList.add("was-validated")
    
    const descuento = parseInt(document.getElementById("textDescuento").value) 
    const precioOriginal = parseInt(document.getElementById("textPrecio").value) 
    const porcentajeDescuento = precioOriginal* (descuento/100)
    const precioTotal   = precioOriginal  - porcentajeDescuento



  


    if(precioOriginal&&descuento){
     
        document.getElementById("RespuestaArea").innerHTML= `<i class="fas fa-dollar-sign"></i> ${precioTotal}`
        console.log(precioTotal)

    }else if (!(precioOriginal&descuento) ){
        document.getElementById("RespuestaArea").innerHTML= `<i class="fas fa-dollar-sign"></i>  0`
      

    }
    
}


/* Existe un patroncito/principio de programación llamado 
Single Responsibility. Podemos aplicarlo de muchas
formas (para funciones, clases, etc.). Para lo que
 
vemos en este curso me gusta seguirlo por líneas de 
código (lo que vendría a ser “Single Line Responsibility”), 
que cada línea tenga una única tarea para facilitar mucho
la legibilidad (facilidad para leer) y mantenibilidad
(facilidad para cambiar) del código. */