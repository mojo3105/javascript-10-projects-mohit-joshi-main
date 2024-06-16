const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");

const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
    todos.forEach((todo) => {
        addTodo(todo);
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    addTodo();
});

function addTodo(todo) {
    let todoText = input.value;

    if (todo) {
        todoText = todo.text;
    }

    if (todoText) {
        const todo_element = document.createElement("li");
        if (todo && todo.completed) {
            todo_element.classList.add("completed");
        }

        todo_element.innerText = todoText;

        todo_element.addEventListener("click", () => {
            todo_element.classList.toggle("completed");

        });

        todo_element.addEventListener("contextmenu", (e) => {
            e.preventDefault();

            todo_element.remove();

        });

        todosUL.appendChild(todo_element);

        input.value = "";

    }
}

