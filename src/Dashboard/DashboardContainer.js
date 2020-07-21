import React, { useEffect, useState } from 'react'

import { getAllContacts, createContact } from '../services/api'

import ContactList from './components/ContactList/ContactList'
import CreateContactForm from './components/CreateContactForm/CreateContactForm'
import CreateContactButton from './components/CreateContactButton/CreateContactButton'
import { sortContacts } from '../services/sortContacts'

const DashboardContainer = () => {
  const [contacts, setContacts] = useState([])
  const [showCreateContactForm, setShowCreateContactForm] = useState(false)

  useEffect(() => {
    getAllContacts().then(contacts => setContacts(sortContacts(contacts)))
  }, [])

  const handleCreateContact = async (contact) => {
    const createdContact = await createContact(contact)
    if (Object.prototype.hasOwnProperty.call(createdContact, 'error')) alert(createdContact.error)
    else {
      setContacts(sortContacts([...contacts, createdContact]))
      toggleCreateContactForm()
      console.log('Contact Created: ', createdContact)
    }
  }

  const toggleCreateContactForm = () => {
    setShowCreateContactForm(value => !value)
  }

  return contacts.length > 0 ? (
    <>
      { showCreateContactForm
        ? <CreateContactForm createContact={handleCreateContact} toggleCreateContactForm= {toggleCreateContactForm} /> : <CreateContactButton toggleCreateContactForm= {toggleCreateContactForm} />
      }
      <ContactList contacts ={contacts}/>
    </>
  ) : <div>LOADING</div>
}

export default DashboardContainer
