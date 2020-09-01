<template>
	<div class="content">
		<el-container>
			<el-aside width="210px" height="100%"><sliderBar /></el-aside>
			<el-container>
				<el-header v-if="settings.headerIsShow">Header</el-header>
				<el-main>
					<el-card>
						<transition name="fade" mode="out-in"><mainPage></mainPage></transition>
					</el-card>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
import sliderBar from './components/slideBar.vue';
import mainPage from '../views/layout.vue';
export default {
	components: {
		sliderBar,
		mainPage
	},
	data() {
		return {
			settings: this.$store.state.layOutSetTing
		};
	},
	mounted() {
		console.log(this.settings.headerIsShow);
		// console.log(this.$router.options.routes);
		// console.log(this.$route);
	}
};
</script>

<style scoped="scoped">
.content,
.el-container {
	height: 100%;
}
.el-header {
	background-color: #b3c0d1;
	color: #333;
	text-align: center;
	line-height: 60px;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
}

.el-aside {
	/* background-color: #304156; */
	color: #333;
	text-align: center;
	line-height: 200px;
}

.el-main {
	background-color: #f5f5f5;
	color: #333;
	text-align: center;
	line-height: 160px;
}
.el-card__body {
	height: 100vh;
}
</style>
