<template>
	<div class="home-page">
		<RouterLink to="/login"><MainButton class="login-btn" msg="Entrar"/></RouterLink>
		<CardHome />
		<CardAbout />
		<MainButton class="scroll" msg="↑" v-on:click="scrollTop()"/>
	</div>
</template>

<script>
import MainButton from '../buttons/MainButton.vue'
import CardHome from './CardHome.vue'
import CardAbout from './CardAbout.vue'

export default {
	name: "HomePage",
	components: { 
		MainButton,
		CardHome,
		CardAbout
	},
	methods: {
		scrollTop() {
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			})
		}
	}
}
</script>

<style scoped>
.home-page {
	justify-content: center;
}
.login-btn {
	background: #4661ED;
	margin-left: 85%;
	margin-top: 30px;
}
.login-btn:hover {
	background: #24A7F1;
}
.scroll {
	background: #4661ED;
	margin-bottom: 20px;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	font-weight: bold;
	font-size: 30px;
	margin-left: 85%;
}
.scroll:hover {
	background: #24A7F1;
}
</style>