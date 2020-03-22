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
import ModelHeader from "components/tasks/modals/shared/ModelHeader.vue";
import ModelTaskName from "components/tasks/modals/shared/ModelTaskName.vue";
import ModelDueDate from "components/tasks/modals/shared/ModelTaskDueDate.vue";
import ModelDueTime from "components/tasks/modals/shared/ModelTaskDueTime.vue";
import ModelButtons from "components/tasks/modals/shared/ModelButtons.vue";

export default {
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
		submitForm() {
			this.$refs.modalTaskName.$refs.name.validate();
			if (!this.$refs.modalTaskName.$refs.name.hasError) {
				this.submitTask();
			}
		},
		submitTask() {
			this.addTask(this.taskToSubmit);
			this.$emit("close");
		}
	},
	components: {
		ModelHeader,
		ModelTaskName,
		ModelDueDate,
		ModelDueTime,
		ModelButtons
	}
};
</script>

<style lang="scss" scoped></style>
