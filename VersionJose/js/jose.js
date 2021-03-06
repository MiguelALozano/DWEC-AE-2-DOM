function mostrarFormulario() {

    let texto = document.getElementById("formulario");

        texto.innerHTML= `<form action="" 
        method="get">
        <h2>Academia de baile - "Los 4 Jinetes"</h2>
        <div class="campos">
            <div>
                <label for="dni"></label>
                <input type="text" name="dni" id="dni" placeholder="DNI">
            </div>
            <div>
                <label for="nombre"></label>
                <input type="text" name="nombre" id="nombre" placeholder="Nombre">
            </div>
            <div>
                <label for="apellidos"></label>
                <input type="text" name="apellidos" id="apellidos" placeholder="Apellidos">
            </div>
            <div>
                <label for="apellidos"></label>
                <input type="text" name="apellidos" id="apellidos" placeholder="Apellidos">
            </div>
            <div>
                <label for="telefono"></label>
                <input type="tel" name="telefono" id="telefono" placeholder="Telefono">
            </div>
            <div>
                <label>Genero:</label> 
                <input type="radio" name="hombre" id="hombre" >
                <label> Hombre</label>
                <input type="radio" name="mujer" id="mujer" >
                <label> Mujer</label>
                <input type="radio" name="indefinido" id="indefinido" checked >
                <label> Indefinido</label>
            </div>
            <div>
                <p>Qué te gusta bailar</p>
                <label>Salsa </label>
                <input type="checkbox" name="salsa" id="salsa">
                <label>Bachata </label>
                <input type="checkbox" name="bachata" id="bachata">
                <label>Kizomba</label>
                <input type="checkbox" name="kizomba" id="kizomba">
                <label>Salón </label>
                <input type="checkbox" name="salon" id="salon">
                <label>Yo soy de barra</label>
                <input type="checkbox" name="barra" id="barra">
            </div>
        </div>
        <div id="imagenes">
            <div id="foto1">
                <img src="./images/preillumination-seth-M12-_qST8iQ-unsplash.jpg" alt="Bailes de salon">
                <div>Photo by <a href="https://unsplash.com/@7seth?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Preillumination SeTh</a> on <a href="https://unsplash.com/s/photos/dance?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
            </div>
            <div id="foto2">
                <img src="./images/ardian-lumi-6Woj_wozqmA-unsplash.jpg" alt="sbk">
                <div>Photo by <a href="https://unsplash.com/@ardianlumi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ardian Lumi</a> on <a href="https://unsplash.com/s/photos/ballrom-dance?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
            </div>
        </div>
        <div class="select">
            <label for="gustos">Que estilo te gusta mas?: </label>
            <select name="gustos" id="gustos">
                <option value="salsa">Salsa</option>
                <option value="bachata">Bachata</option>
                <option value="kizomba">Kizomba</option>
                <option value="valsIngles">Vals Ingles</option>
                <option value="tango">Tango</option>
                <option value="otros">Otros</option>
            </select>
        </div>
    <div class="textarea">
            <textarea name="texto" id="texto" placeholder="Cuentanos que otros estilos de baile te gustan..."></textarea>
    </div>
    <div class="botones">
            <input type="reset" value="Borrar">
            <input type="submit" value="Enviar">
    </div>
    </form>
    
    <hr>
    <hr>`;

    return texto;
}