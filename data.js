const malla = [
  {
    semestre: 1,
    materias: [
      { nombre: "Cálculo Diferencial", componente: "CF", prereq: [] },
      { nombre: "Álgebra Lineal", componente: "CF", prereq: [] },
      { nombre: "Introducción a la Ingeniería Electrónica", componente: "CFDP", prereq: [] },
      { nombre: "Programación de Computadores", componente: "CF", prereq: [] },
      { nombre: "Taller de Electrónica", componente: "CFDP", prereq: [] }
    ]
  },
  {
    semestre: 2,
    materias: [
      { nombre: "Cálculo Integral", componente: "CF", prereq: ["Cálculo Diferencial"] },
      { nombre: "Ecuaciones Diferenciales", componente: "CF", prereq: ["Cálculo Integral"] },
      { nombre: "Fundamentos de Mecánica", componente: "CF", prereq: [] },
      { nombre: "Programación Orientada a Objetos", componente: "CF", prereq: ["Programación de Computadores"] }
    ]
  },
  {
    semestre: 3,
    materias: [
      { nombre: "Cálculo en Varias Variables", componente: "CF", prereq: ["Cálculo Integral"] },
      { nombre: "Fundamentos de Electricidad y Magnetismo", componente: "CF", prereq: ["Fundamentos de Mecánica"] },
      { nombre: "Introducción a la Ciencia de los Materiales", componente: "CF", prereq: [] },
      { nombre: "Circuitos Eléctricos I", componente: "CFDP", prereq: [] }
    ]
  },
  {
    semestre: 4,
    materias: [
      { nombre: "Variable Compleja", componente: "CF", prereq: ["Cálculo en Varias Variables"] },
      { nombre: "Fundamentos de Oscilaciones y Ondas", componente: "CF", prereq: [] },
      { nombre: "Electrónica Analógica I", componente: "CFDP", prereq: ["Circuitos Eléctricos I"] },
      { nombre: "Circuitos Eléctricos II", componente: "CFDP", prereq: ["Circuitos Eléctricos I"] }
    ]
  },
  {
    semestre: 5,
    materias: [
      { nombre: "Probabilidad y Estadística", componente: "CF", prereq: [] },
      { nombre: "Señales y Sistemas I", componente: "CFDP", prereq: [] },
      { nombre: "Electrónica Analógica II", componente: "CFDP", prereq: ["Electrónica Analógica I"] },
      { nombre: "Electrónica Digital I", componente: "CFDP", prereq: [] }
    ]
  },
  {
    semestre: 6,
    materias: [
      { nombre: "Física de Semiconductores", componente: "CF", prereq: [] },
      { nombre: "Señales y Sistemas II", componente: "CFDP", prereq: ["Señales y Sistemas I"] },
      { nombre: "Instrumentación y Oscilaciones", componente: "CFDP", prereq: [] },
      { nombre: "Electrónica Digital II", componente: "CFDP", prereq: ["Electrónica Digital I"] }
    ]
  },
  {
    semestre: 7,
    materias: [
      { nombre: "Ingeniería Económica", componente: "CF", prereq: [] },
      { nombre: "Control", componente: "CFDP", prereq: ["Señales y Sistemas II"] },
      { nombre: "Campos Electromagnéticos", componente: "CFDP", prereq: [] },
      { nombre: "Electrónica de Potencia", componente: "CFDP", prereq: [] }
    ]
  },
  {
    semestre: 8,
    materias: [
      { nombre: "Conversión Electromagnética", componente: "CFDP", prereq: [] },
      { nombre: "Líneas y Antenas", componente: "CFDP", prereq: ["Campos Electromagnéticos"] },
      { nombre: "Comunicaciones", componente: "CFDP", prereq: ["Señales y Sistemas II"] },
      { nombre: "Electiva Profesional", componente: "CLE", prereq: [] }
    ]
  },
  {
    semestre: 9,
    materias: [
      { nombre: "Administración", componente: "CF", prereq: [] },
      { nombre: "Electiva Profesional", componente: "CLE", prereq: [] },
      { nombre: "Taller de Proyectos Interdisciplinarios", componente: "CFDP", prereq: [] }
    ]
  },
  {
    semestre: 10,
    materias: [
      { nombre: "Trabajo de Grado", componente: "CFDP", prereq: [] },
      { nombre: "Electiva Libre", componente: "CLE", prereq: [] }
    ]
  }
];
