<template>
	<div class="home-page">
		<div class="home-card">
			<div class="main-card-container">
				<div class="card-text">
					<div class="card-title">Social Rents</div>
					<div class="card-legend">Encontre o melhor lugar para aproveitar com seus amigos</div>
				</div>
				<img class="img-home" src="../../assets/home.jpeg">
			</div>
		</div>	
		<div class="card-btns">
			<MainButton class="owner-btn" msg="Sou proprietário"/>
			<div class="line"></div>
			<MainButton class="client-btn" msg="Quero alugar"/>
		</div>
		<div class="about-card">
			<div class="main-card-container">
				<div class="card-text">
					<div class="card-title">Sobre a plataforma</div>
					<div class="card-legend">
						A Social Rents é uma plataforma criada para 
						facilitar o contato entre proprietários que queiram 
						disponibilizar algum imóvel para aluguel, 
						e clientes que estão à procura de locais 
						para realizar algum evento.
					</div>
				</div>
				<img class="img-home" src="../../assets/about-image.jpeg">
			</div>
		</div>
	</div>
</template>

<script>
import MainButton from '../buttons/MainButton.vue'

export default {
	name: "HomePage",
	components: { MainButton }
}
</script>

<style lang="css">
.home-page {
	justify-content: center;
}
.home-card {
	background-color: #f6f6f6;;
	width: 100%;
	margin-top: 100px;
}
.about-card {
	background-color: #f6f6f6;;
	width: 100%;
	margin-top: 300px;
	margin-bottom: 200px;
}
.main-card-container {
	display: flex;
	justify-content: center;
}
.card-text {
	text-align: left;
	margin-top: 80px;
	width: 300px;
}
.card-title {
	font-weight: bold;
	font-size: 30px;
	margin-bottom: 20px;
	color: #2f2f2f;
}
.card-legend {
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