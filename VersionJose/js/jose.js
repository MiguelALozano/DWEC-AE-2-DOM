function cargarFormulario() {

    let texto = document.getElementById("formulario");

    texto.innerHTML= `<form action="" method="get">
    <label for="dni"></label>
    <input type="text" name="dni" id="dni" placeholder="DNI"><br>
    <label for="nombre"></label>
    <input type="text" name="nombre" id="nombre" placeholder="Nombre"><br>
    <label for="apellidos"></label>
    <input type="text" name="apellidos" id="apellidos" placeholder="Apellidos"><br>
    <label for="telefono"></label>
    <input type="tel" name="telefono" id="telefono" placeholder="Telefono"><br>
    <label>Genero:</label> 
    <input type="radio" name="hombre" id="hombre" >
    <label> Hombre</label>
    <input type="radio" name="mujer" id="mujer" >
    <label> Mujer</label>
    <input type="radio" name="indefinido" id="indefinido" checked >
    <label> Indefinido</label>
    <div id="imagenes">
        <img src="#" alt="aquí imagen1">
        <img src="#" alt="aquí imagen2">
    </div>
    <label for="gustos">Que color te gusta más: </label>
    <select name="gustos" id="gustos">
        <option value="verde">Verde</option>
        <option value="azul">Azul</option>
        <option value="rojo">Rojo</option>
        <option value="verde">Verde</option>
    </select><br>
    <label for="texto">Dinos que piensas: </label><br>
    <textarea name="texto" id="texto" cols="50" rows="10" placeholder="Aquí puedes soltarlo todo...."></textarea>
    <br>
    <input type="reset" value="Borrar">
    <input type="submit" value="Enviar">
</form>`
    

    

    return texto;
}