function mostrarFormulario() {
    //creo el formulario
    let form = document.createElement("form");

    //h2 con texto
    let h2 = document.createElement("h2");
    let th2 = document.createTextNode("Academia de baile - \"Los 4 Jinetes\"");
    h2.appendChild(th2); //añado el texto a h2
    form.appendChild(h2); // añado el h2 al formulario

    //Div con la clase campos
    let divCampos = document.createElement("div");
    divCampos.setAttribute("class", "campos");

    //apartado dni
    let divDni = document.createElement("div");
    let labelDni = document.createElement("label");
    labelDni.setAttribute("for", "dni")
    let inputDni = document.createElement("input");
    inputDni.setAttribute("type", "text");
    inputDni.setAttribute("name", "dni");
    inputDni.setAttribute("id", "id");
    inputDni.setAttribute("placeholder","DNI");
    divDni.appendChild(labelDni);
    divDni.appendChild(inputDni);
    divCampos.appendChild(divDni);

    //apartado Nombre
    let divNombre = document.createElement("div");
    let labelNombre = document.createElement("label");
    labelNombre.setAttribute("for", "apellidos");
    let inputNombre = document.createElement("input");
    inputNombre.setAttribute("type", "text");
    inputNombre.setAttribute("name", "nombre");
    inputNombre.setAttribute("id", "nombre");
    inputNombre.setAttribute("placeholder", "Nombre");
    divNombre.appendChild(labelNombre);
    divNombre.appendChild(inputNombre);
    divCampos.appendChild(divNombre);

    //apartado Apellidos
    let divApellidos = document.createElement("div");
    let labelApellidos = document.createElement("label");
    labelApellidos.setAttribute("for", "apellidos");
    let inputApellidos = document.createElement("input");
    inputApellidos.setAttribute("type", "text");
    inputApellidos.setAttribute("name", "apellidos");
    inputApellidos.setAttribute("id", "apellidos");
    inputApellidos.setAttribute("placeholder", "Apellidos");
    divApellidos.appendChild(labelApellidos);
    divApellidos.appendChild(inputApellidos);
    divCampos.appendChild(divApellidos);

    //apartado Telefono
    let divTelefono = document.createElement("div");
    let labelTelefono = document.createElement("label");
    labelTelefono.setAttribute("for", "telefono");
    let inputTelefono = document.createElement("input");
    inputTelefono.setAttribute("type", "tel");
    inputTelefono.setAttribute("name", "telefono");
    inputTelefono.setAttribute("id", "telefono");
    inputTelefono.setAttribute("placeholder", "Teléfono");
    divTelefono.appendChild(labelTelefono);
    divTelefono.appendChild(inputTelefono);
    divCampos.appendChild(divTelefono);

    form.appendChild(divCampos);

    //apartado checkbox
    let divCheckBox = document.createElement("div");
    let labelGenero = document.createElement("label");
    let tlabelGenero = document.createTextNode("Genero: ");
    labelGenero.appendChild(tlabelGenero);

    let inputHombre = document.createElement("input");
    inputHombre.setAttribute("type", "radio");
    inputHombre.setAttribute("name", "hombre");
    inputHombre.setAttribute("id", "hombre");
    let labelHombre = document.createElement("label");
    let tlabelHombre = document.createTextNode("Hombre ");
    labelHombre.appendChild(tlabelHombre);

    divCheckBox.appendChild(labelGenero);
    divCheckBox.appendChild(inputHombre);
    divCheckBox.appendChild(labelHombre)

    let inputMujer = document.createElement("input");
    inputMujer.setAttribute("type", "radio")
    inputMujer.setAttribute("name", "mujer");
    inputMujer.setAttribute("id", "mujer")
    let labelMujer = document.createElement("label");
    let tlabelMujer = document.createTextNode("Mujer ");
    labelMujer.appendChild(tlabelMujer);

    divCheckBox.appendChild(inputMujer);
    divCheckBox.appendChild(labelMujer);

    let inputIndef = document.createElement("input");
    inputIndef.setAttribute("type", "radio");
    inputIndef.setAttribute("name", "mujer");
    inputIndef.setAttribute("id", "indefinido")
    let labelIndef = document.createElement("label");
    let tlabelIndef = document.createTextNode("Indefinido: ");
    labelIndef.appendChild(tlabelIndef);

    divCheckBox.appendChild(inputIndef);
    divCheckBox.appendChild(labelIndef);

    divCampos.appendChild(divCheckBox);

    form.appendChild(divCampos);

    //apartado radioButton
    let divRadio = document.createElement("div");
    let pradio = document.createElement("p");
    let ptexto = document.createTextNode("Qué te gusta bailar");
    pradio.appendChild(ptexto);
    divRadio.appendChild(pradio);

    let labelSalsa = document.createElement("label");
    let tlabelSalsa = document.createTextNode("Salsa ");
    labelSalsa.appendChild(tlabelSalsa);
    divRadio.appendChild(labelSalsa);
    let inputSalsa = document.createElement("input");
    inputSalsa.setAttribute("type", "checkbox");
    inputSalsa.setAttribute("name", "salsa");
    inputSalsa.setAttribute("id", "salsa");
    divRadio.appendChild(inputSalsa);

    let labelBachata = document.createElement("label");
    let tlabelBachata = document.createTextNode("Bachata ");
    labelBachata.appendChild(tlabelBachata);
    divRadio.appendChild(labelBachata);
    let inputBachata = document.createElement("input");
    inputBachata.setAttribute("type", "checkbox");
    inputBachata.setAttribute("name", "bachata");
    inputBachata.setAttribute("id", "bachata");
    divRadio.appendChild(inputBachata);

    let labelKizomba = document.createElement("label");
    let tlabelKizomba = document.createTextNode("Kizomba ");
    labelKizomba.appendChild(tlabelKizomba);
    divRadio.appendChild(labelKizomba);
    let inputKizomba = document.createElement("input");
    inputKizomba.setAttribute("type", "checkbox");
    inputKizomba.setAttribute("name", "kizomba");
    inputKizomba.setAttribute("id", "kizomba");
    divRadio.appendChild(inputKizomba);

    let labelSalon = document.createElement("label");
    let tlabelSalon = document.createTextNode("Salón ");
    labelSalon.appendChild(tlabelSalon);
    divRadio.appendChild(labelSalon);
    let inputSalon = document.createElement("input");
    inputSalon.setAttribute("type", "checkbox");
    inputSalon.setAttribute("name", "salon");
    inputSalon.setAttribute("id", "salon");
    divRadio.appendChild(inputSalon);

    let labelBarra = document.createElement("label");
    let tlabelBarra = document.createTextNode("Barra ");
    labelBarra.appendChild(tlabelBarra);
    divRadio.appendChild(labelBarra);
    let inputBarra = document.createElement("input");
    inputBarra.setAttribute("type", "checkbox");
    inputBarra.setAttribute("name", "barra");
    inputBarra.setAttribute("id", "barra");
    divRadio.appendChild(inputBarra);

    divCampos.appendChild(divRadio)

    form.appendChild(divCampos);

    //Zona imagenes
    let divImg = document.createElement("div");
    divImg.setAttribute("id", "imagenes");

    let divFoto1 = document.createElement("div");
    divFoto1.setAttribute("id", "foto1");

    let img1 = document.createElement("img");
    img1.setAttribute("src", "./images/preillumination-seth-M12-_qST8iQ-unsplash.jpg");
    img1.setAttribute("alt", "Bailes de salon");
    divFoto1.appendChild(img1);

    let divFotoC1 = document.createElement("div");
    let tfoto1 = document.createTextNode("Photo by ");
    divFotoC1.appendChild(tfoto1);
    let afoto1 = document.createElement("a");
    afoto1.setAttribute("href", "https://unsplash.com/@7seth?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText");
    let tafoto1 = document.createTextNode("Preillumination SeTh");
    afoto1.appendChild(tafoto1);
    divFotoC1.appendChild(afoto1);
    let tfoto11 = document.createTextNode(" on ");
    divFotoC1.appendChild(tfoto11);
    let afoto11 = document.createElement("a");
    afoto11.setAttribute("href", "https://unsplash.com/s/photos/dance?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText");
    let tafoto11 = document.createTextNode("Unsplash");
    afoto11.appendChild(tafoto11);
    divFotoC1.appendChild(afoto11);
    divFoto1.appendChild(divFotoC1);
    divImg.appendChild(divFoto1);

    let divFoto2 = document.createElement("div");
    divFoto2.setAttribute("id", "foto2");

    let img2 = document.createElement("img");
    img2.setAttribute("src", "./images/ardian-lumi-6Woj_wozqmA-unsplash.jpg");
    img2.setAttribute("alt", "sbk");
    divFoto2.appendChild(img2);

    let divFotoC2 = document.createElement("div");
    let tfoto2 = document.createTextNode("Photo by ");
    divFotoC2.appendChild(tfoto2);
    let afoto2 = document.createElement("a");
    afoto2.setAttribute("href", "https://unsplash.com/@7seth?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText");
    let tafoto2 = document.createTextNode("Preillumination SeTh");
    afoto2.appendChild(tafoto2);
    divFotoC2.appendChild(afoto2);
    let tfoto22 = document.createTextNode(" on ");
    divFotoC2.appendChild(tfoto22);
    let afoto22 = document.createElement("a");
    afoto22.setAttribute("href", "https://unsplash.com/s/photos/dance?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText");
    let tafoto22 = document.createTextNode("Unsplash");
    afoto22.appendChild(tafoto22);
    divFotoC2.appendChild(afoto22);
    divFoto2.appendChild(divFotoC2);
    divImg.appendChild(divFoto2);

    form.appendChild(divImg);

    //Para el select
    let divSelect = document.createElement("div");
    divSelect.setAttribute("class", "select");
    let labelSelect = document.createElement("label");
    let tlabelSelect = document.createTextNode("Que estilo te gusta mas?: ");
    labelSelect.appendChild(tlabelSelect);
    divSelect.appendChild(labelSelect);

    let select = document.createElement("select");
    select.setAttribute("name", "gustos");
    select.setAttribute("id","gustos");

    let option1 = document.createElement("option");
    option1.setAttribute("value", "salsa");
    let toption1 = document.createTextNode("Salsa");
    option1.appendChild(toption1);
    select.appendChild(option1);

    let option2 = document.createElement("option");
    option2.setAttribute("value", "bachata");
    let toption2 = document.createTextNode("Bachata");
    option2.appendChild(toption2);
    select.appendChild(option2)

    let option3 = document.createElement("option");
    option3.setAttribute("value", "kizomba");
    let toption3 = document.createTextNode("Kizomba");
    option3.appendChild(toption3);
    select.appendChild(option3)

    let option4 = document.createElement("option");
    option4.setAttribute("value", "valsIngles");
    let toption4 = document.createTextNode("Vals Ingles");
    option4.appendChild(toption4);
    select.appendChild(option4);

    let option5 = document.createElement("option");
    option5.setAttribute("value", "tango");
    let toption5 = document.createTextNode("Tango");
    option5.appendChild(toption5);
    select.appendChild(option5);

    let option6 = document.createElement("option");
    option6.setAttribute("value", "otros");
    let toption6 = document.createTextNode("Otros");
    option6.appendChild(toption6);
    select.appendChild(option6);
    divSelect.appendChild(select);

    form.appendChild(divSelect);

    //para el textarea
    let divTarea = document.createElement("div");
    divTarea.setAttribute("class", "textarea");
    let textarea = document.createElement("textarea");
    textarea.setAttribute("name","texto");
    textarea.setAttribute("id", "texto");
    textarea.setAttribute("placeholder", "Cuentanos que otros estilos de baile te gustan...");
    divTarea.appendChild(textarea);

    form.appendChild(divTarea);

    //Para los botones
    let divBoton = document.createElement("div");
    divBoton.setAttribute("class", "botones");

    let inputR = document.createElement("input");
    inputR.setAttribute("type", "reset");
    inputR.setAttribute("value", "Borrar");
    divBoton.appendChild(inputR);

    let inputS = document.createElement("input");
    inputS.setAttribute("type", "submit");
    inputS.setAttribute("value", "Enviar");
    divBoton.appendChild(inputS);

    form.appendChild(divBoton);

    let div2 = document.createElement("div");
    div2.setAttribute("id", "formulario");
    div2.appendChild(form);

    document.body.appendChild(div2);
} 