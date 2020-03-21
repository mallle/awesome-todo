<template>
	<q-page class="q-ma-md">
		<q-list bordered separator>
			<Task
				v-for="(task, key) in tasks"
				:key="key"
				:task="task"
				:id="key"
			></Task>
		</q-list>
	</q-page>
</template>

<script>
import { mapGetters } from "vuex";
import Task from "components/tasks/Task.vue";

export default {
	computed: {
		...mapGetters("tasks", ["tasks"])
	},
	components: {
		Task
	}
};
</script>
