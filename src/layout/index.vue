<template>
	<div class="content">
		<el-container>
			<el-aside width="210px" height="100%"><sliderBar /></el-aside>
			<el-container>
				<el-header v-if="settings.headerIsShow">
					<headers></headers>
				</el-header>
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
import headers from './components/header.vue';
export default {
	components: {
		sliderBar,
		mainPage,
		headers
	},
	data() {
		return {
			settings: this.$store.state.layOutSetTing
		};
	},
	mounted() {
		// console.log(this.settings.headerIsShow);
		if(!sessionStorage.getItem('token')){
			this.$router.replace('/login')
		} else {
			console.log(sessionStorage.getItem('token'))
		}
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
	box-shadow: 0px 1px 10px 1px rgba(0, 0, 0, 0.3);
	border-bottom: 1px solid rgba(0,0,0,0.1);
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
