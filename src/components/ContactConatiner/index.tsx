import { ReactElement } from 'react'

import Link from 'next/link'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FaEarthAsia } from 'react-icons/fa6'
import { HiMail } from 'react-icons/hi'
import { ImMail } from 'react-icons/im'

import styles from './style.module.scss'

import { ContactForm } from '~/components/Forms/ContactForm'
import { PageVisual } from '~/components/PageVisual'

export const ContactContainer = (): ReactElement => {
  return (
    <div className={styles.contactContainer}>
      <section>
        <PageVisual
          bgImageUrl={'/images/intro_sponsors.png'}
          title={'CONTACT US'}
          desc={`We always wecolcome new members and new sponsors  who struggle to win together. Please feel free to contact us.`}
        />
      </section>
      <div className={styles.contents}>
        <section className={styles.contactSection}>
          <h3>OurAddress</h3>
          <p>
            It may difficult to come our factory without our guide, since the
            factory is located in the secluded part of Yoshida campus, so that
            you had better inform us to visit beforehand
          </p>
          <div className={styles.contactItem}>
            <FaMapMarkerAlt />
            <Link href={''}>
              京都府京都市左京区吉田本町 京都大学総合研究実験棟吉田工房(58)
            </Link>
          </div>
          <div className={styles.contactItem}>
            <ImMail />
            <p>
              〒606-8317
              <br />
              京都府京都市左京区吉田本町京都大学
              <br />
              総合研究12号館228号室
            </p>
          </div>
          <div className={styles.contactItem}>
            <HiMail />
            <Link href={'mailto:kart.official@gmail.com'}>
              kart.official@gmail.com
            </Link>
          </div>
          <div className={styles.contactItem}>
            <FaEarthAsia />
            <Link href={'https://www.formula-kart.org/'}>
              www.formula-kart.org/
            </Link>
          </div>
        </section>
        <section className={styles.contactForm}>
          <ContactForm />
        </section>
      </div>
    </div>
  )
}
