// Elemento sobre el que vamos a añadir el formulario
const contenedor = document.querySelector('.contenedor');

// Creamos los distintos elementos y añadimos sus atributos correspondientes
const formulario = document.createElement("form");
formulario.setAttribute("action", "ejemplo.php");
formulario.setAttribute("method", "POST");

const tituloPrincipal = document.createElement("h1");
tituloPrincipal.textContent = "Formulario de Inscripción";

const infoPersonal = document.createElement("h3");
infoPersonal.textContent = "Información Personal";

const dni = document.createElement("input");
dni.setAttribute("type", "text");
dni.setAttribute("name", "DNI");
dni.setAttribute("placeholder", "DNI");

const nombre = document.createElement("input");
nombre.setAttribute("type", "text");
nombre.setAttribute("name", "nombre");
nombre.setAttribute("placeholder", "Nombre");

const apellidos = document.createElement("input");
apellidos.setAttribute("type", "text");
apellidos.setAttribute("name", "apellidos");
apellidos.setAttribute("placeholder", "Apellidos");

const direccion = document.createElement("input");
direccion.setAttribute("type", "text");
direccion.setAttribute("name", "direccion");
direccion.setAttribute("placeholder", "Dirección");

const telefono = document.createElement("input");
telefono.setAttribute("type", "tel");
telefono.setAttribute("name", "telefono");
telefono.setAttribute("placeholder", "Teléfono");

const tituloGenero = document.createElement("h3");
tituloGenero.textContent = "Género";

// Label e input type="radio"
const labelGenero1 = document.createElement("label");
labelGenero1.setAttribute("for", "mujer");
labelGenero1.textContent = "Mujer";

const labelGenero2 = document.createElement("label");
labelGenero2.setAttribute("for", "hombre");
labelGenero2.textContent = "Hombre";

const radioGenero1 = document.createElement("input");
radioGenero1.setAttribute("type", "radio");
radioGenero1.setAttribute("id", "mujer");
radioGenero1.setAttribute("name", "genero");
radioGenero1.setAttribute("value", "mujer");

const radioGenero2 = document.createElement("input");
radioGenero2.setAttribute("type", "radio");
radioGenero2.setAttribute("id", "hombre");
radioGenero2.setAttribute("name", "genero");
radioGenero2.setAttribute("value", "hombre");

const tituloEstudios = document.createElement("h3");
tituloEstudios.textContent = "Estudios";

const labelEstudios1 = document.createElement("label");
labelEstudios1.setAttribute("for", "eso");
labelEstudios1.textContent = "ESO";

const labelEstudios2 = document.createElement("label");
labelEstudios2.setAttribute("for", "bat");
labelEstudios2.textContent = "BAT";

const labelEstudios3 = document.createElement("label");
labelEstudios3.setAttribute("for", "fp");
labelEstudios3.textContent = "FP";

const labelEstudios4 = document.createElement("label");
labelEstudios4.setAttribute("for", "universidad");
labelEstudios4.textContent = "Universidad";

const radioEstudios1 = document.createElement("input");
radioEstudios1.setAttribute("type", "radio");
radioEstudios1.setAttribute("id", "eso");
radioEstudios1.setAttribute("name", "estudios");
radioEstudios1.setAttribute("value", "eso");

const radioEstudios2 = document.createElement("input");
radioEstudios2.setAttribute("type", "radio");
radioEstudios2.setAttribute("id", "bat");
radioEstudios2.setAttribute("name", "estudios");
radioEstudios2.setAttribute("value", "bat");

const radioEstudios3 = document.createElement("input");
radioEstudios3.setAttribute("type", "radio");
radioEstudios3.setAttribute("id", "fp");
radioEstudios3.setAttribute("name", "estudios");
radioEstudios3.setAttribute("value", "fp");

const radioEstudios4 = document.createElement("input");
radioEstudios4.setAttribute("type", "radio");
radioEstudios4.setAttribute("id", "universidad");
radioEstudios4.setAttribute("name", "estudios");
radioEstudios4.setAttribute("value", "universidad");

const tituloIntereses = document.createElement("h3");
tituloIntereses.textContent = "Intereses";

// Label e input type="checkbox"
const labelIntereses1 = document.createElement("label");
labelIntereses1.setAttribute("for", "html");
labelIntereses1.textContent = "HTML5";

const labelIntereses2 = document.createElement("label");
labelIntereses2.setAttribute("for", "css");
labelIntereses2.textContent = "CSS3";

const labelIntereses3 = document.createElement("label");
labelIntereses3.setAttribute("for", "js");
labelIntereses3.textContent = "JavaScript";

const labelIntereses4 = document.createElement("label");
labelIntereses4.setAttribute("for", "java");
labelIntereses4.textContent = "Java";

