import React from 'react'

const TableCell = (props) => {
  return (
    <div className="shadow-lg w-1/3 h-12 flex justify-center items-center rounded-md"><h1>{props.data}</h1></div>
  )
}

export default TableCell