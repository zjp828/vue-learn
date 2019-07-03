//模板
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Hello World"/>
    <ev/>
    <com :age="age" @patch="msgg">
      <h1 slot="a">固体NB</h1>
      <h1 slot="b">可能晋级</h1>
    </com>
    <pagea/>
    <pageb/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import './components/n'
import ev from './components/events.vue'
import com from './components/com.vue'
import pagea from './components/a'
import pageb from './components/b'
export default {
  name: 'app',
  components: {
    HelloWorld,
    ev,
    com,
    pagea,
    pageb
  },
  data(){
    return{
      age:18
    }
  },
  methods:{
    msgg:function (aaa) {
      this.age++
      window.console.log(aaa)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
