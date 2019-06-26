<template lang="html">

    <div class="events">
        <button type="button" name="button" @click="msg('s')">test</button>
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
            msg:function (a) {
                window.console.log(Math.random(),a)
            }
        }
    }
</script>

<style lang="css">

</style>