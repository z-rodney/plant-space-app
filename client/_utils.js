export const authHeader = function () {
  const token = window.localStorage.getItem('token');
  console.log('token', token)
  return token
    ? {
      headers: { Authorization: `Bearer ${token}` }
    }
    : {}
}
