
<template>
	<section>
		<HelloWorld msg="Hello World"></HelloWorld>
	</section>
</template>

<script>
	import HelloWorld from "../components/HelloWorld";

	export default {
		components: {
			HelloWorld
		},
		data() {
			return {
			}
		},
		methods: {


		},
		created(){
		},
		mounted() {
		}
	}

</script>

<style scoped>
	section{
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	section img{
		width: 100%;
	}

</style>