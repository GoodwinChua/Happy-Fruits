var productList =
    [
        { prodName: "Apple", prodVariant: "Fuji", price: 8.00, quantity: 200 , prodDesc: "Yummy and fresh lorem ipsum sit dolor amet"},
        { prodName: "Banana", prodVariant: "Lakatan", price: 12.00, quantity: 100 , prodDesc: "Yummy and fresh lorem ipsum sit dolor amet"},
        { prodName: "Cherry", prodVariant: "Chilean", price: 15.50, quantity: 50, prodDesc:  "Yummy and fresh lorem ipsum sit dolor amet"},
        { prodName: "Mango", prodVariant: "Guimaras", price: 20.50, quantity: 300 , prodDesc:"Yummy and fresh lorem ipsum sit dolor amet" }
    ];

var row = document.getElementById("products");


for(var i in productList){
    let product = productList[i];
    console.log(product.prodName);

    var col = document.createElement("div");
    col.className = "col-md-4";

    var card = document.createElement("div");
    // card.className = "card";
    card.classList.add("card", "mb-3", "background");
    card.id = "card-" + product.prodName;

    var cardBody = document.createElement("div");
    cardBody.className = "card-body";

    var cardTitle = document.createElement("h4");
    cardTitle.className = "card-title";
    cardTitle.innerHTML = product.prodName;

    var cardText = document.createElement("h6");
    // cardText.className = "card-text"; // card-subtitle mb-2 text-muted
    cardText.classList.add("card-subtitle", "mb-2", "text-muted", "fst-italic");
    cardText.innerHTML = product.prodVariant;

    var cardQuantity = document.createElement("div");
    cardQuantity.className = "card-text";

    var cardActualQuantity = document.createElement("span");
    cardActualQuantity.innerHTML = "Qty: " + product.quantity;
    cardActualQuantity.className = "ps-1";

    var cardQuantityIcon = document.createElement("i");
    cardQuantityIcon.classList.add("bi","bi-heart-fill");



    var cardDescription = document.createElement("p");
    cardDescription.className = "card-text"; // card-subtitle mb-2 text-muted
    cardDescription.innerHTML = product.prodDesc;

    var cardButton = document.createElement("button");
    cardButton.classList.add("btn", "btn-outline-dark");
    cardButton.innerHTML = "Add to Cart";
    cardButton.addEventListener("click", e => {
        displayProduct(product.prodName)
    });


    cardQuantity.appendChild(cardQuantityIcon);
    cardQuantity.appendChild(cardActualQuantity);

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    
    cardBody.appendChild(cardQuantity);
    cardBody.appendChild(cardDescription);
    cardBody.appendChild(cardButton);

    card.appendChild(cardBody);

    col.appendChild(card);
    row.appendChild(col);
}

function displayProduct(name){
    alert("You bought: "+ name);
}


