import React, {useState} from "react";
import CartSummary from "./CartSummary";
import { Container, Menu } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom'


export default function Navi() {
  const { cartItems } = useSelector(state => state.cart)

  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const history = useHistory()
  function handleSignOut() {
    setIsAuthenticated(false)
    history.push("/")
  }

  function handleSignIn() {
    setIsAuthenticated(true)
  }

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" as={NavLink} exact to="/"/>
          <Menu.Item name="cart" as={NavLink} exact to="/cart"/>
          <Menu.Item name="categories" as={NavLink} exact to="/categories"/>
          <Menu.Menu position="right">
            { cartItems.length > 0 && <CartSummary/>}
            {isAuthenticated?<SignedIn signOut={handleSignOut} bisey="1"/>
            :<SignedOut signIn={handleSignIn}/>}  
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}