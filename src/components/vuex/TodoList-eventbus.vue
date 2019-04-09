<template>
    <div class="todo-wraper">
        <div class="todo-nav">
            <h3>Hi, {{this.name}}! This is TODO list eventbus panel!</h3>
            <div class="todo-add-todo-con">
                <input class="todo-input" placeholder="Please enter a todo" type="text" v-model="currentTodo">
                <div class="add-btn" @click="addTodo">add todo</div>
            </div>
        </div>
        <div class="todo-list">
            <TodoListItem v-for="(item, index) in todoList" :key="index" :itemData="item" :index="index" @del-me="removeTodo"></TodoListItem>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from './Footer'
import TodoListItem from './TodoListItemEventBus'
import {EventBus} from './EventBus'

export default {
    data () {
        return {
            todoList: ['吃一个汉堡包', '喝一瓶可乐'],
            currentTodo: '',
            name: 'James'
        }
    },
    components: {
        Footer, TodoListItem
    },
    methods: {
        addTodo () {
            this.todoList.push(this.currentTodo);
            this.$nextTick(() => {
                EventBus.$emit('totalTodos', this.todoList.length);
                this.currentTodo = '';
            });
        },
        removeTodo (idx) {
            this.todoList.splice(idx, 1);
            this.$nextTick(() => {
                EventBus.$emit('totalTodos', this.todoList.length);
            });
        }
    }
}
</script>

<style scoped>
    .todo-wraper{
        width: 60%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        border: 1px solid #AEAEAE;
        box-sizing: border-box;
    }
    .todo-wraper .todo-nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        box-sizing: border-box;
    }
    .todo-wraper .todo-nav .todo-add-todo-con{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .todo-wraper .todo-nav .todo-add-todo-con .todo-input{
        padding-left: 10px;
    }
    .todo-wraper .todo-nav .todo-add-todo-con .add-btn{
        padding: 0 20px;
        border: 1.5px solid #AEAEAE;
        box-sizing: border-box;
        height: 25px;
        line-height: 25px;
        margin-left: 20px;
        cursor: pointer;
    }
    .todo-wraper .todo-list{
        background-color: antiquewhite;
    }
    .todo-wraper .todo-list .todo-item{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 40px;
        line-height: 40px;
        padding: 0 20px;
        border-bottom: 1px solid #AEAEAE;
        box-sizing: border-box;
    }
    .todo-wraper .todo-list .todo-item .item-name{
        flex: 1;
    }
    .todo-wraper .todo-list .todo-item .del-btn{
        padding: 0 20px;
        border: 1.5px solid #AEAEAE;
        box-sizing: border-box;
        height: 25px;
        line-height: 25px;
        color: red;
        cursor: pointer;
    }
</style>
