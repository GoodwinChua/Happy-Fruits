// function enter(){
//     document.getElementById("somep").innerHTML = "ENTERED"
// }

// function leave(){
//     document.getElementById("somep").innerHTML = "LEFT"
// }

var p = document.getElementById("somep");
p.addEventListener("mouseenter", event => {
    p.innerHTML = "Fruits are the best!";
});

p.addEventListener("mouseleave", function () {
    p.innerHTML = "Fruits";
});

var productList = [
    {
        productName: "Apple", prodDesc: "Fuji", quantity: 20, price: 10.00
        , imagesrc: "https://post.healthline.com/wp-content/uploads/2020/09/Do_Apples_Affect_Diabetes_and_Blood_Sugar_Levels-732x549-thumbnail-1-732x549.jpg"
    },
    {
        productName: "Banana", prodDesc: "Lakatan", quantity: 12, price: 12.50
        , imagesrc: "https://images.everydayhealth.com/images/diet-nutrition/all-about-bananas-nutrition-facts-health-benefits-recipes-and-more-rm-722x406.jpg"
    },
    {
        productName: "Cherry", prodDesc: "Chilean", quantity: 16, price: 40.25
        , imagesrc: "https://healthyfamilyproject.com/wp-content/uploads/2020/05/Cherries-background.jpg"
    },
    {
        productName: "Strawberry", prodDesc: "Baguio", quantity: 30, price: 23.00
        , imagesrc: "https://s.hdnux.com/photos/01/17/32/35/20817729/3/rawImage.jpg"
    },
    {
        productName: "Mango", prodDesc: "Guimaras", quantity: 3, price: 100.00
        , imagesrc: "https://businessmirror.com.ph/wp-content/uploads/2019/06/a-pile-of-mangoes.jpg"
    },
    {
        productName: "Grapes", prodDesc: "California", quantity: 100, price: 60.95
        , imagesrc: "https://www.keckmedicine.org/wp-content/uploads/2016/10/grapes-have-so-many-health-benefits-like-fighting-against-cancer-and-boosting-cardio.jpg"
    },
    {
        productName: "Watermelon", prodDesc: "Japan", quantity: 500, price: 70.95
        , imagesrc: "https://media.self.com/photos/5b10229e443bb72bf9fe0750/16:9/w_2800,h_1575,c_limit/pick-a-perfect-mellon.jpg"
    }
];

// this is the div row
var productsDiv = document.getElementById("products");

for (var i in productList) {

    let fruit = productList[i];
    console.log(fruit);

    var colDiv = document.createElement("div");
    colDiv.className = "col-xl-3";
    colDiv.classList.add("col-lg-4");

    let card = document.createElement("div");
    // card.className = "card";
    card.classList.add("card", "mb-3");
    card.id = "card-" + fruit.productName;

    // var cardImage = document.createElement("img");
    // cardImage.className = "card-img-top";
    // cardImage.classList.add("img-fluid");
    // cardImage.src = fruit.imagesrc;
    // cardImage.alt = fruit.productName;
    // card.addEventListener("mouseover", event => {
    //     p.innerHTML = fruit.productName;
    //     card.classList.add("border-primary");
    // });

    // card.addEventListener("mouseout", event => {
    //     p.innerHTML = "Fruits";
    //     card.classList.remove("border-primary");
    // })

    var cardBody = document.createElement("div");
    cardBody.className = "card-body";

    // var cardTitle = document.createElement("div");
    // cardTitle.classList.add("card-title", "d-flex", "justify-content-between", "align-items-baseline");

    // var cardName = document.createElement("h4");
    // cardName.innerText = fruit.productName;
    // cardName.classList.add("fruit-name");

    // var cardPrice = document.createElement("span");
    // cardPrice.innerText = fruit.price.toFixed(2) + " PHP";

    var cardSubtitle = document.createElement("h6");
    cardSubtitle.className = "card-subtitle";
    cardSubtitle.classList.add("fst-italic", "text-muted");
    cardSubtitle.innerHTML = fruit.prodDesc;



    var cardQuantity = document.createElement("p");
    cardQuantity.className = "card-text";
    cardQuantity.innerText = "Quantity: " + fruit.quantity;


    // var cardActions = document.createElement("div");
    // cardActions.classList.add("input-group");



    // let cardInputQuantity = document.createElement("input");
    // cardInputQuantity.type = "number";
    // cardInputQuantity.classList.add("form-control");
    // cardInputQuantity.placeholder = "Qty";
    // cardInputQuantity.min = 0;
    // cardInputQuantity.max = fruit.quantity;
    // cardInputQuantity.id = "input-" + fruit.productName;
    // cardInputQuantity.setAttribute("aria-describedby", "button-addon-" + fruit.productName);

    // var cardBuy = document.createElement("button");
    // cardBuy.classList.add("btn", "btn-primary");
    // cardBuy.innerHTML = "Add to Cart";
    // cardBuy.id = "button-addon-" + fruit.productName;
    // cardBuy.addEventListener("click", event => {
    //     console.log(event.target);
    //     buyFruit(fruit, cardInputQuantity.value);
    // });

    // cardTitle.appendChild(cardName);
    // cardTitle.appendChild(cardPrice);

    // cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardSubtitle);
    cardBody.appendChild(cardQuantity);

    // cardActions.appendChild(cardInputQuantity);
    // cardActions.appendChild(cardBuy);

    // cardBody.appendChild(cardActions);

    // card.appendChild(cardImage);
    card.appendChild(cardBody);

    colDiv.appendChild(card);
    productsDiv.appendChild(colDiv);
}

