<template>
    <div>
        <h2>
            {{ msg }}
            <hr/>
            <h3>
                <!-- 引用数据仓库里的值 -->
                {{ $store.state.count }}
                <!-- 将上面的值传递到下面 -->
                - {{ count }}
            </h3>
            <p>
                <!-- 注意此处要引入store.js里面的mutations，方法名要加引号 -->
                <!-- 此处10为传递的参数 -->
                <button @click="$store.commit('add',10)">+</button>
                <!-- 将$store.commit('minus')映射到minus，和插值一样简化写法 -->
                <button @click="minus">-</button>
            </p>
            <p>
                <button @click="addAction">异步+</button>
                <button @click="minusAction">异步-</button>
            </p>

        </h2>
    </div>
</template>

<script>

// '@'是指src文件下的意思
import store from '@/vuex/store';
// 传给count第二，三种方法,注意大括号
// 第一个为映射state,第二个为映射mutatinos,第三个为映射getters,第四为mapActions
import { mapState,mapMutations, mapGetters, mapActions } from 'vuex';
export default {
    data(){
        return{
            msg:'Vuexxxxxxxxxxxxxxx'
        }
    },
    // 传给count第一种方法
    // computed:{
    //     count(){
    //         return this.$store.state.count;
    //     }
    // },

    // 传给count第二种方法
    // computed:mapState({
    //     // 使用箭头函数
    //     count:state=>state.count,
    // }),

    // 传给count第三种方法，最简单,使用数组
    computed:{
        // ES6写法，因为getters也需要使用computed，...表示扩展
        ...mapState(['count']),
        // 使用getters,不用简写
        // count(){
        //     return this.$store.getters.count;
        // }

        // getters简写方法, map前需要加...
        ...mapGetters(['count'])
    },

    // 映射mutations,数组形式
    methods:{
        ...mapMutations(['minus']),
        ...mapActions(['addAction','minusAction'])
    },
    

    // 注意这里很重要
    store,
}
</script>