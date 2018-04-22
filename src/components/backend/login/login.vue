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
						<div class="container-fluid">
							<form class="form-horizontal">
							  <div class="form-group">
							    <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
							    <div class="col-sm-10">
							      <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
							    </div>
							  </div>
							 
							</form>

						</div>
					<!-- <div class="form-hor">	
						<form>							
							<label>
								USERNAME : <input type="text" name="name">
							</label>

							<label>
								PASSWORD : <input type="text" name="password">
							</label>
							<label>
								<button class="btn btn-info">11</button>
							</label>
						</form>
					</div> -->
					
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
	    	user_info:{
	    		name:'',
	    		password:'',
	    		remember:"0"
	    	}
	    }
	  },
	  props: {},
	  watch: {},
	  methods: {
	  	   login:function(){
	  	   		var self = this;
	  	   	     this.$axios.post("http://www.mj_pro.com/api/auth/login",
	  	   	     	 this.user_info,{}).then(function(res){
	  	   	     	   var ret = res.data;



						self.$router.push({ 
            					path:'/index',
					            params: { 
					                name: 'wode', 
					                dataObj: 'nide'
					            }
					        }
			            )

					return false;

	  	   	     	   if (!ret.status) {
	  	   	     	   	    self.initUserInfo();
	  	   	     	   }else{  
	  	   	     	   		self.$router.push({ 
            					path:'/index',
					            params: { 
					                name: ret, 
					                dataObj: []
					            }
					        }
			            )}
					}).catch(function(res){

	  	   	     		console.log(res)
  	   	     	})
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
	    padding: 1rem;
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
		/*flex: 3;*/
		background: gray;
		width: 40% !important;
		height: 100%;
		line-height: 10px;
		border: 1px green solid;

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
	
	input::-ms-input-placeholder{text-align: center;} 
	input::-webkit-input-placeholder{text-align: center;} 
</style>

