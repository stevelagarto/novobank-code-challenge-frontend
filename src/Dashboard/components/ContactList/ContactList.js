import React from 'react'
import Contact from './ContactItem/ContactItem'
import PropTypes from 'prop-types'

const ContactList = ({ contacts }) => {
  return (
    <div>{
      contacts.map((contact) =>
        <Contact
          key={contact.id}
          contact={contact}
        />)
    }</div>
  )
}

ContactList.propTypes = {
  contacts: PropTypes.array
}

export default ContactList
