import React, { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Icon, Menu, Table } from "semantic-ui-react";
import ProductService from "../services/ProductService";
import {addToCart} from "../store/actions/cartActions";
//import { toast } from 'react-toastify';
import { Grid, Input, Pagination, Segment } from 'semantic-ui-react'


export default function ProductList() {

  const dispatch = useDispatch()

  const [products, setProducts] = useState([]);

  const [activePage, setActivePage] = useState(1);

  const handlePaginationChange = (e, { activePage }) => setActivePage(activePage)

  const calculatePageSize = () => {
    let productService = new ProductService()
    //productService.getProducts().then(result=>setProducts(result.data.data))
  }

  useEffect(()=>{
    let productService = new ProductService()
    productService.getProductsByPage(activePage,10).then(result=>setProducts(result.data.data))
  },[activePage])

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
    //toast.success(`${product.productName} sepete eklendi!`)
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

        <Grid >
          <Grid.Column>
            <Pagination
                activePage={activePage}
                onPageChange={handlePaginationChange}
                totalPages={8}
            />
          </Grid.Column>
        </Grid>
      </Table>
    </div>
  );
}
