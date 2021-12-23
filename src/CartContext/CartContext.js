import react from "react";
import { useState } from "react/cjs/react.development";


export const CartContext = react.createContext();


export const CartProvider = (props) => {

    const [data, setData] = useState([]);
    const [food, setFood] = useState([
        { id: 1, title: "Kakrsas", ingredients: "sadsadsa sadasdasd sadasdsad asdasdas sadasdasd", price: 8 },
        { id: 2, title: "Becka Snicla", ingredients: "sadsadsa sadasdasd sadasdsad asdasdas sadasdasd", price: 15 },
        { id: 3, title: "Shpageti", ingredients: "sadsadsa sadasdasd sadasdsad asdasdas sadasdasd", price: 11 },
        { id: 4, title: "Polutka", ingredients: "sadsadsa sadasdasd sadasdsad asdasdas sadasdasd", price: 22 },
        { id: 5, title: "Piletina", ingredients: "sadsadsa sadasdasd sadasdsad asdasdas sadasdasd", price: 14 }
    ])

    const totalAmount = () => {
        let total = 0;

        if (data.length === 0) {
            return total;
        }

        data.forEach(element => {
            total += (element.price * element.number)
        });

        return total;

    }

    console.log(totalAmount());


    const updateNumberPlus = (item) => {

        const updatedData = data.map((itm) => {
            if (itm.foodId === item.foodId) {
                return {
                    ...itm,
                    number: item.number + 1
                }
            }

            return itm;


        })

        setData(updatedData);

    }


    const updateNumberMinus = (item) => {

        if (item.number === 1) {
            const filteredData = data.filter((flt) => {
                return flt.foodId !== item.foodId;
            })

            setData(filteredData);

            return;
        }

        const updatedData = data.map((itm) => {
            if (itm.foodId === item.foodId) {
                return {
                    ...itm,
                    number: item.number - 1
                }
            }

            return itm;


        })

        setData(updatedData);

    }


    return (
        <CartContext.Provider value={{ data, setData, food, setFood, updateNumberPlus, updateNumberMinus, totalAmount }}>
            {props.children}
        </CartContext.Provider>
    )


}


