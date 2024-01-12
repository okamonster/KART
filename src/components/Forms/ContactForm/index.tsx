import { ReactElement } from 'react'

import { Button, TextInput, Textarea } from '@mantine/core'

import styles from './style.module.scss'

export const ContactForm = (): ReactElement => {
  return (
    <form className={styles.contactForm}>
      <div className={styles.formRow}>
        <TextInput label="FirstName" style={{ flex: 1 }} />
        <TextInput label="LastName" style={{ flex: 1 }} />
      </div>
      <div className={styles.formRow}>
        <TextInput label="Email" style={{ flex: 1 }} />
        <TextInput label="Phone" style={{ flex: 1 }} />
      </div>
      <Textarea label="Message" cols={30} rows={10} />
      <Button style={{ backgroundColor: '#124387', width: 230 }} size="md">
        SEND MESSAGE
      </Button>
    </form>
  )
}
