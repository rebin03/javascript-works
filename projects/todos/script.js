var tasks=[
    {
        id:1,
        user:"ram",
        title:"task1",
        completed:true
    },
    {
        id:2,
        user:"ram",
        title:"task2",
        completed:false
    },
    {
        id:3,
        user:"vipin",
        title:"task3",
        completed:true
    },
    {
        id:4,
        user:"vipin",
        title:"task4",
        completed:true
    },
    {
        id:5,
        user:"vijeesh",
        title:"task6",
        completed:true
    },
    {
        id:6,
        user:"vijeesh",
        title:"task7",
        completed:true
    },

]


function displayTodos(tasks){
    let htmlData = ""

    for(let t of tasks){
        htmlData += `
        <div class="col-4">
            <div class="card mt-4" style="width: 90%;">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">id: ${t.id}</li>
                    <li class="list-group-item">title: ${t.title}</li>
                    <li class="list-group-item">user: ${t.user}</li>
                    <li class="list-group-item">status: ${t.completed}</li>
                </ul>
            </div>
        </div>
        `
    }

    document.querySelector("#root").innerHTML = htmlData

}


displayTodos(tasks)