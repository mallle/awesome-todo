import { uid, Notify } from "quasar";
import { firebaseDb, firebaseAuth } from "src/boot/firebase";
import { showErrorMessage } from "src/functions/function-show-error-message";

export function updateTask({ commit, dispatch }, payload) {
	//for working locally without a database (so comitting to the store directly)
	// commit("updateTask", payload);
	dispatch("fbUpdateTask", payload);
}

export function deleteTask({ commit, dispatch }, id) {
	//for working locally without a database (so comitting to the store directly)
	// commit("deleteTask", id);
	dispatch("fbDeleteTask", id);
}

export function addTask({ commit, dispatch }, task) {
	let taskId = uid();
	let payload = {
		id: taskId,
		task: task
	};
	//for working locally without a database (so comitting to the store directly)
	//commit("addTask", payload);
	dispatch("fbAddTask", payload);
}

export function setSearch({ commit }, value) {
	commit("setSearch", value);
}

export function setSort({ commit }, value) {
	commit("setSort", value);
}

export function fbReadData({ commit }, value) {
	let userId = firebaseAuth.currentUser.uid;
	let userTasks = firebaseDb.ref("tasks/" + userId);

	// Initial check for data
	userTasks.once(
		"value",
		snapshot => {
			commit("setTasksDownloaded", true);
		},
		error => {
			showErrorMessage(error.message);
			this.$router.replace("/auth");
		}
	);

	//child added hook
	userTasks.on("child_added", snapshot => {
		// console.log("snap", snapshot);
		let task = snapshot.val();
		// console.log("task", task);

		let payload = {
			id: snapshot.key,
			task: task
		};
		commit("addTask", payload);
	});
	//child changed hook
	userTasks.on("child_changed", snapshot => {
		let task = snapshot.val();
		let payload = {
			id: snapshot.key,
			updates: task
		};
		commit("updateTask", payload);
	});
	//child removed hook
	userTasks.on("child_removed", snapshot => {
		let taskId = snapshot.key;
		commit("deleteTask", taskId);
	});
}

export function fbAddTask({}, payload) {
	let userId = firebaseAuth.currentUser.uid;
	let taskRef = firebaseDb.ref("tasks/" + userId + "/" + payload.id);
	taskRef.set(payload.task, error => {
		if (error) {
			showErrorMessage(error.message);
		} else {
			Notify.create({
				position: "bottom-right",
				color: "secondary",
				message: "Task was added!"
			});
		}
	});
}

export function fbUpdateTask({}, payload) {
	let userId = firebaseAuth.currentUser.uid;
	let taskRef = firebaseDb.ref("tasks/" + userId + "/" + payload.id);
	taskRef.update(payload.updates, error => {
		if (error) {
			showErrorMessage(error.message);
		} else {
			let keys = Object.keys(payload.updates);
			if (!(keys.includes("completed") && keys.length == 1)) {
				Notify.create({
					position: "bottom-right",
					color: "secondary",
					message: "Task was updated!"
				});
			}
		}
	});
}

export function fbDeleteTask({}, taskId) {
	let userId = firebaseAuth.currentUser.uid;
	let taskRef = firebaseDb.ref("tasks/" + userId + "/" + taskId);
	taskRef.remove(error => {
		if (error) {
			showErrorMessage(error.message);
		} else {
			Notify.create({
				position: "bottom-right",
				color: "secondary",
				message: "Task was deleted!"
			});
		}
	});
}
