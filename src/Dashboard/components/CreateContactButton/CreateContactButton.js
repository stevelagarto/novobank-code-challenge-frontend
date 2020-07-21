import React from 'react'
import PropTypes from 'prop-types'

const CreateContactButton = ({ toggleCreateContactForm }) => {
  const handleClick = () => {
    toggleCreateContactForm()
  }

  return (
    <input
      type="button"
      value="Create Contact"
      onClick={handleClick}
    />
  )
}

CreateContactButton.propTypes = {
  toggleCreateContactForm: PropTypes.func
}

export default CreateContactButton
