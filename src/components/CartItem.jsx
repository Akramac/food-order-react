import Modal from "./UI/Modal.jsx";
import {useContext} from "react";
import {CartContext} from "../store/CartContext.jsx";
import {currencyFormatter} from "../util/formatting.js";
import Button from "./UI/Button.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";

export default function CartItem({name, quantity, price ,onDecrease, onIncrease}){

    return (<li className="cart-item">
        <p>
            {name} - {quantity}x{currencyFormatter.format(price)}
        </p>
        <p className="cart-item-actions">
            <button onClick={onDecrease}>-</button>
            <span>{quantity}</span>
            <button onClick={onIncrease}>+</button>
        </p>
    </li>)
}