<template>
    <div class="todo-item">
        <div class="item-name">{{itemData}} - (已创建了{{totalTodos}}个ToDo)</div>
        <div class="del-btn" @click="removeTodo(index)">Delete</div>
    </div>
</template>

<script>
import * as types from '../../store/mutation-types'

export default {
    data () {
        return {}
    },
    props: ['itemData', 'index'],
    computed: {
        totalTodos () {
            return this.$store.state.totalNum;
        }
    },
    methods: {
        removeTodo (idx) {
            // this.$store.commit(types.CHANGE_DELNAME, this.itemData);//派发给Footer组件
            this.$store.dispatch(types.CHANGE_DELNAME, this.itemData);
            this.$emit('del-me', this.index);
        }
    },
    beforeDestroy () {
        console.error('before destroyed', '')
    },
    destroyed () {
        console.error('destroyed', '')
    }
}
</script>

<style scoped>
    .todo-item{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 40px;
        line-height: 40px;
        padding: 0 20px;
        border-bottom: 1px solid #AEAEAE;
        box-sizing: border-box;
    }
    .todo-item .del-btn{
        padding: 0 20px;
        border: 1.5px solid #AEAEAE;
        box-sizing: border-box;
        height: 25px;
        line-height: 25px;
        color: red;
        cursor: pointer;
    }
</style>
