export function tasksTodo(state) {
	let tasks = {};
	Object.keys(state.tasks).forEach(function(key) {
		let task = state.tasks[key];
		if (!task.completed) {
			tasks[key] = task;
		}
	});
	return tasks;
}

export function tasksCompleted(state) {
	let tasks = {};
	Object.keys(state.tasks).forEach(function(key) {
		let task = state.tasks[key];
		if (task.completed) {
			tasks[key] = task;
		}
	});
	console.log(tasks);
	return tasks;
}
