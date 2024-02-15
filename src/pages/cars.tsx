import { CarsContainer } from '~/components/CarsContainer'
import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'
import { DefaultLayout } from '~/layouts/DefaultLayout'

export default function Cars() {
  return (
    <DefaultLayout>
      <Header active={'theCars'} />
      <CarsContainer />
      <Footer />
    </DefaultLayout>
  )
}
