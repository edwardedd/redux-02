import classes from './CartButton.module.css';
import {useDispatch, useSelector} from "react-redux";
import {cartActions} from "../../store";

const CartButton = (props) => {
    const dispatch = useDispatch();
    const toogleCart = () => {
        console.log('11')
        dispatch(cartActions.toggleCart())
    }
    const cartQuantity = useSelector(state => state.cart.totalQuantity)
    const cartItems = useSelector(state => state.cart.items);

  return (
    <button className={classes.button} onClick={toogleCart}>
      <span>My Cart</span>
        {cartQuantity > 0 && <span className={classes.badge}>{cartQuantity}</span>}
    </button>
  );
};

export default CartButton;
