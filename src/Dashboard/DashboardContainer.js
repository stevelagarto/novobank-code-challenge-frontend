import React, { useEffect, useState } from 'react'

import { getAllContacts, createContact } from '../services/api'

import styles from './style.module.css'

import ContactList from './components/ContactList'
import CreateContactForm from './components/CreateContactForm'
import NavBar from './components/NavBar'

import { sortContacts } from '../services/sortContacts'

const DashboardContainer = () => {
  const [contacts, setContacts] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  const [message, setMessage] = useState('')
  const [showCreateContactForm, setShowCreateContactForm] = useState(false)

  useEffect(() => {
    getAllContacts().then((contacts) => setContacts(sortContacts(contacts)))
  }, [])

  const handleCreateContact = async (contact) => {
    const createdContact = await createContact(contact)
    if (Object.prototype.hasOwnProperty.call(createdContact, 'error')) {
      setErrorMessage(createdContact.error)
    } else {
      setContacts(sortContacts([...contacts, createdContact]))
      toggleCreateContactForm()
      setMessage('Contact added Succesfully')
    }
  }

  const toggleCreateContactForm = () => {
    setErrorMessage('')
    setMessage('')
    setShowCreateContactForm((value) => !value)
  }

  return contacts.length > 0 ? (
    <div className={styles.container}>
      {showCreateContactForm ? (
        <CreateContactForm
          createContact={handleCreateContact}
          errorMessage={errorMessage}
          toggleCreateContactForm={toggleCreateContactForm}
        />
      ) : null}
      <NavBar
        toggleCreateContactForm={toggleCreateContactForm}
        contacts={contacts}
      />
      <div className={styles.message}>{message}</div>
      <ContactList contacts={contacts} />
      <div className={styles.endLine} />
    </div>
  ) : (
    <div>
      <NavBar
        toggleCreateContactForm={toggleCreateContactForm}
        contacts={contacts}
      />
      {showCreateContactForm ? (
        <CreateContactForm
          createContact={handleCreateContact}
          errorMessage={errorMessage}
          toggleCreateContactForm={toggleCreateContactForm}
        />
      ) : null}
    </div>
  )
}

export default DashboardContainer
