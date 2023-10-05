import React from 'react'

const Hash = ({hash}) => {
    console.log(hash)
  return (
    <div className='p-5'>
    <h2 className='text-xl font-500 my-5'>Tx Hash informations : </h2>
    <div className='flex flex-col g-5 w-sm bg-slate-50'>
        <div className='mb-3'>
            Tx hash : #{hash?.transactionHash}
        </div>
        <table>
            <tbody>
            <tr>
                <td>
                    From:
                </td>
                <td>
                    {hash?.from}
                </td>
            </tr>
            <tr>
                <td>
                    To:
                </td>
                <td>
                    {hash?.to}
                </td>
            </tr>
            <tr>
                <td>
                    Status:
                </td>
                <td>
                    {hash?.status === 1 ? "success" : "Failed"}
                </td>
            </tr>
            <tr>
                <td>
                    Confirmations:
                </td>
                <td>
                    {hash?.confirmations}
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</div>
  )
}

export default Hash