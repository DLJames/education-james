<template>
    <div class="todo-footer">
        <div>Total todos: {{totalNum}}</div>
        <div v-show="this.delName">您刚刚删除了：{{delName}}</div>
    </div>
</template>

<script>

import {mapState} from 'vuex'
import * as types from '../../store/mutation-types'

export default {
    data () {
        return {}
    },
    // computed: {
    //     totalNum () {
    //         return this.$store.state.totalNum;
    //     },
    //     delName () {
    //         return this.$store.state.delName;
    //     }
    // },
    computed: mapState([
        'totalNum', 'delName'
    ]),
    updated () {
        let self = this;
        setTimeout(() => {
            // self.$store.commit(types.CHANGE_DELNAME, '');//直接提交mutation方式
            self.$store.dispatch(types.CHANGE_DELNAME, '');//通过触发action方式
        }, 3000);
    }
}
</script>

<style scoped>
    .todo-footer{
        height: 50px;
        line-height: 50px;
        padding: 10px 20px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>
