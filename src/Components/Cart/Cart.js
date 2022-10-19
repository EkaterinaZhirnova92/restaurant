import CartItem from "./CartItem";
import { useSelector } from "react-redux/es/exports";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";

const Cart = () => {

    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);

    return(
        <div>
            <img className="cartIcon" src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-shopping-cart-cyber-monday-xnimrodx-lineal-color-xnimrodx.png"/> 
        <p className="total">TOTAL: $ {totalPrice}</p>
        {cartItems.map(cartItem => <CartItem cartItem ={cartItem} />)}
        </div>
    )
}

export default Cart;