/* eslint-disable @typescript-eslint/no-explicit-any */
import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'
import { SponsorsContainer } from '~/components/SponsorsContainer'
import { BaseHead } from '~/heads/baseHead'
import { DefaultLayout } from '~/layouts/DefaultLayout'
import { getClient } from '~/libs/cmsClient'
import { Sponsor } from '~/types.ts/sponsors'

type Props = {
  sponsors: Array<Sponsor>
}

export default function Sponsors({ sponsors }: Props) {
  return (
    <>
      <BaseHead title="京都大学フォーミュラプロジェクトKART" />
      <DefaultLayout>
        <Header active={'sponsors'} />
        <SponsorsContainer sponsors={sponsors} />
        <Footer />
      </DefaultLayout>
    </>
  )
}

export const getStaticProps = async () => {
  const data = await getClient('sponsors')

  const sponsors = data.contents.map((sponsor: any) => {
    return {
      sponsorImage: sponsor.Image ? sponsor.Image.url : '',
      ...sponsor,
    } as Sponsor
  })

  return {
    props: { sponsors: sponsors },
  }
}
