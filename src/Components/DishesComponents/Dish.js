import ChangeQuantity from "../Cart/ChangeQuantity";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";

const Dish = ({dish}) => {

    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch()

    return(
        <div>
            <h2>{dish.name}</h2>
            <p>$ {dish.price}</p>
            <img src={`${dish.img}.jpg`} />
            <ChangeQuantity quantity = {quantity} setQuantity = {setQuantity} />
            <button className="component" onClick ={() => {dispatch(addItemToCart({dish, quantity}))}}>ADD TO CART</button>
            <hr />
        </div>
    )
}

export default Dish;