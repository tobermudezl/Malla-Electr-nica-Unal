const contenedor = document.getElementById("malla");
const detalle = document.getElementById("detalle");

let aprobadas = JSON.parse(localStorage.getItem("aprobadas")) || [];

function crearMalla() {
  contenedor.innerHTML = "";

  malla.forEach(s => {
    const col = document.createElement("div");
    col.className = "semestre";
    col.innerHTML = `<h3>Semestre ${s.semestre}</h3>`;

    s.materias.forEach(m => {
      const box = document.createElement("div");
      box.className = `materia ${m.componente}`;
      box.textContent = m.nombre;

      const cumple = m.prereq.every(p => aprobadas.includes(p));

      if (aprobadas.includes(m.nombre)) {
        box.classList.add("aprobada");
      } else if (cumple) {
        box.classList.add("disponible");
        box.onclick = () => aprobar(m.nombre);
      } else {
        box.classList.add("bloqueada");
      }

      box.onclick = () => mostrarDetalle(m, cumple);
      col.appendChild(box);
    });

    contenedor.appendChild(col);
  });
}

function aprobar(nombre) {
  if (!aprobadas.includes(nombre)) {
    aprobadas.push(nombre);
    localStorage.setItem("aprobadas", JSON.stringify(aprobadas));
    crearMalla();
  }
}

function mostrarDetalle(m, habilitada) {
  detalle.innerHTML = `
    <h2>${m.nombre}</h2>
    <p><b>Prerrequisitos:</b> ${m.prereq.length ? m.prereq.join(", ") : "Ninguno"}</p>
    <p><b>Estado:</b> ${
      aprobadas.includes(m.nombre)
        ? "✅ Aprobada"
        : habilitada
        ? "🟢 Disponible"
        : "🔒 Bloqueada"
    }</p>
    ${
      habilitada && !aprobadas.includes(m.nombre)
        ? `<button onclick="aprobar('${m.nombre}')">Marcar como aprobada</button>`
        : ""
    }
  `;
}

crearMalla();
