import Vue from "vue";

export function updateTask(state, payload) {
	Object.assign(state.tasks[payload.id], payload.updates);
}

export function deleteTask(state, id) {
	Vue.delete(state.tasks, id);
}

export function addTask(state, payload) {
	Vue.set(state.tasks, payload.id, payload.task);
}

export function clearTasks(state) {
	state.tasks = {};
}

export function setSearch(state, value) {
	state.search = value;
}

export function setSort(state, value) {
	state.sort = value;
}

export function setTasksDownloaded(state, value) {
	state.tasksDownloaded = value;
}