const labelIntereses5 = document.createElement("label");
labelIntereses5.setAttribute("for", "sql");
labelIntereses5.textContent = "SQL";

const checkIntereses1 = document.createElement("input");
checkIntereses1.setAttribute("type", "checkbox");
checkIntereses1.setAttribute("id", "html");
checkIntereses1.setAttribute("name", "intereses");
checkIntereses1.setAttribute("value", "html5");

const checkIntereses2 = document.createElement("input");
checkIntereses2.setAttribute("type", "checkbox");
checkIntereses2.setAttribute("id", "css");
checkIntereses2.setAttribute("name", "intereses");
checkIntereses2.setAttribute("value", "css3");

const checkIntereses3 = document.createElement("input");
checkIntereses3.setAttribute("type", "checkbox");
checkIntereses3.setAttribute("id", "js");
checkIntereses3.setAttribute("name", "intereses");
checkIntereses3.setAttribute("value", "javascript");

const checkIntereses4 = document.createElement("input");
checkIntereses4.setAttribute("type", "checkbox");
checkIntereses4.setAttribute("id", "java");
checkIntereses4.setAttribute("name", "intereses");
checkIntereses4.setAttribute("value", "java");

const checkIntereses5 = document.createElement("input");
checkIntereses5.setAttribute("type", "checkbox");
checkIntereses5.setAttribute("id", "sql");
checkIntereses5.setAttribute("name", "intereses");
checkIntereses5.setAttribute("value", "sql");

const tituloProvincia = document.createElement("h3");
tituloProvincia.textContent = "Provincia";

const selectProvincia = document.createElement("select");
selectProvincia.setAttribute("id", "select");

// Creamos un array con distintas provincias
const provincias = ["Madrid", "Barcelona", "Alicante", "Zaragoza"];

// Por cada provincia:
// 1. Creamos un <option></option>
// 2. Le asignamos un value con el nombre de dicha provincia
// 3. El contenido (texto) será el del propio elemento (Ej: "Madrid")
// 4. Añadimos cada opción al <select></select>
provincias.forEach(function(provincia) {
    let opcion = document.createElement("option");
    opcion.setAttribute("value", provincia);
    opcion.textContent = provincia;
    selectProvincia.appendChild(opcion);
});

const tituloObservaciones = document.createElement("h3");
tituloObservaciones.textContent = "Observaciones";

// Creamos el elemento <textarea>
const textArea = document.createElement("textarea");
textArea.setAttribute("id", "observaciones");
textArea.setAttribute("name", "observaciones");
textArea.setAttribute("rows", "5");
textArea.setAttribute("cols", "30");

const submit = document.createElement("input");
submit.setAttribute("type", "submit");
submit.setAttribute("value", "Enviar");

const borrar = document.createElement("input");
borrar.setAttribute("type", "reset");
borrar.setAttribute("value", "Borrar");

// Creamos las imágenes
const imagen1 = document.createElement("img");
imagen1.setAttribute("src", "images/imagen1.jpg");
imagen1.setAttribute("alt", "imagen de código");

const imagen2 = document.createElement("img");
imagen2.setAttribute("src", "images/imagen2.jpg");
imagen2.setAttribute("alt", "imagen de mac");


// Añadimos los elementos creados al formulario
formulario.append(tituloPrincipal, infoPersonal);
formulario.append(dni, document.createElement("br"));
formulario.append(nombre, document.createElement("br"));
formulario.append(apellidos, document.createElement("br"));
formulario.append(direccion, document.createElement("br"));
formulario.append(telefono, document.createElement("br"));
formulario.append(document.createElement("hr"), tituloGenero);
formulario.append(radioGenero1, labelGenero1, radioGenero2, labelGenero2);
formulario.append(document.createElement("hr"), tituloEstudios);
formulario.append(radioEstudios1, labelEstudios1, radioEstudios2, labelEstudios2,
                  radioEstudios3, labelEstudios3, radioEstudios4, labelEstudios4);
formulario.append(document.createElement("hr"), tituloIntereses);

formulario.append(checkIntereses1, labelIntereses1, checkIntereses2, labelIntereses2,
                  checkIntereses3, labelIntereses3, checkIntereses4, labelIntereses4,
                  checkIntereses5, labelIntereses5);
formulario.append(document.createElement("hr"), tituloProvincia, selectProvincia);
formulario.append(document.createElement("hr"), tituloObservaciones, textArea);
formulario.append(document.createElement("hr"), submit, borrar);
formulario.append(document.createElement("br"), imagen1, imagen2);


// Añadimos todo el formulario al único "div" que tenemos en el HTML
contenedor.append(formulario);