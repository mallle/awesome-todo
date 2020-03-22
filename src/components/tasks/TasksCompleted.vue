<template>
	<div class="q-mt-lg">
		<ListHeader bgColor="bg-green-4">Tasks Completed</ListHeader>

		<q-list bordered separator>
			<Task
				v-for="(task, key) in tasksCompleted"
				:key="key"
				:task="task"
				:id="key"
			></Task>
		</q-list>
	</div>
</template>

<script>
import Task from "components/tasks/Task.vue";
import ListHeader from "components/shared/ListHeader.vue";

export default {
	props: ["tasksCompleted"],
	components: {
		Task,
		ListHeader
	}
};
</script>

<style lang="scss" scoped></style>
