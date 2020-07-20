import React, { useReducer } from 'react'
import PropTypes from 'prop-types'

import { reducer, initialFormValues, setField, reset } from './reducer'

const CreateContactForm = ({ createContact }) => {
  const [formValues, dispatch] = useReducer(reducer, initialFormValues)

  function handleOnChange (event) {
    dispatch(setField(event.target.name, event.target.value))
  }

  function handleSubmit (event) {
    event.preventDefault()
    createContact(formValues)
    dispatch(reset())
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="first_name"
        value={formValues.first_name}
        onChange={handleOnChange}
        required
        type="text"
      />
      <input
        name="last_name"
        value={formValues.last_name}
        onChange={handleOnChange}
        required
        type="text"

      />
      <input
        name="email"
        value={formValues.email}
        onChange={handleOnChange}
        required
        type="email"
      />
      <input
        name="phone"
        value={formValues.phone}
        onChange={handleOnChange}
        required
        type="number"
      />
      <input type="submit" />
    </form>
  )
}

CreateContactForm.propTypes = {
  createContact: PropTypes.func
}

export default CreateContactForm
