import React from 'react'
import Contact from './ContactItem'

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

export default ContactList
