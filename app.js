let tarifas = {
  normal: 0,
  festiva: 0,
  comida: 0
};

let dias = [];

function guardarTarifas() {
  tarifas.normal = parseFloat(document.getElementById("tarifaNormal").value) || 0;
  tarifas.festiva = parseFloat(document.getElementById("tarifaFestiva").value) || 0;
  tarifas.comida = parseFloat(document.getElementById("tarifaComida").value) || 0;
  alert("Tarifas guardadas correctamente.");
}

function registrarDia() {
  const fecha = new Date(document.getElementById("fecha").value);
  const horas = parseFloat(document.getElementById("horas").value) || 0;
  const comida = document.getElementById("comida").value === "si";
  const diaSemana = fecha.getDay(); // 0: domingo, 6: sábado

  dias.push({ fecha, horas, comida, diaSemana });
  alert("Día registrado correctamente.");
}

function calcularTotal() {
  let total = 0;
  dias.forEach(dia => {
    const tarifa = (dia.diaSemana === 0 || dia.diaSemana === 6) ? tarifas.festiva : tarifas.normal;
    total += dia.horas * tarifa;
    if (dia.comida) total += tarifas.comida;
  });

  document.getElementById("resultado").innerText = `Total a cobrar esta quincena: €${total.toFixed(2)}`;
}
