const selectOrigen = document.getElementById('origen');
const origenSelect = document.getElementById('origenSelect');
const selectDestino = document.getElementById('destino');
const destinoSelect = document.getElementById('destinoSelect');
const fechaOrigenInput = document.getElementById('fechaOrigen');
const fechaOrigenSelect = document.getElementById('fechaOrigenSelect');
const fechaDestinoInput = document.getElementById('fechaDestino');
const fechaDestinoSelect = document.getElementById('fechaDestinoSelect');
const resultadoEscala = document.getElementById('resultado-escala');

// Selector de Origen y Destino

selectOrigen.addEventListener('change', () => {
    origenSelect.textContent = selectOrigen.options[selectOrigen.selectedIndex].text;
});

selectDestino.addEventListener('change', () => {
    destinoSelect.textContent = selectDestino.options[selectDestino.selectedIndex].text;
});

// Selector de fechas 

fechaOrigenInput.addEventListener('change', () => {
    fechaOrigenSelect.textContent = fechaOrigenInput.value;
});

fechaDestinoInput.addEventListener('change', () => {
    fechaDestinoSelect.textContent = fechaDestinoInput.value;
});


selectOrigen.addEventListener('change', () => {
    const origen = selectOrigen.value;
    const destino = selectDestino.value;

    if (origen === 'Chicago, USA' && destino === 'Venecia, IT') {
      resultadoEscala.textContent = '¡Ojo! Tu vuelo tiene una escala';
    } else if (origen === 'Boston, USA' && destino === 'Paris, FR') {
      resultadoEscala.textContent = '¡Ojo! Tu vuelo tiene una escala';
    } else {
      resultadoEscala.textContent = '¡Tu vuelo no tiene una escala!';
    }
  });
  
selectDestino.addEventListener('change', () => {
    const origen = selectOrigen.value;
    const destino = selectDestino.value;

    if (origen === 'Chicago, USA' && destino === 'Venecia, IT') {
      resultadoEscala.textContent = '¡Ojo! Tu vuelo tiene una escala';
    } else if (origen === 'Boston, USA' && destino === 'Paris, FR') {
      resultadoEscala.textContent = '¡Ojo! Tu vuelo tiene una escala';
    } else {
      resultadoEscala.textContent = '¡Tu vuelo no tiene una escala!';
    }
  });
