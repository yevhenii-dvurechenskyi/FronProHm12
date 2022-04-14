class Todoitem{
title;
description;

    createTodoItem(id){
        let objTodo = {
            id: this.id = id,
            title: this.title = prompt("Enter your title: ", "none"),
            description: this.description = prompt("Enter your description: ", "none"),
            done: false,
        }
        return objTodo;
    };
}
class TodoList {

    items = [];

    todo = new Todoitem();
    add(operations){
        let i = 0;
        while(operations > i){
            this.items.push(this.todo.createTodoItem(++i));
        }
    }
    completeAll(){
        for(let i = 0; i < this.items.length; i++){
            this.items[i].done = true;
        }
    };
    display(){
        for(let i = 0; i < this.items.length; i++){
            if(this.items[i] !== undefined){
                console.log(this.items[i]);
            }
        }
    }
}

let todoList = new TodoList();
todoList.add(3);
todoList.display();
todoList.items.push(todoList.completeAll());
todoList.display();
