<template>
	<form @submit.prevent="submitForm">
		<div class="row q-mb-md">
			<q-banner class="bg-grey-3 col">
				<template v-slot:avatar>
					<q-icon name="account_circle" color="primary" />
				</template>
				{{ tab | titleCase }} to access your Todos anywhere!
			</q-banner>
		</div>
		<div class="row q-mb-md">
			<q-input
				outlined
				v-model="formData.email"
				label="Email"
				class="col"
				stack-label
				lazy-rules
				:rules="[
					val => isValidEmailAdress(val) || 'Please enter a valid email adress'
				]"
				ref="email"
			/>
		</div>
		<div class="row q-mb-md">
			<q-input
				outlined
				type="password"
				v-model="formData.passoword"
				label="Password"
				class="col"
				stack-label
				lazy-rules
				:rules="[
					val => val.length >= 6 || 'Please enter at least 6 characters'
				]"
				ref="password"
			/>
		</div>
		<div class="row">
			<q-space />
			<q-btn color="primary" :label="tab" type="submit" />
		</div>
	</form>
</template>

<script>
export default {
	props: ["tab"],
	data() {
		return {
			formData: {
				email: "",
				password: ""
			}
		};
	},
	methods: {
		submitForm() {
			this.$refs.email.validate();
			this.$refs.password.validate();
			if (!this.$refs.email.hasError && !this.$refs.password.hasError) {
				if (this.tab === "login") {
					console.log("login user");
				} else if (this.tab === "register") {
					console.log("register user");
				}
			}
		},
		isValidEmailAdress(email) {
			let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(String(email).toLowerCase());
		}
	},
	filters: {
		titleCase(value) {
			return value.charAt(0).toUpperCase() + value.slice(1);
		}
	}
};
</script>

<style lang="scss" scoped></style>
