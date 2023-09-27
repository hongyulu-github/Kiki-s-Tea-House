import React from 'react'
import styles from './About.module.css'
import Contacts from '../../components/Contacts/Contacts'
import History from '../../components/History/History'

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <History/>
      
    </div>
  )
}

export default About