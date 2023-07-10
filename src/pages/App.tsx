import { Outlet } from 'react-router-dom'
import './App.css'
import TestReducer from '../TestReducer'

function App() {

  return (
    <>
     <TestReducer/>
     <Outlet />
    </>
  )
}

export default App
