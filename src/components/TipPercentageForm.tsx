import type { OrderActions } from "../reducers/order-reducer"

const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
]
type TipPercentageFormProp = {
  tip: number
  dispatch: React.ActionDispatch<[action: OrderActions]>
}
export default function TipPercentageForm( {tip, dispatch} : TipPercentageFormProp ) {
  return (
    <>
      <div>
        <h3 className="font-black text-2xl">Propina:</h3>
      </div>
      <form>
        {tipOptions.map(tipOption => (
          <div key={tipOption.id} className="flex gap-2">
            <label htmlFor={tipOption.id}>{tipOption.label}</label>
            <input id={tipOption.id} type="radio" name="tipOption" value={tipOption.value} onChange={e => dispatch({type: "set-tip", payload: {tip: (+e.target.value)}})} checked={tipOption.value === tip}/>
          </div>
        ))}
      </form>
    </>
  )
}