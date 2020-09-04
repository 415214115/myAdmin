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
		this.$request.get('aaa/bbb').then( res => {
			console.log(res)
		})
		
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
		font-size: 14px;
	}
	.fade-enter-active, .fade-leave-active {
	  transition: all 1s;
	}
	.fade-enter, .fade-leave-to {
	  /* margin-right: 100vw; */
	  opacity: 0;
	}
</style>
