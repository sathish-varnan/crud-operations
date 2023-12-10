import React from 'react'
import TableCell from './TableCell'

const TableRow = (props) => {
  return (
    <div className="w-full h-fit flex flex-row justify-around items-center">
        <TableCell data={props.name}/>
        <TableCell data={props.age}/>
    </div>
  )
}

export default TableRow