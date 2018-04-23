<template>
	<div id="explore" >
		<div class='top-nav'>
			<div class='nav-content'>
					<a class="image-logo">image</a>
					<a>feature</a>
					<a>Business</a>
					<a>Explore</a>
					<a>MarketPlace</a>
					<a>Pricing</a>
					<a>search from website	</a>
					<a class="sign"><span>Sign in</span>OR <span>Sign up</span></a>
			</div>
		</div>
		<div class="index-content">
				<div class="index-left-detail">
					<span>
						<span class="info-detail">
								Built for developers
						</span>				
						<br>	
						<span class="info-retail">
							
						GitHub is a development platform inspired by the way you work. From open source to business, you can host and review code, manage projects, and build software alongside millions of other developers.

						</span>
					</span>
				</div>
				<div class="index-detail"> 
						<a class="form-title"> <i class="el-icon-star-on"></i>LOGIN</a>
						<el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
						  <el-form-item label="USERNAME" prop="name">
						   <el-col :span="12">
								<el-input v-model="ruleForm.name"></el-input>  </el-col>
						  </el-form-item>
				  		 <el-form-item label="PASSWORD" prop="password">
						   <el-col :span="12">
								<el-input v-model="ruleForm.password" type="password"></el-input>  </el-col>
						  </el-form-item>
			
						  <el-form-item label="REMEMBER" prop="remember">
						    <el-switch v-model="ruleForm.remember"></el-switch>
						  </el-form-item>
						  <el-form-item>
						    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
						    <el-button @click="resetForm('ruleForm')">重置</el-button>
						  </el-form-item>
						</el-form>
					
				</div>
				<div class="index-right-detail">
					<span>
						<h2>
								Built for developers
						</h2>					
						
					</span>
				</div>

		</div>
	</div>
</template>

<script type="text/javascript">


	export default {
	  data () {
	    return {
	    	exploreCss:{
	    		backgroundImage: "url("+ require('../../../assets/backend_login.jpg')+")",
		 		backgroundRepeat: "no-repeat",
	            backgroundSize: "100% auto",
	            margin: "0 auto",
	    	},
    	    ruleForm: {
	          name: '',
	          password :'',
	          remember :''
			}
    	 }
	  },
	  props: {},
	  watch: {},
	  methods: {
	  		onSubmit() {
        		console.log('submit!');
      		},
      		resetForm(){},
      		submitForm(){
      			this.login();
      		},
	  	    login:function(){
	  	   		var self = this;


	  	   		self.$router.push({ 
            					path:'/index',
					            query:{
					            	name:this.ruleForm.name
					            }
					        });

		        console.log('end');
		        return false;
	  	 //   	     this.$axios.post("http://www.mj_pro.com/api/auth/login",
	  	 //   	     	 this.user_info,{}).then(function(res){
	  	 //   	     	   var ret = res.data;
					// 	self.$router.push({ 
     //        					path:'/index',
					//             query:{

					//             }
					//         }
			  //           )

					// return false;

	  	 //   	     	   if (!ret.status) {
	  	 //   	     	   	    self.initUserInfo();
	  	 //   	     	   }else{  
	  	 //   	     	   		self.$router.push({ 
     //        					path:'/index',
					//             query:{
					//             	name:this.ruleForm.name
					//             }
					//         }
			  //           )}
					// }).catch(function(res){

	  	 //   	     		console.log(res)
  	  //  	     	})
  	   		},
	  	    initUserInfo:function(){
	  	   		this.user_info =  {
	  	   			name:'',
	    			password:'',
	    			remember:1	
	  	   		};
	  	    }
	  	},
	  filters: {

	  },
	  computed: {

	  },	
	  created () {
	  		console.log('chushihuawww')
	  },
	  mounted () {},
	  destroyed () {}
}

</script>
<style type="text/css">
	#explore{
		width: 100%;
		padding: 0;
		margin: 0;
		text-align: center;
		height: -webkit-fill-available;
		color: rgba(255,255,255,0.75);
    	background-color: #24292e;
    	z-index: 1;
    	line-height: 1.1rem;
    	display: inline-block;
    	font-size: .4rem
	}
	.nav-content a{
		padding-left: 1rem
	}
	.image-logo{
		float: left;
	}
	.sign{
		float: right;
		padding-right: 1rem
	}
	.index-content {
	    width: 100%;
	    background: #272424;
	    height: 100%;
	   	padding-top: 1rem;
	    margin: 0px auto;
	    display: flex;
	    flex-direction: row;
	}

	.index-left-detail{
		/*flex: 4;*/
		width: 40%;
		height: 100%;	
		text-align: center;
	}

	.index-detail{
		flex: 3;
		   background: white;
	
		height: 100%;
		text-align: center;
		padding-left: .4rem
	}
	.index-detail div{
	
		width: 90%;

	}

	.index-right-detail{
		width: 20%;
		background-color: green;
		height: 100%;
		border: 1px black solid
	}
	
	.info-detail{
		font-size: .5rem;
		margin-left: .1rem;
		word-break: normal;
		text-align: left;
	}
	.info-retail{
		display: inline-block;
		font-size: .2rem;
		width: 9.8rem;
		line-height: .4rem;
		word-break: normal;
		text-align: left;
	}
	.form-hor{
		padding-top:.8rem;
		text-align: center; 
	}
	.btn{
		height: .5rem;
		width: .7rem;

		line-height: .1rem
	}
	.form-title{
		font-family: sans-serif;
		color:#606266;

	}
	input::-ms-input-placeholder{text-align: center;} 
	input::-webkit-input-placeholder{text-align: center;} 
</style>

