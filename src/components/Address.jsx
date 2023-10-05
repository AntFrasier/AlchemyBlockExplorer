import React from 'react'

const Address = ({account}) => {
    console.log(account)
  return (
    <div className='p-5'>
        <h2 className='text-xl font-500 my-5'>Address informations : </h2>
        <div className='flex flex-col g-5 w-sm bg-slate-50'>
            <div className='mb-3'>
            Address : #{account?.address}
        </div>
        <table>
            <tbody>
            <tr>
                <td>
                    Balance:
                </td>
                <td>
                    {account?.decimalBalance} Eth
                </td>
            </tr>
            <tr>
                <td>
                    Is a Contract:
                </td>
                <td>
                    {account?.iscontract ? "Yes" : "No"} 
                </td>
            </tr>
            <tr>
                <td>
                    ERC 20 tokens:
                </td>
                <td>
                    <ul className='bg-white max-h-[300px] overflow-auto py-5'>
                        {account?.tokens.map ( (token) =>
                             <li key={token.address} className='mb-2'>
                                <p>token: {token.name} </p>
                                <p>symbol: {token.symbol} </p>
                                <p>balance: {token.balance} </p>
                            </li>) } 
                    </ul>
                </td>
            </tr>
            </tbody>
            </table>
            </div>
        </div>
  )
}

export default Address