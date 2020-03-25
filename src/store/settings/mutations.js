export function setShow12HourTimeFormat(state, value) {
	state.settings.show12HourTimeFormat = value;
}

export function setShowTasksInOneList(state, value) {
	state.settings.showTasksInOneList = value;
}

export function setSettings(state, settings) {
	Object.assign(state.settings, settings);
}
