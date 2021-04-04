import axios from 'axios'
import React, { useEffect, useContext, useState } from 'react'
import { authHeader } from '../_utils'
import { UserContext } from '../store/userContext'

const Account = function () {
  const [loading, setLoading] = useState(false)
  const { state, dispatch } = useContext(UserContext)
  console.log(state)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const customHeader = authHeader();
        const { data: {username, isAdmin} } = await axios.get('/auth/whoami', customHeader)
        dispatch({
          type: 'LOGIN',
          user: {
            username,
            isAdmin
          }
        })
        setLoading(true)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])

  return (
    loading
      ? <h1>Welcome, {state.user.username}!</h1>
      : <h1>Not signed in</h1>
  )
}

export default Account
