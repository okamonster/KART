import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'
import { TopContainer } from '~/components/TopContainer'
import { BaseHead } from '~/heads/baseHead'
import { DefaultLayout } from '~/layouts/DefaultLayout'

export default function Home() {
  return (
    <>
      <BaseHead title="京都大学フォーミュラプロジェクトKART" />
      <DefaultLayout>
        <Header active="home" />
        <TopContainer />
        <Footer />
      </DefaultLayout>
    </>
  )
}
