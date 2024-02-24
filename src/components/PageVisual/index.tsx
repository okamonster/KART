import { ReactElement } from 'react'

import styles from './style.module.scss'

import { basePath } from 'next.config'

type Props = {
  bgImageUrl: string
  title: string
  desc: string
}
export const PageVisual = ({
  bgImageUrl,
  title,
  desc,
}: Props): ReactElement => {
  return (
    <div
      className={styles.pageVisual}
      style={{
        backgroundImage: `url(${basePath + bgImageUrl})`,
        backgroundSize: 'cover',
      }}
    >
      <div className={styles.bg}>
        <div>
          <h2>{title}</h2>
          <h3>{desc}</h3>
        </div>
      </div>
    </div>
  )
}
