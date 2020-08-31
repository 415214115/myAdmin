<template>
	<div id="app">
		<router-view v-wechat-title="$route.meta.title"></router-view>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	mounted() {
		// document.getElementsByTagName('title')[0].innerHTML = this.$route.meta.title;
	}
};
</script>

<style>
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	#app {
		width: 100vw;
		height: 100vh;
	}
	.fade-enter-active, .fade-leave-active {
	  transition: all .3s;
	}
	.fade-enter, .fade-leave-to {
	  margin-right: 100vw;
	  opacity: 0;
	}
	.content{
		background-color: #ffffff;
	}
</style>
