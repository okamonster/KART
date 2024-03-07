import { createClient } from 'microcms-js-sdk'

const serviceDomain = process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN as string
const apiKey = process.env.NEXT_PUBLIC_MICROCMS_API_KEY as string

export const client = createClient({
  serviceDomain: serviceDomain,
  apiKey: apiKey,
})
