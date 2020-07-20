import React, { useEffect, useState } from 'react'
import ContactList from '../components/ContactList'

const Dashboard = () => {
  const [contacts, setContacts] = useState([])

  const url = `${process.env.REACT_APP_BACKEND_URL}/contacts`

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(contacts => setContacts(contacts))
      .catch(error => {
        console.error('Error fetching contacts', error)
      })
  }, [])

  return contacts.length > 0 ? (
    <ContactList contacts ={contacts}/>
  ) : <div>LOADING</div>
}

export default Dashboard
