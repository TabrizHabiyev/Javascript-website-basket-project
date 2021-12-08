let table = document.getElementById("table");
let tableBody = document.getElementById("tableBody");
function GetBasketCount() {
    let localStorageArr = JSON.parse(localStorage.getItem("basket"));
    document.getElementById("basketCount").innerText = localStorageArr.length;
}
GetBasketCount()

let localStorageArr = JSON.parse(localStorage.getItem("basket"));
//Show oll product
localStorageArr.forEach(product => {
    let tr = document.createElement("tr");
    tr.setAttribute("id", `${product.id}`);
    tr.classList.add("trlist");
    let tdImage = document.createElement("td");
    let image = document.createElement("img");
    let trash = document.createElement("i");
    trash.classList.add("fas");
    trash.classList.add("fa-trash-alt")
    trash.classList.add("text-danger")
    trash.setAttribute("onclick", `delete_product(${product.id})`);
    image.setAttribute("src", product.imSrc)
    image.style.height = "50px";
    image.style.width = "50px"
    tdImage.append(image);
    let tdProductName = document.createElement("td");
    tdProductName.innerText = product.name;
    let tdPrice = document.createElement("td")
    tdPrice.innerText = product.price;
    let tdCount = document.createElement("td")
    tdCount.innerText = product.count;
    tr.append(tdImage, tdProductName, tdPrice, tdCount, trash);
    tableBody.append(tr);
});

//Delete product from basket 
function delete_product(id) {
    let localStorageBasket = JSON.parse(localStorage.getItem("basket"));
    let updatelocalStora =[];
    document.getElementById(id).outerHTML="";
    for (let i = 0; i < localStorageBasket.length; i++) {
     
       if (localStorageBasket[i].id !=id) {
        updatelocalStora.push(localStorageBasket[i])
       }
    }
    localStorage.clear();
    localStorage.setItem("basket", JSON.stringify(updatelocalStora));
}