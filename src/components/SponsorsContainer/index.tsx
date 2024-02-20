import { ReactElement } from 'react'

import { Image } from '@mantine/core'
import Link from 'next/link'

import styles from './style.module.scss'

import { PageVisual } from '~/components/PageVisual'

export const SponsorsContainer = (): ReactElement => {
  return (
    <div className={styles.sponsorsContainer}>
      <section>
        <PageVisual
          bgImageUrl={'/images/intro_sponsors.png'}
          title={'SPONSORS'}
          desc={'To sponsor us is to feel the triumph closer every day.'}
        />
      </section>
      <div className={styles.contents}>
        <section className={styles.sponsorsSection}>
          <Link href={''}> スポンサー様（敬称略）</Link>

          <p>
            2020年度大会に向けたKARTの活動にご理解いただきご支援して下さいましたスポンサー企業様の一覧です。
            この場を借りてお礼申し上げます。
            なお、実際にご支援をいただいた後に掲載する方針ですので、ご了承ください。
          </p>
          <SponsorsTable />
        </section>

        <section className={styles.universityRelatedSection}>
          <Link href={''}> 大学関連</Link>
          <p>毎年お世話になっている大学関連の方々です。</p>
          <UniversitysRelatedTable />
        </section>
      </div>
    </div>
  )
}

const SponsorsTable = (): ReactElement => {
  const sponsors = [
    {
      name: '株式会社森精機製作所',
      src: '/images/sponsors/dmgmoriseiki.jpg',
      href: '',
      description: '技術支援及び金銭的支援を頂いています。',
      size: 'md',
    },
    {
      name: '川崎重工株式会社',
      src: '/images/sponsors/kawasaki.jpg',
      href: '',
      description: '物品および技術支援を頂いています。',
      size: 'sm',
    },
  ]
  return (
    <table className={styles.sponsorsTable}>
      <tbody>
        {sponsors.map((sponsor, index) => (
          <tr key={index}>
            <td>
              <div className={styles.sponsorCard}>
                <Image
                  src={sponsor.src}
                  alt=""
                  style={{ width: sponsor.size === 'md' ? '250px' : '150px' }}
                />
                <Link href={sponsor.href} style={{ textDecoration: 'none' }}>
                  {sponsor.name}
                </Link>
              </div>
            </td>
            <td>
              <p>{sponsor.description}</p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

const UniversitysRelatedTable = (): ReactElement => {
  return (
    <table className={styles.universityRelatedTable}>
      <tbody>
        <tr>
          <td
            width={250}
            style={{
              marginTop: '20px',
            }}
          >
            <Link href={''}>東京工業大学</Link>
          </td>
          <td>
            <p>
              京都大学機械系専攻の同窓会組織です。多くの方にサポーターとしてご支援いただいている他、全面的に私たちの活動をバックアップして下さっています。
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
