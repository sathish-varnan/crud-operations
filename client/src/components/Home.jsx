import React from 'react'
import Button from './Button'
import Table from './Table'

const Home = () => {

  return (
    <div className="w-screen h-screen flex flex-col border-2">
      <div className="h-20 text-xl bg-black text-white rounded-lg flex justify-center items-center">
          <h1>PRACTICE CRUD OPERATIONS</h1>
      </div>
      <div className="w-screen h-5/6 flex flex-row p-8">
        <div className="w-1/2 h-full flex flex-col justify-between">
          <Button data={"get"}></Button>
          <Button data={"put"}></Button>
          <Button data={"post"}></Button>
          <Button data={"delete"}></Button>
        </div>
        <Table></Table>
      </div>
    </div>
  )
}

export default Home