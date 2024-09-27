import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import {useSelector} from "react-redux";
import {Fragment} from "react";

const Cart = (props) => {
    const showCart = useSelector(state => state.showCart);
    const itemsCart = useSelector(state => state.items);
    const total = itemsCart * 6;
  return (
      <Fragment>
          {showCart && <Card className={classes.cart}>
              <h2>Your Shopping Cart</h2>
              <ul>
                  <CartItem
                      item={{title: 'Test Item', quantity: itemsCart, total, price: 6}}
                  />
              </ul>
          </Card>}
      </Fragment>

  );
};

export default Cart;
