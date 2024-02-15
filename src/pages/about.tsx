import { AboutContainer } from '~/components/AboutContainer'
import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'
import { DefaultLayout } from '~/layouts/DefaultLayout'

export default function About() {
  return (
    <DefaultLayout>
      <Header active="about" />
      <AboutContainer />
      <Footer />
    </DefaultLayout>
  )
}
