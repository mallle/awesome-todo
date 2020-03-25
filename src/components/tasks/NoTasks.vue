<template>
	<transition
		appear
		enter-active-class="animated zoomIn"
		leave-active-class="animated zoomOut absolute-top"
	>
		<q-banner class="bg-grey-3">
			<template v-slot:avatar>
				<q-icon name="check" color="primary" />
			</template>
			No taks to do today
			<template v-slot:action>
				<q-btn
					@click="$root.$emit('showAddTask')"
					color="primary"
					label="Add task"
				/>
			</template>
		</q-banner>
	</transition>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
