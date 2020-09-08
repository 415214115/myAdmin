<template>
	<div class="headers">
		<span>欢迎，admin</span>
		<span>上次登陆：2020-9-3 22:10:13</span>
		<span>【退出登录】</span>
	</div>
</template>

<script>
	export default{
		name: 'headers'
	}
</script>

<style scoped="scoped">
	.headers{
		color: #333;
		text-align: right;
		line-height: 50px;
	}
	.headers span{
		margin-left: 20px;
		cursor: pointer;
	}
	.headers span:hover{
		color: #42B983;
	}
</style>
