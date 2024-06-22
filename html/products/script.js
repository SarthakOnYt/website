const mydiv = document.getElementById("Bot_contents");

// display these bots on main products page
var products = [
    {"name": "Clash of users", "link": "https://top.gg/bot/892385564374999090", "img": "images/COU.webp"},
    {"name": "Variant bot", "link": "", "img": ""},
    {"name": "Variant bot", "link": "", "img": ""},
    {"name": "Variant bot", "link": "", "img": ""},
];

for (let i = 0; i < products.length; i++) {
    var product = products[i];
    var anchor = document.createElement("a");
    anchor.href = product["link"];
    
    var divContainer = document.createElement("div"); // Create a container div
    divContainer.classList.add("product-item"); // Optional: Add a class for styling

    var img = document.createElement("img");
    img.src = product["img"];
    img.alt = "Bot";
    img.classList.add("product-item-img")
    anchor.appendChild(img);

    var productName = document.createElement("p");
    productName.textContent = product["name"]; // Add product name as text content
    divContainer.appendChild(anchor); // Append the anchor (img) to the container
    divContainer.appendChild(productName); // Append the product name paragraph to the container

    mydiv.appendChild(divContainer); // Append the container to the main div
}

var anchor = document.createElement("a");
anchor.href="" // Link to View more bots here

var view_more_div=document.createElement("div")
view_more_div.classList.add("product-item")

var img = document.createElement("img")
img.src=""
img.alt="view more"
img.classList.add("product-item-img")

anchor.appendChild(img)
view_more_div.appendChild(anchor)
mydiv.appendChild(view_more_div)