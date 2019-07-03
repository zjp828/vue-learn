import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//数据
const state={
    count:1
}

//操作数据
const mutations={
    increment(state){
        state.count++
    },
    decrement(state){
        state.count--
    }
}
//对应界面的提交
const actions={
    increment:({commit})=>{
        commit('increment')
    },
    decrement:({commit})=>{
        commit('decrement')
    }

}
//导出
export default new Vuex.Store({
    state,
    mutations,
    actions
})