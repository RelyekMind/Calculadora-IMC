function calcularIMC() {
    var nombre = prompt("Ingresa tu nombre:");
    
    if (nombre === null || nombre.trim() === "") {
      alert("Por favor, ingresa un nombre válido.");
      return;
    }
  
    var peso, altura;
  
    do {
      peso = parseFloat(prompt("Hola " + nombre + ", ingresa tu peso en kg:"));
    } while (isNaN(peso) || peso <= 0);
  
    do {
      altura = parseFloat(prompt("Ingresa tu altura en metros:"));
    } while (isNaN(altura) || altura <= 0);
  
    var imc = peso / (altura * altura);
  
    var mensajeIMC;
  
    if (imc < 18.5) {
      mensajeIMC = "Bajo peso.";
    } else if (imc >= 18.5 && imc < 25) {
      mensajeIMC = "Peso normal.";
    } else if (imc >= 25 && imc < 30) {
      mensajeIMC = "Sobrepeso.";
    } else {
      mensajeIMC = "Obesidad.";
    }
  
    alert(nombre + ", tu Índice de Masa Corporal (IMC) es: " + imc.toFixed(2) + "\nEstado: " + mensajeIMC);
  }
  
  calcularIMC();