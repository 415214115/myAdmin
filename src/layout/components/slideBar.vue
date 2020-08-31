<template>
	<div class="slideBar">
		<div v-if="settings.logo.isShow" class="logoBox" style="height: 60px;">
			<el-image :src="settings.logo.image" class="logoImg"></el-image>
			<text>{{settings.logo.title}}</text>
		</div>
		<el-scrollbar wrap-class="scrollbar-wrapper" :class="settings.logo.isShow?'islogos':'noislogos'">
			<el-menu 
				:default-active="$route.path" 
				class="el-menu-vertical-demo" 
				background-color="#304156" 
				text-color="#fff" 
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
								<el-submenu :index="list.path" v-for="listItem in list.children" :key="listItem.name">
									<template slot="title">
										<i :class="list.meta.icon"></i>
										<span>{{ list.meta.title }}</span>
									</template>
									<el-menu-item :index="`${listItem.path}`"><i :class="listItem.meta.icon"></i>{{ listItem.meta.title }}</el-menu-item>
								</el-submenu>
							</div>
							<div v-else>
								<el-menu-item :index="`${list.path}`"><i :class="item.meta.icon"></i>{{ list.meta.title }}</el-menu-item>
							</div>
						</div>
					</el-submenu>
					<el-menu-item :index="item.path" v-else>
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
		},
		computed:{
			
		},
		methods:{
			
		}
	}
</script>

<style scoped="scoped">
.islogos {
	height: calc(100% - 60px);
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
	height: 60px;
	position: relative;
	padding: 0 20px;
	background: #2B2F3A;
}
.logoImg{
	width: 30px;
	height: 30px;
	position: absolute;
	left: 20px;
	top: 15px;
}
.slideBar>>>.el-scrollbar__wrap{
	overflow: hidden;
}
.slideBar>>>.scrollbar-wrapper{
	margin-right: -2px !important;
	border-right: 1px solid #304156;
}
</style>
