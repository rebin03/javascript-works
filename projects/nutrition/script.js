// +dVteJsQG7i0anVokf9euw==1nKtFDgBYp2fZh7L

async function getSearchData(event){
    event.preventDefault()

    let serchText = searchBox.value

    if(serchText){
        let response = await fetch(`https://api.api-ninjas.com/v1/nutrition?query=${serchText}`, {
            headers: {
                'X-Api-Key': '+dVteJsQG7i0anVokf9euw==1nKtFDgBYp2fZh7L'
            }
        })
        let data = await response.json()

        console.log(data);
        

        displayNutritions(data)
    }
}

function displayNutritions(data){
    let htmlData = ""

    for(let n of data){
        htmlData += `
        <div class="col-3 mb-4">
            <div class="card ms-2" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${n.name}</h5>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Calories: ${n.calories}</li>
                  <li class="list-group-item">Serving size(g): ${n.serving_size_g}</li>
                  <li class="list-group-item">Fat total(g): ${n.fat_total_g}</li>
                  <li class="list-group-item">Fat saturated(g): ${n.fat_saturated_g}</li>
                  <li class="list-group-item">Sodium(mg): ${n.sodium_mg}</li>
                  <li class="list-group-item">Potassium(mg): ${n.potassium_mg}</li>
                  <li class="list-group-item">Cholesterol(mg): ${n.cholesterol_mg}</li>
                  <li class="list-group-item">Cargohydrates total(g): ${n.carbohydrates_total_g}</li>
                  <li class="list-group-item">Sugar(g): ${n.sugar_g}</li>
                </ul>
            </div>
        </div>
        `
    }

    document.querySelector("#root").innerHTML = htmlData
}