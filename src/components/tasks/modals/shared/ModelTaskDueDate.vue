<template>
	<div class="row q-mb-sm">
		<q-input
			outlined
			:value="dueDate"
			@input="$emit('update:dueDate', $event)"
			label="Due Date"
			class="col"
			clearable
		>
			<template v-slot:append>
				<q-icon name="event" class="cursor-pointer">
					<q-popup-proxy
						ref="qDateProxy"
						transition-show="scale"
						transition-hide="scale"
					>
						<q-date :value="dueDate" @input="$emit('update:dueDate', $event)" />
					</q-popup-proxy>
				</q-icon>
			</template>
		</q-input>
	</div>
</template>

<script>
export default {
	props: ["dueDate"]
};
</script>

<style lang="scss" scoped></style>
