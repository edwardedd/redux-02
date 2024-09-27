import classes from './CartButton.module.css';
import {useDispatch, useSelector} from "react-redux";
import {cartActions} from "../../store";

const CartButton = (props) => {
    const dispatch = useDispatch();
    const toogleCart = () => {
        dispatch(cartActions.toggleCart())
    }
    const cartItems = useSelector(state => state.items);

  return (
    <button className={classes.button} onClick={toogleCart}>
      <span>My Cart</span>
        {cartItems > 0 && <span className={classes.badge}>{cartItems}</span>}
    </button>
  );
};

export default CartButton;
