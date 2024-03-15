import { AboutContainer } from '~/components/AboutContainer'
import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'
import { BaseHead } from '~/heads/baseHead'
import { DefaultLayout } from '~/layouts/DefaultLayout'

export default function About() {
  return (
    <>
      <BaseHead title="京都大学フォーミュラプロジェクトKART" />
      <DefaultLayout>
        <Header active="about" />
        <AboutContainer />
        <Footer />
      </DefaultLayout>
    </>
  )
}
