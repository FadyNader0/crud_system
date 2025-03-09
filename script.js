let name_input = document.getElementById("floatingInput")
let price_input = document.getElementById("floatingPrice")
let category_input = document.getElementById("floatingSelect")
let quantity_input = document.getElementById("floatingQuantity")
let table = document.getElementById("table_body")
let product_1 = {
    name : "iphone",
    price : 20000,
    category : "Phone",
    quantity : 20
}  
let products = [product_1]
let id_product_edit = 0
Update_btn.style.display = "none"; 
show()
function change_btn_light(){
    document.body.classList.toggle("light")
}
function add(){
    if (name_input.value === "" || price_input.value === "" || 
        category_input.value === "" || quantity_input.value === "" 
    ){
        error.style.display = "block";   
        return
    }
    error.style.display = "none";   
    let product = {
        name : name_input.value,
        price : price_input.value,
        category : category_input.value,
        quantity : quantity_input.value
    }   
    products.push(product)
    clear()
    show()
}
function show(){
    table.innerHTML=""
    products.forEach((product , index) =>{
        table.innerHTML+=`
            <tr>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>${product.category}</td>
                <td>${product.quantity}</td>
                <td>
                    <button class="btn btn-warning btns_product btn_update" onclick="show_update_product(${index})">Update</button>
                    <button class="btn  btn-danger text-light btns_product"  onclick="delete_product(${index})">Delete</button>
                </td>
            </tr>

        `
    })
}
function delete_product(index) {
    console.log(index)
    products.splice(index, 1); 
    show();
    add_btn.style.display = "block";   
    Update_btn.style.display = "none"; 
    clear()
}
function clear(){
    name_input.value = "" 
    price_input.value = "" 
    category_input.value = "" 
    quantity_input.value = "" 
}
function show_update_product(index){
    add_btn.style.display = "none";   
    Update_btn.style.display = "block"; 
    name_input.value = products[index].name
    price_input.value = products[index].price
    category_input.value = products[index].category 
    quantity_input.value = products[index].quantity
    id_product_edit = index
}
function update_product(){
    if (name_input.value === "" || price_input.value === "" || 
        category_input.value === "" || quantity_input.value === "" 
    ){
        error.style.display = "block";   
        return
    }
    products[id_product_edit] = {
        name: name_input.value,
        price: price_input.value,
        category: category_input.value,
        quantity: quantity_input.value
    }
    add_btn.style.display = "block";   
    Update_btn.style.display = "none"; 
    error.style.display = "none";   
    show()
    clear()
}

