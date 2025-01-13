// fetch("https://fakestoreapi.com/products").then(res => res.json()).then(data => displayProducts(data))
// we can use aync and await to define this in a funtion

fetchAllProducts()

async function fetchAllProducts() {
    let response = await fetch("https://fakestoreapi.com/products")
    let data = await response.json()

    displayProducts(data)
}


function displayProducts(data){
    let htmlData = ""

    for(let p of data){
        htmlData += `
        <div class="col-4">
            <div class="card" style="width: 18rem;">
                <img src="${p.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${p.title}</h5>
                    <p${p.description.slice(0, 50)}</p>
                    <p${p.price}</p>
                    <p${p.category}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        `
    }

    document.querySelector("#root").innerHTML = htmlData
}