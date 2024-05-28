// import React from 'react'
import { useDispatch } from 'react-redux'

const Home = () => {
  const dispatch=useDispatch()
  return (
    <div>Home
      <button onClick={()=>{
        dispatch({
          type:'logout'
        })
      }}> Logout</button>
      <button onClick={()=>{
        dispatch({
          type:'login'
        })
      }}>Login</button>
    </div>
  )
}

export default Home