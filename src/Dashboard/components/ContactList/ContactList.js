import React from 'react'
import PropTypes from 'prop-types'

import styles from './style.module.css'

import Contact from './ContactItem'
import InitialLetter from './InitialLetter'

const ContactList = ({ contacts }) => {
  const phonebookStructure = (contacts) => {
    const structuredContact = []
    let initialLetter = ''
    contacts.forEach((contact) => {
      if (initialLetter.toLowerCase() !== contact.first_name[0].toLowerCase()) {
        initialLetter = contact.first_name[0]
        structuredContact.push(
          <InitialLetter
            key={initialLetter}
            letter={initialLetter.toUpperCase()}
          />
        )
        structuredContact.push(<Contact key={contact.id} contact={contact} />)
      } else {
        structuredContact.push(<Contact key={contact.id} contact={contact} />)
      }
    })

    return structuredContact
  }

  const structuredContact = phonebookStructure(contacts)

  return (
    <div className={styles.gridContainer}>
      <div className={styles.gridItem}>First Name</div>
      <div className={styles.gridItem}>Last Name</div>
      <div className={styles.gridItem}>Email</div>
      <div className={styles.gridItem}>Phone</div>
      {structuredContact}
    </div>
  )
}

ContactList.propTypes = {
  contacts: PropTypes.array
}

export default ContactList
