import React, {useEffect, useState} from "react";
import {Table} from 'semantic-ui-react'
import ProductService from "../services/ProductService";

export default function Categories() {
  const [categories, setCategories] = useState([]);

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
                  <Table.Cell>{category.categoryName}</Table.Cell>
                  <Table.Cell>{category.description}</Table.Cell>

                </Table.Row>
            ))}
          </Table.Body>
        </Table>
    </div>
  );
}
