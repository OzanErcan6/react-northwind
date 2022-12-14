import React from "react";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";
import { Grid } from "semantic-ui-react";
import { Route } from "react-router";
import ProductDetail from "../pages/ProductDetail";
import CartDetail from "../pages/CartDetail";
import ProductAdd from "../pages/productAdd";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>

          <Grid.Column width={12}>
            <Route exact path="/" component={ProductList} />
            <Route exact path="/products" component={ProductList} />
            <Route exact path="/categories" component={Categories} />
            <Route path="/products/:name" component={ProductDetail} />
            <Route path="/cart" component={CartDetail} />
            <Route path="/product/add" component={ProductAdd} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
