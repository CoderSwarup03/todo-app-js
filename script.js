// alert("enter")


const output = document.querySelector("#output");
const submit = document.querySelector('#input');
const seachTodo = document.querySelector('#searchTodo');

const todos = [];

submit.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        enter()
    }
})


function enter() {
    const input = document.querySelector('#input').value;
    if (input === '') {
        alert('Enter the value')
        return;
    }

    let todo = {
        input: input
    }

    todos.push(todo);
    console.log(todos)
    displayTodo();
    document.querySelector('#input').value = ''

}

function displayTodo() {
    const output = document.querySelector("#output")
    output.innerHTML = '';

    todos.forEach((todo, index) => {
        const todoDiv = document.createElement('div');
        const style = todo.completd ? 'line-through' : 'none';
        todoDiv.innerHTML = `
            <div class="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition">
                 <p class="${style} font-medium text-gray-800">${todo.input}</p>
                
                <div class="flex gap-2">
                    <button 
                        onclick="deleteTodo(${index})" 
                            class="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded-md shadow transition">
                            Delete
                    </button>

                    <button 
                         onclick="competeTodo(${index})" 
                        class="bg-green-500 hover:bg-green-600 text-white text-sm px-3 py-1 rounded-md shadow transition">
                            Completed
                    </button>
                </div>
            </div>
        `
        output.appendChild(todoDiv)
    })
}

function deleteTodo(index) {
    todos.splice(index, 1);
    displayTodo();
}
function competeTodo(index) {
    console.log("clicked")
    todos[index].completd = !todos[index].completd;
    displayTodo();
}

function seachTodoFun() {
    console.log("clicked");

    const searchInp = document.querySelector('#searchInput').value.toLowerCase();
    const result = todos.filter((todo) => todo.input.toLowerCase().includes(searchInp));


    const output = document.querySelector("#output")
    output.innerHTML = '';
    if (result.length > 0) {
        result.forEach((todo, index) => {
            const todoDiv = document.createElement('div');
            const style = todo.completd ? 'line-through' : 'none';
            todoDiv.innerHTML = `
            <div class="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition">
                 <p class="${style} font-medium text-gray-800">${todo.input}</p>
                
                <div class="flex gap-2">
                    <button 
                        onclick="deleteTodo(${index})" 
                            class="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded-md shadow transition">
                            Delete
                    </button>

                    <button 
                         onclick="competeTodo(${index})" 
                        class="bg-green-500 hover:bg-green-600 text-white text-sm px-3 py-1 rounded-md shadow transition">
                            Completed
                    </button>
                </div>
            </div>
        `
            output.appendChild(todoDiv)
        })
    } else {
        const todoDiv = document.createElement('div');
        todoDiv.innerHTML = `
            <div class="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition">
                 <p class="font-medium text-gray-800">Todo Not Found</p>
            </div>
        `
        output.appendChild(todoDiv)
    }

}


seachTodo.addEventListener("click", seachTodoFun)