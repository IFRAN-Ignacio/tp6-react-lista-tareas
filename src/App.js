import { useState, useRef } from 'react';
import './App.css';

function App() {
  // Estado de las tareas: arreglo de objetos { id, texto, completada }
  const [tareas, setTareas] = useState([]);
  // Estado del texto que se está escribiendo en el input
  const [texto, setTexto] = useState('');
  // Contador para darle un id único a cada tarea (no se muestra en pantalla)
  const proximoId = useRef(1);

  function agregarTarea(e) {
    // Evita que el formulario recargue la página
    e.preventDefault();
    const descripcion = texto.trim();
    if (descripcion === '') return; // no se agregan tareas vacías

    const nueva = { id: proximoId.current, texto: descripcion, completada: false };
    proximoId.current += 1;
    // Siempre se crea un nuevo arreglo (no se modifica el original)
    setTareas([...tareas, nueva]);
    setTexto('');
  }

  function alternarCompletada(id) {
    const temp = tareas.map((t) =>
      t.id === id ? { ...t, completada: !t.completada } : t
    );
    setTareas(temp);
  }

  const pendientes = tareas.filter((t) => !t.completada).length;

  return (
    <div className="contenedor">
      <h1>Lista de tareas pendientes</h1>

      <form onSubmit={agregarTarea} className="formulario">
        <label htmlFor="nueva-tarea" className="visually-hidden">
          Nueva tarea
        </label>
        <input
          id="nueva-tarea"
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Escriba una nueva tarea..."
        />
        <button type="submit">Agregar</button>
      </form>

      {tareas.length === 0 ? (
        <p className="vacio">No hay tareas. ¡Agregá la primera!</p>
      ) : (
        <>
          <ul className="lista">
            {tareas.map((t) => (
              <li key={t.id} className={t.completada ? 'completada' : ''}>
                <label>
                  <input
                    type="checkbox"
                    checked={t.completada}
                    onChange={() => alternarCompletada(t.id)}
                  />
                  <span>{t.texto}</span>
                </label>
              </li>
            ))}
          </ul>
          <p className="resumen">
            {pendientes} {pendientes === 1 ? 'tarea pendiente' : 'tareas pendientes'} de{' '}
            {tareas.length}
          </p>
        </>
      )}
    </div>
  );
}

export default App;
