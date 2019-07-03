<template lang="html">
    <div class="com">
        <slot name = "a"></slot>
        child components
        {{name}}{{age}}

        <button type="button" @click="$emit('patch',123)">发送到父组件</button>
        <slot name = "b"></slot>
    </div>
</template>

<script>
    export default {
        props:['age'],//声明为父组件的内容
       data(){
          return{
              name: "com"
          }
       }
    }
</script>

<style scoped>

</style>