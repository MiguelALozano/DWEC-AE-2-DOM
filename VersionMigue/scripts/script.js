function cargarFormulario(){
    var formulario = document.createElement("form");// <form></form>
        formulario.action="";
        formulario.method="get"; // uso get para ver valores en barra navegador
    var labelDni = document.createElement("label"); // <label></label>
        labelDni.setAttribute("for", "dni"); //========================== una manera de añadir atributos
    var inputDni = document.createElement("input"); // <input>
        inputDni.type = "text";//======================================= otra manera de añadir atributos
        inputDni.name = "dni";
    var labelNombre = document.createElement("label");// <label> </label>
        labelNombre.setAttribute("for", "nombre");
    var inputNombre = document.createElement("input"); // <input>
        inputNombre.type = "text";
        inputNombre.name = "nombre";
    var labelApellidos = document.createElement("label");// <label> </label>
        labelApellidos.setAttribute("for", "apellidos");
    var inputApellidos = document.createElement("input"); // <input>
        inputApellidos.type = "text";
        inputApellidos.name = "apellidos";
    var labelDireccion = document.createElement("label");
        labelDireccion.setAttribute("for", "direccion");
    var inputDireccion = document.createElement("input");
        inputDireccion.type = "text";
        inputDireccion.name = "direccion";
    var labelTelefono = document.createElement("label");
        labelTelefono.setAttribute("for", "telefono");
    var inputTelefono = document.createElement("input");
        inputTelefono.type = "tel";
        inputTelefono.name = "telefono";
    var inputSubmit = document.createElement("input");
        inputSubmit.setAttribute("type", "submit");
        inputSubmit.setAttribute("value", "Enviar Datos");
    var saltoLinea1 = document.createElement("br");    //<br></br> creo salto de linea
    var saltoLinea2 = document.createElement("br");    //<br></br> creo salto de linea
    var saltoLinea3 = document.createElement("br");    //<br></br> creo salto de linea
    var saltoLinea4 = document.createElement("br");    //<br></br> creo salto de linea
    var saltoLinea5 = document.createElement("br");    //<br></br> creo salto de linea


    var dni = document.createTextNode("DNI"); // DNI
    var nombre = document.createTextNode("Nombre");
    var apellidos = document.createTextNode("Apellidos");
    var direccion = document.createTextNode("Dirección");
    var telefono = document.createTextNode("Teléfono");


    labelDni.appendChild(dni); // <label> DNI </label>
        formulario.appendChild(labelDni); //añado labelDni dentro de form // <form> <label> DNI </label> </form>
        formulario.appendChild(inputDni);
        formulario.appendChild(saltoLinea1); //creo un salto de carro
    labelNombre.appendChild(nombre);
        formulario.appendChild(labelNombre);
        formulario.appendChild(inputNombre);
        formulario.appendChild(saltoLinea2); //creo un salto de carro
    labelApellidos.appendChild(apellidos);
        formulario.appendChild(labelApellidos);
        formulario.appendChild(inputApellidos);
        formulario.appendChild(saltoLinea3); //creo un salto de carro
    labelDireccion.appendChild(direccion);
        formulario.appendChild(labelDireccion);
        formulario.appendChild(inputDireccion);
        formulario.appendChild(saltoLinea4); //creo un salto de carro
    labelTelefono.appendChild(telefono);
        formulario.appendChild(labelTelefono);
        formulario.appendChild(inputTelefono);
        formulario.appendChild(saltoLinea5); //creo un salto de carro
    formulario.appendChild(inputSubmit);

    var saltoLinea6 = document.createElement("br");    //<br></br> creo salto de linea
    formulario.appendChild(saltoLinea6);
    var linea = document.createElement("hr");
    formulario.appendChild(linea);

    let div = document.createElement("div");
    div.id = "migue";

    div.appendChild(formulario);


    document.body.appendChild(div);

   
}
