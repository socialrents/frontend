<template>
	<div class="home-card">
		<div class="home-card-container">
			<div class="home-card-text">
				<div class="home-card-title">Social Rents</div>
				<div class="home-card-legend">Encontre o melhor lugar para aproveitar com seus amigos</div>
			</div>
			<img class="img-home" src="../../assets/home.jpeg">
		</div>
	</div>	
	<div class="card-btns">
		<MainButton class="owner-btn" msg="Sou proprietário"/>
		<div class="line"></div>
		<MainButton class="client-btn" msg="Quero alugar"/>
	</div>
</template>

<script>

import MainButton from '../buttons/MainButton.vue'

export default {
	name: "HomePage",
	components: { MainButton }
}
</script>

<style scoped>
.home-card {
	background-color: #f6f6f6;;
	width: 100%;
	margin-top: 30px;
}
.home-card-container {
	display: flex;
	justify-content: center;
}
.home-card-text {
	text-align: left;
	margin-top: 80px;
	width: 300px;
}
.home-card-title {
	font-weight: bold;
	font-size: 30px;
	margin-bottom: 20px;
	color: #2f2f2f;
}
.home-card-legend {
	color: #5f5f5f;
	font-size: 20px;
}
.card-btns {
	display: flex;
	margin-top: 40px;
	margin-right: 590px;
	justify-content: center;
}
.card-btns .owner-btn {
	background: #4661ED;
	margin-right: 15px;
}
.line {
	height: 30px;
	margin-top: 5px;
	border-left: 2px solid;
	opacity: 0.2;
	margin-right: 15px;
}
.card-btns .owner-btn:hover {
	background: #2d46c2;
}
.card-btns .client-btn {
	background: #24A7F1;
}
.card-btns .client-btn:hover {
	background: #1496e0;
}
</style>