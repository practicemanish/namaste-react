
import { useSelector } from "react-redux";
import ItemList from "./ItemList"
const Cart = () =>{
    const cartItems = useSelector((store) => store.cart.items);
    return(
        <div className="m-4 p-4 text-center">
            <h1 className="text-2xl font-bold">Hello Manish this is your cart page</h1>
                <div>
                    <ItemList items =  {cartItems} />
                </div>

        </div>
    )
};
export default Cart;