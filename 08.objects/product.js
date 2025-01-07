var product = {
    code: "1234",
    title: "sample title",
    price: 2000,
    quantity: 3,
}

console.log(product.title);
console.log("quantity" in product);


// add offer of 1000 if offer not exist else add offer 750 with current offer

if("offer" in product){
    product["offer"] += 750;
}
else{
    product["offer"] = 1000;
}

console.log(product);
