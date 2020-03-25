<template>
	<q-card>
		<ModelHeader>Add Task</ModelHeader>

		<q-form @submit.prevent="submitForm" class="q-gutter-md">
			<q-card-section class="q-pt-none">
				<ModelTaskName :name.sync="taskToSubmit.name" ref="modalTaskName" />

				<ModelDueDate :dueDate.sync="taskToSubmit.dueDate" />

				<ModelDueTime
					:dueTime.sync="taskToSubmit.dueTime"
					v-if="taskToSubmit.dueDate"
				/>
			</q-card-section>

			<ModelButtons />
		</q-form>
	</q-card>
</template>

<script>
import { mapActions } from "vuex";
import mixindAddEditTask from "src/mixins/mixin-add-edit-task.js";

export default {
	mixins: [mixindAddEditTask],
	data() {
		return {
			taskToSubmit: {
				name: "",
				dueDate: "",
				dueTime: "",
				completed: false
			}
		};
	},
	methods: {
		...mapActions("tasks", ["addTask"]),
		submitTask() {
			this.addTask(this.taskToSubmit);
			this.$emit("close");
		}
	}
};
</script>

<style lang="scss" scoped></style>
