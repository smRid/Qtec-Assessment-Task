import { Outlet } from 'react-router'
import './App.css'

function App() {

  return (
    <>
      <div className='bg-red-500 text-white'>Home</div>
      <Outlet />
    </>
  )
}

export default App
