import Head from 'next/head'
import { useContext } from 'react'
import Card from '../components/Card'
import Sidebar from '../components/Sidebar'
import { highlands } from '../constants'
import { FilterContext } from '../providers/FilterProvider'

const shouldInclude = (traits: string[], filter: string[]): boolean => {
  if (filter.length === 0) { return true }
  return traits.some(trait => filter.includes(trait))
}

const Home = () => {
  const { traits: { background, clothing, colour, feature, mood, object }} = useContext(FilterContext)

  const filteredHighlands = highlands.filter(({ traits }) => {
    if ([...background, ...clothing, ...colour, ...feature, ...mood, ...object].length === 0) { return true }
    return shouldInclude(traits['background'], background)
      && shouldInclude(traits['clothing'], clothing)
      && shouldInclude(traits['colour'], colour)
      && shouldInclude(traits['feature'], feature)
      && shouldInclude(traits['mood'], mood)
      && shouldInclude(traits['object'], object)
  })

  return (
    <div className="flex min-h-screen">
      <Head>
        <title>Good Morning Café</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar />
      <main className="flex w-full flex-1 flex-col items-center text-center m-6">
        <div className="grid gap-6 grid-cols-4">
          { filteredHighlands.map(highland => <Card key={highland.token} {...highland}/>) }
        </div>
      </main>
    </div>
  )
}

export default Home
