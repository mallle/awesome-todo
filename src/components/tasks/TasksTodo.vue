<template>
	<transition
		appear
		enter-active-class="animated zoomIn"
		leave-active-class="animated zoomOut absolute-top"
	>
		<div>
			<ListHeader v-if="!settings.showTasksInOneList" bgColor="bg-orange-4"
				>Todo</ListHeader
			>

			<q-list bordered separator>
				<Task
					v-for="(task, key) in tasksTodo"
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
	props: ["tasksTodo"],
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
