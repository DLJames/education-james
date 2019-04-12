<template>
    <div class="todo-item">
        <div class="item-name">{{itemData}} - (已创建了{{totalTodos}}个ToDo)</div>
        <div class="del-btn" @click="removeTodo">Delete</div>
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
    props: ['itemData'],
    created () {
        EventBus.$on('totalTodos', this.showTodo);
    },
    methods: {
        removeTodo () {
            EventBus.$emit('delTodo', this.itemData);//派发给Footer组件
            this.$emit('del-me', this.itemData);
        },

        showTodo (num) {
            var self = this;
            self.$nextTick(() => {
                self.totalTodos = num;
            });
            console.error('log in: ', self.itemData)
        }
    },
    beforeDestroy () {
        // EventBus.$off('totalTodos', this.showTodo);
        // EventBus.$off();
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
