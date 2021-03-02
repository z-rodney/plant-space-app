import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { TextField, Card, Button } from '@material-ui/core'
import axios from 'axios'
import { useInput } from './_customHooks'

const Login = function () {
  const [username, setUsername] = useInput('')
  const [password, setPassword] = useInput('')
  const [redirect, setRedirect] = useState(false)

  const handleLogin = async function (e) {
    e.preventDefault()
    try {
      const response = await axios.post('/auth/login', { username, password })
      const token = response.data
      window.localStorage.setItem('token', token)
      setRedirect(true)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      {redirect && <Redirect to="/account" />}
      <div className="center-container">
        <Card className="login-card">
          <form className="form-card" onSubmit={handleLogin}>
            <TextField
              className="form-input"
              variant="outlined"
              name="username"
              label="Username"
              onChange={setUsername}
              inputProps={{ 'aria-label': 'username' }}
            />
            <TextField
              className="form-input"
              variant="outlined"
              name="password"
              type="password"
              label="Password"
              onChange={setPassword}
              inputProps={{ 'aria-label': 'password' }}
            />
            <Button variant="contained" type="submit">Sign In</Button>
          </form>
        </Card>
      </div>
    </>
  )
}

export default Login
