import React, { useEffect, useState } from 'react'

import { getAllContacts, createContact } from '../services/api'

import styles from './style.module.css'

import ContactList from './components/ContactList/ContactList'
import CreateContactForm from './components/CreateContactForm/CreateContactForm'
import CreateContactButton from './components/CreateContactButton/CreateContactButton'
import { sortContacts } from '../services/sortContacts'

const DashboardContainer = () => {
  const [contacts, setContacts] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  const [message, setMessage] = useState('')
  const [showCreateContactForm, setShowCreateContactForm] = useState(false)

  useEffect(() => {
    getAllContacts().then(contacts => setContacts(sortContacts(contacts)))
  }, [])

  const handleCreateContact = async (contact) => {
    const createdContact = await createContact(contact)
    if (Object.prototype.hasOwnProperty.call(createdContact, 'error')) setErrorMessage(createdContact.error)
    else {
      setContacts(sortContacts([...contacts, createdContact]))
      toggleCreateContactForm()
      setMessage('Contact added Succesfully')
    }
  }

  const toggleCreateContactForm = () => {
    setErrorMessage('')
    setMessage('')
    setShowCreateContactForm(value => !value)
  }

  return contacts.length > 0 ? (
    <>
      { showCreateContactForm
        ? <CreateContactForm
          createContact={handleCreateContact}
          errorMessage={errorMessage}
          toggleCreateContactForm= {toggleCreateContactForm}
        />
        : null
      }
      <CreateContactButton toggleCreateContactForm= {toggleCreateContactForm} />
      <div className={styles.message}>{message}</div>
      <ContactList contacts ={contacts}/>
    </>
  ) : <div>LOADING</div>
}

export default DashboardContainer
