import {createContext, useContext, useReducer, useState} from "react";

    const UserProgressContext = createContext({
        progress : '',  //cart or checkout
        showCart : ()=>{},
        hideCart : ()=>{},
        showCheckout : ()=>{},
        hideCheckout : ()=>{}
    })

    export function UserProgressProvider({ children }) {
        const [userProgress,setUserProgress] = useState()

        function showCart(){
            setUserProgress('cart')
        }
        function hideCart(){
            setUserProgress('')
        }
        function showCheckout(){
            setUserProgress('checkout')
        }
        function hideCheckout(){
            setUserProgress('')
        }

        const userProgressContext = {
            progress : userProgress,
            showCart : showCart,
            hideCart : hideCart,
            showCheckout : showCheckout,
            hideCheckout : hideCheckout
        }
        return (
            <UserProgressContext.Provider value={userProgressContext}>{children}</UserProgressContext.Provider>
        )
    }
export default UserProgressContext