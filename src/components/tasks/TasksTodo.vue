<template>
	<div>
		<ListHeader bgColor="bg-orange-4">Todo</ListHeader>

		<q-list bordered separator>
			<Task
				v-for="(task, key) in tasksTodo"
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
	props: ["tasksTodo"],
	components: {
		Task,
		ListHeader
	}
};
</script>

<style lang="scss" scoped></style>
