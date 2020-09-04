<template>
	<div class="content">
		首页
	</div>
</template>

<script>
	// import router from '../../router/index.js'
export default {
	data() {
		return {};
	},
	mounted() {
		console.log(this.$store.state.aside)
		console.log(this.$router.options.routes)
	}
};
</script>

<style scoped="scoped"></style>
