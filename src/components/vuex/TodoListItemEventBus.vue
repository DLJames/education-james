<template>
    <div class="todo-item">
        <div class="item-name">{{itemData}} - (已创建了{{totalTodos}}个ToDo)</div>
        <div class="del-btn" @click="removeTodo(index)">Delete</div>
    </div>
</template>

<script>
import {EventBus} from './EventBus'

export default {
    data () {
        return {
            totalTodos: 2
        }
    },
    props: ['itemData', 'index'],
    created () {
        let self = this;
        EventBus.$on('totalTodos', (num) => {
            self.$nextTick(() => {
                self.totalTodos = num;
            });
            console.error('todo log trigger in ', self.itemData);
        });
    },
    methods: {
        removeTodo (idx) {
            EventBus.$emit('delTodo', this.itemData);//派发给Footer组件
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
