import { ReactElement } from 'react'

import Link from 'next/link'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'

import styles from './style.module.scss'
export const Footer = (): ReactElement => {
  return (
    <footer className={styles.footer}>
      <p>
        Copyright 2016-2017
        <Link href="">Kyoto University Formula Project KART.</Link> All Rights
        Reserved.
      </p>
      <div className={styles.iconWrapper}>
        <Link href="https://twitter.com/kart_official">
          <AiFillTwitterCircle className={styles.icon} />
        </Link>
        <Link href="https://www.facebook.com/KART.official/">
          <FaFacebook className={styles.icon} />
        </Link>
      </div>
    </footer>
  )
}
