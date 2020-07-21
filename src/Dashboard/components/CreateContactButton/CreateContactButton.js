import React from 'react'
import PropTypes from 'prop-types'

import styles from './style.module.css'

const CreateContactButton = ({ toggleCreateContactForm }) => {
  const handleClick = () => {
    toggleCreateContactForm()
  }

  return (
    <input
      type="button"
      value="Add Contact"
      onClick={handleClick}
      className={styles.button}
    />
  )
}

CreateContactButton.propTypes = {
  toggleCreateContactForm: PropTypes.func
}

export default CreateContactButton
