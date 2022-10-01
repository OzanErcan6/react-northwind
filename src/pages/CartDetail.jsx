import React from 'react'
import {useSelector} from "react-redux";
import {Button, Dropdown, Label, Table} from "semantic-ui-react";
import {Link, NavLink} from "react-router-dom";

export default function CartDetail() {
    const { cartItems } = useSelector(state => state.cart)

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Ürün Adı</Table.HeaderCell>
                        <Table.HeaderCell>Sepetteki miktar</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {cartItems.map((cartItem) => (
                        <Table.Row key={cartItem.product.id}>
                            <Table.Cell><Link to={`/products/${cartItem.product.productName}`}>{cartItem.product.productName}</Link></Table.Cell>
                            <Table.Cell>{cartItem.quantity}</Table.Cell>

                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    )
}
