const boton_submit = document.getElementById("boton_enviar");

boton_submit.addEventListener("click", (evento) => {
    evento.preventDefault();

    // Almacenamos los inputs cargados por el usuario
    const input_nombre = document.getElementById("form_nombre");
    const input_apellido = document.getElementById("form_apellido");
    const input_edad = document.getElementById("form_edad");
    const input_altura = document.getElementById("form_altura");
    const input_correo = document.getElementById("form_correo");

    // Errores
    const error_nombre = document.getElementById("error_nombre");
    const error_apellido = document.getElementById("error_apellido");
    const error_edad = document.getElementById("error_edad");
    const error_altura = document.getElementById("error_altura");
    const error_correo = document.getElementById("error_correo");
    
    const validaciones_res = document.getElementById("validaciones_res");

    // Limpiamos posibles errores previos
    error_nombre.textContent = '';
    error_apellido.textContent = '';
    error_edad.textContent = '';
    error_altura.textContent = '';
    error_correo.textContent = '';

    // Almacenamos los valores de los inputs
    let nombre = input_nombre.value;
    let apellido = input_apellido.value;
    let edad = Number(input_edad.value);
    let altura = Number(input_altura.value);
    let correo = input_correo.value;

    let tarea_valida = true;

    if (!nombre || nombre.length > 50){
        error_nombre.textContent = "Error, ingrese un nombre válido."
        tarea_valida = false;
        validaciones_res.textContent = "Error";
        validaciones_res.style.color = "crimson";
    }
    if (!apellido || apellido.length > 50){
        error_apellido.textContent = "Error, ingrese un apellido válido."
        tarea_valida = false;
        validaciones_res.textContent = "Error";
        validaciones_res.style.color = "crimson";
    }
    if (!edad || edad < 18){
        error_edad.textContent = "Error, ingrese una edad válida (debe ser mayor de edad)."
        tarea_valida = false;
        validaciones_res.textContent = "Error";
        validaciones_res.style.color = "crimson";
    }
    if (!altura || altura > 230){
        error_altura.textContent = "Error, ingrese una altura válida."
        tarea_valida = false;
        validaciones_res.textContent = "Error";
        validaciones_res.style.color = "crimson";
    }
    if (!correo || !correo.includes("@")){
        error_correo.textContent = "Error, ingrese un correo válido."
        tarea_valida = false;
        validaciones_res.textContent = "Error";
        validaciones_res.style.color = "crimson";
    }
    if (tarea_valida){
        console.log(nombre, apellido, edad, altura, correo);
        validaciones_res.textContent = "Datos cargados con éxito!";
        validaciones_res.style.color = "green";

        // Limpiamos los inputs y los regresamos a sus valores por defecto
        input_nombre.value = '';
        input_apellido.value = '';
        input_edad.value = '';
        input_altura.value = '';
        input_correo.value = '';
    }
})