const ChangeQuantity = ({quantity, setQuantity}) => {

    const addQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
    }

    const removeQuantity = () => {
        const newQuantity = quantity -1 ;
        if(newQuantity === 0) 
        {setQuantity(1);
        }
        else setQuantity(newQuantity);
    }

    return(
        <div>
            <button onClick = {addQuantity}>+</button>
            <span className="quantity">  {quantity} </span>
        <button onClick = {removeQuantity}>-</button>
        </div>
    )
}

export default ChangeQuantity;