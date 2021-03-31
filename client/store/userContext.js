import { useReducer, createContext } from 'react';

const UserContext = createContext();

const initialState = {
  user: {},
  settings: {}
}

const userReducer = (action, state) => {
  switch (action.type) {
    case 'LOGIN':
      return {...state, user: action.user}
    case 'LOGOUT':
      return {}
    default:
      return state
  }
}

const useUser = () => {
  const [state, dispatch] = useReducer(userReducer, initialState)
  return {state, dispatch}
}

export {
  UserContext,
  useUser
}
