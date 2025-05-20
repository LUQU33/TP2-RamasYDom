const boton_submit = document.getElementById("boton_calcular");

boton_submit.addEventListener("click", (evento) => {
    evento.preventDefault();
    
    // Recuperamos los elementos del DOM
    const input_estatura = document.getElementById("form_estatura");
    const input_peso = document.getElementById("form_peso");

    // Guardamos su valor
    let num_estatura = Number(input_estatura.value);
    let num_peso = Number(input_peso.value);

    // Calculamos su IMC y lo mostramos con un alert
    let imc = calculoIMC(num_estatura, num_peso).toFixed(1);
    window.alert(`Su IMC es de ${imc}`)

    // Vaciamos los valores
    input_estatura.value = '';
    input_peso.value = '';
})

function calculoIMC(estatura, peso){
    let imc = peso / (estatura * estatura);
    return imc;
}