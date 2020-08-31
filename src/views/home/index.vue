<template>
	<div class="content">
		<el-container>
			<el-header>Header</el-header>
			<el-container>
				<el-aside width="200px">Aside</el-aside>
				<el-main>Main</el-main>
			</el-container>
		</el-container>
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
