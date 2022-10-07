import React from 'react'
import {useSelector} from "react-redux";
import {Button, Table, Icon} from "semantic-ui-react";
import {Link} from "react-router-dom";

export default function CartDetail() {
    const { cartItems } = useSelector(state => state.cart)
    let totalPrice = 0

    cartItems.map((cartItem) => (
            totalPrice = totalPrice + cartItem.product.unitPrice
            ))

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Ürün Adı</Table.HeaderCell>
                        <Table.HeaderCell>Fiyat</Table.HeaderCell>
                        <Table.HeaderCell>Sepetteki miktar</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {cartItems.map((cartItem) => (
                        <Table.Row key={cartItem.product.id}>
                            <Table.Cell><Link to={`/products/${cartItem.product.productName}`}>{cartItem.product.productName}</Link></Table.Cell>
                            <Table.Cell>{cartItem.product.unitPrice}</Table.Cell>
                            <Table.Cell>{cartItem.quantity}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>

            <Button animated='fade'>
                <Button.Content visible primary>{totalPrice} TL</Button.Content>
                <Button.Content hidden>
                    <Icon name='shop' />
                </Button.Content>
            </Button>
        </div>
    )
}
