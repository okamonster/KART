import { ContactContainer } from '~/components/ContactConatiner'
import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'
import { BaseHead } from '~/heads/baseHead'
import { DefaultLayout } from '~/layouts/DefaultLayout'

export default function Contact() {
  return (
    <>
      <BaseHead title="京都大学フォーミュラプロジェクトKART" />
      <DefaultLayout>
        <Header active={'contact'} />
        <ContactContainer />
        <Footer />
      </DefaultLayout>
    </>
  )
}
