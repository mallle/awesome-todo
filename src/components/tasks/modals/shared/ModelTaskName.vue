<template>
	<div class="row q-mb-sm">
		<q-input
			outlined
			:value="name"
			@input="$emit('update:name', $event)"
			label="Task Name"
			class="col"
			:rules="[val => !!val || 'Field is required']"
			ref="name"
			autofocus
			v-select-all
			clearable
		/>
	</div>
</template>

<script>
import { selectAll } from "src/directives/directive-select-all";
export default {
	props: ["name"],
	directives: {
		selectAll
	}
};
</script>

<style lang="scss" scoped></style>