function buyFruit(product, qty) {
    alert("you bought: " + qty + " pcs of " + product.productName);
    p.innerHTML = "you bought: " + qty + " pcs of " + product.productName;
}


jQuery(function () {
    // JQuery methods here
    console.log(document.title);
    $("<nav class='navbar navbar-expand-lg navbar-light bg-light'> "
        + "<div class= 'container-fluid' > "
        + "     <a class='navbar-brand' href='#'> Shop </a>"
        + "     <button class='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>"
        + "         <span class='navbar-toggler-icon'></span>"
        + "     </button>"
        + "<div class='collapse navbar-collapse' id='navbarSupportedContent'>"
        + " <ul class='navbar-nav me-auto mb-2 mb-lg-0'>"
        + "   <li class='nav-item'>"
        + "     <a class='nav-link active' aria-current='page' href='#'>Home</a>"
        + "   </li>"
        + "   <li class='nav-item'>"
        + "     <a class='nav-link' href='#'>Link</a>"
        + "   </li>"
        + "   <li class='nav-item dropdown'>"
        + "     <a class='nav-link dropdown-toggle' href='#' id='navbarDropdown' role='button' data-bs-toggle='dropdown' aria-expanded='false'>"
        + "       Dropdown"
        + "    </a>"
        + "     <ul class='dropdown-menu' aria-labelledby='navbarDropdown'>"
        + "         <li><a class='dropdown-item' href='#'>Action</a></li>"
        + "         <li><a class='dropdown-item' href='#card-Grapes'>Another action</a></li>"
        + "         <li><hr class='dropdown-divider'></li>"
        + "         <li><a class='dropdown-item' href='#'>Something else here</a></li>"
        + "     </ul>"
        + "    </li>"
        + "    <li class='nav-item'>"
        + "      <a class='nav-link disabled'>Disabled</a>"
        + "   </li>"
        + "  </ul>"
        + "    </div>"
        + "  </div> "
        + "</nav>").prependTo("body");

    for (var i in productList) {
        let product = productList[i];
        $("#card-" + product.productName)
            .prepend("<img class = 'img-fluid card-img-top' src = "
                + product.imagesrc + " alt = "
                + product.productName + ">");

        let cardBody = $("#card-" + product.productName).children(".card-body");

        cardBody
            .prepend("<div class = 'card-title d-flex justify-content-between align-items-baseline' id = 'card-title-" + product.productName + "'>");

        let cardTitle = $("#card-title-" + product.productName);

        $("<h4>" + product.productName + "</h4>").appendTo(cardTitle);
        $("<p>" + product.price.toFixed(2) + " PHP </p>").appendTo(cardTitle);

        $("<div class='input-group mb-3'> "
            + "<input type='number' class='form-control' "
            + "id='input-qty-" + product.productName + "' placeholder='0' aria-label='aria-" + product.productName + "' aria-describedby='button-addon-" + product.productName + "'>"
            + "<button class='btn btn-outline-dark' type='button' id='button-addon-" + product.productName + "'> Add to Cart </button>"
            + "</div>").appendTo(cardBody);

        $("#button-addon-" + product.productName).on(
            {
                click: e => {
                    let inputQuantity = $("#input-qty-" + product.productName).val();
                    alert("you bought " + inputQuantity + " pcs of " + product.productName);
                }
            }
        );


    }
});


