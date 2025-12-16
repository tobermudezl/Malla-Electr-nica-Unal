const contenedor = document.getElementById("malla");
const detalle = document.getElementById("detalle");

malla.forEach(s => {
  const col = document.createElement("div");
  col.className = "semestre";
  col.innerHTML = `<h3>Semestre ${s.semestre}</h3>`;

  s.materias.forEach(m => {
    const box = document.createElement("div");
    box.className = `materia ${m.componente}`;
    box.textContent = m.nombre;
    box.onclick = () => mostrarDetalle(m);
    col.appendChild(box);
  });

  contenedor.appendChild(col);
});

function mostrarDetalle(m) {
  detalle.innerHTML = `
    <h2>${m.nombre}</h2>
    <p><b>Componente:</b> ${m.componente}</p>
    <p><b>Prerrequisitos:</b> ${m.prereq.length ? m.prereq.join(", ") : "Ninguno"}</p>
  `;
}
