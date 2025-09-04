import React from 'react'
import Nav from './components/Nav'
import AddToDo from './components/AddToDo'
import Form from "./components/Form"
const App = () => {
  return (
      <>
      <Nav/>
     <main className="container sm:w-[50%] w-[90%] bg-violet-100 mx-auto my-5 rounded-xl p-5 ">
      <AddToDo/>
      <Form/>

     </main>
   
    
     </>
  )
}

export default App
