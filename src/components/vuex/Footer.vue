<template>
    <div class="todo-footer">
        <div>Total todos: {{totalTodos}}</div>
        <div v-show="this.delName">您刚刚删除了：{{delName}}</div>
    </div>
</template>

<script>
import {EventBus} from './EventBus'

export default {
    data () {
        return {
            totalTodos: 2,
            delName: ''
        }
    },
    mounted () {
        let self = this;
        EventBus.$on('totalTodos', (num)=>{
            self.$nextTick(()=>{
                self.totalTodos = num;
            });
        });
        EventBus.$on('delTodo', (name)=>{
            self.$nextTick(()=>{
                self.delName = name;
            });
            setTimeout(()=>{
                self.delName = '';
            }, 3000);
        });
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
