import ModelHeader from "components/tasks/modals/shared/ModelHeader.vue";
import ModelTaskName from "components/tasks/modals/shared/ModelTaskName.vue";
import ModelDueDate from "components/tasks/modals/shared/ModelTaskDueDate.vue";
import ModelDueTime from "components/tasks/modals/shared/ModelTaskDueTime.vue";
import ModelButtons from "components/tasks/modals/shared/ModelButtons.vue";

export default {
	methods: {
		submitForm() {
			this.$refs.modalTaskName.$refs.name.validate();
			if (!this.$refs.modalTaskName.$refs.name.hasError) {
				this.submitTask();
			}
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
