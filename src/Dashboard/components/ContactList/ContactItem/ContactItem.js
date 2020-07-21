import React from 'react'
import PropTypes from 'prop-types'

import styles from './style.module.css'

const ContactItem = ({ contact }) => {
  return (
    <>
      <div className={styles.gridItem}>{contact.first_name}</div>
      <div className={styles.gridItem}>{contact.last_name}</div>
      <div className={styles.gridItem}>{contact.email}</div>
      <div className={styles.gridItem}>{contact.phone}</div>
    </>
  )
}

ContactItem.propTypes = {
  contact: PropTypes.object
}

export default ContactItem
