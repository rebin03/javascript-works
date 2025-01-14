
fetchAllContries()

async function fetchAllContries(){
    let response = await fetch("https://restcountries.com/v2/all/")
    let data = await response.json()

    displayCountries(data)
}


function displayCountries(data){
    let htmlData = ""

    for(c of data){
        htmlData += `
        <div class="col-4 mb-4">
            <div class="card">
                <img src="${c.flags.svg}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${c.name}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
        </div>
        `
    }

    document.querySelector("#root").innerHTML = htmlData    
}