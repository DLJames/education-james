<template>
    <div class="todo-wraper">
        <div class="todo-nav">
            <h3>Hi, {{this.name}}! This is TODO List panel!</h3>
            <div class="todo-add-todo-con">
                <input class="todo-input" placeholder="Please enter a todo" type="text" v-model="currentTodo">
                <div class="add-btn" @click="addTodo">add todo</div>
            </div>
        </div>
        <div class="todo-list">
            <div class="todo-item" v-for="(item, index) in todoList" :key="index">
                <div class="item-name">{{item}}</div>
                <div class="del-btn" @click="removeTodo(index)">Delete</div>
            </div>
        </div>
        <div class="todo-footer">
            Total todos: {{this.totalTodos}}
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            todoList: ['吃一个汉堡包', '喝一瓶可乐'],
            currentTodo: '',
            name: 'James'
        }
    },
    computed: {
        totalTodos () {
            return this.todoList.length;
        }
    },
    methods: {
        addTodo () {
            this.todoList.push(this.currentTodo);
            this.currentTodo = '';
        },
        removeTodo (idx) {
            this.todoList.splice(idx, 1);
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
    .todo-wraper .todo-footer{
        height: 50px;
        line-height: 50px;
        padding: 10px 20px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
    }
</style>
