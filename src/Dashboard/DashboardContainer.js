import React, { useEffect, useState } from 'react'

import { getAllContacts, createContact } from '../services/api'

import ContactList from './components/ContactList/ContactList'
import CreateContactForm from './components/CreateContactForm/CreateContactForm'
import { sortContacts } from '../services/sortContacts'

const DashboardContainer = () => {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    getAllContacts().then(contacts => setContacts(sortContacts(contacts)))
  }, [])

  async function handleCreateContact (contact) {
    const createdContact = await createContact(contact)
    if (Object.prototype.hasOwnProperty.call(createdContact, 'error')) alert(createdContact.error)
    else {
      setContacts(sortContacts([...contacts, createdContact]))
      console.log('Contact Created: ', createdContact)
    }
  }

  return contacts.length > 0 ? (
    <>
      <CreateContactForm createContact={handleCreateContact}/>
      <ContactList contacts ={contacts}/>
    </>
  ) : <div>LOADING</div>
}

export default DashboardContainer
