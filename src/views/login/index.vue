<template>
	<div class="login-container">
		<el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" autocomplete="on" label-position="left">

			<div class="title-container">
				<h3 class="title">Login Form</h3>
			</div>

			<el-form-item prop="username">
				<i class="el-icon-user"></i>
				<el-input ref="username" v-model="loginForm.username" placeholder="Username" name="username" type="text" tabindex="1"
				 autocomplete="on" />
			</el-form-item>
			<el-form-item prop="password">
				<i class="el-icon-lock"></i>
				<el-input ref="password" v-model="loginForm.password" placeholder="Password" name="password" type="password" tabindex="1"
				 autocomplete="on" />
			</el-form-item>
			<el-button type="primary" class="loginBtn" @click="loginApp()">Login</el-button>

		</el-form>
	</div>
</template>

<script>
	export default {
		name: 'Login',
		data() {
			const validateUsername = (rule, value, callback) => {
				if (!value) {
					callback(new Error('Please enter the correct user name'))
				} else {
					callback()
				}
			}
			const validatePassword = (rule, value, callback) => {
				if (value.length < 6) {
					callback(new Error('The password can not be less than 6 digits'))
				} else {
					callback()
				}
			}
			return {
				loginForm: {
					username: '',
					password: ''
				},
				loginRules: {
					username: [{
						required: true,
						trigger: 'blur',
						validator: validateUsername
					}],
					password: [{
						required: true,
						trigger: 'blur',
						validator: validatePassword
					}]
				}
			}
		},
		created() {
			// window.addEventListener('storage', this.afterQRScan)
		},
		mounted() {

		},
		destroyed() {
			// window.removeEventListener('storage', this.afterQRScan)
		},
		methods: {
			loginApp(){
				this.$router.push('/test/index/home')
			}
		}
	}
</script>

<style scoped="scoped">
	.login-container {
		background-color: #2d3a4b;
		width: 100%;
		height: 100vh;
		overflow: hidden;
		text-align: center;
	}
	.login-form{
		width: 400px;
		position: relative;
		left: 50%;
		margin-left: -200px;
		height: 220px;
		top: 50%;
		margin-top: -110px;
	}
	.title-container{
		margin-bottom: 30px;
	}
	.loginBtn{
		width: 100%;
	}
	.login-container>>>.el-form-item__content{
		display: flex;
		justify-content: space-between;
		flex-wrap: nowrap;
	}
	.login-container>>>.el-form-item__content i{
		color: #FFFFFF;
		margin-top: 8px;
		margin-right: 20px;
		font-size: 24px;
	}
</style>
