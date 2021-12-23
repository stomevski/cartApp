import react, { useContext } from "react";
import FoodItem from "./FoodItem";
import { CartContext } from '../CartContext/CartContext'


const Food = () => {
    const globalContext = useContext(CartContext);


    return (
        <div>
            {globalContext.food.map((abc) => {
                return (
                    <FoodItem key={abc.id} title={abc.title} ingredients={abc.ingredients} ajdi={abc.id} price={abc.price} />
                )
            })}
        </div>
    );


}



export default Food;