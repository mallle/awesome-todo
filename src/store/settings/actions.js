import { LocalStorage } from "quasar";

export function setShow12HourTimeFormat({ commit, dispatch }, value) {
	commit("setShow12HourTimeFormat", value);
	dispatch("saveSetting");
}

export function setShowTasksInOneList({ commit, dispatch }, value) {
	commit("setShowTasksInOneList", value);
	dispatch("saveSetting");
}

export function saveSetting({ state }) {
	LocalStorage.set("settings", state.settings);
}

export function getSettings({ commit }) {
	let settings = LocalStorage.getItem("settings");
	if (settings) {
		commit("setSettings", settings);
	}
}
