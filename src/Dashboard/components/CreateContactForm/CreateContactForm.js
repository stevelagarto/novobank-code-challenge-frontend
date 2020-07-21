import React, { useReducer } from 'react'
import PropTypes from 'prop-types'

import styles from './style.module.css'

import { reducer, initialFormValues, setField } from './reducer'

const CreateContactForm = ({ createContact, toggleCreateContactForm, errorMessage }) => {
  const [formValues, dispatch] = useReducer(reducer, initialFormValues)

  function handleOnChange (event) {
    dispatch(setField(event.target.name, event.target.value))
  }

  function handleSubmit (event) {
    event.preventDefault()
    createContact(formValues)
  }

  return (
    <div className={styles.container}>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.title}>ADD CONTACT</div>
        <input
          name="first_name"
          value={formValues.first_name}
          onChange={handleOnChange}
          required
          type="text"
          className={styles.textInput}
          placeholder="First Name"
        />
        <input
          name="last_name"
          value={formValues.last_name}
          onChange={handleOnChange}
          required
          type="text"
          className={styles.textInput}
          placeholder="Last Name"
        />
        <input
          name="email"
          value={formValues.email}
          onChange={handleOnChange}
          required
          type="email"
          className={styles.textInput}
          placeholder="Email"
        />
        <input
          name="phone"
          value={formValues.phone}
          onChange={handleOnChange}
          required
          type="number"
          className={styles.textInput}
          placeholder="Phone"
        />
        <div className={styles.buttonContainer}>
          <input type="submit" className={styles.button} />
          <input
            type="button"
            value="Cancel"
            onClick={toggleCreateContactForm}
            className={styles.button}
          />
        </div>
        <div className={styles.errorMessage}>{errorMessage}</div>
      </form>
    </div>
  )
}

CreateContactForm.propTypes = {
  createContact: PropTypes.func,
  toggleCreateContactForm: PropTypes.func,
  errorMessage: PropTypes.string
}

export default CreateContactForm
