import Head from 'next/head'
import { useContext } from 'react'
import Card from '../components/Card'
import FilterList from '../components/FilterList'
import Sidebar from '../components/Sidebar'
import { highlands } from '../constants'
import { FilterContext } from '../providers/FilterProvider'

const shouldInclude = (traits: string[], filter: string[]): boolean => {
  if (filter.length === 0) { return true }
  return traits.some(trait => filter.includes(trait.toLowerCase()))
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
    <div className="flex flex-col lg:flex-row min-h-screen">
      <Head>
        <title>Good Morning Café</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar />
      <main className="flex flex-1 flex-col items-center text-center lg:w-3/4">
        <FilterList count={filteredHighlands.length} />
        <div className="grid gap-4 lg:gap-6 grid-cols-2 lg:grid-cols-4 m-4 lg:m-6">
          { filteredHighlands.map(highland => <Card key={highland.token} {...highland}/>) }
        </div>
      </main>
    </div>
  )
}

export default Home
