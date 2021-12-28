
window.addEventListener("load",function(){
 
    //-----------------formulario submit----------------------
let formulario=document.querySelector("form.datosRegisterForm");
     formulario.addEventListener("submit", function(e){
     //e.preventDefault()
 
let errores=[] 
//--------nombre-----------------
let campoNombre=document.querySelector("input.name")
if(campoNombre.value==""){
    errores.push("El Nombre Tiene Que Estar Completo")}
else if(campoNombre.value.length<2){
    errores.push("Deberá tener al menos 2 caracteres")}    
//--------apellido---------------          
let campoApellido=document.querySelector("input.apellido")
if(campoApellido.value==""){
    errores.push("El Apellido Tiene Que Estar Completo")}
else if(campoApellido.value.length<2){
    errores.push("Deberá tener al menos 2 caracteres")} 
//--------usuario---------------          
let campoUsuario=document.querySelector("input.usuario")
if(campoUsuario.value==""){
    errores.push("El usuario Tiene Que Estar Completo")}
else if(campoUsuario.length<2){
    errores.push("Deberá tener al menos 2 caracteres")}          

//---------email-----------------       
let regexEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
//verifica si es un mail en formato valido
let campoEmail=document.querySelector("input.email")
if(campoEmail.value==""){
    errores.push("El Email Tiene Que Estar Completo")}
else if(regexEmail.test(campoEmail.value) == false){
    alert("Debes completar el campo con un email válido")
}    
 
//--------domicilio---------------          
let campoDomicilio=document.querySelector("input.domicilio")
if(campoDomicilio.value==""){
    errores.push("Ingrese un Domicilio ")}
else if(campoDomicilio.length<2){errores.push("Deberá tener al menos 2 caracteres")}          
//--------imagen---------------          
let campoFoto=document.querySelector("input.foto")
if(campoFoto.value==""){
    errores.push("Cargar una Imagen")}
else if(campoFoto.length<2){errores.push("Deberá tener al menos 2 caracteres")} 
else if (!(/\.(jpg|png|gif)$/i).test(campoFoto.value)) {
    errores.push('El archivo a adjuntar no es una imagen');}
            
//--------contraseña--------------     
let campoPassword=document.querySelector("input.password")
if(campoPassword.value==""){errores.push("El Password Tiene Que Estar Completo")}
else if(campoPassword.value.length<=8){errores.push("Deberá tener al menos 8 caracteres la Contraseña")} 
//--------contraseña confirmacion--------------     
let campoPassword2=document.querySelector("input.password2")
if(campoPassword2.value==""){
     errores.push("Falta la confirmacion Password ")}
else if(campoPassword2.value.length<=8){
     errores.push("Deberá tener al menos 8 caracteres la Contraseña")}  
//----------verifico contaseñas---------------
if(campoPassword.value!==campoPassword2.value){
    errores.push("Contraseña no coinciden")}   
 console.log(campoPassword.value )

     

//-------- confirmacion- errores-------------   
if(errores.length>0){
    e.preventDefault();
    let ulErrores=document.querySelector("div.errores ul")
    for (let i = 0; i < errores.length; i++) {
        ulErrores.innerHTML += "<li>"+ errores[i];+"</li>"   }}  
else{formulario.submit()}        
    }) 
   })