import React from 'react'
import { Dropdown } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function CartSummary() {
    return (
        <div>
            <Dropdown item text="Sepetiniz">
                <Dropdown.Menu>
                    <Dropdown.Item>Acer</Dropdown.Item>
                    <Dropdown.Item>Asus</Dropdown.Item>
                    <Dropdown.Item>Dell</Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item as={NavLink} to="/cart">Sepete git</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
