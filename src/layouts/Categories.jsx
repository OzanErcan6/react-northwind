import React, {useEffect, useState} from "react";
import {Button, Table} from 'semantic-ui-react'
import ProductService from "../services/ProductService";
import ProductListByCategory from "../pages/ProductListByCategory";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  //const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0)

  useEffect(()=>{
    let productService = new ProductService()
    productService.getCategories().then(result=>setCategories(result.data.data))
  },[])

  return (
    <div>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Kategori</Table.HeaderCell>
              <Table.HeaderCell>Açıklama</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {categories.map((category) => (
                <Table.Row key={category.categoryId}>
                  <Table.Cell><Button onClick={() => setSelectedCategory(category.categoryId)}>{category.categoryName}</Button></Table.Cell>
                  <Table.Cell>{category.description}</Table.Cell>
                </Table.Row>
            ))}
          </Table.Body>
        </Table>
      <ProductListByCategory categoryId={selectedCategory}></ProductListByCategory>
    </div>
  );
}
