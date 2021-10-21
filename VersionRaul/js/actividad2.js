function cargarFormulario(){

    //selecciono el div inicial del html para ir añadiendo elementos en el
    const divInicio = document.getElementById("divInicial")

    //creo un h1 para poner un titulo y lo añado al div inicial
    const titulo = document.createElement("h1")
    const textoTitulo = document.createTextNode("TIEMPO ENTRE RELOJES")
    titulo.appendChild(textoTitulo)
    divInicio.appendChild(titulo)

    //creo el formulario y lo añado al div inicial
    const formulario = document.createElement("form")
    formulario.setAttribute("action", "loquesea.php")
    formulario.setAttribute("method", "get")
    divInicio.appendChild(formulario)
    
    //subtitulo para la entrada de datos personales
    const datosPersonales = document.createElement("h2")
    const textodatosPersonales =document.createTextNode("Datos Personales")
    datosPersonales.appendChild(textodatosPersonales)
    formulario.appendChild(datosPersonales)
    
    //label para DNI
    const labelDni = document.createElement("label")
    const textoLabelDni = document.createTextNode("DNI")
    labelDni.setAttribute("for","dni")
    labelDni.appendChild(textoLabelDni)
    formulario.appendChild(labelDni)

    //input DNI
    const inputDni = document.createElement("input")
    inputDni.setAttribute("type","text")
    inputDni.setAttribute("id","dni")
    inputDni.setAttribute("name","dni")
    formulario.appendChild(inputDni)

    //salto de linea
    const saltoLinea = document.createElement("br")
    formulario.appendChild(saltoLinea)

    //label para nombre
    const labelNombre = document.createElement("label")
    const textoLabelNombre = document.createTextNode("Nombre")
    labelNombre.setAttribute("for","nombre")
    labelNombre.appendChild(textoLabelNombre)
    formulario.appendChild(labelNombre)

    //input nombre
    const inputNombre = document.createElement("input")
    inputNombre.setAttribute("type","text")
    inputNombre.setAttribute("id","nombre")
    inputNombre.setAttribute("name","nombre")
    formulario.appendChild(inputNombre)

    //salto de linea
    const saltoLinea2 = document.createElement("br")
    formulario.appendChild(saltoLinea2)

    //label para apellidos
    const labelApellidos = document.createElement("label")
    const textoLabelApellidos = document.createTextNode("Apellidos")
    labelApellidos.setAttribute("for","apellidos")
    labelApellidos.appendChild(textoLabelApellidos)
    formulario.appendChild(labelApellidos)

    //input apellidos
    const inputApellidos = document.createElement("input")
    inputApellidos.setAttribute("type","text")
    inputApellidos.setAttribute("id","apellidos")
    inputApellidos.setAttribute("name","apellidos")
    formulario.appendChild(inputApellidos)

    //salto de linea
    const saltoLinea3 = document.createElement("br")
    formulario.appendChild(saltoLinea3)

    //label para direccion
    const labelDireccion = document.createElement("label")
    const textoLabelDireccion = document.createTextNode("Direccion")
    labelDireccion.setAttribute("for","direccion")
    labelDireccion.appendChild(textoLabelDireccion)
    formulario.appendChild(labelDireccion)

    //input direccion
    const inputDireccion = document.createElement("input")
    inputDireccion.setAttribute("type","text")
    inputDireccion.setAttribute("id","direccion")
    inputDireccion.setAttribute("name","direccion")
    formulario.appendChild(inputDireccion)

    //salto de linea
    const saltoLinea4 = document.createElement("br")
    formulario.appendChild(saltoLinea4)

    //label para telefono
    const labelTelefono = document.createElement("label")
    const textoLabelTelefono = document.createTextNode("Telefono")
    labelTelefono.setAttribute("for","telefono")
    labelTelefono.appendChild(textoLabelTelefono)
    formulario.appendChild(labelTelefono)

    //input telefono
    const inputTelefono = document.createElement("input")
    inputTelefono.setAttribute("type","text")
    inputTelefono.setAttribute("id","telefono")
    inputTelefono.setAttribute("name","telefono")
    formulario.appendChild(inputTelefono)

    //salto de linea
    const saltoLinea5 = document.createElement("br")
    formulario.appendChild(saltoLinea5)

    //subtitulo para la marca 
    const marca = document.createElement("h2")
    const textoMarca =document.createTextNode("Marca")
    marca.appendChild(textoMarca)
    formulario.appendChild(marca)

    //label para Seiko
    const labelSeiko = document.createElement("label")
    const textoLabelSeiko = document.createTextNode("Seiko")
    labelSeiko.setAttribute("for","seiko")
    labelSeiko.appendChild(textoLabelSeiko)
    formulario.appendChild(labelSeiko)

    //input Seiko
    const checkboxSeiko = document.createElement("input")
    checkboxSeiko.setAttribute("type","checkbox")
    checkboxSeiko.setAttribute("id","seiko")
    checkboxSeiko.setAttribute("name","marca")
    checkboxSeiko.setAttribute("value","seiko")
    formulario.appendChild(checkboxSeiko)

    //label para Laco
    const labelLaco = document.createElement("label")
    const textoLabelLaco = document.createTextNode("Laco")
    labelLaco.setAttribute("for","laco")
    labelLaco.appendChild(textoLabelLaco)
    formulario.appendChild(labelLaco)

    //input Laco
    const checkboxLaco = document.createElement("input")
    checkboxLaco.setAttribute("type","checkbox")
    checkboxLaco.setAttribute("id","laco")
    checkboxLaco.setAttribute("name","marca")
    checkboxLaco.setAttribute("value","laco")
    formulario.appendChild(checkboxLaco)

    //label para Hamilton
    const labelHamilton = document.createElement("label")
    const textoLabelHamilton = document.createTextNode("Hamilton")
    labelHamilton.setAttribute("for","hamilton")
    labelHamilton.appendChild(textoLabelHamilton)
    formulario.appendChild(labelHamilton)

    //input Hamilton
    const checkboxHamilton = document.createElement("input")
    checkboxHamilton.setAttribute("type","checkbox")
    checkboxHamilton.setAttribute("id","hamilton")
    checkboxHamilton.setAttribute("name","marca")
    checkboxHamilton.setAttribute("value","hamilton")
    formulario.appendChild(checkboxHamilton)

    //label para Tissot 
    const labelTissot = document.createElement("label")
    const textoLabelTissot = document.createTextNode("Tissot")
    labelTissot.setAttribute("for","tissot")
    labelTissot.appendChild(textoLabelTissot)
    formulario.appendChild(labelTissot)

    //input Tissot
    const checkboxTissot = document.createElement("input")
    checkboxTissot.setAttribute("type","checkbox")
    checkboxTissot.setAttribute("id","tissot")
    checkboxTissot.setAttribute("name","marca")
    checkboxTissot.setAttribute("value","tissot")
    formulario.appendChild(checkboxTissot)

    //label para Bulova 
    const labelBulova = document.createElement("label")
    const textoLabelBulova = document.createTextNode("Bulova")
    labelBulova.setAttribute("for","bulova")
    labelBulova.appendChild(textoLabelBulova)
    formulario.appendChild(labelBulova)

    //input Bulova
    const checkboxBulova = document.createElement("input")
    checkboxBulova.setAttribute("type","checkbox")
    checkboxBulova.setAttribute("id","bulova")
    checkboxBulova.setAttribute("name","marca")
    checkboxBulova.setAttribute("value","bulova")
    formulario.appendChild(checkboxBulova)

    //salto de linea
    const saltoLinea6 = document.createElement("br")
    formulario.appendChild(saltoLinea6)

    //subtitulo para el de color de la esfera 
    const esferaBlanco = document.createElement("h2")
    const textoEsferaBlanco =document.createTextNode("Color de la Esfera")
    esferaBlanco.appendChild(textoEsferaBlanco)
    formulario.appendChild(esferaBlanco)

    //label para colorBlanco
    const labelColorBlanco = document.createElement("label")
    const textoLabelColorBlanco = document.createTextNode("Blanco")
    labelColorBlanco.setAttribute("for","colorBlanco")
    labelColorBlanco.appendChild(textoLabelColorBlanco)
    formulario.appendChild(labelColorBlanco)

    //input colorBlanco
    const radioColorBlanco = document.createElement("input")
    radioColorBlanco.setAttribute("type","radio")
    radioColorBlanco.setAttribute("id","colorBlanco")
    radioColorBlanco.setAttribute("name","colorEsfera")
    radioColorBlanco.setAttribute("value","blanco")
    formulario.appendChild(radioColorBlanco)

    //label para colorNegro
    const labelColorNegro = document.createElement("label")
    const textoLabelColorNegro = document.createTextNode("Negro")
    labelColorNegro.setAttribute("for","colorNegro")
    labelColorNegro.appendChild(textoLabelColorNegro)
    formulario.appendChild(labelColorNegro)

    //input colorNegro
    const radioColorNegro = document.createElement("input")
    radioColorNegro.setAttribute("type","radio")
    radioColorNegro.setAttribute("id","colorNegro")
    radioColorNegro.setAttribute("name","colorEsfera")
    radioColorNegro.setAttribute("value","negro")
    formulario.appendChild(radioColorNegro)

    //label para colorAzul
    const labelColorAzul = document.createElement("label")
    const textoLabelColorAzul = document.createTextNode("Azul")
    labelColorAzul.setAttribute("for","colorAzul")
    labelColorAzul.appendChild(textoLabelColorAzul)
    formulario.appendChild(labelColorAzul)

    //input colorAzul
    const radioColorAzul = document.createElement("input")
    radioColorAzul.setAttribute("type","radio")
    radioColorAzul.setAttribute("id","colorAzul")
    radioColorAzul.setAttribute("name","colorEsfera")
    radioColorAzul.setAttribute("value","azul")
    formulario.appendChild(radioColorAzul)

    //label para colorVerde
    const labelColorVerde = document.createElement("label")
    const textoLabelColorVerde = document.createTextNode("Verde")
    labelColorVerde.setAttribute("for","colorVerde")
    labelColorVerde.appendChild(textoLabelColorVerde)
    formulario.appendChild(labelColorVerde)

    //input colorAzul
    const radioColorVerde = document.createElement("input")
    radioColorVerde.setAttribute("type","radio")
    radioColorVerde.setAttribute("id","colorVerde")
    radioColorVerde.setAttribute("name","colorEsfera")
    radioColorVerde.setAttribute("value","verde")
    formulario.appendChild(radioColorVerde)

    //salto de linea
    const saltoLinea7 = document.createElement("br")
    formulario.appendChild(saltoLinea7)

    //subtitulo para la clase de correa
    const correa = document.createElement("h2")
    const textoCorrea =document.createTextNode("Tipo de Correa")
    correa.appendChild(textoCorrea)
    formulario.appendChild(correa)

    //label para correaNato
    const labelCorreaNato = document.createElement("label")
    const textoLabelCorreaNato = document.createTextNode("NATO")
    labelCorreaNato.setAttribute("for","correaNato")
    labelCorreaNato.appendChild(textoLabelCorreaNato)
    formulario.appendChild(labelCorreaNato)

    //input correaNato
    const radioCorreaNato = document.createElement("input")
    radioCorreaNato.setAttribute("type","radio")
    radioCorreaNato.setAttribute("id","correaNato")
    radioCorreaNato.setAttribute("name","tipoCorrea")
    radioCorreaNato.setAttribute("value","nato")
    formulario.appendChild(radioCorreaNato)

    //label para correaMilanesa
    const labelCorreaMilanesa = document.createElement("label")
    const textoLabelCorreaMilanesa = document.createTextNode("Milanesa")
    labelCorreaMilanesa.setAttribute("for","correaMilanesa")
    labelCorreaMilanesa.appendChild(textoLabelCorreaMilanesa)
    formulario.appendChild(labelCorreaMilanesa)

    //input correaMilanesa
    const radioCorreaMilanesa = document.createElement("input")
    radioCorreaMilanesa.setAttribute("type","radio")
    radioCorreaMilanesa.setAttribute("id","correaMilanesa")
    radioCorreaMilanesa.setAttribute("name","tipoCorrea")
    radioCorreaMilanesa.setAttribute("value","milanesa")
    formulario.appendChild(radioCorreaMilanesa)

    //label para correaJubilee
    const labelCorreaJubilee = document.createElement("label")
    const textoLabelCorreaJubilee = document.createTextNode("Jubilee")
    labelCorreaJubilee.setAttribute("for","correaJubilee")
    labelCorreaJubilee.appendChild(textoLabelCorreaJubilee)
    formulario.appendChild(labelCorreaJubilee)

    //input correaJubilee
    const radioCorreaJubilee = document.createElement("input")
    radioCorreaJubilee.setAttribute("type","radio")
    radioCorreaJubilee.setAttribute("id","correaJubilee")
    radioCorreaJubilee.setAttribute("name","tipoCorrea")
    radioCorreaJubilee.setAttribute("value","jubilee")
    formulario.appendChild(radioCorreaJubilee)

    //label para correaBund
    const labelCorreaBund = document.createElement("label")
    const textoLabelCorreaBund = document.createTextNode("Bund")
    labelCorreaBund.setAttribute("for","correaBund")
    labelCorreaBund.appendChild(textoLabelCorreaBund)
    formulario.appendChild(labelCorreaBund)

    //input correaBund
    const radioCorreaBund = document.createElement("input")
    radioCorreaBund.setAttribute("type","radio")
    radioCorreaBund.setAttribute("id","correaBund")
    radioCorreaBund.setAttribute("name","tipoCorrea")
    radioCorreaBund.setAttribute("value","bund")
    formulario.appendChild(radioCorreaBund)

    //salto de linea
    const saltoLinea8 = document.createElement("br")
    formulario.appendChild(saltoLinea8)

    //subtitulo para el material de la correa 
    const material = document.createElement("h2")
    const textoMaterial =document.createTextNode("Material de la Correa")
    material.appendChild(textoMaterial)
    formulario.appendChild(material)

    //creacion del select
    const tipoReloj = document.createElement("select")
    tipoReloj.setAttribute("name", "tipoReloj")
    formulario.appendChild(tipoReloj)

    //opciones del select
    const opcion1TipoReloj =document.createElement("option")
    opcion1TipoReloj.setAttribute("value", "metalica")
    const textoOpcion1TipoReloj = document.createTextNode("Metálica")
    opcion1TipoReloj.appendChild(textoOpcion1TipoReloj)
    tipoReloj.appendChild(opcion1TipoReloj)

    const opcion2TipoReloj =document.createElement("option")
    opcion2TipoReloj.setAttribute("value", "cuero")
    const textoOpcion2TipoReloj = document.createTextNode("Cuero")
    opcion2TipoReloj.appendChild(textoOpcion2TipoReloj)
    tipoReloj.appendChild(opcion2TipoReloj)

    const opcion3TipoReloj =document.createElement("option")
    opcion3TipoReloj.setAttribute("value", "nylon")
    const textoOpcion3TipoReloj = document.createTextNode("Nylon")
    opcion3TipoReloj.appendChild(textoOpcion3TipoReloj)
    tipoReloj.appendChild(opcion3TipoReloj)

    const opcion4TipoReloj =document.createElement("option")
    opcion4TipoReloj.setAttribute("value", "silicona")
    const textoOpcion4TipoReloj = document.createTextNode("Silicona")
    opcion4TipoReloj.appendChild(textoOpcion4TipoReloj)
    tipoReloj.appendChild(opcion4TipoReloj)

    //salto de linea
    const saltoLinea9 = document.createElement("br")
    formulario.appendChild(saltoLinea9)

    //2 imagenes
    const imgReloj1 = document.createElement("img") 
    imgReloj1.setAttribute("src", "img/reloj_1.jpg")
    imgReloj1.setAttribute("alt", "reloj")
    imgReloj1.setAttribute("class", "imgReloj")
    formulario.appendChild(imgReloj1)

    const imgReloj2 = document.createElement("img") 
    imgReloj2.setAttribute("src", "img/reloj_2.jpg")
    imgReloj2.setAttribute("alt", "reloj")
    imgReloj2.setAttribute("class", "imgReloj")
    formulario.appendChild(imgReloj2)

    //salto de linea
    const saltoLinea10 = document.createElement("br")
    formulario.appendChild(saltoLinea10)

    //subtitulo para el area de observaciones 
    const observaciones = document.createElement("h2")
    const textoObservaciones =document.createTextNode("Observaciones")
    observaciones.appendChild(textoObservaciones)
    formulario.appendChild(observaciones)

    //textarea
    const areaTexto = document.createElement("textarea")
    areaTexto.setAttribute("name", "areaTexto")
    areaTexto.setAttribute("cols", "40")
    areaTexto.setAttribute("rows", "20")
    formulario.appendChild(areaTexto)

    //salto de linea
    const saltoLinea11 = document.createElement("br")
    formulario.appendChild(saltoLinea11)

    //boton enviar
    const enviar= document.createElement("input")
    enviar.setAttribute("type", "submit")
    enviar.setAttribute("value", "Enviar")
    formulario.appendChild(enviar)
}


