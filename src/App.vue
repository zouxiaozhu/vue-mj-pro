 <template> 
  <div class="main-container">
<!--     <div class="title-bar">
      <span class="left-logo">BIG LOGO</span>
      <span class="right-info">touxiang</span>
    </div>
    <div class="side-bar">
      <ul class="side-bar-list">
        <li class="fir-li">
            11111
            <ul>
              <li>
                1111
              </li>
              <li>
                2222

              </li>
            </ul>
        </li>
        <li class="fir-li">123</li>
        <li class="fir-li">123</li>
        <li class="fir-li">123</li>
        <li class="fir-li">123</li>
      </ul>
    </div> -->
    <div id="app">
       <router-view/>
    </div>
  </div>
</template>


<style type="text/css">
    .title-bar{
      width: 100%;
      background: red;
      height: 1rem;
      line-height: 1rem;
      font-size: .3rem;
    }
    .left-logo{
      float: left;
      width: 11%;
      background-color:gray
    }
    .right-info{
      float: right;
    }
    .side-bar{
      width: 11%;
      background: green;
      height: -webkit-fill-available;      
    }
    .side-bar-list{
      width: 100%;
      /*background: gray;*/
      /*border: 1px solid black;*/
      line-height: 1rem;
      padding-left: 0;
      list-style:none;

    }
    .fir-li{
      border-bottom: 1px solid black;
      width: 100%;
    }
    .fir-li ul{
      width: 100%;
      line-height: 0.5rem;
      list-style: none;
    }
    .fir-li ul>li {
      border: 1px red solid;
      width: 100%;
    }

</style>

<script>


export default {
  data(){
    return {
      
    }
  },
  created:function(){
    console.log('vue_init');
  },
  computed:{
     // urlFormat:function(a){
     //    return  this.url.split('').reverse().join(',')
     // },
     // fullName:{
     //    get:function(){
     //      return this.firstname + '' + this.lastname;
     //    },
     //    set:function(newValue = ''){
     //      var names = newValue.split(' ');
     //      this.firstname = names[0];
     //      this.lastname = names[names.length -1];
     //    }
     // },
     // num:function(){
     //    return this.isButtonDisabled ? 'sucess':'error';
     // }
  },
  components:{
   
  }
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: inline-block;
  width: 89%;
  padding: 20px;
  height: -webkit-fill-available;
}
.title-bar {
  height: 70px;
  line-height: 70px;
  background-color: #2a8cff;
}
.left-logo {
  float: left;
  width: 11%;
  height: 100%;
  background-color: #f60;
}
.right-info {
  float: right;
}

.side-bar {
  width: 11%;
  display: inline-block;
  float: left;
  height: -webkit-fill-available;
  background-color: #333;
  color: #fff;
}
ul.side-bar-list {
    list-style: none;
    padding-left: 0;
}
.fir-li {
    line-height: 60px;
    border-bottom: 1px solid #ccc;
    padding-left: 30px;
}
.sec-list {
  list-style: none;
  padding-left: -30px;
  display: none;
}*/

</style>
