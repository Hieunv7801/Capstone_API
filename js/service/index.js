function Service(){
    this.getListProductApi = function(){
        /**
         * Promise
         * Thời gian chờ (Pendding)
         * Thành công (Resolve)
         * Không thành công (Reject)
         */
        return axios({
            url: "https://6290ba24665ea71fe1396bc2.mockapi.io/api/demo/capstone",
            method: "GET"
        });
    };
    this.deleteProductApi = function(id){
        return axios({
            url: `https://6290ba24665ea71fe1396bc2.mockapi.io/api/demo/capstone/${id}`,
            method: "DELETE"
        });
    };
    this.addProductApi = function(product){
        return axios({
            url: "https://6290ba24665ea71fe1396bc2.mockapi.io/api/demo/capstone",
            method: "POST",
            data: product
        });
    };
    this.getProductApi = function(id){
        return axios({
            url: `https://6290ba24665ea71fe1396bc2.mockapi.io/api/demo/capstone/${id}`,
            method: "GET",
        });
    };
    this.updateProductApi = function(product){
        return axios({
            url: `https://6290ba24665ea71fe1396bc2.mockapi.io/api/demo/capstone/${product.id}`,
            method: "PUT",
            data: product
        });
    };
}