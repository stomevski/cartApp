import react, { useContext, useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { CartContext } from "../CartContext/CartContext";
import foodLogo from '../assets/food-delivery.svg';
import './btn.css';

const Header = (props) => {

    const globalContext = useContext(CartContext);
    const [klasa, setKlasa] = useState("");


    const total = globalContext.data.reduce((curr, item) => {
        return curr + item.number;
    }, 0)


    useEffect(() => {


        setTimeout(() => {
            setKlasa("")

        }, 500);




        return () => {

            setKlasa("editable");

        }



    }, [globalContext.data]);


    return (
        <header style={{ display: "flex", justifyContent: "space-around", background: "#CD1818", alignItems: "center" }}>
            <h1 className="header_text" style={{ fontSize: "5rem", fontWeight: "700", display: "flex", alignItems: "center" }}>Food Mood <img src={foodLogo} style={{ width: "20%", display: "inline-block", marginLeft: "10%" }} /></h1>
            <div className={klasa} onClick={props.onCartClick} style={{ display: "flex", alignItems: "center", background: "white", border: "1px solid black", borderRadius: "30%", margin: "1% 0", padding: "0 2%", position: "relative", cursor: "pointer" }}>
                <h1 style={{ padding: "0px 10px" }}>Cart</h1>
                <p style={{ fontSize: "2rem", padding: "1% 10%", border: "1px solid black", borderRadius: "50%", color: "black", width: "40px", height: "40px", display: "flex", justifyContent: "center", alignItems: "center" }}>{total}</p>
            </div>
        </header>

    )


}


export default Header;