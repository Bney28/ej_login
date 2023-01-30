import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import Login from './component/Login'
import Logout from './component/Logout'
import Profile from './component/Profile'

const App = () => {
  const {isAuthenticated} = useAuth0()
  return (
    <div className='App'>
        <h1>Hello</h1>
      {isAuthenticated ? <><Profile /> <Logout /> </> : <><Login /></>}
    </div>
  )
}

export default App