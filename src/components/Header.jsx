import Logo from '../assets/logo.jpg'
import Button from "./UI/Button.jsx";
import {useContext} from "react";
import {CartContext} from "../store/CartContext.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";
export default function Header(){

    const cartCtx  = useContext(CartContext)
    const userProgressCtx = useContext(UserProgressContext)
    const totalCartItems = cartCtx.items.reduce((totalNumers, item) => {
        return totalNumers + item.quantity
    },0)

    function handleShowCart(){
        userProgressCtx.showCart()
    }
    return (<header id="main-header">

        <div id="title">
            <img src={Logo}/>
            <h1>React Food App</h1>
        </div>
        <nav>
            <Button textOnly={true} onClick={handleShowCart}>Cart ({totalCartItems})</Button>
        </nav>

    </header>)
}