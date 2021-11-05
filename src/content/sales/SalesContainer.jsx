import React from 'react'
import Sales from './Sales'
import { useSelector } from 'react-redux'

function SalesContainer() {
  const sales = useSelector((state) => state.sales.sales)
  let salesElem = sales.map(sale => <li key={sale.label}><Sales props={sale} /></li>)

  return (
    <div className='sales'>
      <ul>
        {salesElem}
      </ul>
    </div>
  )
}

export default SalesContainer
