import React from 'react'
import PropTypes from 'prop-types'

const ContactItem = ({ contact }) => {
  return (<div>{contact.first_name}</div>)
}

ContactItem.propTypes = {
  contact: PropTypes.object
}

export default ContactItem
