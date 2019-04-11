<template>
    <div class="todo-wraper">
        <div class="todo-nav">
            <h3>Hi, {{this.$store.state.name}}! This is TODO list Vuex panel!</h3>
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
import TodoListItem from './TodoListItem-vuex'
import Footer from './Footer-vuex'
import * as types from '../../store/mutation-types'

export default {
    data () {
        return {
            todoList: ['吃一个汉堡包', '喝一瓶可乐'],
            currentTodo: '',
        }
    },
    components: {
        TodoListItem, Footer
    },
    computed: {
        totalTodos () {
            return this.$store.state.totalNum;
        }
    },
    methods: {
        addTodo () {
            this.todoList.push(this.currentTodo);
            // this.$store.commit(types.SET_TOTALNUM, this.todoList.length);
            this.$store.dispatch(types.SET_TOTALNUM, this.todoList.length);
            this.currentTodo = '';
        },
        removeTodo (idx) {
            this.todoList.splice(idx, 1);
            // this.$store.commit(types.SET_TOTALNUM, this.todoList.length);
            this.$store.dispatch(types.SET_TOTALNUM, this.todoList.length);
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
