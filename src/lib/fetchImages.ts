import type { ImagesResults } from '@/models/Images'
import { ImagesSchemaWithPhotos } from '@/models/Images'
import env from '@/lib/env'

export default async function fetchImages(
  url: string,
): Promise<ImagesResults | undefined> {
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: env.PEXELS_API_KEY,
      },
    })

    if (!res.ok) throw new Error('Network response was not ok! :/')

    const ImagesResults: ImagesResults = await res.json()
    // console.log(ImagesResults)

    // Parse data with Zod
    const parseData = ImagesSchemaWithPhotos.parse(ImagesResults)

    if (parseData.total_results === 0) return undefined

    return parseData
  } catch (e) {
    // To show the error in the console
    if (e instanceof Error) console.log(e.stack)
  }
}
