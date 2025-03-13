let name_input = document.getElementById("floatingInput")
let price_input = document.getElementById("floatingPrice")
let category_input = document.getElementById("floatingSelect")
let quantity_input = document.getElementById("floatingQuantity")
let table = document.getElementById("table_body")
let id_product_edit = 0
let buttonLight = document.getElementById("button_light");
Update_btn.style.display = "none"
show()
create_localstorage()


function create_localstorage(){
    if (!localStorage.getItem("products")) {
        localStorage.setItem("products", JSON.stringify([]));
    }
    if (!localStorage.getItem("mode")) {
        localStorage.setItem("mode", "true");
    }



    if (localStorage.getItem("mode")=="true") {
        document.body.classList.add("light")
        buttonLight.checked =true
        
    } else{
        document.body.classList.remove("light")
        buttonLight.checked =false
    }
}
function light_button(){
    let mode = localStorage.getItem("mode")
    mode = buttonLight.checked
    localStorage.setItem("mode",mode)
    if (localStorage.getItem("mode")=="true") {
        document.body.classList.add("light")
        
    }else{
        document.body.classList.remove("light")

    }
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
    let products = JSON.parse(localStorage.getItem("products"))|| []  
    products.push(product)
    localStorage.setItem("products", JSON.stringify(products))
    clear()
    show()
}
function show(){
    let products = JSON.parse(localStorage.getItem("products"))|| [] 
    table.innerHTML=""
    products.forEach((product , index) =>{
        table.innerHTML+=`
            <tr>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>${product.category}</td>
                <td>${product.quantity}</td>
                <td>
                    <button class="btn btn-warning btns_product btn_update me-2" onclick="show_update_product(${index})">Edit</button>
                    <button class="btn  btn-danger text-light btns_product me-2"  onclick="delete_product(${index})">Delete</button>
                </td>
            </tr>

        `
    })
}
function delete_product(index) {
    let products =JSON.parse(localStorage.getItem("products")) 
    products.splice(index, 1); 
    localStorage.setItem("products", JSON.stringify(products))
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
    let products = JSON.parse(localStorage.getItem("products"))|| [] 
    add_btn.style.display = "none";   
    Update_btn.style.display = "block"; 
    name_input.value = products[index].name
    price_input.value = products[index].price
    category_input.value = products[index].category 
    quantity_input.value = products[index].quantity
    id_product_edit = index
    scroll({
        top:0,
        behavior:"smooth"
    })
}
function update_product(){
    if (name_input.value === "" || price_input.value === "" || 
        category_input.value === "" || quantity_input.value === "" 
    ){
        error.style.display = "block";   
        return
    }
    let products = JSON.parse(localStorage.getItem("products"))|| [] 
    products[id_product_edit] = {
        name: name_input.value,
        price: price_input.value,
        category: category_input.value,
        quantity: quantity_input.value
    }
    add_btn.style.display = "block";   
    Update_btn.style.display = "none"; 
    error.style.display = "none"; 
    localStorage.setItem("products", JSON.stringify(products))
    show()
    clear()
}





