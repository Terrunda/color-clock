import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { format } from 'date-fns'

function App() {
  const [currentDate, setCurrentDate] = useState(new Date())

  function updateScreen() {
    const _ = setInterval(() => {
      setCurrentDate(new Date())
    }, 1000)
  }

  return (
    <>
    {updateScreen()}
    <div id='container'>
      <p>Current time: <span className='time'>{format(currentDate,  'pp')}</span></p>
      <p>Today's date is: <span className='date'>{format(currentDate, 'PPPP')}</span> </p>
    </div>
    </>
  )
}

export default App
