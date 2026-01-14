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
    <p>Current time: {format(currentDate,  'pp')} </p>
    <p>Today's date is: {format(currentDate, 'PPPP')} </p>

    </>
  )
}

export default App
