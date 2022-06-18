var service = new Service();
function getEle(id){
    return document.getElementById(id);
}
function getListProduct(){
    //* lấy sản phẩm từ server
    //* pendding
    var promise = service.getListProductApi();
    promise
    .then(function(result){
        renderListProduct(result.data);
    })
    .catch(function(error){
        console.log(error);
    });
}
getListProduct();
function renderListProduct(data){
    var contentHTML = "";
    data.forEach(function(product){
        contentHTML += `
        <div class="col-sm-3">
        <img src="images/${product.img}" alt="" srcset="">
        <h4 class="mt-2">${product.name}</h4>
        <div class="ratting">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <p>$${product.price}</p>
        <div class="btn"><i class="fa fa-shopping-bag"></i><a class="btn-add" onclick="addToCart();"> Add</a></div>
    </div>
        `;
    });
    getEle("listProduct").innerHTML = contentHTML;
}