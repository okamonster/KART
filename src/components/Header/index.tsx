import { ReactElement } from 'react'

import classNames from 'classnames'

import styles from './style.module.scss'

type Props = {
  active: 'home' | 'about' | 'sponsors' | 'theCars' | 'contact'
}
export const Header = ({ active }: Props): ReactElement => {
  return (
    <header>
      <div className={styles.header}>
        <a href="">
          <img
            src="/images/kart_logo.png"
            alt={'KART'}
            style={{ width: '294px', height: '46px' }}
          />
        </a>
        <div className={styles.nav}>
          <ul>
            <li>
              <HeaderLink
                href="/"
                label="HOME"
                active={active === 'home' ? true : false}
              />
            </li>
            <li>
              <HeaderLink
                href="/about"
                label="ABOUT"
                active={active === 'about' ? true : false}
              />
            </li>
            <li>
              <HeaderLink
                href="/sponsors"
                label="SPONSORS"
                active={active === 'sponsors' ? true : false}
              />
            </li>
            <li>
              <HeaderLink
                href="/cars"
                label="THE CARS"
                active={active === 'theCars' ? true : false}
              />
            </li>
            <li>
              <HeaderLink
                href="/contact"
                label="CONTACT"
                active={active === 'contact' ? true : false}
              />
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

type LinkProps = {
  href: string
  label: string
  active: boolean
}

const HeaderLink = ({ href, label, active }: LinkProps): ReactElement => {
  const headerLinkClass = classNames(styles.headerLink, active && styles.active)
  return (
    <div className={headerLinkClass}>
      <a href={href}>
        <span>{label}</span>
      </a>
    </div>
  )
}
