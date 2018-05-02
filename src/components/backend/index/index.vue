<template>
	<div>		
		<el-container style="height:height: -webkit-fill-available;border: 1px solid #eee">
			  <el-aside width="3.4rem" style="background-color: rgb(238, 241, 246)">
			   <el-menu text-color="#ccc">
			      <span v-for='privlege in privleges'>
			   		   <el-submenu index="privlege.id">
				        <template slot="title"><i class="el-icon-message"></i>{{privlege.name}}</template>
 						<span v-for='topnav in privlege.child'>
				        <el-menu-item-group>
				            <template slot="title">{{topnav.name}}</template>
				        		<span v-for="smallchild in topnav.child">
				          		<el-menu-item index="privlege.id-topnav.id-smallchild.id"
				          		 @click="loadView(privlege.id-topnav.id-smallchild.id)">
				          			 {{smallchild.name}}
				          		 </el-menu-item>
          						</span>
				        </el-menu-item-group>
				        </span>
				      
				       </el-submenu>
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
			      <el-table :data="tableData">
			        <el-table-column prop="date" label="日期" width="140">
			        </el-table-column>
			        <el-table-column prop="name" label="姓名" width="120">
			        </el-table-column>
			        <el-table-column prop="address" label="地址">
			        </el-table-column>
			      </el-table>
			    </el-main>
			  </el-container>
			</el-container>
	</div>
</template>
<script>
  export default {
    data() {

      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
	      	privleges : [
	      		{
	      			id: '1', name : 'guanliyuan', 
	      			child:[
	      				{'id':'2', 'name':'1-child1', 'child' : [{'id':'11', 'name':'1-child11111'}]},
	      				{'id':'3', 'name':'1-child2'}
	      			]
	      		},
	      		{
	      			id:'4', name:'zhanglong',
	      			child:[
	      				{id:'5', name:'2-zhanglong-1'},
	      				{id:'6', name:'2-zhanglong-2'}
	      			]
	      		},
	      		{
	      			id:'7', name:'liangyiyun',
	      			child:[
	      				{id:'8', name:'3-long-1'},
	      				{id:'9', name:'3-long-2'}
	      			]	
	      		}
	      	],
        	tableData: Array(20).fill(item)
      }
    },
    methods : {
    	test:function(name){
    		alert(name)
    	},
    	loadView:function(aa){
    		alert(aa)
    	}
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
