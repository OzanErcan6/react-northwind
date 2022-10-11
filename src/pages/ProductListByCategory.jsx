import React, { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Table } from "semantic-ui-react";
import ProductService from "../services/ProductService";
import {addToCart} from "../store/actions/cartActions";


export default function ProductListByCategory(props) {
    const dispatch = useDispatch()

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        console.log(props.categoryId)
        let productService = new ProductService()
        productService.getByCategoryId(props.categoryId).then(result=>setProducts(result.data.data))
    },[props.categoryId])

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Ürün Adı</Table.HeaderCell>
                        <Table.HeaderCell>Birim Fiyatı</Table.HeaderCell>
                        <Table.HeaderCell>Stok Adedi</Table.HeaderCell>
                        <Table.HeaderCell>Açıklama</Table.HeaderCell>
                        <Table.HeaderCell>Kategori</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {products.map((product) => (
                        <Table.Row key={product.id}>
                            <Table.Cell><Link to={`/products/${product.productName}`}>{product.productName}</Link></Table.Cell>
                            <Table.Cell>{Math.round(product.unitPrice)}</Table.Cell>
                            <Table.Cell>{product.unitsInStock}</Table.Cell>
                            <Table.Cell>{product.quantityPerUnit}</Table.Cell>
                            <Table.Cell>{product.category.categoryName}</Table.Cell>
                            <Table.Cell><Button onClick={ () => handleAddToCart(product)}>Sepete Ekle</Button></Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    );
}
