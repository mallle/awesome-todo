<template>
	<q-card>
		<ModelHeader>Edit Task</ModelHeader>

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
import mixindAddEditTask from "src/mixins/mixin-add-edit-task";

export default {
	mixins: [mixindAddEditTask],
	props: ["task", "id"],
	data() {
		return {
			taskToSubmit: {}
		};
	},
	methods: {
		...mapActions("tasks", ["updateTask"]),
		submitTask() {
			this.updateTask({ updates: this.taskToSubmit, id: this.id });
			this.$emit("close");
		}
	},
	mounted() {
		this.taskToSubmit = Object.assign({}, this.task);
	}
};
</script>

<style lang="scss" scoped></style>
