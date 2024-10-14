import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import {useSelector} from "react-redux";
import {Fragment} from "react";

const Cart = (props) => {
    const showCart = useSelector(state => state.cart.showCart);
    const itemsCart = useSelector(state => state.cart.items);
    console.log('itemsCart', itemsCart)
    const total = itemsCart * 6;
  return (
      <Fragment>
          {showCart && <Card className={classes.cart}>
              <h2>Your Shopping Cart</h2>
              <ul>
                  {itemsCart.map((item) => (
                      <CartItem
                          key={item.id}
                          item={{
                              id: item.id,
                              title: item.name,
                              quantity: item.quantity,
                              total: item.totalPrice,
                              price: item.price}}
                      />
                  ))}

              </ul>
          </Card>}
      </Fragment>

  );
};

export default Cart;
