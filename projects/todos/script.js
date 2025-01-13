// Getting todos data using url
// fetch("https://jsonplaceholder.typicode.com/todos").then(res => res.json()).then(data => displayTodos(data))

fetchAllTodos()

async function fetchAllTodos() {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos")
    let data = await response.json()

    displayTodos(data)
}


function displayTodos(tasks){
    let htmlData = ""

    for(let t of tasks){
        htmlData += `
        <div class="col-4">
            <div class="card mt-4" style="width: 90%;">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">id: ${t.id}</li>
                    <li class="list-group-item">title: ${t.title}</li>
                    <li class="list-group-item">user: ${t.userId}</li>
                    <li class="list-group-item">status: ${t.completed}</li>
                </ul>
            </div>
        </div>
        `
    }

    document.querySelector("#root").innerHTML = htmlData

}


displayTodos(tasks)