import axios from "axios";

export default class ProductService{
    getProducts(){
        return axios.get("http://localhost:8083/api/products/getall")
    }
}
