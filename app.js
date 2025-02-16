
// Define variable 
let renderData = document.querySelector(".renderData");
let renderCartData = document.querySelector(".renderCartData");
let dynamic_count = document.querySelector(".dynamic-count");
let tContainer = document.querySelector(".tContainer");
let line = document.querySelector(".line");
let total_price = document.getElementById("total_price");
let empty = document.querySelector(".empty");
let cItem = document.querySelector(".cItem");
let emptyC = false;
let arr =  [];
let calculateTotal = [];


// get data from api

async function getData(){
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    
    

    data.map((ele) => {
    let productMainDiv = document.createElement("div");
    let createImgElement = document.createElement("img");
    let createTitle = document.createElement("p");
    let createPriceEle = document.createElement("p");
    let btnEle = document.createElement("button");
    let btnText = document.createTextNode("Add To Cart");
    let createPriceText = document.createTextNode(`Price: $${ele.price}`);

    let createTextTitle = document.createTextNode(`${ele.title.slice(0,30)}....`);
    createImgElement.setAttribute ("src", ele.image);
    createImgElement.setAttribute("class", "myImages");
    productMainDiv.setAttribute("class", "box-main" );


    createTitle.appendChild(createTextTitle);
    createPriceEle.setAttribute("class", "price-element")
    btnEle.setAttribute("class", "btn-element")
    createPriceEle.appendChild(createPriceText);
    btnEle.appendChild(btnText);

    createTitle.setAttribute("class", "productTitle");
    
    

productMainDiv.appendChild(createImgElement);
productMainDiv.appendChild(createTitle);
productMainDiv.appendChild(createPriceEle);
productMainDiv.appendChild(btnEle);

renderData.appendChild(productMainDiv);






    function addToCart (img, price){
        arr.push({ii : img, pp : price});
        
        alert("Product Added to Cart");
        dynamic_count.innerHTML++;
        emptyC = true
        if(emptyC){
            cItem.style.display = "flex";
            empty.style.display = "none";

        }
        let cartMDiv = document.createElement("div");
        let cartImageEle = document.createElement("img");
        let cartTrashBtn = document.createElement("i");
        cartTrashBtn.setAttribute("class", "fa-solid fa-trash");
        tContainer.style.display = "flex";
        line.style.display = "block";
        function deleteItem (){
            cartMDiv.remove();
            dynamic_count.innerHTML--;
        }
        cartTrashBtn.addEventListener("click", deleteItem );
        cartImageEle.setAttribute("src", img);
        cartImageEle.setAttribute("class", "cartImageEle");
        cartMDiv.setAttribute("class", "cart-styling");
        let cartPriceEle = document.createElement("p");
        let cartPriceText = document.createTextNode(`$${price}`);
        cartPriceEle.setAttribute("class", "cart-priceN");

        

        cartPriceEle.appendChild(cartPriceText);
    
        


        cartMDiv.appendChild(cartImageEle);
        cartMDiv.appendChild(cartPriceEle);
        cartMDiv.appendChild( cartTrashBtn);
        renderCartData.appendChild(cartMDiv);
        calculateTotal.push(price);
        
        let myTotal = calculateTotal.reduce((acc, curVal) => {
            return acc + curVal
        })
        total_price.innerHTML = `Total Price: $${myTotal}`
        


    }
    
    btnEle.addEventListener("click", () => addToCart(ele.image, ele.price))

    });
    
}

getData();
























// // chatGPT


// // Define variables
// let renderData = document.querySelector(".renderData");
// let renderCartData = document.querySelector(".renderCartData");
// let dynamic_count = document.querySelector(".dynamic-count");
// let arr = [];
// let calculateTotal = [];

// // Get data from API
// async function getData() {
//     const res = await fetch("https://fakestoreapi.com/products");
//     const data = await res.json();

//     data.map((ele) => {
//         let productMainDiv = document.createElement("div");
//         let createImgElement = document.createElement("img");
//         let createTitle = document.createElement("p");
//         let createPriceEle = document.createElement("p");
//         let btnEle = document.createElement("button");
//         let btnText = document.createTextNode("Add To Cart");
//         let createPriceText = document.createTextNode(`Price: $${ele.price}`);

//         let createTextTitle = document.createTextNode(`${ele.title.slice(0, 30)}....`);
//         createImgElement.setAttribute("src", ele.image);
//         createImgElement.setAttribute("class", "myImages");
//         productMainDiv.setAttribute("class", "box-main");

//         createTitle.appendChild(createTextTitle);
//         createPriceEle.setAttribute("class", "price-element");
//         btnEle.setAttribute("class", "btn-element");
//         createPriceEle.appendChild(createPriceText);
//         btnEle.appendChild(btnText);
//         createTitle.setAttribute("class", "productTitle");

//         productMainDiv.appendChild(createImgElement);
//         productMainDiv.appendChild(createTitle);
//         productMainDiv.appendChild(createPriceEle);
//         productMainDiv.appendChild(btnEle);

//         renderData.appendChild(productMainDiv);

//         btnEle.addEventListener("click", () => addToCart(ele.image, ele.price));
//     });
// }

// // Function to add item to cart
// function addToCart(img, price) {
//     arr.push({ ii: img, pp: price });
//     calculateTotal.push(price);
//     updateTotal();

//     alert("Product Added to Cart");
//     dynamic_count.innerHTML = Number(dynamic_count.innerHTML) + 1;

//     let cartMDiv = document.createElement("div");
//     let cartImageEle = document.createElement("img");
//     let cartTrashBtn = document.createElement("i");
//     cartTrashBtn.setAttribute("class", "fa-solid fa-trash");

//     cartImageEle.setAttribute("src", img);
//     cartImageEle.setAttribute("class", "cartImageEle");
//     cartMDiv.setAttribute("class", "cart-styling");

//     let cartPriceEle = document.createElement("p");
//     let cartPriceText = document.createTextNode(`$${price}`);
//     cartPriceEle.setAttribute("class", "cart-priceN");

//     cartPriceEle.appendChild(cartPriceText);
//     cartMDiv.appendChild(cartImageEle);
//     cartMDiv.appendChild(cartPriceEle);
//     cartMDiv.appendChild(cartTrashBtn);
//     renderCartData.appendChild(cartMDiv);

//     // Delete item function
//     cartTrashBtn.addEventListener("click", () => deleteItem(cartMDiv, price));
// }

// // Function to delete item from cart
// function deleteItem(cartMDiv, price) {
//     cartMDiv.remove();
//     dynamic_count.innerHTML = Number(dynamic_count.innerHTML) - 1;
//     let index = calculateTotal.indexOf(price);
//     if (index > -1) {
//         calculateTotal.splice(index, 1);
//     }
//     updateTotal();
// }

// // Function to update total price
// function updateTotal() {
//     let total = calculateTotal.reduce((acc, val) => acc + val, 0);
//     console.log("Total Price: $" + total);
// }

// getData();












































