import React from 'react'
import PropTypes from 'prop-types'

import CreateContactButton from './CreateContactButton/CreateContactButton'

import styles from './style.module.css'

const NavBar = ({ toggleCreateContactForm, contacts }) => {
  return (
    <div className={styles.navBar}>
      <div className={styles.title}>PHONE BOOK ({contacts.length} contacts)</div>
      <CreateContactButton toggleCreateContactForm={toggleCreateContactForm} className={styles.buttonContainer}/>
    </div>
  )
}

NavBar.propTypes = {
  toggleCreateContactForm: PropTypes.func,
  contacts: PropTypes.array
}

export default NavBar
