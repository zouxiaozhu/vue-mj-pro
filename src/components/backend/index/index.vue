<template>
	<div>		
		<el-container style="height:height: -webkit-fill-available;border: 1px solid #eee">
			  <el-aside width="3.4rem" style="background-color: rgb(238, 241, 246)">
			   <el-menu text-color="#ccc">
			     		
   				<span v-if="privlieges">
   					<span v-for= "privilege in privlieges">
   						
				   		<el-submenu index="privilege.id">
					        <template slot="title"><i class="el-icon-message"></i>{{privilege.name}}</template>
				     	</el-submenu>
   				</span>
   				</span>

			    </el-menu>
			  </el-aside>
			  
			  <el-container>
			    <el-header style="text-align: right; font-size: 12px;height:1rem">
			     <div class="sf-header">
			     	<span>王小虎</span>   
			        <span>王小虎</span>
			        <span>王小虎</span>
			        <span>王小虎</span>
			        <span>王小虎</span>
			     </div>

			    </el-header>
			    
			    <el-main>
			   		<my-container :module="module"> 

			   		</my-container>
			    </el-main>
			  </el-container>
			</el-container>
	</div>
</template>
<script>
import mycontainer from  '@/components/backend/index/container';

  export default {
    data() {
      return {
	      	privlieges : [],
        	// tableData: Array(20).fill(item),
        	module:'1222',
          active:'1'
      }
    },
    components:{
        'my-container' : mycontainer
    },
    methods : {
    	test:function(name){
    		alert(name)
    	},
    	loadView:function(aa){
    		alert(this.$route.query.name)
    	}
   	},
   	created: function(){
   		this.privlieges = JSON.parse(this.$route.query.navs);
   		console.log(this.privlieges)
   	}
  };
</script>
<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    height: 400px;
    line-height: 60px;
  }
  .sf-header{
  	display: flex;
  	flex-direction: row;
  }
  .sf-header span {
  	flex: 1
  }
  
  .el-aside {
    color: #333;
  }
</style>
