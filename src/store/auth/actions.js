import { firebaseAuth } from "boot/firebase";
import { LocalStorage, Loading } from "quasar";
import { showErrorMessage } from "src/functions/function-show-error-message";

export function registerUser({}, payload) {
	Loading.show();
	firebaseAuth
		.createUserWithEmailAndPassword(payload.email, payload.password)
		.then(response => {})
		.catch(error => {
			showErrorMessage(error.message);
		});
}

export function loginUser({}, payload) {
	Loading.show();
	firebaseAuth
		.signInWithEmailAndPassword(payload.email, payload.password)
		.then(response => {})
		.catch(error => {
			showErrorMessage(error.message);
		});
}

export function logoutUser() {
	firebaseAuth.signOut();
}

export function handleAuthStateChange({ commit, dispatch }) {
	firebaseAuth.onAuthStateChanged(user => {
		Loading.hide();
		if (user) {
			commit("setLoggedIn", true);
			LocalStorage.set("loggedIn", true);
			this.$router.push("/");
			dispatch("tasks/fbReadData", null, {
				root: true
			});
		} else {
			commit("tasks/clearTasks", null, {
				root: true
			});
			commit("tasks/setTasksDownloaded", false, {
				root: true
			});
			commit("setLoggedIn", false);
			LocalStorage.set("loggedIn", false);
			this.$router.replace("/auth");
		}
	});
}
