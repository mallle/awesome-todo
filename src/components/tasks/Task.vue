<template>
	<q-item
		v-ripple
		clickable
		@click="updateTask({ id: id, updates: { completed: !task.completed } })"
		:class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
	>
		<q-item-section side top>
			<q-checkbox :value="task.completed" class="no-pointer-events" />
		</q-item-section>
		<q-item-section>
			<q-item-label :class="{ 'text-strikethrough': task.completed }">{{
				task.name
			}}</q-item-label>
		</q-item-section>
		<q-item-section side>
			<div class="row">
				<div class="column justify-center">
					<q-icon size="18px" name="event" class="q-mr-xs" />
				</div>
				<div class="column">
					<q-item-label caption class="row justify-end">{{
						task.dueDate
					}}</q-item-label>
					<q-item-label caption class="row justify-end"
						><small>{{ task.dueTime }}</small></q-item-label
					>
				</div>
			</div>
		</q-item-section>
		<q-item-section side>
			<q-btn
				flat
				round
				color="red"
				icon="delete"
				dense
				@click.stop="promptToDelete(id)"
			/>
		</q-item-section>
	</q-item>
</template>

<script>
import { mapActions } from "vuex";
import { Dialog } from "quasar";

export default {
	props: ["task", "id"],
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
		}
	}
};
</script>

<style lang="scss" scoped></style>
