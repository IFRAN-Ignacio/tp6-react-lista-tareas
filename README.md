# TPN°6 React - Lista de tareas pendientes

## Enunciado

Crear una lista de tareas pendientes.

- Utilizar el hook useState para mantener el estado de las tareas.
- Permitir agregar nuevas tareas a la lista.
- Permitir marcar tareas como completadas.
- Mostrar la lista de tareas en la página.

## Solución

- **Estado con `useState`** (`src/App.js`):
  ```js
  const [tareas, setTareas] = useState([]);   // [{ id, texto, completada }]
  const [texto, setTexto] = useState('');     // texto del input
  ```
- **Agregar tareas:** un formulario con un `input` y el botón "Agregar". `agregarTarea` evita la
  recarga con `e.preventDefault()`, ignora los textos vacíos o con solo espacios, y agrega la tarea
  creando un nuevo arreglo con `setTareas([...tareas, nueva])`.
- **Marcar como completadas:** cada tarea tiene un checkbox; `alternarCompletada(id)` cambia el valor
  `completada` de esa tarea y la tarea se muestra tachada. Se puede desmarcar para volver a dejarla pendiente.
- **Mostrar la lista:** se recorre el arreglo con `map` (con `key` en cada elemento). Si no hay tareas
  se muestra un mensaje, y debajo de la lista se indica cuántas quedan pendientes.

## Cómo ejecutarlo

```bash
npm install
npm start
```

Se abre en http://localhost:3000
