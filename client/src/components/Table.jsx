import React from 'react'
import TableRow from './TableRow'


const Table = () => {
  return (
    <div className="w-1/2 h-fit rounded-xl shadow-md border-2 backdrop-blur-md">
        <TableRow name="sathish" age="19"></TableRow>
        <TableRow name="AkashRaj" age="20"></TableRow>
        <TableRow name="soumil" age="20"></TableRow>
    </div>
  )
}

export default Table