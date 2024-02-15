import { ContactContainer } from '~/components/ContactConatiner'
import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'
import { DefaultLayout } from '~/layouts/DefaultLayout'

export default function Contact() {
  return (
    <DefaultLayout>
      <Header active={'contact'} />
      <ContactContainer />
      <Footer />
    </DefaultLayout>
  )
}
