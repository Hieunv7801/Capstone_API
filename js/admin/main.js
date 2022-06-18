var service = new Service();

function getEle(id){
    return document.getElementById(id);
}

function getListProductAdmin(){
    service
    .getListProductApi()
    .then(function(result){
        renderListProductAdmi(result.data);
    })
    .catch(function(error){
        console.log(error);
    })
}

getListProductAdmin();

function renderListProductAdmi(data){
    var contentHTML = "";

    data.forEach(function(product, index){
        contentHTML += `
            <tr  style="text-align: center;">
                <td>${index + 1}</td>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>
                <img class="img-fluid" src="./images/${
                    product.img
                  }"  width="50"/>
                </td>
                <td>${product.category}</td>
                <td>${product.status}</td>
                <td>${product.quality}</td>
                <td>${product.desc}</td>
                <td>
                <button class="btn btn-info" data-toggle="modal" data-target="#myModal" onclick="editProduct(${
                    product.id
                  })">Sửa</button>
                  <button class="btn btn-danger" onclick="deleteProduct(${
                    product.id
                  })">Xoá</button>
                </td>
            </tr>
        `;
    });
    getEle("tblDanhSachSP").innerHTML = contentHTML;
}
getEle("btnThemSP").onclick = function(){
    //* sửa lại title mới
    document.getElementsByClassName("modal-title")[0].innerHTML = "Thêm Sản Phẩm";

    //* thêm nút "Add" và footer modal
    var footer = `<button class="btn btn-success" onclick="addroduct()">Add</button>`
    document.getElementsByClassName("modal-footer")[0].innerHTML = footer;
}

//* Xóa Sản Phẩm
function deleteProduct(id){
    service
    .deleteProductApi(id)
    .then(function(){
        getListProductAdmin();
    })
    .catch(function(error){
        console.log(error);
    });
}

/**
 * Thêm sản phẩm
 */
function addroduct(){
    var name = getEle("TenSP").value;
    var price = getEle("GiaSP").value;
    var img = getEle("HinhSP").value;
    var category = getEle("loaiSP").value;
    var status = getEle("trangthaiSP").value;
    var quality = getEle("soLuongSP").value;
    var desc = getEle("MoTa").value;

    var product = new Product("",name, price, img, category, status, quality,desc);
    service
    .addProductApi(product)
    .then(function(){
        getListProductAdmin();
        //close modal
      document.getElementsByClassName("close")[0].click();
    })
    .catch(function(error){
        console.log(error);
    });
}

/**
 * Get Sản phẩm
 */
function editProduct(id){
    //* sửa lại title modal
    document.getElementsByClassName("modal-title")[0].innerHTML = "Edit Sản Phẩm";

    //* Thêm update
    var footer = `<button class="btn btn-success" onclick="updateProduct(${id})">Update</button>`;
    document.getElementsByClassName("modal-footer")[0].innerHTML = footer;

    //* get  product
    service
    .getProductApi(id   )
    .then(function(result){
        getEle("TenSP").value = result.data.name;
        getEle("GiaSP").value = result.data.price;
        getEle("HinhSP").value = result.data.img;
        getEle("loaiSP").value = result.data.category;
        getEle("trangthaiSP").value = result.data.status;
        getEle("soLuongSP").value = result.data.quality;
        getEle("MoTa").value = result.data.desc;
    })
    .catch(function(error){
        console.log(error);
    })
}
/**
 * Cập nhật sản phẩm
*/
function updateProduct(id){
    var name = getEle("TenSP").value;
    var price = getEle("GiaSP").value;
    var img = getEle("HinhSP").value;
    var category = getEle("loaiSP").value;
    var status = getEle("trangthaiSP").value;
    var quality = getEle("soLuongSP").value;
    var desc = getEle("MoTa").value;

    var product = new Product(id,name, price, img, category, status, quality,desc);
    service.updateProductApi(product)
    .then(function(){
        getListProductAdmin();
        document.getElementsByClassName("close")[0].click();
    })
    .catch(function(error){
        console.log(error);
    })
}