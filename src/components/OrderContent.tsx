import type { OrderItem } from "../types/index"
import { formatCurrencyUSD } from "../helpers"
import type { OrderActions } from "../reducers/order-reducer"
type OrderContentProps = {
  order: OrderItem[]
  dispatch: React.ActionDispatch<[action: OrderActions]>
}
export default function OrderContent( {order, dispatch} : OrderContentProps) {
  return (
    <>
      <div>
        <h2 className="font-black text-4xl">Consumo</h2>
        <div className="space-y-3 mt-10">
          {
            order.map(item => (
              <div className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b" key={item.id}>
                <div>
                  <p className="text-lg">{item.name} {formatCurrencyUSD(item.price)}</p>
                  <p className="font-black">Cantidad {item.quantity} {formatCurrencyUSD(item.price * item.quantity)}</p>
                </div>
                <button className="bg-red-600 h-8 w-8 rounded-full text-white font-black" onClick={()=>{
                  dispatch({ type: "remove-item", payload: { id: item.id }})
                }}>X</button>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}