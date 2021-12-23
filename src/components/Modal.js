import React, { useContext, useState } from "react";
import { CartContext } from "../CartContext/CartContext";


const Modal = (props) => {
    const globalData = useContext(CartContext);

    return (
        <React.Fragment>
            <div onClick={props.setFalse} style={{ position: "fixed", background: "gray", width: "100vw", height: "100vh", zIndex: "5", top: "0", opacity: "0.75" }}></div>
            <div style={{ position: "absolute", background: "white", width: "70%", minHeight: "500px", zIndex: "10", top: "10%", left: "50%", transform: "translateX(-50%)", textAlign: "center", borderRadius: "50px" }}>
                {props.children}
                {globalData.data.length > 0 && <h1 style={{ fontSize: "3rem", marginTop: "10%" }}>Total Amount: {globalData.totalAmount()} $</h1>}
                <div style={{ display: "flex", justifyContent: "space-around", margin: "15% 0" }}>
                    <button onClick={props.setFalse} style={{ padding: "3% 7%", background: "#CD1818", border: "1px solid black", borderRadius: "40px", fontSize: "2rem", color: "white", cursor: "pointer" }}>Cancel</button>
                    {globalData.data.length > 0 && <button style={{ padding: "3% 7%", background: "#CD1818", border: "1px solid black", borderRadius: "40px", fontSize: "2rem", color: "white", cursor: "pointer" }}>Order</button>}

                </div>
            </div>
        </React.Fragment>
    )


}


export default Modal;


