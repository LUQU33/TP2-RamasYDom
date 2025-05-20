const boton_submit = document.getElementById("boton_calcular");

boton_submit.addEventListener("click", (evento) => {
    evento.preventDefault();

    // Obtenemos los inputs con los datos
    const input_ladoA = document.getElementById("form_ladoA");
    const input_ladoB = document.getElementById("form_ladoB");
    const input_ladoC = document.getElementById("form_ladoC");

    // Guardamos los valores de los lados
    let valor_ladoA = Number(input_ladoA.value);
    let valor_ladoB = Number(input_ladoB.value);
    let valor_ladoC = Number(input_ladoC.value);

    // Llamamos la funcion que calcula el area
    let area = calculoArea(valor_ladoA, valor_ladoB, valor_ladoC)
    window.alert(`El area de la figura ingresada es de: ${area} mts cuadrados.`)

    // Limpiamos los inputs una vez finalizado el proceso
    input_ladoA.value = '';
    input_ladoB.value = '';
    input_ladoC.value = '';
})

function calculoArea(a, b, c) {
    // Primero el area del triangulo rectangulo
    let alt_tri = a - c;
    let bas_tri = b;
    let area_tri = (alt_tri * bas_tri) / 2;

    // Luego el area del rectangulo
    let alt_rec = c;
    let bas_rec = b;
    let area_rec = alt_rec * bas_rec;

    // Finalmente sumamos ambas y obtenemos el area total de la figura
    let area_total = area_tri + area_rec;

    return area_total;
}
