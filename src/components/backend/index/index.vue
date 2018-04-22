<template>
	<div>
		
11111
{{msg1}}
<button @click="getParams">
	11111222

</button>
	</div>

</template>
<style>
	

</style>
<script >
	export default {
		data(){
			return {
				msg1 :'22sssssssss'
			}
		},
		methods : {
			getParams: function(){
				let routerParams = this.$route.params;
				console.log(routerParams.name);
			}
		},	
		watch:{
			
		}
	}

</script>