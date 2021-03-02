import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { authHeader } from './_utils'

const Account = function () {
  const [username, setUsername] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const customHeader = authHeader()
        const response = await axios.get('/auth/whoami', customHeader)
        setUsername(response.data.username)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  })

  return (
    <h1>Welcome, {username}!</h1>
  )
}

export default Account
