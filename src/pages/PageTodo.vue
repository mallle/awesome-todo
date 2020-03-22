<template>
	<q-page class="q-ma-md">
		<NoTasks v-if="!Object.keys(tasksTodo).length" />
		<TasksTodo :tasksTodo="tasksTodo" v-else />

		<TasksCompleted
			:tasksCompleted="tasksCompleted"
			v-if="Object.keys(tasksCompleted).length"
		/>

		<div class="absolute-bottom text-center q-mb-logo">
			<q-btn
				round
				color="primary"
				size="24px"
				icon="add"
				@click="showAddTask = true"
			/>
		</div>
		<q-dialog v-model="showAddTask">
			<Add-Task @close="showAddTask = false" />
		</q-dialog>
	</q-page>
</template>

<script>
import { mapGetters } from "vuex";
import AddTask from "components/tasks/modals/AddTask.vue";
import TasksTodo from "components/tasks/TasksTodo.vue";
import TasksCompleted from "components/tasks/TasksCompleted.vue";
import NoTasks from "components/tasks/NoTasks.vue";

export default {
	data() {
		return {
			showAddTask: false
		};
	},
	computed: {
		...mapGetters("tasks", ["tasksTodo", "tasksCompleted"])
	},
	components: {
		AddTask,
		TasksTodo,
		TasksCompleted,
		NoTasks
	},
	mounted() {
		this.$root.$on("showAddTask", () => {
			this.showAddTask = true;
		});
	}
};
</script>
