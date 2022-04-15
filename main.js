class TodoItem{
    done;
    constructor(id){
        this.id = id;
        this.title = prompt("Enter your title: ", "none");
        this.description = prompt("Enter your description: ", "none");
        this.done = false;
    }
}
class TodoList {
    items = [];

    add(operations){
        let i = 0;
        while(operations > i){
            this.items.push(new TodoItem(++i));
        }
        let swicherCompleteAll = confirm(`Do all the things on the list?`);
        if(swicherCompleteAll === true){
            this.items.push(this.completeAll());
        }
    }

    completeAll(){
        for(let i = 0; i < this.items.length; i++){
            if(i <= this.items.length - 1){
            this.items[i].done = true;
            }
            else{break;} 
        }
    }

    display(){
        for(let i = 0; i < this.items.length; i++){
            if(this.items[i] !== undefined){
                console.log(this.items[i]);
            }
        }
    }
}

let todoList = new TodoList();
todoList.add(2);
todoList.display();

