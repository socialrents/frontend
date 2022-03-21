<template>
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
			<img class="img-about" src="../../assets/about-image.jpeg">
		</div>
	</div>
</template>

<script>

export default {
	name: "HomePage"
}
</script>

<style scoped>
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
	width: 500px;
}
.img-about {
	margin-left: 100px;
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
</style>