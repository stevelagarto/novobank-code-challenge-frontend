import React from 'react'
import PropTypes from 'prop-types'

import styles from './style.module.css'

const InitialLetter = ({ letter }) => {
  return (
    <div className={styles.initialLetter}>
      <div className={styles.container}>{letter}</div>
    </div>
  )
}

InitialLetter.propTypes = {
  letter: PropTypes.string
}
export default InitialLetter
