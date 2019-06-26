<template lang="html">

    <div class="events">
        <button type="button" name="button" v-on:click="counter+= 1">test</button>
    </div>
</template>

<script>
    export default {
        data: function(){
          return{
              counter:0
          }
        },
        methods:{
            msg:function () {
                window.console.log(Math.random())
            }
        }
    }
</script>

<style lang="css">

</style>