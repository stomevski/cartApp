import React, { useContext } from "react";
import react from "react";
import Modal from "./Modal";
import { CartContext } from "../CartContext/CartContext";

const Cart = (props) => {
    const globalContext = useContext(CartContext);

    return (
        <div style={{ marginBottom: "5%" }}>
            {props.modal && <Modal setFalse={props.setFalse}>
                {globalContext.data.length > 0 ? globalContext.data.map((item) => {
                    return (
                        <div key={item.foodId} style={{ background: "#F3950D", width: "60%", margin: "5% auto 0% auto", borderRadius: "30px" }}>
                            <h1 style={{ fontSize: "3rem" }}>{item.title}</h1>
                            <h1>Price: {item.price * item.number}$</h1>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "5% 0" }}>
                                <button onClick={() => {

                                    globalContext.updateNumberMinus(item);

                                }} style={{ width: "60px", height: "60px", fontSize: "2rem", borderRadius: "50%", background: "white", color: "red", border: "none", cursor: "pointer" }}>-</button>
                                <p style={{ margin: "0 5%", fontSize: "2rem" }}>{item.number}</p>
                                <button onClick={() => {

                                    globalContext.updateNumberPlus(item);


                                }} style={{ width: "60px", height: "60px", fontSize: "2rem", borderRadius: "50%", background: "white", color: "black", border: "none", cursor: "pointer" }}>+</button>

                            </div>
                        </div>
                    )


                }) : <h1 style={{ marginTop: "20%", fontSize: "3rem" }}>Cart is Empty</h1>}

            </Modal>}
        </div>

    )



}


export default Cart;