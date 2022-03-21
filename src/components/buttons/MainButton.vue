<template lang="">
	<button class="button-main">{{ msg }}</button>
</template>
<script>
export default {
	name: "MainButton",
	props: { msg: String }
}
</script>

<style lang="css">
.button-main {
	width: 137px;
	height: 41px;
	border-radius: 3px;
	border: 0 none;
  transition: 0.2s;
	color: #ffff;
	font-weight: bold;
}
.button-main:hover {
	cursor: pointer;
}
</style>
