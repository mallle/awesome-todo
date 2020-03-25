<template>
	<transition
		appear
		enter-active-class="animated zoomIn"
		leave-active-class="animated zoomOut"
	>
		<div :class="{ 'q-mt-lg': !settings.showTasksInOneList }">
			<ListHeader v-if="!settings.showTasksInOneList" bgColor="bg-green-4"
				>Tasks Completed</ListHeader
			>

			<q-list bordered separator>
				<Task
					v-for="(task, key) in tasksCompleted"
					:key="key"
					:task="task"
					:id="key"
				></Task>
			</q-list>
		</div>
	</transition>
</template>

<script>
import Task from "components/tasks/Task.vue";
import ListHeader from "components/shared/ListHeader.vue";
import { mapGetters } from "vuex";

export default {
	props: ["tasksCompleted"],
	components: {
		Task,
		ListHeader
	},
	computed: {
		...mapGetters("settings", ["settings"])
	}
};
</script>

<style lang="scss" scoped></style>
