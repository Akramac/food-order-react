import {createContext, useReducer} from "react";


    const CartContext =     createContext({
        items : [],
        addItem : (item)=>{
        },
        removeItem : (id)=>{

        }
    })
    function cartReducer(state, action){
        console.log(action.type)
        if(action.type==='ADD_ITEM'){

            const existingCartItemIndex = state.items.findIndex((item)=>item.id === action.item.id);
            //old items
            const updatedItems = [...state.items]
            console.log("state")
            console.log(updatedItems)
            if(existingCartItemIndex > -1){
                const existingItem=state.items[existingCartItemIndex]
                const updatedItem= {
                    ...existingItem,
                    quantity : existingItem.quantity + 1
                }
                updatedItems[existingCartItemIndex]= updatedItem
            }else{
                updatedItems.push({...action.item, quantity: 1})
            }
            return {...state, items: updatedItems};
        }
        if(action.type==='REMOVE_ITEM'){
            const existingCartItemIndex = state.items.findIndex((item)=>item.id === action.id)

            const existingCartItem = state.items[existingCartItemIndex]

            const updatedItems = [...state.items]


            if(existingCartItem.quantity === 1){
                updatedItems.splice(existingCartItemIndex,1)
            }else{
                updatedItems[existingCartItemIndex]= {...existingCartItem, quantity: existingCartItem.quantity - 1}
            }

            return {...state, items: updatedItems}
        }
        return state
    }

    const CartContextProvider = function CartContextProvider({children}){
        const [cart,dispatchCartAction]= useReducer(cartReducer,{items :[]})

        function addItem (item){
            dispatchCartAction({type: 'ADD_ITEM',item: item})
        }
        function removeItem (id){
            dispatchCartAction({type: 'REMOVE_ITEM',id:id})
        }
        const cartContext = {
            items: cart.items,
            addItem : addItem,
            removeItem : removeItem
        }

        console.log(cartContext)
        return <CartContext.Provider value={cartContext} >{children}</CartContext.Provider>
    }

export { CartContext, CartContextProvider };