<template>
	<q-item
		v-ripple
		clickable
		@click="updateTask({ id: id, updates: { completed: !task.completed } })"
		:class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
		v-touch-hold:1000.mouse="showEditTaskModal"
	>
		<q-item-section side top>
			<q-checkbox :value="task.completed" class="no-pointer-events" />
		</q-item-section>
		<q-item-section>
			<q-item-label
				:class="{ 'text-strikethrough': task.completed }"
				v-html="$options.filters.serachHighlight(task.name, search)"
			></q-item-label>
		</q-item-section>
		<q-item-section side v-if="task.dueDate">
			<div class="row">
				<div class="column justify-center">
					<q-icon size="18px" name="event" class="q-mr-xs" />
				</div>
				<div class="column">
					<q-item-label caption class="row justify-end">{{
						task.dueDate | niceDate
					}}</q-item-label>
					<q-item-label caption class="row justify-end"
						><small>{{ taskDueTime }}</small></q-item-label
					>
				</div>
			</div>
		</q-item-section>
		<q-item-section side>
			<div class="row">
				<q-btn
					flat
					round
					color="primary"
					icon="edit"
					dense
					@click.stop="showEditTaskModal"
				/>
				<q-btn
					flat
					round
					color="red"
					icon="delete"
					dense
					@click.stop="promptToDelete(id)"
				/>
			</div>

			<q-dialog v-model="showEditTask">
				<EditTask @close="showEditTask = false" :task="task" :id="id" />
			</q-dialog>
		</q-item-section>
	</q-item>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import { Dialog } from "quasar";
import EditTask from "components/tasks/modals/EditTask";
import { date } from "quasar";
// destructuring to keep only what is needed
const { formatDate } = date;

export default {
	props: ["task", "id"],
	data() {
		return {
			showEditTask: false
		};
	},
	methods: {
		...mapActions("tasks", ["updateTask", "deleteTask"]),
		promptToDelete(id) {
			this.$q
				.dialog({
					title: "Confirm",
					message: "Really delete",
					cancel: true,
					persistent: true
				})
				.onOk(() => {
					this.deleteTask(id);
				});
		},
		showEditTaskModal() {
			this.showEditTask = true;
		}
	},
	components: {
		EditTask
	},
	filters: {
		niceDate(value) {
			return formatDate(value, "MMM D");
		},
		serachHighlight(value, search) {
			if (search) {
				let searchRegExp = new RegExp(search, "ig");
				return value.replace(searchRegExp, match => {
					return '<span class="bg-yellow-6">' + match + "</span>";
				});
			}
			return value;
		}
	},
	computed: {
		...mapState("tasks", ["search"]),
		...mapGetters("settings", ["settings"]),
		taskDueTime() {
			if (this.settings.show12HourTimeFormat) {
				return formatDate(this.task.dueDate + " " + this.task.dueTime, "h:mmA");
			}
			return this.task.dueTime;
		}
	}
};
</script>

<style lang="scss" scoped></style>
