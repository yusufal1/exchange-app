import React from 'react'

const Trade = () => {
  return (
    <div className='container'>
        <div className='tradeSection'>
            <span className='tradeTotal'>Bakiye: {localStorage.getItem('totalBalance')}</span>
            <div className='tradeSectionInputs'>
                <div>
                  <label htmlFor="amount">Tutar</label>
                  <input name='amount' id='amount' type="number" min="0" placeholder=''/>
                </div>
                <div>
                  <label htmlFor="amountExchange">Tutar</label>
                  <input name='amountExchange' id='amountExchange' min="0" type="number" placeholder=''/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Trade