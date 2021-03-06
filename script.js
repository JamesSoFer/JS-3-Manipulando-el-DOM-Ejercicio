/**
 * Ejercicio #4:
 *
 * Validar el formulario
 *
 * ¿Como funciona?:
 * 1. La validacion se hace cuando el usuario presiona el boton "Enviar" para enviar el forom
 * 2. Solo se validan los campos con el * (tienen la clase requerido)
 * 3. Al hacer click en "enviar"
 *     3.1. Los campos invalidos deben ponerse con un borde rojo
 *     3.2. Se debe mostrar un aviso con un titulo de: "Ocurrio un error, verifica
 *     los siguientes campos" y seguido un listado con los campos invalidos. El aviso
 *     debe tener border rojo y fondo rojo claro
 *     3.3. Si todos los camppos son validos, debe mostrar un mensaje abajo del boton enviar
 *     que dice: "Su formulario fue enviado". El aviso debe tener borde verde con fondo verde claro
 *
 * ¿Donde empiezo?:
 *
 * ¿Que voy a evaluar?
 * 1. Que funcione
 * 2. Buenas practicas (incluyendo buenas practicas pasadas)
 *
 */

// BOILERPLATE

const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.querySelectorAll('.requerido')[0].value;
  let apellido = document.querySelectorAll('.requerido')[1].value;
  let email = document.querySelectorAll('.requerido')[2].value;

  if(name.length == 0) {
    this.innerHTML = 'Ocurrio un error, verifica el nombre';
    this.style.color = 'red';
    this.style.textDecoration = 'underline';

  } else if(apellido.length == 0) {
    this.innerHTML = 'Ocurrio un error, verifica el apellido';
    this.style.color = 'red';
    this.style.textDecoration = 'underline';

  } else if(email.length == 0) {
    this.innerHTML = 'Ocurrio un error, verifica email';
    this.style.color = 'red';
    this.style.textDecoration = 'underline';

  } else {
    this.innerHTML = 'Se ha enviado correctamente'
    this.style.color = 'green';
    this.style.textDecoration = 'underline';

  }

  console.log("FORMULARIO ENVIADO");
  
});
