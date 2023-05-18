
// LOGIN
function limpiarFormulario(){
    document.getElementById("loginForm").reset();
}

function obtenerValores(){
    var inputName= document.getElementById("userName").value;
    var inputPassword= document.getElementById("userPassword").value;
    if (inputName == inputPassword && inputName != ""  &&  inputPassword != "") {
        console.log("prueba 1");
        window.location.href = "index.html";


    } else {
        limpiarFormulario();
        alert("prueba");

    }

}

// total en el carrito

var cantCarrito= 0;
var precioTotal = 0;

// Funcios Agregar item
function sumar(idProducto, idPrecio, iditem, idtotal, idCardLista){
    // cantidad del item
    let cantProducto= parseInt(document.getElementById(idProducto).value) ;

    cantProducto ++;
    document.getElementById(idProducto).value = cantProducto


    //carrito

    cantCarrito ++
     document.getElementById("inputCarrito").value = cantCarrito;

     //precio
     let precioProducto = parseInt(document.getElementById(idPrecio).value);

     precioTotal = precioTotal + precioProducto;

     document.getElementById("inputVCarrito").value = precioTotal;

     //lista de compra
     

     document.getElementById(iditem).value = cantProducto
     let valorTotalItem = cantProducto * precioProducto

     document.getElementById(idtotal).value = valorTotalItem

     // Ocultar o mostrar item en la lista de compra

     let listaCompra = document.getElementById(idCardLista)

     if (cantProducto > 0) {
        listaCompra.classList.remove('mostrar') 
     }
     else {
        listaCompra.classList.add('mostrar')

     }



}

//Funcion restar Item

function restar(idProducto, idPrecio, iditem, idtotal, idCardLista){
    let cantProducto1= parseInt(document.getElementById(idProducto).value) ;

    if (cantProducto1 > 0) {
        cantProducto1 --;
    document.getElementById(idProducto).value = cantProducto1

    cantCarrito --
     document.getElementById("inputCarrito").value = cantCarrito
     //precio
     let precioProducto = parseInt(document.getElementById(idPrecio).value);

     precioTotal =  precioTotal - precioProducto;

     document.getElementById("inputVCarrito").value = precioTotal;

     //lista de compra

     document.getElementById(iditem).value = cantProducto1
     let valorTotalItem = cantProducto1 * precioProducto

     document.getElementById(idtotal).value = valorTotalItem

     // Ocultar o mostrar item en la lista de compra

     let listaCompra = document.getElementById(idCardLista)

     if (cantProducto1 > 0) {
        listaCompra.classList.remove('mostrar') 
     }
     else {
        listaCompra.classList.add('mostrar')

     }
    }
     

}





//boton de pago
var pagarButton = document.getElementById("pagarButton");

pagarButton.addEventListener("click", function(){
    window.location.href = "Despacho.html";
})

//Confirmacion Modal



function volverComprar (){
    window.location.href = "productos.html";
}

//Data Table

