<template>
	<div>
		
		ddi ma {{module}}
	</div>

</template>
<script>
export default{
	data(){
		return {
		}
	},
	props:['module'],
	methods:{

	},
	created:function(){
		console.log(this.module)
	}
}
</script>
<style>
	
</style>