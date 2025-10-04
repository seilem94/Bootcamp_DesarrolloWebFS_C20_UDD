
const coloresBase = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'cyan', 'brown'];
const colores = [...coloresBase.slice(0, 4), ...coloresBase.slice(0, 4)]; // 8 botones (4 pares)

// Mezclamos los colores aleatoriamente
colores.sort(() => Math.random() - 0.5);

const tablero = document.getElementById('tablero');
let seleccionados = [];

colores.forEach(color => {
  const btn = document.createElement('button');
  btn.dataset.color = color;
  tablero.appendChild(btn);

  btn.addEventListener('click', () => {
    if (btn.style.visibility === 'hidden') return;

    btn.style.backgroundColor = color;
    seleccionados.push(btn);

    if (seleccionados.length === 2) {
      const [b1, b2] = seleccionados;

      if (b1.dataset.color === b2.dataset.color) {
        // Si son iguales, desaparecen
        setTimeout(() => {
          b1.style.visibility = 'hidden';
          b2.style.visibility = 'hidden';
          seleccionados = [];
          verificarFin();
        }, 500);
      } else {
        // Si no son iguales, se ocultan de nuevo
        setTimeout(() => {
          b1.style.backgroundColor = 'gray';
          b2.style.backgroundColor = 'gray';
          seleccionados = [];
        }, 700);
      }
    }
  });
});

function verificarFin() {
  const botones = document.querySelectorAll('#tablero button');
  const todosOcultos = Array.from(botones).every(b => b.style.visibility === 'hidden');
  if (todosOcultos) {
    document.getElementById('mensaje').textContent = '🎉 ¡Ganaste!';
  }
}
