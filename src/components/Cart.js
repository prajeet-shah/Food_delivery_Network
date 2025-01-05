import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItems } from "../utils/cartSlice";


const Cart = ()=>{

    const cartItems = useSelector((store)=>store.cart.items);
    
    const dispatch = useDispatch();
    const handleClearCart = ()=>{
            dispatch(clearItems());
    }

    return(
        <div className="text-center p-2 m-2">
        
        <h1 className="font-bold text-2xl m-2 p-2">Cart</h1>
         <button className="m-2 p-2 text-white bg-black" onClick={handleClearCart}>clear cart</button>
         {cartItems.length == 0 && <h1>cart is empty.please add some cart</h1>}
        <div className="w-6/12 m-auto my-10 bg-gray-50">
        <ItemList items = {cartItems} />
        </div>
        </div>
        
    )
}


export default Cart;