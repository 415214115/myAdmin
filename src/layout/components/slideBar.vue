<template>
	<div class="slideBar">
		<div v-if="settings.logo.isShow" class="logoBox">
			<el-image :src="settings.logo.image" class="logoImg"></el-image>
			<div class="leftTitles">{{settings.logo.title}}</div>
		</div>
		<el-scrollbar wrap-class="scrollbar-wrapper" :class="settings.logo.isShow?'islogos':'noislogos'">
			<el-menu 
				:default-active="$route.path" 
				class="el-menu-vertical-demo" 
				text-color="#fff" 
				active-text-color="#42B983"
				:router="true"
			>
				<div v-for="item in navSliderBar" :key="item.name">
					<el-submenu :index="item.path" v-if="item.children">
						<template slot="title">
							<i :class="item.meta.icon"></i>
							<span>{{ item.meta.title }}</span>
						</template>
						<div v-for="list in item.children" :key="list.name">
							<div v-if="list.children">
								<el-submenu :index="list.path">
									<template slot="title">
										<i :class="list.meta.icon"></i>
										<span>{{ list.meta.title }}</span>
									</template>
									<el-menu-item v-for="listItem in list.children" :key="listItem.name" v-show="!listItem.hidden" :index="`${listItem.path}`">
										<i :class="listItem.meta.icon"></i>{{ listItem.meta.title }}
									</el-menu-item>
								</el-submenu>
							</div>
							<div v-else>
								<el-menu-item :index="`${list.path}`" v-show="!item.hidden"><i :class="item.meta.icon"></i>{{ list.meta.title }}</el-menu-item>
							</div>
						</div>
					</el-submenu>
					<el-menu-item :index="item.path" v-else v-show="!item.hidden">
						<i :class="item.meta.icon"></i>
						<span slot="title">{{ item.meta.title }}</span>
					</el-menu-item>
				</div>
			</el-menu>
		</el-scrollbar>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				navSliderBar:this.$store.state.routers,
				settings: this.$store.state.layOutSetTing
			}
		},
		mounted() {
			// this.navSliderBar = this.$store.state.routers
			// console.log(this.navSliderBar)
		},
		computed:{
			
		},
		methods:{
			
		}
	}
</script>

<style scoped="scoped">
.islogos {
	height: calc(100% - 50px);
}
.noislogos{
	height: 100%;
}
.slideBar {
	height: 100%;
}
.el-menu{
	text-align: initial;
}
.logoBox{
	height: 50px;
	width: 100%;
	overflow: hidden;
	padding: 0 20px;
	background: #2B2F3A;
	display: flex;
	justify-content: space-around;
	flex-wrap: nowrap;
	color: #FFFFFF;
	line-height: 50px;
	font-weight: 600;
	font-family: "楷体";
	font-size: 16px;
}
.logoImg{
	width: 30px;
	height: 30px;
	margin-top: 10px;
}
.slideBar>>>.el-scrollbar__wrap{
	overflow: auto;
}
.slideBar>>>.scrollbar-wrapper{
	margin-right: -19px !important;
	border-right: 1px solid #304156;
	background-color: #304156;
}

.slideBar>>>.el-menu i{
	color: #ffffff;
}
.el-menu{
	background: #304156;
}
.el-submenu >>> .el-menu{
	background-color: #2B3540;
}
.el-submenu>>>.el-submenu__title:hover,
.el-submenu>>>.el-menu-item:hover,
.el-menu-vertical-demo>>>.el-menu-item:focus, 
.el-menu-vertical-demo>>>.el-menu-item:hover{
	background-color: #263445;
}
.el-submenu>>>.el-menu-item:focus{
	background-color: #2B2F3A;
}
.el-submenu>>>.el-menu-item:focus i{
	color: #42B983;
}
.el-submenu>>>.el-submenu__icon-arrow{
	right: 30px;
}
</style>
