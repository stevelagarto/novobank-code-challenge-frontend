const SET_FIELD = 'SET_FIELD'
const RESET = 'RESET'

export const initialFormValues = {
  first_name: '',
  last_name: '',
  email: '',
  phone: ''
}

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_FIELD:
      return {
        ...state,
        [action.name]: action.value
      }
    default:
      return initialFormValues
  }
}

export const setField = (name, value) => ({
  type: SET_FIELD,
  name,
  value
})

export const reset = () => ({
  type: RESET
})
