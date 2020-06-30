document.getElementById("carta"), addEventListener("submit", saveTask);

function saveTask(e) {
	let titulo = document.getElementById("titulo").value;
	let contenido = document.getElementById("contenido").value;

	const tarea = {
		titulo,
		contenido,
	};

	if (localStorage.getItem("tareas") === null) {
		let tareas = [];
		tareas.push(tarea);
		localStorage.setItem("tareas", JSON.stringify(tareas));
	} else {
		let tareas = JSON.parse(localStorage.getItem("tareas"));
		tareas.push(tarea);
		localStorage.setItem("tareas", JSON.stringify(tareas));
	}
	getTask();
	document.getElementById("carta").reset();
	e.preventDefault();
}
function getTask() {
	let tareas = JSON.parse(localStorage.getItem("tareas"));
	let vistaTareas = document.getElementById("tareas");
	vistaTareas.innerHTML = " ";
	for (i = 0; i < tareas.length; i++) {
		let titulo = tareas[i].titulo;
		let contenido = tareas[i].contenido;

		vistaTareas.innerHTML += `<div id = "tarea">
    <h2>${titulo}</h2>
    <br>
    <p>${contenido}</p>
    <button id="delete" onclick = "deleteTask('${titulo}')">borrar</button>
        </div>`;
	}
}
function deleteTask(titulo) {
	let tareas = JSON.parse(localStorage.getItem("tareas"));
	for (i = 0; i < tareas.length; i++) {
		if (tareas[i].titulo === titulo) {
			tareas.splice(i, 1);
		}
	}
	localStorage.setItem("tareas", JSON.stringify(tareas));
	getTask();
}
getTask();
