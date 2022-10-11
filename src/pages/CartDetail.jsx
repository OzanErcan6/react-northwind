import React, {useEffect} from 'react'
import {useSelector} from "react-redux";
import {Button, Table, Icon} from "semantic-ui-react";
import {Link} from "react-router-dom";
import {addToCart, removeFromCart} from "../store/actions/cartActions";
import { useDispatch } from "react-redux";
import ProductService from "../services/ProductService";

export default function CartDetail() {
    const { cartItems } = useSelector(state => state.cart)
    let totalPrice = 0
    const dispatch = useDispatch()

    cartItems.map((cartItem) => (totalPrice = totalPrice + cartItem.product.unitPrice * cartItem.quantity))

    const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product))
    }

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Ürün Adı</Table.HeaderCell>
                        <Table.HeaderCell>Fiyat</Table.HeaderCell>
                        <Table.HeaderCell>Sepetteki miktar</Table.HeaderCell>
                        <Table.HeaderCell>Sepetten çıkar</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {cartItems.map((cartItem) => (
                        <Table.Row key={cartItem.product.id}>
                            <Table.Cell><Link to={`/products/${cartItem.product.productName}`}>{cartItem.product.productName}</Link></Table.Cell>
                            <Table.Cell>{cartItem.product.unitPrice}</Table.Cell>
                            <Table.Cell>{cartItem.quantity}</Table.Cell>
                            <Table.Cell>
                                <Button onClick={ () => handleAddToCart(cartItem.product)}>Sepete Ekle</Button>
                                <Button onClick={ () => handleRemoveFromCart(cartItem.product)}>Sepetten çıkar</Button>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>

            <Button animated='fade'>
                <Button.Content visible primary>{Math.round(totalPrice)} TL</Button.Content>
                <Button.Content hidden>
                    <Icon name='shop' />
                </Button.Content>
            </Button>
        </div>
    )
}
