import { useMemo } from "react"
import type { OrderItem } from "../types"
import { formatCurrencyUSD } from "../helpers"

type OrderTotalsProps = {
  order: OrderItem[],
  tip: number,
  placeOrder: () => void
}
export default function OrderTotals( {order, tip, placeOrder} : OrderTotalsProps ) {

  const subTotalAmount = useMemo(() => order.reduce((total, item) => total + (item.price * item.quantity), 0),[order])
  const tipAmount = useMemo(()=>subTotalAmount*tip,[tip, order])
  const totalAmount = useMemo(()=>subTotalAmount + tipAmount,[tip, order])

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y Propina:</h2>
        <p>Subtotal a pagar:{``}<span className="font-bold">{formatCurrencyUSD(subTotalAmount)}</span></p>
        <p>Propina:{``}<span className="font-bold">{formatCurrencyUSD(tipAmount)}</span></p>
        <p>Total a pagar:{``}<span className="font-bold">{formatCurrencyUSD(totalAmount)}</span></p>
      </div>
      <button className="w-full bg-black p-3 uppercase text-white font-bold mt-18 disabled:opacity-10" disabled={totalAmount === 0} onClick={placeOrder}>Guardar Orden</button>
    </>
  )
}