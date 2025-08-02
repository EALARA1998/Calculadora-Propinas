import type { MenuItems, OrderItem } from "../types"

export type OrderState = {
  order: OrderItem[]
  tip: number
}
export type OrderActions = 
  | { type: "add-item", payload: { item: MenuItems } }
  | { type: "remove-item", payload: { id: MenuItems["id"] } }
  | { type: "set-tip", payload: { tip: number } }
  | { type: "place-order" }

// const initialOrder = () : CartItem[] => {
//   const localStorageCart = localStorage.getItem('guitar-cart')
//   return localStorageCart ? JSON.parse(localStorageCart) : []
// }

export const initialState : OrderState = {
  order: [],
  tip: 0
}

export const orderReducer = (state: OrderState = initialState, action: OrderActions) => {
  switch (action.type) {
    case "add-item": {
      
      let updateOrder : OrderItem[]
      const itemExist = state.order.find(orderItem => orderItem.id === action.payload.item.id)

      if (itemExist) {
        updateOrder = state.order.map(orderItem => orderItem.id === action.payload.item.id ? { ...orderItem, quantity: orderItem.quantity + 1} : orderItem)
      }else{
        const newItem = {...action.payload.item, quantity: 1}
        updateOrder = [ ...state.order, newItem ]
      }
      return { ...state, order: updateOrder }
      break;
    }
    case "remove-item": {

      const updateOrder = state.order.filter(item => item.id !== action.payload.id)
      
      return { ...state, order: updateOrder}
      break;
    }
    case "set-tip": {
      return { ...state, tip: action.payload.tip}
      break;
    }
    case "place-order": {
        console.log("Guardando...")
      return { ...state, order: [], tip: 0}
      break;
    }
    default:
      return state
      break;
  }
}