// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { CakeView } from './features/cake/cakeView'
import { IceCreamView } from './features/icecream/iceCreamView'
import { BiscuitView } from './features/biscuits/biscuitView'
import { UserView } from './features/users/UserView'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BiscuitView />
      <br /><br />
      <UserView />
      <br /><br />
      <IceCreamView />
      <br /> <br />
      <CakeView />
      
      
    </div>
  )
}

export default App
