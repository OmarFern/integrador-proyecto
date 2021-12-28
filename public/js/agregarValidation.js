
window.addEventListener("load",function(){
 
    //-----------------formulario submit----------------------
let formulario=document.querySelector("form.datosAgregarForm");
     formulario.addEventListener("submit", function(e){
     //e.preventDefault()
 
let errores=[] 
//--------nombre-----------------
let campoNombre=document.querySelector("input.name")
if(campoNombre.value==""){
    errores.push("El Nombre Tiene Que Estar Completo")}
else if(campoNombre.value.length<5){
    errores.push("Deberá tener al menos 2 caracteres")}    
//--------DESCRIPCION---------------          
let campoDescripcion=document.querySelector("extarea.descripcion")
if(campoDescripcion.value==""){
    errores.push("La descripcion Tiene Que Estar Completo")}
else if(campoDescripcion.value.length<20){
    errores.push("Deberá tener al menos 20 caracteres")} 
               
//--------imagen---------------          
let campoFoto=document.querySelector("input.foto")
if(campoFoto.value==""){
    errores.push("Cargar una Imagen")}
else if(campoFoto.length<2){errores.push("Deberá tener al menos 2 caracteres")} 
else if (!(/\.(jpg|png|gif)$/i).test(campoFoto.value)) {
    errores.push('El archivo a adjuntar no es una imagen');}
             
//-------- confirmacion- errores-------------   
if(errores.length>0){
    e.preventDefault();
    let ulErrores=document.querySelector("div.errores ul")
    for (let i = 0; i < errores.length; i++) {
        ulErrores.innerHTML += "<li>"+ errores[i];+"</li>"   }}  
//else{formulario.submit()}        
    }) 
   })