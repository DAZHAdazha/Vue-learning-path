// 不用过度使用vuex，能用参数传递就用参数传递
// 配置store文件
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 状态对象，共享值
const state={
    count:1,

}

// 改变状态的方法
const mutations={
    // 传递参数n,第一个state为默认值
    add(state,n){
        state.count += n;
    },
    minus(state){
        state.count--;
    }
}

// getters 是计算过滤操作，可以理解为state的compute
const getters={
    // 每次有count改变时，再加2
    // 注意要传入state
    count:function(state){
        return state.count += 2;
    }
}

// actions为异步修改状态
const actions={
    // 第一种写法
    addAction(context){
        context.commit('add',5);
        // 检验是否异步,异步的话console.log会先执行，同步则会按顺序执行
        setTimeout(()=>context.commit('minus'),3000);
        console.log('比setTimeout中先执行');
    },
    // 第二种写法
    minusAction({commit}){
        commit('minus');
    }
}

export default new Vuex.Store({
    // 引入四个const
    state,
    mutations,
    getters,
    actions
})
