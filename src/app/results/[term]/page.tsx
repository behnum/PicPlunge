import Gallery from '@/app/components/Gallery'

type Props = {
  params: {
    term: string
  }
}

export function generateMetadata({ params: { term } }: Props) {
  return {
    title: `Search results for ${term}`,
    description: `Search results for ${term}`,
    robots: 'noindex',
  }
}

export default function searchResults({ params: { term } }: Props) {
  return <Gallery topic={term} />
}
