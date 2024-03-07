/* eslint-disable @typescript-eslint/no-explicit-any */
import { CarsContainer } from '~/components/CarsContainer'
import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'
import { DefaultLayout } from '~/layouts/DefaultLayout'
import { getClient } from '~/libs/cmsClient'
import { Car } from '~/types.ts/cars'

type Props = {
  cars: Array<Car>
}

export default function Cars({ cars }: Props) {
  return (
    <DefaultLayout>
      <Header active={'theCars'} />
      <CarsContainer cars={cars} />
      <Footer />
    </DefaultLayout>
  )
}

export const getStaticProps = async () => {
  const data = await getClient('cars')

  const cars = data.contents.map((car: any) => {
    return {
      carImage: car.Image.url,
      ...car,
    } as Car
  })

  return {
    props: { cars: cars },
  }
}
