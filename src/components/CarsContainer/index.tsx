import { ReactElement } from 'react'

import { Image } from '@mantine/core'
import Link from 'next/link'

import styles from './style.module.scss'

import { basePath } from 'next.config'
import { PageVisual } from '~/components/PageVisual'

export const CarsContainer = (): ReactElement => {
  return (
    <div className={styles.carsContainer}>
      <section>
        <PageVisual
          bgImageUrl={'/images/top_cars.jpg'}
          title={'THE CARS'}
          desc={'Cars we developed, designed, produced, and raced.'}
        />
      </section>
      <div className={styles.contents}>
        <CarCard />
        <CarCard isLeft />
      </div>
    </div>
  )
}

type CarCardProps = {
  isLeft?: boolean
}
const CarCard = ({ isLeft }: CarCardProps): ReactElement => {
  return isLeft ? (
    <div className={styles.carCard}>
      <div className={styles.carDescription}>
        <div className={styles.carTitle}>
          <h3>
            <Link href={''}>KZ-R17</Link>
          </h3>
          <h2>Culmination</h2>
        </div>

        <p>
          Engine:
          <br />
          Wheelbase:mm
          <br />
          Tread:kg
          <br />
          Overall ranking
          <br />
          三カ年計画の，そしてKARTの16年間の活動の集大成として製作された車両．従来の単気筒エンジンから，カセットミッション式650cc並列2気筒エンジンに変更することで，理想として揚げた車両パッケージを実現した．
        </p>
      </div>
      <Image
        src={`${basePath}/images/top1.jpg`}
        alt=""
        radius={'md'}
        style={{ width: '60%' }}
      />
    </div>
  ) : (
    <div className={styles.carCard}>
      <Image
        src={`${basePath}/images/top1.jpg`}
        alt=""
        radius={'md'}
        style={{ width: '60%' }}
      />
      <div className={styles.carDescription}>
        <div className={styles.carTitle}>
          <h3>
            <Link href={''}>KZ-R17</Link>
          </h3>
          <h2>Culmination</h2>
        </div>

        <p>
          Engine:
          <br />
          Wheelbase:mm
          <br />
          Tread:kg
          <br />
          Overall ranking
          <br />
          三カ年計画の，そしてKARTの16年間の活動の集大成として製作された車両．従来の単気筒エンジンから，カセットミッション式650cc並列2気筒エンジンに変更することで，理想として揚げた車両パッケージを実現した．
        </p>
      </div>
    </div>
  )
}
