import react, { useContext } from "react";
import { useState } from "react/cjs/react.development";
import { CartContext } from "../CartContext/CartContext";
import './btn.css';

const FoodItem = (props) => {

    const [number, setNumber] = useState(1);
    const globalContext = useContext(CartContext);


    const addToCartHandler = () => {

        const foodItem = globalContext.food.find((item) => item.id === props.ajdi);
        const foodId = Math.random();
        foodItem.foodId = foodId;
        foodItem.number = number;

        //mine
        const toUpdate = globalContext.data.findIndex((abc) => abc.id === foodItem.id);
        if (toUpdate >= 0) {
            globalContext.setData((prev) => {
                const newArr = [...prev];
                newArr[toUpdate].number += foodItem.number;

                return [...newArr];
            })
        } else globalContext.setData((prev) => {
            const neuObj = { ...foodItem };
            return [...prev, neuObj];
        })


    }


    return (
        <div style={{ width: "40%", border: "1px solid black", textAlign: "center", margin: "6% auto 0 auto", background: "#0F2C67", borderRadius: "40px" }}>
            <h1 style={{ color: "white" }}>{props.title}</h1>
            <p style={{ color: "white" }}>{props.ingredients}</p>
            <h1 style={{ color: "white" }}>{props.price}$</h1>
            <button className="btn" onClick={addToCartHandler} style={{ padding: "2% 5%", marginBottom: "3%", fontSize: "1.5rem", background: "lightGreen", borderRadius: "50px", border: "5px solid white", color: "black", cursor: "pointer" }}>Add to Cart</button>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <button className="btn_change" onClick={() => {
                    setNumber((prev) => {
                        if (prev === 1) {
                            return 1;
                        }
                        return prev - 1
                    })
                }} style={{ fontSize: "2rem", background: "#F4E185", width: "50px", height: "50px", borderRadius: "50%", color: "red", cursor: "pointer", border: "none", margin: "3% 0" }}>-</button>
                <p className="num" style={{ fontSize: "2rem", margin: "0px 5%", color: "white" }}>{number}</p>
                <button className="btn_change" onClick={() => {
                    setNumber((prev) => {
                        return prev + 1
                    })
                }} style={{ fontSize: "2rem", background: "#F4E185", width: "50px", height: "50px", borderRadius: "50%", color: "black", cursor: "pointer", border: "none", margin: "3% 0" }}>+</button>

            </div>
        </div>
    )



}


export default FoodItem;