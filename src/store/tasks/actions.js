import { uid } from "quasar";

export function updateTask({ commit }, payload) {
	commit("updateTask", payload);
}

export function deleteTask({ commit }, id) {
	commit("deleteTask", id);
}

export function addTask({ commit }, task) {
	let taskId = uid();
	let payload = {
		id: taskId,
		task: task
	};
	commit("addTask", payload);
}
