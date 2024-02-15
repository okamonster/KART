import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'
import { SponsorsContainer } from '~/components/SponsorsContainer'
import { DefaultLayout } from '~/layouts/DefaultLayout'

export default function Sponsors() {
  return (
    <DefaultLayout>
      <Header active={'sponsors'} />
      <SponsorsContainer />
      <Footer />
    </DefaultLayout>
  )
}
