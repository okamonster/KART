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
    <>
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
      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52275.854988752646!2d135.7414491851937!3d35.02570193804554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600108f8637f88d9%3A0x66a61e0fff12bc0!2z44CSNjA2LTgzMTcg5Lqs6YO95bqc5Lqs6YO95biC5bem5Lqs5Yy65ZCJ55Sw5pys55S6IOe3j-WQiOeglOeptjEy5Y-36aSo!5e0!3m2!1sja!2sjp!4v1708024541712!5m2!1sja!2sjp"
          width="100%"
          height="450"
          style={{ border: 0, padding: 0, margin: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  )
}
