<template>
	<q-banner
		inline-actions
		class="list-header text-white text-center"
		:class="bgColor"
	>
		<span class="bold text-subtitle1"><slot></slot></span>
	</q-banner>
</template>

<script>
export default {
	props: ["bgColor"]
};
</script>

<style lang="scss" scoped>
.list-header {
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
}
</style>
