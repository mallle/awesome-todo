<template>
	<q-page>
		<div class="q-pa-md absolute full-width full-height column">
			<div class="row q-mb-lg">
				<Search />
				<Sort />
			</div>

			<p
				v-if="
					search &&
						!Object.keys(tasksTodo).length &&
						!Object.keys(tasksCompleted).length
				"
			>
				No search results
			</p>
			<q-scroll-area class="q-scroll-area-tasks">
				<NoTasks
					v-if="
						!Object.keys(tasksTodo).length &&
							!search &&
							!settings.showTasksInOneList
					"
				/>
				<TasksTodo
					:tasksTodo="tasksTodo"
					v-if="Object.keys(tasksTodo).length"
				/>
				<TasksCompleted
					:tasksCompleted="tasksCompleted"
					v-if="Object.keys(tasksCompleted).length"
					class="q-mb-xl"
				/>
			</q-scroll-area>

			<div class="absolute-bottom text-center q-mb-lg no-pointer-events">
				<q-btn
					class="all-pointer-events"
					round
					color="primary"
					size="24px"
					icon="add"
					@click="showAddTask = true"
				/>
			</div>
		</div>
		<q-dialog v-model="showAddTask">
			<Add-Task @close="showAddTask = false" />
		</q-dialog>
	</q-page>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import AddTask from "components/tasks/modals/AddTask.vue";
import TasksTodo from "components/tasks/TasksTodo.vue";
import TasksCompleted from "components/tasks/TasksCompleted.vue";
import NoTasks from "components/tasks/NoTasks.vue";
import Search from "components/tasks/tools/Search.vue";
import Sort from "components/tasks/tools/Sort.vue";

export default {
	data() {
		return {
			showAddTask: false
		};
	},
	computed: {
		...mapGetters("tasks", ["tasksTodo", "tasksCompleted"]),
		...mapGetters("settings", ["settings"]),
		...mapState("tasks", ["search"])
	},
	components: {
		AddTask,
		TasksTodo,
		TasksCompleted,
		NoTasks,
		Search,
		Sort
	},
	mounted() {
		this.$root.$on("showAddTask", () => {
			this.showAddTask = true;
		});
	}
};
</script>

<style lang="scss">
.q-scroll-area-tasks {
	display: flex;
	flex-grow: 1;
}
</style>
