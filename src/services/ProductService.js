import axios from "axios"

export default class ProductService{
     getProducts(){
         return axios.get("http://localhost:8083/api/products/getall")
     }

    getProductsByPage(pageNo, pageSize){
        return axios.get("http://localhost:8083/api/products/getallByPage",{ params: { pageNo: pageNo, pageSize: pageSize } })
    }

     getByProductName(productName){
        return axios.get("http://localhost:8083/api/products/getByProductName?productName=" + productName)
    }
}