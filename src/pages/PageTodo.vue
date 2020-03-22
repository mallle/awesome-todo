<template>
	<q-page class="q-ma-md">
		<q-list bordered separator v-if="Object.keys(tasks).length">
			<Task
				v-for="(task, key) in tasks"
				:key="key"
				:task="task"
				:id="key"
			></Task>
		</q-list>
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
import Task from "components/tasks/Task.vue";
import AddTask from "components/tasks/modals/AddTask.vue";

export default {
	data() {
		return {
			showAddTask: false
		};
	},
	computed: {
		...mapGetters("tasks", ["tasks"])
	},
	components: {
		Task,
		AddTask
	}
};
</script>
